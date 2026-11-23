import { engineeringCopy } from './copy.js';
import { copy } from '../ui/copy.js';
import { physicalComponents, componentPath, tourSteps, physicalForNode } from './model.js';
import { devices } from '../simulation/state.js';

const nodeLayout = [
  ['sensors', 2, 9, 18, ''], ['wago', 25, 9, 20, 'Central automation'],
  ['glass', 76, 3, 21, 'BACnet'], ['blinds', 76, 29, 21, 'SMI'],
  ['pi', 25, 65, 21, 'CODESYS 3.5'], ['gateway', 51, 65, 19, 'REST/HTTP ↔ ZigBee'],
  ['lighting', 76, 72, 21, 'ZigBee'], ['mpc', 2, 58, 18, 'Modbus TCP · MPC']
];
const edges = [
  ['sensors', 'M200 82 H250', 225, 25, 'inputs'],
  ['glass', 'M450 82 H620 V57 H760', 600, 40, 'BACnet'],
  ['blinds', 'M450 95 H620 V180 H760', 682, 165, 'SMI'],
  ['lighting', 'M350 125 V312', 413, 232, 'Modbus TCP'],
  ['lighting', 'M460 353 H510', 485, 299, 'REST/HTTP'],
  ['lighting', 'M700 353 H730 V387 H760', 741, 335, 'ZigBee'],
  ['mpc', 'M200 320 H225 V175 H350 V125', 119, 220, 'Modbus TCP']
];
export function createEngineeringInterface(store) {
  const host = document.getElementById('viewport');
  const dispatch = (type, value) => store.dispatch({ type, value });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const toolbar = document.createElement('nav'); toolbar.className = 'engineering-toolbar';
  toolbar.innerHTML = `<button id="view-office" data-tour-text="explore"></button>
    <label><span class="sr-only" data-tour-text="inspect"></span><select id="inspect-select"><option value="" data-tour-text="inspect"></option>${physicalComponents.map(key => `<option value="${key}"></option>`).join('')}</select></label>
    <button id="view-automation" data-tour-text="reveal"></button><button id="tour-start" data-tour-text="start"></button>`;
  document.querySelector('.camera-bar').after(toolbar);
  document.querySelector('.header-tools').prepend(toolbar.querySelector('#tour-start'));
  const panel = document.createElement('section'); panel.id = 'engineering-info'; panel.hidden = true;
  panel.innerHTML = `<div class="inspection-heading"><div><span class="inspection-status"></span><h2 id="inspection-title"></h2></div><button id="inspection-return" data-tour-text="explore"></button></div>
    <p id="inspection-live"></p><div class="inspection-details"><details open><summary data-tour-text="principle"></summary><p id="inspection-principle"></p></details><details><summary data-tour-text="engineering"></summary><p id="inspection-engineering"></p></details></div>
    <div class="inspection-actions"><button id="inspection-physical" data-tour-text="physical"></button><button id="inspection-path" data-tour-text="path"></button><button id="inspection-controls" data-tour-text="controls"></button></div><p id="inspection-hint"></p>`;
  toolbar.after(panel);
  const tour = document.createElement('section'); tour.id = 'guided-tour'; tour.hidden = true;
  tour.innerHTML = `<div class="tour-step-copy" aria-live="polite"><span id="tour-count"></span><strong id="tour-title"></strong><p id="tour-description"></p></div><div class="tour-actions"><button id="tour-previous" data-tour-text="previous"></button><button id="tour-next" data-tour-text="next"></button><button id="tour-exit" data-tour-text="exit"></button><small data-tour-text="navigationHelp"></small></div>`;
  document.querySelector('main').before(tour);
  const architecture = document.createElement('section'); architecture.id = 'automation-view'; architecture.setAttribute('aria-hidden', 'true'); architecture.inert = true;
  architecture.innerHTML = `<header><strong data-tour-text="architectureTitle"></strong><span data-tour-text="architectureStatus"></span></header>
    <div class="architecture-scroll" tabindex="0"><div class="architecture-board">
      <svg viewBox="0 0 1000 480" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="engineering-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#6a8d9e"/></marker></defs>
      ${edges.map(([key, d, x, y, label]) => `<g data-engineering-path="${key}" class="architecture-edge ${key === 'mpc' ? 'historical-edge' : ''}"><path d="${d}" ${key === 'mpc' ? '' : 'marker-end="url(#engineering-arrow)"'}/><text x="${x}" y="${y}" text-anchor="middle" ${label === 'inputs' ? 'data-input-label' : ''}>${label === 'inputs' ? '' : label}</text></g>`).join('')}</svg>
      ${nodeLayout.map(([key, x, y, width, detail]) => `<button class="architecture-node" data-architecture-node="${key}" style="left:${x}%;top:${y}%;width:${width}%"><strong></strong><small>${detail}</small><span class="architecture-live"></span></button>`).join('')}
      <span class="historical-link-note" data-tour-text="historicalLink"></span>
    </div></div>
    <div class="architecture-signal" role="status"><span data-tour-text="lastAction"></span><strong id="engineering-signal"></strong></div>
    <footer><span data-tour-text="selectionLegend"></span><span data-tour-text="signalLegend"></span></footer>`;
  host.append(architecture);
  const clickHint = document.createElement('p'); clickHint.className = 'component-pick-hint'; clickHint.dataset.tourText = 'sceneHint'; toolbar.after(clickHint);
  function focusScene() { host.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth', block: 'center' }); }
  document.getElementById('view-office').onclick = () => dispatch('camera', 'overview');
  document.getElementById('inspection-return').onclick = () => { dispatch('camera', 'overview'); focusScene(); };
  document.getElementById('inspect-select').onchange = e => { if (e.target.value) dispatch('inspect', e.target.value); };
  document.getElementById('view-automation').onclick = () => dispatch('reveal');
  document.getElementById('inspection-physical').onclick = () => { dispatch('inspect', physicalForNode(store.getState().component)); focusScene(); };
  document.getElementById('inspection-path').onclick = () => { dispatch('reveal'); focusScene(); };
  document.getElementById('tour-start').onclick = () => { if (store.getState().tourStep === null) dispatch('tour-start'); focusScene(); };
  document.getElementById('tour-previous').onclick = () => { dispatch('tour-step', store.getState().tourStep - 1); focusScene(); };
  document.getElementById('tour-next').onclick = () => {
    const step = store.getState().tourStep;
    dispatch(step === tourSteps.length - 1 ? 'tour-exit' : 'tour-step', step + 1);
    focusScene();
    if (step === tourSteps.length - 1) document.getElementById('tour-start').focus({ preventScroll: true });
  };
  document.getElementById('tour-exit').onclick = () => { dispatch('tour-exit'); focusScene(); document.getElementById('tour-start').focus({ preventScroll: true }); };
  architecture.querySelectorAll('[data-architecture-node]').forEach(b => b.onclick = () => dispatch('architecture-node', b.dataset.architectureNode));
  document.getElementById('inspection-controls').onclick = () => {
    const state = store.getState(), key = state.component;
    const section = document.querySelector(`[data-system="${key}"]`)?.closest('.device-section');
    const control = !state.systems[key] ? section?.querySelector('[data-system]') : state.automatic ? document.getElementById('manualMode') : section?.querySelector('input:not(:disabled),button:not([data-system]):not(:disabled)');
    control?.focus({ preventScroll: true }); (section || control)?.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth', block: 'center' });
  };
  let signalPaths = [], signalTimer = null, signalType = null;
  const signalText = (key, t) => ({ glass: 'WAGO → BACnet → SageGlass', blinds: 'WAGO → SMI → ' + t.components.blinds.short,
    lighting: 'WAGO → Modbus TCP → Raspberry Pi / CODESYS → REST/HTTP → deCONZ → ZigBee → ' + t.components.lighting.short,
    sensors: t.components.sensors.short + ' → WAGO' })[key];
  function render(state, action = {}) {
    const t = engineeringCopy[state.language], base = copy[state.language], d = devices(state), key = state.component;
    document.querySelectorAll('[data-tour-text]').forEach(el => { el.textContent = t[el.dataset.tourText]; });
    toolbar.setAttribute('aria-label', t.inspect);
    tour.setAttribute('aria-label', t.start);
    document.getElementById('camera-reset').title = t.resetView;
    architecture.querySelector('.architecture-scroll').setAttribute('aria-label', t.architectureTitle);
    clickHint.textContent = `${t.sceneHint}${state.view === 'office' && state.scenario !== 'night' ? ` ${t.solarHint} ↘` : ''}`;
    const select = document.getElementById('inspect-select');
    physicalComponents.forEach(id => { select.querySelector(`[value="${id}"]`).textContent = t.components[id].title; });
    select.value = state.view === 'inspect' && physicalComponents.includes(key) ? key : '';
    for (const [id, view] of [['view-office', 'office'], ['view-automation', 'automation']]) {
      const b = document.getElementById(id); b.classList.toggle('active', state.view === view); b.setAttribute('aria-pressed', String(state.view === view));
    }
    const showingArchitecture = state.view === 'automation';
    architecture.classList.toggle('is-visible', showingArchitecture);
    architecture.setAttribute('aria-hidden', String(!showingArchitecture)); architecture.inert = !showingArchitecture;
    host.dataset.perspective = state.view; host.dataset.touring = String(state.tourStep !== null);
    // Physical controls remain in their existing place and use the same store.
    document.querySelectorAll('[data-system]').forEach(b => b.closest('.device-section').classList.toggle('inspected-system', b.dataset.system === key));
    const values = { glass: d.tints.map(x => base.states[x]).join(' / '), blinds: `${d.blindPosition}% · ${d.slatAngle}°`, lighting: `${d.lampBrightness}% · ${base[d.lampTemperature === 'warm' ? 'warmWhite' : 'neutralWhite']} · ${base[d.lampDirection === 'direct' ? 'directLight' : 'indirectLight']}` };
    for (const id of Object.keys(values)) if (!state.systems[id]) values[id] = `${base.systemOff} · ${base.systemOffState[id]}`;
    panel.hidden = state.view === 'office';
    panel.setAttribute('aria-label', t.info);
    const component = t.components[key] || t.components.architecture;
    document.getElementById('inspection-title').textContent = component.title;
    panel.querySelector('.inspection-status').textContent = key === 'sensors' ? t.schematic : t.status;
    document.getElementById('inspection-principle').textContent = component.principle;
    document.getElementById('inspection-engineering').textContent = component.engineering;
    document.getElementById('inspection-live').textContent = values[key] ? `${t.current}: ${values[key]}` : key === 'sensors' ? t.sensorHint : t.architectureHint;
    document.getElementById('inspection-physical').hidden = !showingArchitecture || !physicalForNode(key);
    document.getElementById('inspection-path').hidden = showingArchitecture;
    document.getElementById('inspection-controls').hidden = !Object.hasOwn(state.systems, key);
    document.getElementById('inspection-hint').textContent = Object.hasOwn(state.systems, key) ? !state.systems[key] ? t.excludedHint : state.automatic ? t.automaticHint : t.manualHint : '';
    const selectedPath = componentPath[key];
    architecture.querySelectorAll('[data-architecture-node]').forEach(b => {
      const id = b.dataset.architectureNode;
      b.querySelector('strong').textContent = t.components[id].short;
      if (id === 'wago') b.querySelector('small').textContent = state.language === 'de' ? 'Zentrale Automation' : 'Central automation';
      b.querySelector('.architecture-live').textContent = values[id] || (id === 'sensors' ? t.schematic : id === 'mpc' ? t.historicalLink : '');
      b.classList.toggle('selected-node', id === key || (selectedPath === 'lighting' && ['pi','gateway','lighting'].includes(id)));
      b.classList.toggle('excluded-node', state.systems[id] === false);
      b.setAttribute('aria-pressed', String(id === key));
      b.setAttribute('aria-label', `${t.components[id].title}. ${physicalComponents.includes(id) ? t.physical : t.engineering}`);
    });
    architecture.querySelector('[data-input-label]').textContent = t.environmentLine;
    architecture.querySelectorAll('[data-engineering-path]').forEach(edge => {
      edge.classList.toggle('selected-edge', edge.dataset.engineeringPath === selectedPath);
    });
    // Retain the legacy explanation/event area and synchronize its selection too.
    document.querySelectorAll('[data-comm-node]').forEach(b => {
      const id = b.dataset.commNode === 'environment' ? 'sensors' : b.dataset.commNode;
      b.classList.toggle('selected-node', id === key);
    });
    if (['device', 'system', 'scenario', 'mode', 'reset'].includes(action.type)) {
      clearTimeout(signalTimer);
      signalType = action.type;
      if (action.type === 'reset') { signalPaths = []; signalType = null; }
      else if (action.type === 'device') signalPaths = [action.key === 'tints' ? 'glass' : action.key.startsWith('lamp') ? 'lighting' : 'blinds'];
      else if (action.type === 'system') signalPaths = [action.key];
      else signalPaths = state.automatic ? Object.keys(state.systems).filter(id => state.systems[id]) : [];
      architecture.querySelectorAll('.signal-path').forEach(el => el.classList.remove('signal-path'));
      // Restart a short restrained flow only on affected branches, including slider input.
      void architecture.offsetWidth;
      architecture.querySelectorAll('[data-engineering-path]').forEach(edge => edge.classList.toggle('signal-path', signalPaths.includes(edge.dataset.engineeringPath)));
      signalTimer = setTimeout(() => architecture.querySelectorAll('.signal-path').forEach(el => el.classList.remove('signal-path')), 2400);
    }
    document.getElementById('engineering-signal').textContent = signalPaths.length ? signalPaths.map(id => `${signalText(id, t)}${values[id] ? ` · ${values[id]}` : ''}`).join(' | ') : signalType ? (state.automatic ? base.automatic : base.manualWeather) : t.noSignal;
    tour.hidden = state.tourStep === null;
    document.getElementById('tour-start').textContent = tour.hidden ? t.start : t.resume;
    document.documentElement.style.setProperty('--tour-height', tour.hidden ? '0px' : `${tour.offsetHeight}px`);
    if (!tour.hidden) {
      const index = state.tourStep, step = tourSteps[index], [title, description] = t.tour[step.key];
      document.getElementById('tour-count').textContent = `${t.step} ${index + 1} ${t.of} ${tourSteps.length}`;
      document.getElementById('tour-title').textContent = title;
      document.getElementById('tour-description').textContent = description;
      document.getElementById('tour-previous').disabled = index === 0;
      document.getElementById('tour-previous').textContent = index === 0 ? `← ${t.previous}` : `← ${t.previous}: ${t.tour[tourSteps[index - 1].key][0]}`;
      document.getElementById('tour-next').textContent = index === tourSteps.length - 1 ? t.finish : `${t.next}: ${t.tour[tourSteps[index + 1].key][0]} →`;
    }
  }
  new ResizeObserver(() => document.documentElement.style.setProperty('--tour-height', tour.hidden ? '0px' : `${tour.offsetHeight}px`)).observe(tour);
  render(store.getState());
  store.subscribe(render);
  window.addEventListener('pagehide', () => clearTimeout(signalTimer), { once: true });
  return { focusScene };
}
