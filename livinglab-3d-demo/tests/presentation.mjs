import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const page=await browser.newPage({viewport:{width:1600,height:1000},reducedMotion:'reduce'});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto('http://127.0.0.1:4173/?inspect');await page.waitForFunction(()=>window.livingLab?.scene());
 await page.locator('[data-scenario="morning"]').click();await page.waitForTimeout(600);await page.locator('#viewport').screenshot({path:'screenshots/desk-groups.png'});
 await page.locator('#fullscreen').click();await page.waitForFunction(()=>!!document.fullscreenElement);await page.evaluate(()=>document.exitFullscreen());
 await page.locator('#manualMode').click();
 for(const [row,tint] of ['low','medium','high'].entries()) await page.locator(`[data-row="${row}"][data-tint="${tint}"]`).click();
 await page.waitForFunction(()=>window.livingLab.scene().panes.every(p=>Math.abs(p.opacity-[.035,.34,.72][p.row])<.001));
 await page.locator('#blindPosition').evaluate(el=>{el.value=65;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'));});await page.locator('[data-angle="45"]').click();
 await page.locator('#camera-windows').click();await page.waitForTimeout(600);await page.locator('#viewport').screenshot({path:'screenshots/windows-closeup.png'});
 await page.locator('#automaticMode').click();await page.locator('[data-scenario="night"]').click();await page.locator('#camera-lighting').click();await page.waitForTimeout(600);await page.locator('#viewport').screenshot({path:'screenshots/lighting-closeup.png'});
 await page.selectOption('#languageSelect','en');await page.locator('.communication-area').screenshot({path:'screenshots/bachelor-architecture.png'});
 const stats=await page.evaluate(()=>window.livingLab.scene());
 await page.locator('#reset').click();await page.setViewportSize({width:390,height:844});await page.waitForTimeout(600);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'screenshots/mobile.png',fullPage:true});
 assert.deepEqual(errors,[]);await writeFile('tests/presentation-results.json',JSON.stringify({fullscreen:true,threeRowsAcrossFourPanes:true,mobileOverflow:false,browserErrors:errors,renderCalls:stats.calls},null,2));
 console.log('PASS fullscreen, all three glass rows, close-up views, technical screenshot and mobile framing; render calls:',stats.calls);
}finally{await browser.close();}
