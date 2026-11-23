import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { copy } from '../src/ui/copy.js';
import { devices } from '../src/simulation/state.js';
import { scenarios } from '../src/simulation/scenarios.js';
const base = process.env.DEMO_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const context = await browser.newContext({viewport:{width:1600,height:1000},reducedMotion:'reduce'});
const external = [], errors = [], failures = [];
await context.route('**/*', route => { if (new URL(route.request().url()).origin === new URL(base).origin) return route.continue(); external.push(route.request().url()); return route.abort(); });
const page = await context.newPage();
page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error') errors.push(m.text());}); page.on('requestfailed',r=>failures.push(r.url()));
await mkdir('screenshots',{recursive:true});
const results=[];
async function check(name,fn){await fn();results.push(name);console.log(`PASS ${name}`);}
const state=()=>page.evaluate(()=>window.livingLab.state());
const scene=()=>page.evaluate(()=>window.livingLab.scene());
const settle=async()=>{
 const s=await state(),d=devices(s);
 await page.waitForFunction(d=>{const v=window.livingLab?.scene();const op={low:.035,medium:.34,high:.72};return v&&Math.abs(v.blindPosition-d.blindPosition)<.01&&Math.abs(v.slatAngle-d.slatAngle)<.01&&Math.abs(v.brightness-d.lampBrightness/100)<.001&&Math.abs(v.direction-(d.lampDirection==='direct'?1:0))<.001&&v.panes.every(p=>Math.abs(p.opacity-op[d.tints[p.row]])<.001);},d);
 await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
};
const slider=async(id,value)=>{await page.locator(`#${id}`).evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));},String(value));await settle();};
try {
 await page.goto(`${base}/?inspect`); await page.waitForFunction(()=>window.livingLab?.scene()?.panes.length===12); await settle();
 await check('Mode selection is visible and systems can be demonstrated independently',async()=>{
   const automatic=page.locator('#automaticMode'), manual=page.locator('#manualMode');
   await expect(automatic).toHaveAttribute('aria-pressed','true');
   const selectedColor=await automatic.evaluate(el=>getComputedStyle(el).backgroundColor);
   assert.notEqual(selectedColor,await manual.evaluate(el=>getComputedStyle(el).backgroundColor));
   for(const selected of ['glass','blinds','lighting']) {
     for(const key of ['glass','blinds','lighting']) {
       const toggle=page.locator(`[data-system="${key}"]`);
       if((await toggle.getAttribute('aria-checked'))!==String(key===selected)) await toggle.click();
     }
     for(const scenario of ['strongSun','night']) {
       await page.locator(`[data-scenario="${scenario}"]`).click();await settle();
       const v=await scene(),preset=scenarios[scenario].devices;
       assert.equal(v.brightness,selected==='lighting'?preset.lampBrightness/100:0);
       assert.equal(v.blindPosition,selected==='blinds'?preset.blindPosition:0);
       assert.ok(v.panes.every(p=>p.opacity===(selected==='glass'?{low:.035,medium:.34,high:.72}[preset.tints[p.row]]:.035)));
     }
   }
   await manual.click();await expect(manual).toHaveAttribute('aria-pressed','true');
   assert.equal(await manual.evaluate(el=>getComputedStyle(el).backgroundColor),selectedColor);
   await expect(page.locator('#blindPosition')).toBeDisabled();
   await slider('lampBrightness',83);await page.locator('[data-system="lighting"]').click();await settle();
   await expect(page.locator('#lampBrightness')).toBeDisabled();assert.equal((await scene()).brightness,0);
   await page.locator('[data-system="lighting"]').click();await settle();assert.equal((await scene()).brightness,.83);
   await page.locator('#reset').click();await settle();
   for(const key of ['glass','blinds','lighting']) await expect(page.locator(`[data-system="${key}"]`)).toHaveAttribute('aria-checked','true');
   await expect(automatic).toHaveAttribute('aria-pressed','true');
 });
 await check('All six scenarios: exact state targets and distinct rendered sky / lights',async()=>{
   const skies=[];
   for(const [name,model] of Object.entries(scenarios)){
     await page.locator(`[data-scenario="${name}"]`).click(); await settle();
     const s=await state(),v=await scene(); assert.equal(s.scenario,name);assert.equal(s.automatic,true);
     assert.ok(Math.abs(v.blindPosition-model.devices.blindPosition)<.1);assert.ok(Math.abs(v.brightness-model.devices.lampBrightness/100)<.01);skies.push(v.sky);
     await expect(page.locator('#blindPositionValue')).toHaveText(`${model.devices.blindPosition}%`);
     if(['morning','strongSun','night'].includes(name)) await page.screenshot({path:`screenshots/${name}.png`,fullPage:true});
   }
   assert.equal(new Set(skies).size,6);
 });
 await check('Manual tint affects only the selected row, across four independent panes',async()=>{
   await page.locator('#manualMode').click(); await page.locator('[data-row="1"][data-tint="high"]').click(); await settle();
   const v=await scene();assert.equal(v.panes.filter(p=>p.row===1&&Math.abs(p.opacity-.72)<.001).length,4);assert.equal(v.panes.filter(p=>p.row!==1&&Math.abs(p.opacity-.035)<.001).length,8);
 });
 await check('Blind position and all four angles are independent',async()=>{
   await slider('blindPosition',43);
   for(const a of [0,30,45,80]){await page.locator(`[data-angle="${a}"]`).click();await settle();const v=await scene();assert.equal(v.slatAngle,a);assert.equal(v.blindPosition,43);}
   await slider('blindPosition',0);assert.equal((await scene()).slatAngle,80);await slider('blindPosition',100);assert.equal((await scene()).blindPosition,100);
 });
 await check('Brightness, colour and direct / indirect lighting drive actual Three.js lights',async()=>{
   await slider('lampBrightness',100); await page.locator('[data-direction="direct"]').click();await settle();let v=await scene();assert.equal(v.brightness,1);assert.ok(v.lights[0].down>0);assert.equal(v.lights[0].up,0);
   const warm=v.lights[0].color;await page.locator('[data-temperature="neutral"]').click();await settle();assert.notEqual((await scene()).lights[0].color,warm);
   await page.locator('[data-direction="indirect"]').click();await settle();v=await scene();assert.equal(v.lights[0].down,0);assert.ok(v.lights[0].up>0);
   await slider('lampBrightness',0);v=await scene();assert.equal(v.lights[0].up,0);assert.equal(v.lights[0].down,0);
 });
 await check('Manual weather retains targets; return to auto and re-enter manual without stale values',async()=>{
   const before=(await state()).manual;await page.locator('[data-scenario="morning"]').click();assert.deepEqual((await state()).manual,before);
   await expect(page.locator('#communicationExplanation')).toContainText('unverändert');
   await page.locator('#automaticMode').click();await page.locator('[data-scenario="sunset"]').click();await page.locator('#manualMode').click();assert.deepEqual((await state()).manual,scenarios.sunset.devices);
 });
 await check('Bilingual interface and historical communication share device state',async()=>{
   await page.selectOption('#languageSelect','en');await expect(page.locator('#school, #bachelor')).toHaveCount(0);
   await expect(page.locator('html')).toHaveAttribute('lang','en');await expect(page.locator('.historical')).toBeVisible();await expect(page.locator('.protocol-chain')).toContainText('CODESYS 3.5');
   await expect(page.locator('#live-lighting')).toHaveText('55% · Warm white · Indirect');
   await page.locator('summary').click();await expect(page.locator('#eventList')).not.toContainText('Warmweiß');
   await page.locator('[data-comm-node="wago"]').click();await expect(page.locator('#communicationExplanation')).toHaveText(copy.en.explanations.wago);
   assert.equal(await page.locator('[data-i18n]').evaluateAll(els=>els.filter(e=>!e.textContent.trim()).length),0);
   await page.selectOption('#languageSelect','de');
 });
 await check('All camera presets, orbit and reset change and restore camera',async()=>{
   const positions=[];
   for(const p of ['overview','windows','lighting']){await page.locator(`#camera-${p}`).click();await settle();positions.push((await scene()).camera);}
   assert.equal(new Set(positions.map(JSON.stringify)).size,3);
   await page.locator('#camera-reset').click();await settle();assert.deepEqual((await scene()).camera,positions[0]);
   await page.locator('canvas').scrollIntoViewIfNeeded();const bounds=await page.locator('canvas').boundingBox();await page.mouse.move(bounds.x+bounds.width/2,bounds.y+bounds.height/2);await page.mouse.down();await page.mouse.move(bounds.x+bounds.width/2+60,bounds.y+bounds.height/2+20,{steps:8});await page.mouse.up();await settle();assert.notDeepEqual((await scene()).camera,positions[0]);
   await page.locator('#camera-reset').click();await page.locator('#cutaway').uncheck();await page.locator('#cutaway').check();
 });
 await check('Original shortcuts, help, reset and projector / mobile layouts',async()=>{
   await page.locator('#reset').click();await page.keyboard.press('1');assert.equal((await state()).scenario,'strongSun');await page.keyboard.press('4');assert.equal((await state()).automatic,false);
   await page.keyboard.press('0');assert.equal((await state()).automatic,true);await page.keyboard.press('?');await expect(page.locator('dialog')).toBeVisible();await page.keyboard.press('Escape');
   await page.locator('#reset').click();assert.equal((await state()).scenario,'sunrise');await expect(page.locator('.historical')).toBeVisible();await expect(page.locator('#school, #bachelor')).toHaveCount(0);
   await page.setViewportSize({width:1280,height:720});await settle();await page.screenshot({path:'screenshots/projector-1280x720.png'});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   assert.ok(await page.locator('.controls').evaluate(el=>el.getBoundingClientRect().bottom<=innerHeight));
   await page.setViewportSize({width:390,height:844});await settle();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'screenshots/mobile.png',fullPage:true});
 });
 await check('Smooth transitions animate intermediate glass, blinds and lighting',async()=>{
   await page.setViewportSize({width:1600,height:1000});await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scenario="morning"]').click();await settle();await page.locator('[data-scenario="night"]').click();await page.waitForFunction(()=>{const v=window.livingLab.scene();return v.blindPosition>0&&v.blindPosition<100;});let v;await page.waitForFunction(()=>window.livingLab.scene().blindPosition>98);v=await scene();assert.ok(v.blindPosition>98);
 });
 await check('Production build has no external requests, missing assets or browser errors',async()=>{assert.deepEqual(external,[]);assert.deepEqual(failures,[]);assert.deepEqual(errors,[]);});
 const fallbackPage=await context.newPage();
 await fallbackPage.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=()=>null;});await fallbackPage.goto(base);
 await check('Unavailable WebGL gives a bilingual fallback while controls remain usable',async()=>{await expect(fallbackPage.locator('#fallback')).toBeVisible();await fallbackPage.selectOption('#languageSelect','en');await expect(fallbackPage.locator('#fallback')).toContainText('WebGL 2');await fallbackPage.locator('#manualMode').click();await expect(fallbackPage.locator('#blindPosition')).toBeEnabled();});
 await writeFile('tests/browser-results.json',JSON.stringify({passed:results,externalRequests:external,errors,failedRequests:failures},null,2));
} finally { await browser.close(); }
