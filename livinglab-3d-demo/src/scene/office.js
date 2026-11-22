import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SLAT_COUNT, slatDrop } from './blind-layout.js';
import { devices, TINT_OPACITY } from '../simulation/state.js';

// Rendering art direction only; these are not measured solar, optical or lighting values.
export const environments = {
  sunrise: { sky: '#d9b5a8', sun: [-9, 4, -14], color: '#ffd0a0', direct: 1.9, diffuse: .65, clouds: .28 },
  morning: { sky: '#b6d9e8', sun: [-3, 12, -12], color: '#fff4dc', direct: 2.7, diffuse: 1.1, clouds: .14 },
  strongSun: { sky: '#9fcee5', sun: [8, 14, -10], color: '#fff1d1', direct: 4.6, diffuse: 1.25, clouds: .06 },
  cloudy: { sky: '#bac7cd', sun: [0, 9, -15], color: '#e5edf3', direct: .22, diffuse: .85, clouds: .9 },
  sunset: { sky: '#b38c9c', sun: [10, 3.5, -14], color: '#ffb782', direct: 1.6, diffuse: .38, clouds: .3 },
  night: { sky: '#14263e', sun: [-7, 11, -22], color: '#b8d6ff', direct: .035, diffuse: .07, clouds: .15 }
};
export function createOffice(host, initial, onCameraInteraction) {
  const renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.autoClear = false;
  renderer.info.autoReset = false;
  host.prepend(renderer.domElement);
  renderer.domElement.setAttribute('tabindex', '0');
  const scene = new T.Scene();
  scene.background = new T.Color(environments[initial.scenario].sky);
  scene.fog = new T.Fog(scene.background, 32, 100);
  const camera = new T.PerspectiveCamera(46, 1, .1, 150);
  camera.layers.enable(1);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = .08;
  controls.enablePan = false;
  controls.minDistance = 2.8;
  controls.maxDistance = 18;
  controls.minPolarAngle = .52;
  controls.maxPolarAngle = Math.PI / 2 - .025;
  // Stay in front of the facade; cutaway walls make all permitted views readable.
  controls.minAzimuthAngle = -.95;
  controls.maxAzimuthAngle = .95;
  const presets = {
    overview: { position: [6, 4.5, 10.2], target: [0, .95, -.5] },
    windows: { position: [0, 2.6, 5.7], target: [0, 1.95, -3.4] },
    lighting: { position: [3.8, 2.2, 4.8], target: [0, 2.8, -.1] }
  };
  let transition = null;
  function setCamera(name, immediate = false) {
    const p = presets[name];
    if (immediate) { camera.position.fromArray(p.position); controls.target.fromArray(p.target); controls.update(); }
    else transition = { from: camera.position.clone(), targetFrom: controls.target.clone(), to: new T.Vector3(...p.position), targetTo: new T.Vector3(...p.target), elapsed: 0 };
  }
  controls.addEventListener('start', () => { transition = null; onCameraInteraction?.(); });
  setCamera('overview', true);

  const materials = new Set(), geometries = new Set(), textures = new Set();
  const mat = (color, extra = {}) => { const m = new T.MeshStandardMaterial({ color, roughness: .78, ...extra }); materials.add(m); return m; };
  const geo = g => { geometries.add(g); return g; };
  const boxGeometry = geo(new T.BoxGeometry(1, 1, 1));
  const sphereGeometry = geo(new T.SphereGeometry(1, 16, 10));
  const cylinderGeometry = geo(new T.CylinderGeometry(1, 1, 1, 12));
  function mesh(g, m, x, y, z, sx, sy, sz, parent = scene) {
    const o = new T.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; o.receiveShadow = true; parent.add(o); return o;
  }
  const box = (m, x, y, z, sx, sy, sz, p) => mesh(boxGeometry, m, x, y, z, sx, sy, sz, p);
  const wall = mat('#eeeae3'), frame = mat('#37454a', { metalness: .55, roughness: .4 }), oak = mat('#c5a578'), white = mat('#e4e7e5'), dark = mat('#28373e'), chairFabric = mat('#365b65'), concrete = mat('#c6c7c2');
  // Deterministic procedural grain; no remote texture dependencies.
  const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d'); ctx.fillStyle = '#c7ad86'; ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 220; i++) { ctx.strokeStyle = `rgba(87,60,30,${.025 + (i % 7) * .007})`; ctx.beginPath(); ctx.moveTo(0, i * 1.2); ctx.bezierCurveTo(80, i * 1.2 + Math.sin(i) * 4, 170, i * 1.2 - 3, 256, i * 1.2); ctx.stroke(); }
  const woodTexture = new T.CanvasTexture(canvas); woodTexture.colorSpace = T.SRGBColorSpace; textures.add(woodTexture); oak.map = woodTexture; oak.color.set('#ffffff');
  box(mat('#a7aaa5'), 0, -.15, 0, 12.4, .3, 7.4);
  const floorMats = ['#b9b9b2', '#b5b6b0', '#bdbdb6'].map(c => mat(c));
  // Carpet tiles form a quiet architectural grid.
  for (let x = 0; x < 12; x++) for (let z = 0; z < 7; z++) box(floorMats[(x * 7 + z * 3) % 3], x - 5.5, .015, z - 3, .99, .025, .99);
  box(wall, 0, .39, -3.55, 12, .78, .22);
  box(wall, 0, 3.27, -3.55, 12, .3, .25);
  box(concrete, .0, 1.7, -3.45, .45, 3.4, .5);
  box(white, 0, 1.5, -3.16, .17, .23, .045);
  box(dark, 0, 1.54, -3.13, .10, .055, .01);
  for (const x of [-5.95, 5.95]) box(wall, x, 1.7, -3.42, .3, 3.4, .42);
  box(white, 0, 3.43, -2.95, 12, .14, 1.15);
  const cutSurfaces = [box(wall, -6.08, 1.7, 0, .18, 3.4, 7), box(wall, 6.08, 1.7, 0, .18, 3.4, 7), box(white, 0, 3.45, .55, 12.2, .12, 5.9)];
  const cutMaterial = mat('#e8ebe7', { transparent: true, opacity: .13, depthWrite: false, side: T.DoubleSide });
  cutSurfaces.forEach(o => { o.material = cutMaterial; o.castShadow = false; });
  // A retained ceiling island receives upward light even with the shell cut away.
  const ceilingIsland = mesh(geo(new T.PlaneGeometry(7.8, 2.7)), white, 0, 3.37, -.3, 1, 1, 1);
  ceilingIsland.rotation.x = Math.PI / 2; ceilingIsland.castShadow = false;
  box(frame, 0, .78, -3.32, 11.8, .07, .42);
  const panes = [];
  for (let bay = 0; bay < 4; bay++) {
    const x = -5.12 + bay * 1.39;
    for (let row = 0; row < 3; row++) {
      const m = mat('#7398ac', { transparent: true, opacity: .035, roughness: .15, metalness: .05, depthWrite: false, side: T.DoubleSide });
      const pane = mesh(geo(new T.PlaneGeometry(1.3, .735)), m, x, 2.72 - row * .76, -3.47, 1, 1, 1);
      pane.castShadow = false; pane.renderOrder = 2; pane.userData = { bay, row }; panes.push(pane);
    }
    for (const dx of [-.68, .68]) box(frame, x + dx, 1.95, -3.4, .065, 2.38, .13);
    for (const y of [.79, 1.58, 2.34, 3.1]) box(frame, x, y, -3.4, 1.39, .045, .13);
  }
  const slatMaterial = mat('#bbc5ca', { metalness: .25, roughness: .48 });
  const blinds = [];
  const slatGeometry = geo(new T.BoxGeometry(2.61, .008, .082));
  for (const x of [1.58, 4.33]) {
    for (const dx of [-1.36, 1.36]) box(frame, x + dx, 1.95, -3.4, .075, 2.38, .15);
    for (const y of [.79, 3.1]) box(frame, x, y, -3.4, 2.75, .065, .15);
    const clear = mat('#9fc9d7', { transparent: true, opacity: .045, depthWrite: false, side: T.DoubleSide });
    const glass = mesh(geo(new T.PlaneGeometry(2.63, 2.25)), clear, x, 1.95, -3.48, 1, 1, 1); glass.castShadow = false;
    box(frame, x, 3.08, -3.28, 2.65, .105, .17);
    const slats = new T.InstancedMesh(slatGeometry, slatMaterial, SLAT_COUNT); slats.castShadow = true; slats.receiveShadow = false; slats.instanceMatrix.setUsage(T.DynamicDrawUsage); slats.frustumCulled = false; scene.add(slats);
    const rail = box(slatMaterial, x, 2.9, -3.28, 2.64, .045, .12);
    const cords = [-.85, .85].map(dx => box(frame, x + dx, 2, -3.26, .008, 2.2, .008));
    blinds.push({ x, slats, rail, cords });
  }
  function desk(x, z) {
    box(oak, x, .77, z, 2.3, .07, 1.15);
    for (const dx of [-.96, .96]) { box(white, x + dx, .37, z, .055, .74, .75); box(frame, x + dx, .035, z, .12, .04, .84); }
    box(frame, x, .63, z, 1.95, .06, .06);
    box(dark, x, 1.18, z - .24, .84, .49, .055);
    box(mat('#46616c', { emissive: '#223540', emissiveIntensity: .16 }), x, 1.18, z - .207, .76, .41, .007);
    box(frame, x, .91, z - .24, .045, .24, .045); box(frame, x, .82, z - .24, .36, .035, .2);
    box(dark, x, .819, z + .24, .58, .025, .18);
    box(white, x + .76, .82, z + .22, .27, .016, .35);
    mesh(cylinderGeometry, white, x - .8, .88, z + .18, .07, .17, .07);
    const chair = new T.Group(); chair.position.set(x, 0, z + 1.02); scene.add(chair);
    box(chairFabric, 0, .48, 0, .54, .09, .52, chair);
    const back = box(chairFabric, 0, .84, .23, .53, .65, .065, chair); back.rotation.x = -.09;
    mesh(cylinderGeometry, frame, 0, .25, 0, .035, .4, .035, chair);
    for (let i = 0; i < 5; i++) { const arm = box(frame, 0, .075, 0, .62, .035, .035, chair); arm.rotation.y = i * Math.PI / 5; }
    for (const dx of [-.32, .32]) box(frame, dx, .65, 0, .05, .035, .3, chair);
  }
  desk(-3.35, -1.05); desk(.0, -.8); desk(3.35, -1.05);
  // Storage, books and planting give scale without expensive external models.
  box(white, -5.35, .57, 1.72, 1.05, 1.12, 1.85);
  for (const z of [1.13, 1.72, 2.31]) { box(concrete, -4.81, .57, z, .015, 1.04, .56); box(frame, -4.79, .69, z, .02, .035, .16); }
  for (let i = 0; i < 6; i++) box(i % 2 ? chairFabric : oak, -5.35 + i * .11, 1.27, 1.3, .075, .3 + i % 3 * .04, .25);
  function plant(x, z) {
    mesh(cylinderGeometry, mat('#c9c2b3'), x, .22, z, .23, .44, .23);
    box(mat('#68715b'), x, .75, z, .035, 1.1, .035);
    const leaves = mat('#466447');
    for (let i = 0; i < 9; i++) { const a = i * 2.4; const leaf = mesh(sphereGeometry, leaves, x + Math.sin(a) * .24, .6 + i * .09, z + Math.cos(a) * .21, .12, .27, .06); leaf.rotation.z = Math.sin(a) * .7; }
  }
  plant(5.25, 2.1); plant(-5.25, -2.65);
  // Suspended linear fittings: upward and downward emitters are independently cross-faded.
  const lamps = [];
  for (const x of [-3.3, 0, 3.3]) {
    const z = -.65;
    box(frame, x, 2.78, z, 2.2, .095, .22);
    for (const dx of [-.8, .8]) box(frame, x + dx, 3.08, z, .008, .54, .008);
    const downMat = mat('#f5edce', { emissive: '#ffcf8b', emissiveIntensity: 1 });
    const upMat = downMat.clone(); materials.add(upMat);
    box(downMat, x, 2.727, z, 2.08, .012, .17); box(upMat, x, 2.837, z, 2.08, .012, .17);
    const down = new T.SpotLight('#ffdbad', 0, 10, 1.12, .65, 1.4); down.position.set(x, 2.7, z); down.target.position.set(x, 0, z); scene.add(down, down.target);
    const up = new T.SpotLight('#ffdbad', 0, 4, 1.25, .7, 1.3); up.position.set(x, 2.9, z); up.target.position.set(x, 3.4, z); scene.add(up, up.target);
    const bounce = new T.PointLight('#ffdbad', 0, 10, 1.4); bounce.position.set(x, 2.95, z + .3); scene.add(bounce);
    lamps.push({ down, up, bounce, downMat, upMat });
  }
  const ambient = new T.HemisphereLight('#dcebf5', '#8b877a', 1); scene.add(ambient);
  const sun = new T.DirectionalLight('#fff2da', 2); sun.position.set(-4, 10, -10); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 8, bottom: -8, near: .5, far: 50 }); sun.shadow.bias = -.0003; sun.shadow.normalBias = .025; sun.target.position.set(0, 0, 0); scene.add(sun, sun.target);
  // Outdoor layer retains sky illumination independently of the illustrative interior attenuation.
  const outdoor = new T.Group(); scene.add(outdoor);
  box(mat('#8a9c78'), 0, -.3, -34, 160, .15, 65, outdoor);
  box(mat('#aab5b4'), 0, -.36, 21, 160, .1, 45, outdoor);
  box(mat('#bcc1b6'), 0, -.2, -9, 70, .04, 2, outdoor);
  const trunkMat = mat('#776b58');
  const treeMats = ['#5c7659', '#718463', '#4e6d58'].map(c => mat(c));
  for (let i = 0; i < 23; i++) {
    const x = (i - 11) * 3.8, z = -15 - (i % 4) * 5;
    box(trunkMat, x, 1, z, .18, 2, .18, outdoor);
    for (let j = 0; j < 3; j++) mesh(sphereGeometry, treeMats[i % 3], x + (j - 1) * .6, 2.1 + (j % 2) * .8, z, 1.25, 1.6, 1.15, outdoor);
  }
  const distant = mat('#c2c9c5');
  for (let i = 0; i < 7; i++) {
    const x = -30 + i * 10, h = 3 + i % 3;
    box(distant, x, h / 2, -43, 7, h, 5, outdoor);
    for (let j = 0; j < 4; j++) box(frame, x - 2.5 + j * 1.6, h - 1.2, -40.45, .9, .8, .02, outdoor);
  }
  const cloudMat = mat('#ffffff', { transparent: true, opacity: .5, depthWrite: false, roughness: 1 });
  const clouds = [];
  for (let i = 0; i < 7; i++) {
    const group = new T.Group(); group.position.set(-27 + i * 9, 9 + i % 3 * 1.4, -30 - i % 2 * 7); outdoor.add(group);
    for (let j = 0; j < 5; j++) mesh(sphereGeometry, cloudMat, (j - 2) * 1.3, Math.sin(j * 2) * .3, 0, 1.8, .48 + j % 2 * .28, .85, group);
    clouds.push(group);
  }
  const orbMaterial = new T.MeshBasicMaterial({ color: '#ffe6b3' }); materials.add(orbMaterial);
  const orb = mesh(sphereGeometry, orbMaterial, -9, 4, -28, .65, .65, .65, outdoor); orb.castShadow = false;
  outdoor.traverse(o => { o.layers.set(1); o.castShadow = false; });
  const outdoorHemi = new T.HemisphereLight('#e8f3ff', '#60704c', 2); outdoorHemi.layers.set(1); scene.add(outdoorHemi);
  const starGeo = geo(new T.BufferGeometry()); const stars = [];
  for (let i = 0; i < 160; i++) stars.push(Math.sin(i * 78.23) * 70, 10 + ((i * 17) % 50), -40 - (i % 20));
  starGeo.setAttribute('position', new T.Float32BufferAttribute(stars, 3));
  const starMat = new T.PointsMaterial({ color: '#e0eaff', size: .08, transparent: true, opacity: 0 }); materials.add(starMat); const starField = new T.Points(starGeo, starMat); scene.add(starField);

  // Merge static architecture by material; retain dynamic panes, slats and emitters.
  scene.updateMatrixWorld(true);
  const dynamic = new Set([...panes, ...cutSurfaces, orb, ...blinds.flatMap(b => [b.slats, b.rail, ...b.cords])]);
  const emitterMaterials = new Set(lamps.flatMap(l => [l.downMat, l.upMat]));
  const buckets = new Map();
  scene.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh || dynamic.has(o) || emitterMaterials.has(o.material) || o.material === cloudMat) return;
    const key = `${o.material.uuid}:${o.layers.mask}:${o.castShadow}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(o);
  });
  buckets.forEach(objects => {
    if (objects.length < 2) return;
    const parts = objects.map(o => o.geometry.clone().applyMatrix4(o.matrixWorld));
    const combined = mergeGeometries(parts);
    parts.forEach(g => g.dispose());
    if (!combined) return;
    geometries.add(combined);
    const merged = new T.Mesh(combined, objects[0].material);
    merged.castShadow = objects[0].castShadow; merged.receiveShadow = true; merged.layers.mask = objects[0].layers.mask;
    objects.forEach(o => o.removeFromParent()); scene.add(merged);
  });

  let state = initial, target = devices(state), running = true, last = performance.now(), raf;
  let position = target.blindPosition, angle = target.slatAngle, brightness = target.lampBrightness / 100, direction = target.lampDirection === 'direct' ? 1 : 0;
  const tempColor = new T.Color(), skyColor = new T.Color(), lightColor = new T.Color();
  const dummy = new T.Object3D();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function update(next, action = {}) {
    state = next; target = devices(next);
    if (action.type === 'camera' || action.type === 'reset') setCamera(next.camera, reduced.matches);
    cutSurfaces.forEach(o => { o.visible = !next.cutaway; });
  }
  update(initial);
  const resize = new ResizeObserver(() => {
    const { width, height } = host.getBoundingClientRect(); if (!width || !height) return;
    renderer.setSize(width, height); camera.aspect = width / height;
    camera.fov = T.MathUtils.radToDeg(2 * Math.atan(Math.tan(T.MathUtils.degToRad(23)) * Math.max(1, 1.5 / camera.aspect)));
    camera.updateProjectionMatrix();
  }); resize.observe(host);
  function renderScene() {
    // Three.js filters lights against the CAMERA's layers, not each mesh's layers.
    // Rendering both layers together let outdoorHemi illuminate the entire office.
    // Separate passes isolate light sets while retaining outdoor colour and depth
    // behind the transparent facade. Do not clear depth between these passes.
    const background = scene.background;
    renderer.info.reset();
    renderer.clear();
    camera.layers.set(1);
    renderer.render(scene, camera);
    scene.background = null;
    camera.layers.set(0);
    renderer.render(scene, camera);
    scene.background = background;
    camera.layers.enable(1);
  }
  function captureIllumination() {
    // On-demand readback for pixel-level QA, never run by the animation loop.
    renderScene();
    const gl = renderer.getContext(), pixel = new Uint8Array(4);
    const sample = point => {
      const projected = new T.Vector3(...point).project(camera);
      const x = Math.round((projected.x * .5 + .5) * gl.drawingBufferWidth);
      const y = Math.round((projected.y * .5 + .5) * gl.drawingBufferHeight);
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      return [...pixel.slice(0, 3)];
    };
    return { floor: [-3, -1.5, 0, 1.5, 3].flatMap(x => [1.5, 2.3].map(z => sample([x, .03, z]))), ceiling: sample([0, 3.36, -.3]) };
  }
  function frameLoop(now) {
    if (!running) return;
    raf = requestAnimationFrame(frameLoop);
    const dt = Math.min((now - last) / 1000, .15); last = now;
    if (document.hidden) return;
    const a = reduced.matches ? 1 : 1 - Math.exp(-dt * 3.3), env = environments[state.scenario];
    if (transition) {
      transition.elapsed += dt; const f = Math.min(1, transition.elapsed / 1.1), s = f * f * (3 - 2 * f);
      camera.position.lerpVectors(transition.from, transition.to, s); controls.target.lerpVectors(transition.targetFrom, transition.targetTo, s);
      if (f === 1) transition = null;
    }
    controls.update();
    // Camera always stays above the floor and on the room side of the glass facade.
    camera.position.y = Math.max(.45, camera.position.y); camera.position.z = Math.max(-2.8, camera.position.z);
    let transmission = 0;
    panes.forEach(p => { const opacity = TINT_OPACITY[target.tints[p.userData.row]]; p.material.opacity = T.MathUtils.lerp(p.material.opacity, opacity, a); tempColor.set(target.tints[p.userData.row] === 'high' ? '#204c78' : '#7b9daa'); p.material.color.lerp(tempColor, a); transmission += 1 - p.material.opacity; });
    transmission /= panes.length;
    position = T.MathUtils.lerp(position, target.blindPosition, a); angle = T.MathUtils.lerp(angle, target.slatAngle, a);
    const extent = slatDrop(SLAT_COUNT - 1, position);
    for (const b of blinds) {
      for (let i = 0; i < SLAT_COUNT; i++) { dummy.position.set(b.x, 3.0 - slatDrop(i, position), -3.27); dummy.rotation.set(T.MathUtils.degToRad(angle), 0, 0); dummy.updateMatrix(); b.slats.setMatrixAt(i, dummy.matrix); }
      b.slats.instanceMatrix.needsUpdate = true; b.rail.position.y = 2.97 - extent;
      b.cords.forEach(c => { c.scale.y = extent; c.position.y = 3 - extent / 2; });
    }
    const blindOpen = 1 - position / 100 * (.12 + .85 * Math.sin(T.MathUtils.degToRad(angle)));
    const entry = (transmission + blindOpen) / 2;
    skyColor.set(env.sky); scene.background.lerp(skyColor, a); scene.fog.color.copy(scene.background);
    sun.position.lerp(new T.Vector3(...env.sun), a); lightColor.set(env.color); sun.color.lerp(lightColor, a);
    sun.intensity = T.MathUtils.lerp(sun.intensity, env.direct * entry, a);
    // Daylight fill is coloured by the environment, and becomes very small at night.
    ambient.color.lerp(lightColor, a);
    ambient.intensity = T.MathUtils.lerp(ambient.intensity, .035 + env.diffuse * (.12 + .48 * entry), a);
    outdoorHemi.intensity = T.MathUtils.lerp(outdoorHemi.intensity, .06 + env.diffuse * 1.8, a);
    orb.position.lerp(new T.Vector3(env.sun[0] * 2, env.sun[1], -29), a); orbMaterial.color.lerp(lightColor, a);
    cloudMat.opacity = T.MathUtils.lerp(cloudMat.opacity, env.clouds, a); starMat.opacity = T.MathUtils.lerp(starMat.opacity, state.scenario === 'night' ? .85 : 0, a);
    if (!reduced.matches) clouds.forEach((c, i) => { c.position.x += dt * (.10 + i * .005); if (c.position.x > 38) c.position.x = -38; });
    brightness = T.MathUtils.lerp(brightness, target.lampBrightness / 100, a); direction = T.MathUtils.lerp(direction, target.lampDirection === 'direct' ? 1 : 0, a);
    lightColor.set(target.lampTemperature === 'warm' ? '#ffd19b' : '#e4efff');
    for (const l of lamps) {
      for (const light of [l.down, l.up, l.bounce]) light.color.lerp(lightColor, a);
      l.down.intensity = brightness * direction * 26; l.up.intensity = brightness * (1 - direction) * 10;
      // Approximate reflected ceiling light; Three.js does not calculate diffuse bounce.
      l.bounce.intensity = brightness * (1 - direction) * 10;
      l.downMat.emissive.lerp(lightColor, a); l.upMat.emissive.lerp(lightColor, a);
      l.downMat.emissiveIntensity = brightness * (direction * 5 + .12); l.upMat.emissiveIntensity = brightness * ((1 - direction) * 5 + .12);
    }
    renderScene();
  }
  raf = requestAnimationFrame(frameLoop);
  const contextLost = e => { e.preventDefault(); host.dispatchEvent(new Event('scene-lost')); };
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  return {
    update, setCamera, captureIllumination,
    diagnostics: () => ({ panes: panes.map(p => ({ ...p.userData, opacity: p.material.opacity })), blindPosition: position, slatAngle: angle, slatDrops: Array.from({ length: SLAT_COUNT }, (_, i) => slatDrop(i, position)), brightness, direction, sun: sun.intensity, sky: scene.background.getHexString(), camera: camera.position.toArray(), lights: lamps.map(l => ({ down: l.down.intensity, up: l.up.intensity, color: l.down.color.getHexString() })), calls: renderer.info.render.calls }),
    dispose() { running = false; cancelAnimationFrame(raf); resize.disconnect(); controls.dispose(); geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose()); renderer.dispose(); renderer.domElement.remove(); }
  };
}
