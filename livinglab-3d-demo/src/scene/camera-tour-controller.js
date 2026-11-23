import { Vector3 } from 'three';
import { cameraTargets } from '../presentation/model.js';
const vec = p => new Vector3(...p);
const smooth = t => t * t * (3 - 2 * t);

// Route through the open front of the model before crossing between interior and
// exterior viewpoints. Horizontal entry is above people/desks and below fittings.
export function cameraRoute(from, to) {
  const points = [vec(from)];
  if (from[2] < 4.3) points.push(vec([from[0], from[1], 4.3]));
  points.push(vec([to[0], to[1], Math.max(4.3, to[2])]));
  points.push(vec(to));
  return points.filter((point, index) => !index || point.distanceTo(points[index - 1]) > .001);
}
export class CameraTourController {
  constructor(camera, controls) { this.camera = camera; this.controls = controls; this.transition = null; this.name = 'overview'; }
  move(name, immediate = false) {
    const preset = cameraTargets[name];
    if (!preset) return;
    this.cancel(); this.name = name;
    // Flush residual orbit damping before starting a deterministic camera route.
    const damping = this.controls.enableDamping;
    this.controls.enableDamping = false; this.controls.update(); this.controls.enableDamping = damping;
    if (immediate) {
      this.camera.position.fromArray(preset.position); this.controls.target.fromArray(preset.target);
      this.camera.lookAt(this.controls.target); return;
    }
    const points = cameraRoute(this.camera.position.toArray(), preset.position);
    const lengths = points.slice(1).map((p, i) => p.distanceTo(points[i]));
    this.transition = { points, lengths, length: lengths.reduce((a, b) => a + b, 0),
      fromTarget: this.controls.target.clone(), toTarget: vec(preset.target), elapsed: 0, duration: 1.9 };
  }
  cancel() { this.transition = null; }
  update(dt, reduced = false) {
    const t = this.transition;
    if (!t) return false;
    t.elapsed += dt;
    const progress = reduced ? 1 : Math.min(1, t.elapsed / t.duration);
    let distance = smooth(progress) * t.length;
    for (let i = 0; i < t.lengths.length; i++) {
      if (distance <= t.lengths[i] || i === t.lengths.length - 1) {
        this.camera.position.lerpVectors(t.points[i], t.points[i + 1], smooth(Math.min(1, distance / t.lengths[i]))); break;
      }
      distance -= t.lengths[i];
    }
    this.controls.target.lerpVectors(t.fromTarget, t.toTarget, smooth(progress));
    this.camera.lookAt(this.controls.target);
    if (progress === 1) { this.camera.position.copy(t.points.at(-1)); this.transition = null; }
    return true;
  }
  constrain() {
    const p = this.camera.position;
    p.z = Math.max(.35, p.z); p.y = Math.max(1.8, p.y);
    // Inside the office, keep the lens in the clear band between people and lights.
    if (p.z < 4.3) {
      p.x = Math.max(-5.55, Math.min(5.55, p.x));
      if (this.name === 'sensors') p.y = Math.max(3.85, p.y);
      else p.y = Math.min(2.45, p.y);
    }
    this.camera.lookAt(this.controls.target);
  }
}
