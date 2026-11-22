// Illustrative 80 mm-class Venetian slats. Deployed slats keep their pitch;
// raising the blind gathers the remainder into a compact stack at the headrail.
export const SLAT_COUNT = 27;
export const BLIND_TRAVEL = 2.2;
export const STACK_PITCH = .004;
export const SLAT_PITCH = BLIND_TRAVEL / (SLAT_COUNT - 1);
export function slatDrop(index, position) {
  const travel = BLIND_TRAVEL - (SLAT_COUNT - 1) * STACK_PITCH;
  const gathered = travel * (1 - Math.max(0, Math.min(100, position)) / 100);
  return index * STACK_PITCH + Math.max(0, index * (SLAT_PITCH - STACK_PITCH) - gathered);
}
