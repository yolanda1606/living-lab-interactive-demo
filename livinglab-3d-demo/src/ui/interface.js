import { copy } from './copy.js';
import { scenarios } from '../simulation/scenarios.js';
import { devices } from '../simulation/state.js';
const tspan = key => `<span data-i18n="${key}"></span>`;
const button = (id, key, cls = '') => `<button type="button" id="${id}" class="${cls}" data-i18n="${key}"></button>`;
export function createInterface(store) {
  document.querySelector('#app').innerHTML = `
    <header class="header"><div class="brand"><img src="./logo_living_lab.png" data-i18n-alt="logoAlt"><div><span class="eyebrow" data-i18n="eyebrow"></span><strong>Smart Office <span class="brand-3d">3D</span></strong></div></div>
      <div class="header-tools"><div class="segmented" role="group" data-label="level">${button('school','school','active')}${button('bachelor','bachelor')}</div><label class="language"><span class="sr-only" data-i18n="languageLabel"></span><select id="languageSelect"><option value="de">Deutsch</option><option value="en">English</option></select></label>${button('help','help','quiet')}${button('fullscreen','fullscreen','quiet')}${button('reset','reset','reset')}</div></header>
    <main><div class="intro"><div><h1 data-i18n="headline"></h1><p data-i18n="subtitle"></p></div><span class="local-badge" data-i18n="simBadge"></span></div>
    <nav class="scenarios" data-label="scenarioQuestion">${Object.entries(scenarios).map(([key], i) => `<button class="scenario" data-scenario="${key}"><span class="weather-icon" aria-hidden="true">${['◒','◔','☀','☁','◓','☾'][i]}</span><span class="scenario-name"></span></button>`).join('')}</nav>
    <div class="workspace"><section class="visual-panel"><div id="viewport"><div class="scene-heading"><div><span class="overline" data-i18n="room"></span><strong id="sceneName"></strong></div><span id="modeBadge"></span></div><div id="fallback" role="status" hidden></div><div class="facade-legend"><span><i class="glass-dot"></i>${tspan('facadeGlass')}</span><span><i class="blind-dot"></i>${tspan('facadeBlinds')}</span></div></div>
      <div class="camera-bar"><div class="camera-presets">${button('camera-overview','overview','active')}${button('camera-windows','windows')}${button('camera-lighting','lighting')}</div><button id="camera-reset" class="icon-button" data-label="cameraReset">↺</button><label class="cutaway"><input id="cutaway" type="checkbox" checked>${tspan('cutaway')}</label></div>
      <div class="scene-caption"><span data-i18n="drag"></span><span data-i18n="geometryNote"></span></div>
      <div class="learning-cards"><article><span class="card-number">01</span><h3 data-i18n="outside"></h3><p id="outsideText"></p></article><article><span class="card-number">02</span><h3 data-i18n="detection"></h3><p data-i18n="detectionText"></p></article><article><span class="card-number">03</span><h3 data-i18n="response"></h3><p id="responseText"></p></article><article><span class="card-number">04</span><h3 data-i18n="benefit"></h3><p id="benefitText"></p></article></div>
    </section>
    <aside class="controls"><div class="control-header"><h2 data-i18n="controlsTitle"></h2><div class="segmented modes">${button('automaticMode','automatic','active')}${button('manualMode','manual')}</div><p id="modeHint"></p></div>
      <section class="device-section"><div class="device-title"><span class="device-symbol">▦</span><h3 data-i18n="tintTitle"></h3></div><p data-i18n="tintIntro"></p><div class="tint-matrix" role="group" data-label="tintMatrix"><span></span>${['tintLow','tintMedium','tintHigh'].map(tspan).join('')}${['tintTop','tintMiddle','tintBottom'].map((row, i) => `${tspan(row)}${['low','medium','high'].map(level => `<button class="tint-option" data-row="${i}" data-tint="${level}"><i class="swatch ${level}"></i></button>`).join('')}`).join('')}</div><small data-i18n="tintNote"></small></section>
      <section class="device-section"><div class="device-title"><span class="device-symbol">☰</span><h3 data-i18n="blindTitle"></h3></div><label class="range-label" for="blindPosition">${tspan('blindPosition')}<output id="blindPositionValue"></output></label><input id="blindPosition" type="range" min="0" max="100" step="1"><small data-i18n="blindEndpoints"></small><div class="range-label angle-label">${tspan('slatAngle')}<output id="slatAngleValue"></output></div><div class="angles" role="group" data-label="slatAngleGroup">${[0,30,45,80].map(a => `<button class="angle-option" data-angle="${a}"><i style="--angle:${-a}deg" aria-hidden="true"></i>${a}°</button>`).join('')}</div></section>
      <section class="device-section"><div class="device-title"><span class="device-symbol">⊙</span><h3 data-i18n="lightingTitle"></h3></div><label class="range-label" for="lampBrightness">${tspan('lampBrightness')}<output id="lampBrightnessValue"></output></label><input id="lampBrightness" type="range" min="0" max="100" step="1"><div class="lighting-options" role="group" data-label="temperatureGroup"><button data-temperature="warm" data-i18n="warmWhite"></button><button data-temperature="neutral" data-i18n="neutralWhite"></button></div><div class="lighting-options" role="group" data-label="directionGroup"><button data-direction="direct" data-i18n="directLight"></button><button data-direction="indirect" data-i18n="indirectLight"></button></div></section>
    </aside></div>
    <section class="communication-area" data-view="simple"><div class="communication-head"><h2 data-i18n="communicationTitle"></h2><span data-i18n="simulationStatus"></span></div>
      <div class="flow" data-label="communicationDiagram">${['flowWeather','flowSensors','flowControl','flowRoom'].map((key,i)=>`${i ? '<span class="flow-arrow" aria-hidden="true">→</span>':''}<span class="flow-step" data-i18n="${key}"></span>`).join('')}</div>
      <div class="technical-only"><p class="historical" data-i18n="historical"></p></div>
      <div class="communication-diagram"><button data-comm-node="environment"><strong data-i18n="nodeEnvironment"></strong></button><span class="communication-link" data-comm-path="environment"></span><button data-comm-node="wago"><strong data-i18n="nodeWago"></strong><small class="technical-only" data-i18n="nodeWagoDetail"></small></button><div class="device-paths">${[['glass','nodeGlass','BACnet','nodeGlassDetail'],['blinds','nodeBlinds','SMI','nodeBlindsDetail'],['lighting','nodeLighting','ZigBee','nodeLightingDetail']].map(([id,key,protocol,detail])=>`<div class="device-path" data-comm-path="${id}"><span class="protocol technical-only">${protocol}</span><button data-comm-node="${id}"><strong data-i18n="${key}"></strong><small class="technical-only" data-i18n="${detail}"></small><span class="device-live" id="live-${id}"></span></button></div>`).join('')}</div><div class="technical-only mpc"><span>Modbus TCP ···</span><button data-comm-node="mpc"><strong data-i18n="nodeMpc"></strong><small data-i18n="nodeMpcDetail"></small></button></div></div>
      <p class="technical-only protocol-chain" data-i18n="protocolLighting"></p><div class="communication-explanation" aria-live="polite"><strong data-i18n="happeningTitle"></strong><p id="communicationExplanation"></p></div><details><summary data-i18n="showDetails"></summary><h3 data-i18n="communicationLogTitle"></h3><ol id="eventList"></ol></details>
    </section><footer><span data-i18n="disclaimer"></span><span data-i18n="shortcuts"></span></footer></main>
    <dialog id="helpDialog"><h2 data-i18n="helpTitle"></h2><p data-i18n="helpText"></p><p data-i18n="autoHint"></p><p data-i18n="tintNote"></p><p data-i18n="shortcuts"></p>${button('closeHelp','close')}</dialog><div id="notice" role="status"></div>`;
  document.querySelector('.brand img').addEventListener('error', e => e.currentTarget.hidden = true);
  let explainedNode = null, timers = [];
  const dispatch = (type, value, more = {}) => store.dispatch({ type, value, ...more });
  document.querySelectorAll('[data-scenario]').forEach(b => b.onclick = () => dispatch('scenario', b.dataset.scenario));
  for (const level of ['school', 'bachelor']) document.getElementById(level).onclick = () => dispatch('level', level);
  document.getElementById('languageSelect').onchange = e => dispatch('language', e.target.value);
  document.getElementById('automaticMode').onclick = () => dispatch('mode', true);
  document.getElementById('manualMode').onclick = () => dispatch('mode', false);
  document.querySelectorAll('[data-tint]').forEach(b => b.onclick = () => dispatch('device', b.dataset.tint, { key: 'tints', row: +b.dataset.row }));
  document.querySelectorAll('[data-angle]').forEach(b => b.onclick = () => dispatch('device', +b.dataset.angle, { key: 'slatAngle' }));
  for (const [attr,key] of [['temperature','lampTemperature'],['direction','lampDirection']]) document.querySelectorAll(`[data-${attr}]`).forEach(b => b.onclick = () => dispatch('device', b.dataset[attr], {key}));
  for (const key of ['blindPosition','lampBrightness']) {
    const input = document.getElementById(key);
    input.oninput = e => dispatch('device', +e.target.value, { key, commit: false });
    input.onchange = e => dispatch('device', +e.target.value, { key });
  }
  for (const preset of ['overview','windows','lighting']) document.getElementById(`camera-${preset}`).onclick = () => dispatch('camera', preset);
  document.getElementById('camera-reset').onclick = () => dispatch('camera', 'overview');
  document.getElementById('cutaway').onchange = e => dispatch('cutaway', e.target.checked);
  document.getElementById('reset').onclick = () => { explainedNode = null; document.querySelector('details').open = false; dispatch('reset'); };
  const dialog = document.getElementById('helpDialog');
  document.getElementById('help').onclick = () => dialog.showModal(); document.getElementById('closeHelp').onclick = () => dialog.close();
  const fullscreen = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { document.getElementById('notice').textContent = copy[store.getState().language].fullscreenError; } };
  document.getElementById('fullscreen').onclick = fullscreen;
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.repeat || ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName) || dialog.open) return;
    const key = e.key.toLowerCase();
    if (['1','2','3'].includes(key)) dispatch('scenario', {1:'strongSun',2:'cloudy',3:'night'}[key]);
    else if (['4','5','6'].includes(key)) { dispatch('mode', false); document.querySelector(`[data-row="${+key-4}"].active`).focus(); }
    else if (key === 'm') dispatch('mode', false); else if (key === '0') dispatch('mode', true); else if (key === 'r') dispatch('camera', 'overview'); else if (key === 'f') fullscreen(); else if (key === '?') dialog.showModal(); else return;
    e.preventDefault();
  });
  document.querySelectorAll('[data-comm-node]').forEach(b => b.onclick = () => { explainedNode = b.dataset.commNode; render(store.getState()); });
  function active(el, yes) { el.classList.toggle('active', yes); el.setAttribute('aria-pressed', String(yes)); }
  function describe(d, t) { return `${t.nodeGlass}: ${d.tints.map(x => t.states[x]).join(' / ')}. ${t.nodeBlinds}: ${d.blindPosition}% · ${d.slatAngle}°. ${t.nodeLighting}: ${d.lampBrightness}% · ${t[d.lampTemperature === 'warm' ? 'warmWhite' : 'neutralWhite']} · ${t[d.lampDirection === 'direct' ? 'directLight' : 'indirectLight']}.`; }
  function render(state, action = {}) {
    const t = copy[state.language], d = devices(state), scenario = scenarios[state.scenario];
    document.documentElement.lang = state.language; document.title = `${t.pageTitle} · 3D`;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t[el.dataset.i18n]);
    document.querySelectorAll('[data-i18n-alt]').forEach(el => el.alt = t[el.dataset.i18nAlt]);
    document.querySelectorAll('[data-label]').forEach(el => el.setAttribute('aria-label', t[el.dataset.label]));
    document.querySelector('#viewport canvas')?.setAttribute('aria-label', `${t.room}. ${t.drag}`);
    document.getElementById('languageSelect').value = state.language;
    document.getElementById('sceneName').textContent = scenario.labels[state.language];
    document.getElementById('modeBadge').textContent = state.automatic ? t.automatic : t.manual;
    document.querySelectorAll('[data-scenario]').forEach(b => { active(b, state.scenario === b.dataset.scenario); b.querySelector('.scenario-name').textContent = scenarios[b.dataset.scenario].labels[state.language]; });
    for (const level of ['school','bachelor']) active(document.getElementById(level), state.level === level);
    active(document.getElementById('automaticMode'), state.automatic); active(document.getElementById('manualMode'), !state.automatic);
    document.getElementById('modeHint').textContent = t[state.automatic ? 'autoHint' : 'manualHint'];
    document.querySelectorAll('[data-tint]').forEach(b => { active(b, d.tints[+b.dataset.row] === b.dataset.tint); b.disabled = state.automatic; b.setAttribute('aria-label', t.tintCell(t[['tintTop','tintMiddle','tintBottom'][+b.dataset.row]], t.states[b.dataset.tint])); });
    document.querySelectorAll('[data-angle]').forEach(b => { active(b, d.slatAngle === +b.dataset.angle); b.disabled = state.automatic; });
    for (const [attr,key] of [['temperature','lampTemperature'],['direction','lampDirection']]) document.querySelectorAll(`[data-${attr}]`).forEach(b => { active(b, d[key] === b.dataset[attr]); b.disabled = state.automatic; });
    for (const key of ['blindPosition','lampBrightness']) { document.getElementById(key).value = d[key]; document.getElementById(key).disabled = state.automatic; document.getElementById(`${key}Value`).textContent = `${d[key]}%`; }
    document.getElementById('slatAngleValue').textContent = `${d.slatAngle}°`;
    for (const preset of ['overview','windows','lighting']) active(document.getElementById(`camera-${preset}`), state.camera === preset);
    document.getElementById('cutaway').checked = state.cutaway;
    document.getElementById('outsideText').textContent = t.weather[state.scenario];
    document.getElementById('responseText').textContent = state.automatic ? t.actionExplanations[state.scenario] : t.actionExplanations.manual;
    document.getElementById('benefitText').textContent = state.automatic ? t.states[d.goal] : t.manualHint;
    document.querySelector('.communication-area').dataset.view = state.level === 'school' ? 'simple' : 'technical';
    document.getElementById('live-glass').textContent = d.tints.map(x => t.states[x]).join(' / ');
    document.getElementById('live-blinds').textContent = `${d.blindPosition}% · ${d.slatAngle}°`;
    document.getElementById('live-lighting').textContent = `${d.lampBrightness}% · ${t[d.lampTemperature === 'warm' ? 'warmWhite' : 'neutralWhite']} · ${t[d.lampDirection === 'direct' ? 'directLight' : 'indirectLight']}`;
    if (['scenario','mode','device','reset'].includes(action.type)) explainedNode = null;
    const latest = state.events[0];
    const explanationKey = latest?.type === 'scenario' ? state.automatic ? state.scenario : 'manual' : latest?.type === 'tints' ? 'tint' : latest?.type.startsWith('lamp') ? 'lighting' : ['blindPosition','slatAngle'].includes(latest?.type) ? 'blinds' : state.automatic ? 'automatic' : 'manual';
    document.getElementById('communicationExplanation').textContent = explainedNode ? (state.level === 'school' ? t.schoolNodes[explainedNode] : t.explanations[explainedNode]) : (latest?.type === 'scenario' && !state.automatic ? t.manualWeather : t.actionExplanations[explanationKey]);
    document.getElementById('eventList').replaceChildren(...state.events.map(event => {
      const item = document.createElement('li'), label = document.createElement('b');
      label.textContent = state.level === 'bachelor' ? event.protocol === 'local' ? t.localModel : event.protocol : event.automatic ? t.automatic : t.manual;
      item.append(label, document.createTextNode(`${scenarios[event.scenario].labels[state.language]} · ${t.request}: ${describe(event.devices, t)}`)); return item;
    }));
    if (['scenario','mode','device','reset'].includes(action.type) && action.commit !== false) {
      timers.forEach(clearTimeout); timers = [];
      document.querySelectorAll('.signal-active').forEach(el => el.classList.remove('signal-active'));
      latest.paths.forEach((path, index) => timers.push(setTimeout(() => { document.querySelector(`[data-comm-node="${path}"]`)?.classList.add('signal-active'); document.querySelector(`[data-comm-path="${path}"]`)?.classList.add('signal-active'); }, index * 180)));
      timers.push(setTimeout(() => document.querySelectorAll('.signal-active').forEach(el => el.classList.remove('signal-active')), 2100));
    }
    const fallback = document.getElementById('fallback'); if (!fallback.hidden) fallback.textContent = t[fallback.dataset.reason || 'webgl'];
  }
  render(store.getState()); store.subscribe(render);
  return { host: document.getElementById('viewport'), render, showFailure(reason = 'webgl') { const f = document.getElementById('fallback'); f.hidden = false; f.dataset.reason = reason; f.textContent = copy[store.getState().language][reason]; }, clearCameraSelection() { document.querySelectorAll('.camera-presets button').forEach(b => active(b, false)); } };
}
