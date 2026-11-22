import test from 'node:test';
import assert from 'node:assert/strict';
import { SLAT_COUNT, SLAT_PITCH, STACK_PITCH, slatDrop } from '../src/scene/blind-layout.js';
test('a partially lowered blind has a headrail stack and full-pitch deployed slats',()=>{
 for(const position of [25,55,75]){
  const drops=Array.from({length:SLAT_COUNT},(_,i)=>slatDrop(i,position));
  assert.ok(Math.abs(drops[1]-drops[0]-STACK_PITCH)<1e-9);
  assert.ok(Math.abs(drops[26]-drops[25]-SLAT_PITCH)<1e-9);
  assert.ok(drops.every((v,i)=>i===0||v>drops[i-1]));
 }
});
test('raising gathers all slats; lowering restores the full facade height',()=>{
 assert.ok(slatDrop(26,0)<.12);
 assert.equal(slatDrop(26,100),2.2);
 for(let i=1;i<SLAT_COUNT;i++) assert.ok(Math.abs(slatDrop(i,100)-slatDrop(i-1,100)-SLAT_PITCH)<1e-9);
});
