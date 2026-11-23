// Presentation metadata only. Device targets always come from simulation/state.js.
export const physicalComponents = ['glass', 'blinds', 'lighting', 'sensors'];
export const architectureNodes = ['user', 'lisa', 'sensors', 'wago', 'glass', 'blinds', 'pi', 'gateway', 'lighting', 'mpc'];
export const cameraTargets = {
  overview: { position: [6, 5.6, 10.2], target: [0, .95, -.5] },
  windows: { position: [0, 2.6, 5.7], target: [0, 1.95, -3.4] },
  glass: { position: [-2.9, 2.25, 1.2], target: [-2.9, 1.95, -3.4] },
  blinds: { position: [3, 2.25, .8], target: [3, 1.95, -3.28] },
  lighting: { position: [3.8, 2.2, 4.8], target: [0, 2.8, -.1] },
  sensors: { position: [1.6, 4.7, 2.3], target: [.3, 3.85, -3.4] },
  controller: { position: [0, 4.8, 10.6], target: [0, 1.6, -1.8] },
  automation: { position: [0, 6, 12], target: [0, 1.2, -.5] }
};
export const tourSteps = [
  { view: 'office', camera: 'overview', component: null, key: 'overview' },
  { view: 'inspect', camera: 'sensors', component: 'sensors', key: 'sensors' },
  { view: 'inspect', camera: 'glass', component: 'glass', key: 'glass' },
  { view: 'inspect', camera: 'blinds', component: 'blinds', key: 'blinds' },
  { view: 'inspect', camera: 'lighting', component: 'lighting', key: 'lighting' },
  { view: 'automation', camera: 'controller', component: 'lisa', key: 'controller' },
  { view: 'automation', camera: 'automation', component: null, key: 'architecture' },
  { view: 'office', camera: 'overview', component: null, key: 'return' }
];
export const componentPath = { user: 'user', lisa: 'supervisory', sensors: 'sensors', wago: 'controller', glass: 'glass', blinds: 'blinds', lighting: 'lighting', pi: 'lighting', gateway: 'lighting', mpc: 'mpc' };

export const physicalForNode = key => physicalComponents.includes(key) ? key : ['pi', 'gateway'].includes(key) ? 'lighting' : null;
