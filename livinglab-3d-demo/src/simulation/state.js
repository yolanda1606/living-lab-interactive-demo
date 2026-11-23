import { scenarios } from './scenarios.js';
export const TINT_OPACITY = Object.freeze({ low: .035, medium: .34, high: .72 });
export const SUPPORTED_SLAT_ANGLES = Object.freeze([0, 30, 45, 80]);
export const SLAT_OBSTRUCTION = Object.freeze({ 0: .05, 30: .25, 45: .55, 80: .9 });
const clone = value => structuredClone(value);
const initial = () => ({ language: 'de', scenario: 'sunrise', automatic: true, systems: { glass: true, blinds: true, lighting: true }, camera: 'overview', cutaway: true, manual: clone(scenarios.sunrise.devices), events: [] });
export function devices(state) {
  const target = clone(state.automatic ? scenarios[state.scenario].devices : state.manual);
  if (!state.systems.glass) target.tints = ['low', 'low', 'low'];
  if (!state.systems.blinds) { target.blindPosition = 0; target.slatAngle = 0; }
  if (!state.systems.lighting) target.lampBrightness = 0;
  return target;
}
// The only device state is here. The scene interpolates presentation values, never writes targets.
export function createStore() {
  let state = initial();
  const listeners = new Set();
  const eventFor = (type, paths, protocol = 'local') => {
    state.events.unshift({ type, paths: type === 'system' ? paths : paths.filter(path => state.systems[path] !== false), systems: clone(state.systems), protocol, scenario: state.scenario, automatic: state.automatic, devices: clone(devices(state)) });
    state.events.splice(8);
  };
  eventFor('scenario', ['environment', 'wago', 'glass', 'blinds', 'lighting']);
  return {
    getState: () => clone(state),
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    dispatch(action) {
      const { type, value } = action;
      if (type === 'scenario' && scenarios[value]) { state.scenario = value; eventFor(type, state.automatic ? ['environment', 'wago', 'glass', 'blinds', 'lighting'] : ['environment']); }
      else if (type === 'mode') {
        if (!value && state.automatic) state.manual = clone(scenarios[state.scenario].devices);
        state.automatic = !!value;
        eventFor('mode', value ? ['environment', 'wago', 'glass', 'blinds', 'lighting'] : ['environment', 'wago']);
      } else if (type === 'system' && Object.hasOwn(state.systems, action.key) && typeof value === 'boolean') {
        state.systems[action.key] = value;
        eventFor('system', ['wago', action.key]);
      } else if (type === 'device' && !state.automatic) {
        const { key, row } = action;
        const system = key === 'tints' ? 'glass' : key?.startsWith('lamp') ? 'lighting' : 'blinds';
        if (!state.systems[system]) return;
        if (key === 'tints' && [0, 1, 2].includes(row) && Object.hasOwn(TINT_OPACITY, value)) state.manual.tints[row] = value;
        else if (['blindPosition', 'lampBrightness'].includes(key) && Number.isFinite(value)) state.manual[key] = Math.max(0, Math.min(100, Math.round(value)));
        else if (key === 'slatAngle' && SUPPORTED_SLAT_ANGLES.includes(value)) state.manual[key] = value;
        else if (key === 'lampTemperature' && ['warm', 'neutral'].includes(value)) state.manual[key] = value;
        else if (key === 'lampDirection' && ['direct', 'indirect'].includes(value)) state.manual[key] = value;
        else return;
        const dest = key === 'tints' ? 'glass' : key.startsWith('lamp') ? 'lighting' : 'blinds';
        if (action.commit !== false) eventFor(key, ['environment', 'wago', dest], { glass: 'BACnet', blinds: 'SMI', lighting: 'ZigBee' }[dest]);
      } else if (type === 'language' && ['de', 'en'].includes(value)) state.language = value;
      else if (type === 'camera' && ['overview', 'windows', 'lighting'].includes(value)) state.camera = value;
      else if (type === 'cutaway') state.cutaway = !!value;
      else if (type === 'reset') { state = initial(); eventFor('scenario', ['environment', 'wago', 'glass', 'blinds', 'lighting']); }
      else return;
      listeners.forEach(fn => fn(clone(state), action));
    }
  };
}
