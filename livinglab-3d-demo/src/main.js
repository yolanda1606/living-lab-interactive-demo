import './styles/main.css';
import { createStore } from './simulation/state.js';
import { createInterface } from './ui/interface.js';
import { createOffice } from './scene/office.js';
const store = createStore();
const ui = createInterface(store);
let office;
try {
  office = createOffice(ui.host, store.getState(), ui.clearCameraSelection);
  store.subscribe((state, action) => office.update(state, action));
  ui.render(store.getState());
} catch (error) {
  console.warn('3D renderer unavailable:', error.message);
  ui.showFailure();
}
ui.host.addEventListener('scene-lost', () => ui.showFailure('contextLost'));
window.addEventListener('pagehide', () => office?.dispose(), { once: true });
// Opt-in read-only QA diagnostics. No real device endpoints, writes or duplicate state.
if (new URLSearchParams(location.search).has('inspect')) window.livingLab = Object.freeze({ state: () => store.getState(), scene: () => office?.diagnostics(), capture: () => office?.captureIllumination() });
