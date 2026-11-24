import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
try {
 const page=await browser.newPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173/?inspect');await page.waitForFunction(()=>window.livingLab?.scene());
 await page.selectOption('#languageSelect','en');await page.locator('#view-automation').click();
 const state=()=>page.evaluate(()=>window.livingLab.state());const before=await state();
 const fits=async()=>{
  await expect.poll(()=>page.evaluate(()=>{
   const frame=document.querySelector('.architecture-scroll').getBoundingClientRect();
   return [...document.querySelectorAll('[data-architecture-node]')].every(node=>{
    const b=node.getBoundingClientRect();
    return b.left>=frame.left&&b.top>=frame.top&&b.right<=frame.right+1&&b.bottom<=frame.bottom+1;
   });
  })).toBe(true);
 };
 for(const width of [1600,1280,900,640,390]) {
  await page.setViewportSize({width,height:900});await fits();
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), `page overflow at ${width}: ${await page.evaluate(()=>document.documentElement.scrollWidth)}`);
 }
 await page.locator('#architecture-expand').click();await fits();
 await expect(page.locator('#architecture-expand')).toHaveText('Restore panel · Esc');
 await page.keyboard.press('Escape');await expect(page.locator('#automation-view')).not.toHaveClass(/is-expanded/);
 await page.locator('#architecture-fit').click();await expect(page.locator('#architecture-fit')).toHaveText('Fit complete diagram');
 await page.locator('.architecture-scroll').evaluate(el=>{el.scrollLeft=el.scrollWidth;el.scrollTop=el.scrollHeight;});
 assert.ok(await page.locator('.architecture-scroll').evaluate(el=>el.scrollLeft>0));
 await page.locator('#architecture-fit').click();await fits();
 await page.setViewportSize({width:1280,height:720});await page.locator('#architecture-expand').click();await fits();
 await page.screenshot({path:'screenshots/tour/diagram-expanded.png'});await page.keyboard.press('Escape');
 await page.selectOption('#languageSelect','de');await expect(page.locator('#architecture-expand')).toHaveText('Diagramm vergrößern');
 await page.locator('#viewport').screenshot({path:'screenshots/tour/diagram-fit.png'});
 const after=await state();for(const key of ['manual','systems','events','scenario','automatic']) assert.deepEqual(after[key],before[key]);
 await page.locator('[data-architecture-node="glass"]').click();assert.equal((await state()).view,'inspect');
 assert.deepEqual(errors,[]);
 console.log('PASS fit at five widths, expanded view, Escape, scroll/reset, bilingual labels, unchanged simulation and 3D navigation');
} finally {await browser.close();}
