import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const result={};
const pause=()=>page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
const slider=async(id,v)=>{await page.locator(`#${id}`).evaluate((el,value)=>{el.value=value;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'));},String(v));await pause();};
const capture=async name=>{await pause();const sample=await page.evaluate(()=>window.livingLab.capture());await page.locator('#viewport').screenshot({path:`screenshots/visibility/${name}.png`});return { ...sample, luminance: sample.floor.reduce((s,c)=>s+.2126*c[0]+.7152*c[1]+.0722*c[2],0)/sample.floor.length };};
try {
 await mkdir('screenshots/visibility',{recursive:true});
 await page.goto((process.env.DEMO_URL||'http://127.0.0.1:4173')+'/?inspect');await page.waitForFunction(()=>window.livingLab?.capture);
 // Keep every device constant to measure scenario illumination inside the room,
 // rather than accidentally measuring only the changing sky or preset lamps.
 await page.locator('#manualMode').click();await slider('lampBrightness',0);await slider('blindPosition',0);
 for(let row=0;row<3;row++) await page.locator(`[data-row="${row}"][data-tint="low"]`).click();
 for(const scenario of ['sunrise','morning','strongSun','cloudy','sunset','night']){await page.locator(`[data-scenario="${scenario}"]`).click();result[scenario]=await capture(scenario);}
 console.log('Scenario floor luminance',Object.fromEntries(Object.entries(result).map(([k,v])=>[k,v.luminance])));
 assert.ok(result.night.luminance<15,'outdoor fill must not keep the unlit room bright at night');
 assert.ok(result.morning.luminance>result.night.luminance+45,'daylight must visibly brighten the interior');
 assert.ok(result.strongSun.luminance>result.cloudy.luminance+15,'sunlight and overcast interior must differ');
 // Lamp tests inspect rendered floor pixels, not merely Light.intensity properties.
 for(const direction of ['direct','indirect']){
   await page.locator(`[data-direction="${direction}"]`).click();await slider('lampBrightness',100);result[direction]=await capture(`night-${direction}-100`);
   assert.ok(result[direction].luminance>result.night.luminance+40,`${direction} must visibly illuminate the room`);
 }
 await page.locator('[data-temperature="neutral"]').click();result.neutral=await capture('night-neutral-100');
 assert.notDeepEqual(result.neutral.floor,result.indirect.floor,'warm and neutral change rendered surface colours');
 await slider('lampBrightness',0);result.off=await capture('night-off');assert.ok(Math.abs(result.off.luminance-result.night.luminance)<2);
 await page.locator('[data-scenario="morning"]').click();await page.locator('[data-direction="direct"]').click();await slider('lampBrightness',100);result.dayLamp=await capture('morning-lamps-100');
 assert.ok(result.dayLamp.luminance>result.morning.luminance+15,'lamps must also visibly change the daytime interior');
 await slider('lampBrightness',0);
 // At partial deployment the remaining slats are stacked above the deployed section.
 await page.locator('[data-scenario="morning"]').click();await page.locator('#camera-windows').click();await slider('blindPosition',55);
 for(const angle of [0,30,45,80]){await page.locator(`[data-angle="${angle}"]`).click();await pause();await page.locator('#viewport').screenshot({path:`screenshots/visibility/blinds-${angle}.png`});}
 const drops=await page.evaluate(()=>window.livingLab.scene().slatDrops);
 assert.ok(Math.abs((drops[26]-drops[25])-2.2/26)<.00001,'deployed slats retain full pitch at 55%');
 assert.ok(drops[1]-drops[0]<.005,'undeployed slats form a headrail stack');
 assert.deepEqual(errors,[]);
 await writeFile('tests/lighting-visibility-results.json',JSON.stringify({samples:result,errors},null,2));
 console.log('PASS rendered scenario illumination, direct/indirect lamps, colour, off state and partial-blind spacing');
} finally { await browser.close(); }
