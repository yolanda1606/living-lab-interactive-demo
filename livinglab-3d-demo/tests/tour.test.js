import test from 'node:test';
import assert from 'node:assert/strict';
import { createStore, devices } from '../src/simulation/state.js';
import { cameraTargets, tourSteps } from '../src/presentation/model.js';
import { cameraRoute } from '../src/scene/camera-tour-controller.js';
import { engineeringCopy } from '../src/presentation/copy.js';
const physicalState = s => ({ scenario:s.scenario, automatic:s.automatic, manual:s.manual, systems:s.systems, events:s.events });
test('every tour step and inspection preserves the complete simulation and history', () => {
  const store=createStore();
  store.dispatch({type:'scenario',value:'strongSun'});store.dispatch({type:'mode',value:false});
  store.dispatch({type:'device',key:'blindPosition',value:67});store.dispatch({type:'system',key:'glass',value:false});
  const before=physicalState(store.getState()), targets=devices(store.getState());
  store.dispatch({type:'tour-start'});
  for(let i=0;i<tourSteps.length;i++) {
    store.dispatch({type:'tour-step',value:i});const s=store.getState();
    assert.equal(s.camera,tourSteps[i].camera);assert.equal(s.view,tourSteps[i].view);assert.equal(s.component,tourSteps[i].component);
    assert.deepEqual(physicalState(s),before);assert.deepEqual(devices(s),targets);
  }
  for(const value of ['glass','blinds','lighting','sensors']) {
    store.dispatch({type:'inspect',value});store.dispatch({type:'reveal'});
    assert.equal(store.getState().component,value);assert.deepEqual(physicalState(store.getState()),before);
  }
  for(const value of ['mpc','pi','gateway','wago','glass']) {
    store.dispatch({type:'architecture-node',value});assert.equal(store.getState().component,value);
    assert.deepEqual(physicalState(store.getState()),before);
  }
  store.dispatch({type:'tour-step',value:99});assert.equal(store.getState().tourStep,7);
  store.dispatch({type:'tour-exit'});assert.equal(store.getState().tourStep,null);assert.equal(store.getState().camera,'overview');
  assert.deepEqual(physicalState(store.getState()),before);
});
test('all named camera routes avoid the ceiling, walls, furniture and facade', () => {
  for(const from of Object.values(cameraTargets)) for(const to of Object.values(cameraTargets)) {
    const route=cameraRoute(from.position,to.position);
    for(let i=1;i<route.length;i++) for(let t=0;t<=1;t+=.025) {
      const p=route[i-1].clone().lerp(route[i],t);
      assert.ok(p.z>=.35 && p.y>=1.8,`floor/facade: ${p.toArray()}`);
      if(p.z<3.7) {
        assert.ok(p.y<2.55 || p.y>3.75,`ceiling: ${p.toArray()}`);
        assert.ok(Math.abs(p.x)<5.8,`side wall: ${p.toArray()}`);
      }
    }
  }
});
test('engineering content has matching German and English keys', () => {
  const keys = o => Object.keys(o).sort().map(k => typeof o[k]==='object' ? [k,keys(o[k])] : k);
  assert.deepEqual(keys(engineeringCopy.de),keys(engineeringCopy.en));
});
