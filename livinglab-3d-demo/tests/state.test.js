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
test('language changes preserve device settings; reset restores startup', () => {
  const store=createStore(); store.dispatch({type:'scenario',value:'strongSun'}); const before=devices(store.getState());
  store.dispatch({type:'language',value:'en'});
  assert.deepEqual(devices(store.getState()),before); store.dispatch({type:'reset'}); assert.equal(store.getState().scenario,'sunrise'); assert.equal(store.getState().language,'de'); assert.equal('level' in store.getState(),false);
});
test('both languages contain the same dictionary keys, including nested explanations', () => {
  const keys = o => Object.keys(o).sort().map(k => typeof o[k]==='object' ? [k,keys(o[k])] : k);
  assert.deepEqual(keys(copy.de),keys(copy.en));
});

test('system isolation affects only selected outputs across weather and mode changes', () => {
  for (const selected of ['glass', 'blinds', 'lighting']) {
    const store = createStore();
    for (const key of ['glass', 'blinds', 'lighting']) store.dispatch({type:'system',key,value:key===selected});
    for (const scenario of Object.keys(scenarios)) {
      store.dispatch({type:'scenario',value:scenario});
      const d=devices(store.getState()), preset=scenarios[scenario].devices;
      assert.deepEqual(d.tints, selected==='glass' ? preset.tints : ['low','low','low']);
      assert.equal(d.blindPosition, selected==='blinds' ? preset.blindPosition : 0);
      assert.equal(d.slatAngle, selected==='blinds' ? preset.slatAngle : 0);
      assert.equal(d.lampBrightness, selected==='lighting' ? preset.lampBrightness : 0);
      assert.deepEqual(store.getState().events[0].paths, ['environment','wago',selected]);
    }
    const before=devices(store.getState());store.dispatch({type:'mode',value:false});
    assert.deepEqual(devices(store.getState()),before);
    store.dispatch({type:'mode',value:true});assert.equal(store.getState().systems[selected],true);
    store.dispatch({type:'reset'});assert.deepEqual(store.getState().systems,{glass:true,blinds:true,lighting:true});
  }
});
test('excluded systems preserve manual settings, ignore edits, and restore on reactivation', () => {
  const store=createStore();store.dispatch({type:'mode',value:false});
  store.dispatch({type:'device',key:'lampBrightness',value:83});
  store.dispatch({type:'system',key:'lighting',value:false});
  const snapshot=store.getState().events[0];
  store.dispatch({type:'device',key:'lampBrightness',value:41});
  assert.equal(devices(store.getState()).lampBrightness,0);
  store.dispatch({type:'system',key:'lighting',value:true});
  assert.equal(devices(store.getState()).lampBrightness,83);
  assert.equal(snapshot.systems.lighting,false);assert.equal(snapshot.devices.lampBrightness,0);
  for(const key of ['glass','blinds','lighting']) store.dispatch({type:'system',key,value:false});
  assert.deepEqual(devices(store.getState()).tints,['low','low','low']);
  assert.equal(devices(store.getState()).blindPosition,0);assert.equal(devices(store.getState()).lampBrightness,0);
  store.dispatch({type:'system',key:'glass',value:'false'});assert.equal(store.getState().systems.glass,false);
});
