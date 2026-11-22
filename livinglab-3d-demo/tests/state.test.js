import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createStore, devices } from '../src/simulation/state.js';
import { scenarios } from '../src/simulation/scenarios.js';
import { copy } from '../src/ui/copy.js';
test('all six presets match the untouched original, including environmental data', () => {
  const source = readFileSync(new URL('../../LivingLab_Interactive_Demo_v2.html', import.meta.url), 'utf8');
  const raw = source.slice(source.indexOf('  const scenarios ='), source.indexOf('  const LIGHTING_VISUALS'));
  const original = vm.runInNewContext(`${raw}; JSON.stringify(scenarios)`);
  assert.deepEqual(scenarios, JSON.parse(original));
});
test('every automatic/manual transition copies the current scenario without a jump', () => {
  const store = createStore();
  for (const name of Object.keys(scenarios)) {
    store.dispatch({ type: 'mode', value: true }); store.dispatch({ type: 'scenario', value: name });
    const before = devices(store.getState()); store.dispatch({ type: 'mode', value: false });
    assert.deepEqual(devices(store.getState()), before);
    store.dispatch({ type: 'device', key: 'lampBrightness', value: 91 });
    store.dispatch({ type: 'mode', value: true }); assert.deepEqual(devices(store.getState()), scenarios[name].devices);
  }
});
test('manual row, position, angle and light controls are independent; weather retains them', () => {
  const store = createStore(); store.dispatch({ type: 'mode', value: false });
  store.dispatch({ type: 'device', key: 'tints', row: 1, value: 'high' });
  store.dispatch({ type: 'device', key: 'blindPosition', value: 43 });
  store.dispatch({ type: 'device', key: 'slatAngle', value: 45 });
  store.dispatch({ type: 'device', key: 'lampBrightness', value: 82 });
  store.dispatch({ type: 'device', key: 'lampTemperature', value: 'neutral' });
  store.dispatch({ type: 'device', key: 'lampDirection', value: 'direct' });
  const before = devices(store.getState());
  assert.deepEqual(before, {tints:['high','high','low'],blindPosition:43,slatAngle:45,lampBrightness:82,lampTemperature:'neutral',lampDirection:'direct',goal:'comfort'});
  store.dispatch({type:'scenario',value:'night'}); assert.deepEqual(devices(store.getState()),before);
});
test('automatic controls reject edits, unsupported input is ignored and percentages are clamped', () => {
  const store = createStore(); store.dispatch({type:'device',key:'blindPosition',value:93}); assert.equal(devices(store.getState()).blindPosition,0);
  store.dispatch({type:'mode',value:false}); store.dispatch({type:'device',key:'slatAngle',value:60}); assert.equal(devices(store.getState()).slatAngle,0);
  store.dispatch({type:'device',key:'blindPosition',value:130}); assert.equal(devices(store.getState()).blindPosition,100);
});
test('communication records store immutable targets and are limited to eight events', () => {
  const store=createStore(); const original=store.getState().events[0];
  for(let i=0;i<10;i++) store.dispatch({type:'scenario',value:'night'});
  assert.equal(store.getState().events.length,8); assert.equal(original.devices.lampBrightness,30);
  const state=store.getState(); state.events[0].devices.lampBrightness=1; assert.equal(store.getState().events[0].devices.lampBrightness,70);
});
test('education and language changes preserve device settings; reset restores startup', () => {
  const store=createStore(); store.dispatch({type:'scenario',value:'strongSun'}); const before=devices(store.getState());
  store.dispatch({type:'level',value:'bachelor'}); store.dispatch({type:'language',value:'en'});
  assert.deepEqual(devices(store.getState()),before); store.dispatch({type:'reset'}); assert.equal(store.getState().scenario,'sunrise'); assert.equal(store.getState().language,'de'); assert.equal(store.getState().level,'school');
});
test('both languages contain the same dictionary keys, including nested explanations', () => {
  const keys = o => Object.keys(o).sort().map(k => typeof o[k]==='object' ? [k,keys(o[k])] : k);
  assert.deepEqual(keys(copy.de),keys(copy.en));
});
