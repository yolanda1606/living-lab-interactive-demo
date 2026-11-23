import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { copy } from '../src/ui/copy.js';
import { tourSteps } from '../src/presentation/model.js';
const base=process.env.DEMO_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const context=await browser.newContext({viewport:{width:1600,height:1000},reducedMotion:'reduce'});
const external=[],errors=[],passed=[];
await context.route('**/*',route=>{if(new URL(route.request().url()).origin===new URL(base).origin)return route.continue();external.push(route.request().url());return route.abort();});
const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const state=()=>page.evaluate(()=>window.livingLab.state());
const scene=()=>page.evaluate(()=>window.livingLab.scene());
const stable=()=>page.waitForFunction(()=>window.livingLab?.scene()&&!window.livingLab.scene().transitioning);
const physical=s=>({scenario:s.scenario,automatic:s.automatic,manual:s.manual,systems:s.systems,events:s.events});
const check=async(name,fn)=>{await fn();passed.push(name);console.log('PASS '+name);};
await mkdir('screenshots/tour',{recursive:true});
try {
 await page.goto(base+'/?inspect');await stable();
 await page.selectOption('#languageSelect','en');await page.locator('[data-scenario="morning"]').click();
 await page.locator('#viewport').screenshot({path:'screenshots/tour/office-overview.png'});
 await check('Component menu, physical picking and synchronized selections',async()=>{
   await page.locator('#manualMode').click();
   for(const key of ['glass','blinds','lighting','sensors']) {
     await page.locator('[data-scenario="morning"]').click();
     if(key==='glass') for(const [row,tint] of ['low','medium','high'].entries()) await page.locator(`[data-row="${row}"][data-tint="${tint}"]`).click();
     if(key==='blinds') {
       await page.locator('#blindPosition').evaluate(el=>{el.value=65;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'));});
       await page.locator('[data-angle="45"]').click();
     }
     if(key==='lighting') {
       await page.locator('[data-scenario="night"]').click();
       await page.locator('#lampBrightness').evaluate(el=>{el.value=70;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'));});
       await page.locator('[data-direction="indirect"]').click();await page.locator('[data-temperature="warm"]').click();
     }
     await page.selectOption('#inspect-select',key);await stable();
     assert.equal((await state()).component,key);assert.equal((await scene()).selectedComponent,key);assert.deepEqual((await scene()).highlightedComponents,[key]);
     await expect(page.locator('#communicationExplanation')).toHaveText(copy.en.explanations[key==='sensors'?'environment':key]);
     await expect(page.locator('#engineering-info')).toBeVisible();
     assert.ok((await page.locator('#inspection-principle').textContent()).length>60);
     await page.locator('#viewport').screenshot({path:`screenshots/tour/${key}-inspection.png`});
     if(key==='glass') await page.screenshot({path:'screenshots/tour/glass-inspection-interface.png',fullPage:true});
     await page.locator('#view-automation').click();await stable();
     await expect(page.locator(`[data-architecture-node="${key}"]`)).toHaveClass(/selected-node/);
     await page.locator(`[data-architecture-node="${key}"]`).click();await stable();
     assert.equal((await state()).view,'inspect');assert.equal((await state()).component,key);
     await page.locator('#view-office').click();await stable();
     await page.locator('canvas').scrollIntoViewIfNeeded();
     const target=(await scene()).pickTargets.find(p=>p.component===key);
     const b=await page.locator('canvas').boundingBox();
     await page.mouse.click(b.x+b.width*target.x,b.y+b.height*target.y);await stable();
     assert.equal((await state()).component,key,`3D click: ${key}`);
   }
 });
 await check('Architecture controllers, historical status, relevant signals and unchanged simulation',async()=>{
   await page.locator('#manualMode').click();
   await page.locator('#view-automation').click();await stable();
   const before=physical(await state());
   for(const key of ['wago','pi','gateway','mpc']) {
     await page.locator(`[data-architecture-node="${key}"]`).click();await stable();
     assert.equal((await state()).view,'automation');
     await expect(page.locator('.inspection-status')).toContainText('not verified');
     assert.deepEqual(physical(await state()),before);
   }
   await page.locator('[data-architecture-node="pi"]').click();await stable();
   await page.locator('#inspection-physical').click();await stable();assert.equal((await state()).component,'lighting');
   assert.deepEqual(physical(await state()),before);await page.locator('#view-automation').click();await stable();
   await page.locator('[data-row="1"][data-tint="high"]').click();
   await expect(page.locator('[data-engineering-path="glass"]')).toHaveClass(/signal-path/);
   assert.equal(await page.locator('[data-engineering-path="blinds"].signal-path').count(),0);
   await expect(page.locator('#engineering-signal')).toContainText('BACnet');
   await page.locator('[data-angle="45"]').click();await expect(page.locator('#engineering-signal')).toContainText('SMI');
   await page.locator('[data-temperature="warm"]').click();await expect(page.locator('#engineering-signal')).toContainText('REST/HTTP');
   await expect(page.locator('#engineering-signal')).toContainText('ZigBee');
   await page.locator('[data-architecture-node="wago"]').click();await stable();
   await page.locator('#viewport').screenshot({path:'screenshots/tour/automation-architecture.png'});
   await page.screenshot({path:'screenshots/tour/automation-interface.png',fullPage:true});
 });
 await check('Eight guided steps, previous/next/exit, no automatic advance and state retention',async()=>{
   let before=physical(await state());
   await page.locator('#tour-start').click();await stable();
   await expect(page.locator('#tour-previous')).toBeDisabled();
   await expect(page.locator('#tour-next')).toHaveText('Next: Environmental inputs →');
   await expect(page.locator('#tour-exit')).toHaveText('Exit to office');
   await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
   assert.equal(Math.round((await page.locator('#guided-tour').boundingBox()).y),0);
   for(let i=0;i<tourSteps.length;i++) {
     const s=await state();assert.equal(s.tourStep,i);assert.equal(s.view,tourSteps[i].view);assert.equal(s.component,tourSteps[i].component);
     assert.deepEqual(physical(s),before);
     if(i===2) {
       await page.locator('#tour-start').click();await stable();
       assert.equal((await state()).tourStep,2,'Returning to the tour must not restart it');
       await page.locator('#tour-previous').click();await stable();assert.equal((await state()).tourStep,1);
       await page.locator('#tour-next').click();await stable();assert.equal((await state()).tourStep,2);
     }
     if(i===5) {await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'screenshots/tour/guided-tour.png'});}
     if(i===3) {
       await expect(page.locator('#blindPosition')).toBeEnabled();
       await page.locator('#blindPosition').evaluate(el=>{el.value=37;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'));});
       assert.equal((await state()).manual.blindPosition,37);before=physical(await state());
     }
     if(i<7) {await page.locator('#tour-next').click();await stable();}
   }
   await page.waitForTimeout(500);assert.equal((await state()).tourStep,7);
   await page.locator('#tour-next').click();await stable();assert.equal((await state()).tourStep,null);
   await page.locator('#tour-start').click();await page.locator('#tour-next').click();await page.locator('#tour-exit').click();await stable();
   assert.equal((await state()).view,'office');assert.deepEqual(physical(await state()),before);
 });
 await check('Real camera interpolation stays outside solid geometry and is interruptible',async()=>{
   await page.emulateMedia({reducedMotion:'no-preference'});
   await page.selectOption('#inspect-select','glass');
   const samples=await page.evaluate(async()=>{
     const samples=[];for(let i=0;i<500;i++) {
       await new Promise(requestAnimationFrame);const s=window.livingLab.scene();samples.push(s.camera);
       if(!s.transitioning)break;
     }return samples;
   });
   assert.ok(new Set(samples.map(p=>p.map(n=>n.toFixed(3)).join(','))).size>3);
   for(const [x,y,z] of samples) {assert.ok(y>=1.8&&z>=.35);if(z<3.7)assert.ok(Math.abs(x)<5.8&&(y<2.55||y>3.75));}
   await page.locator('#view-office').click();await page.selectOption('#inspect-select','blinds');await stable();
   assert.equal((await state()).component,'blinds');assert.equal((await scene()).transitioning,false);
   await page.emulateMedia({reducedMotion:'reduce'});
 });
 await check('German translations, projector and mobile layouts, offline and error-free rendering',async()=>{
   await page.selectOption('#languageSelect','de');await page.locator('#view-automation').click();await stable();
   await expect(page.locator('#view-automation')).toHaveText('Automation aufdecken');
   await expect(page.locator('#automation-view')).toContainText('keine Live-Gebäudedaten');
   for(const viewport of [{width:1280,height:720},{width:390,height:844}]) {
     await page.setViewportSize(viewport);await page.waitForTimeout(300);
     assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
     await page.locator('#viewport').screenshot({path:`screenshots/tour/architecture-${viewport.width}.png`});
   }
   await page.locator('#tour-start').click();await stable();
   await expect(page.locator('#tour-next')).toContainText('Umgebungseingänge');
   await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
   const dock=await page.locator('#guided-tour').boundingBox();
   assert.equal(Math.round(dock.y),0);assert.ok(dock.width<=390);
   for(const id of ['tour-previous','tour-next','tour-exit']) {
     const box=await page.locator('#'+id).boundingBox();
     assert.ok(box.y>=0&&box.y+box.height<=844&&box.x>=0&&box.x+box.width<=390);
   }
   await page.screenshot({path:'screenshots/tour/navigation-mobile.png'});
   await page.locator('#tour-exit').click();await stable();
   assert.deepEqual(external,[]);assert.deepEqual(errors,[]);
 });
 await check('Architecture remains available with WebGL unavailable',async()=>{
   const fallback=await context.newPage();await fallback.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=()=>null;});
   await fallback.goto(base);await fallback.locator('#view-automation').click();
   await expect(fallback.locator('#automation-view')).toHaveClass(/is-visible/);
   await fallback.locator('[data-architecture-node="wago"]').click();
   await expect(fallback.locator('#inspection-title')).toHaveText('WAGO 750-831');await fallback.close();
 });
 await writeFile('tests/engineering-tour-results.json',JSON.stringify({passed,externalRequests:external,errors},null,2));
} finally {await browser.close();}
