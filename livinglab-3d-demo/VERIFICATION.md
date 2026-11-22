# Verification — 22 November 2026

The original HTML and original logo have no Git diff. All changes are contained in `livinglab-3d-demo/`.

## Executed checks

- Nine Node regression tests pass (including two new blind-deployment geometry tests): verbatim comparison of all six original presets (including environment metadata); repeated automatic/manual entry; independent manual controls; automatic edit guards and input validation; immutable communication snapshots; education/language/reset behavior; bilingual dictionary-key parity.
- Production build succeeds with Vite. JavaScript is approximately 584 kB before compression, including Three.js and OrbitControls; CSS is approximately 16 kB. The complete `dist/` is approximately 1.2 MB including the provided logo and licenses.
- Eleven Playwright browser groups pass against the local production build. See `tests/browser-results.json` for the executed test names.
- Actual Three.js diagnostics verify twelve glass panes, selected-row opacity on four bays, separate blind position and slat angle, light colour/intensity/direction, camera changes and animated intermediate values. Tests use UI interactions; the diagnostics are read-only and opt-in via `?inspect`.
- All six scenarios produce distinct rendered skies and correct device targets. Screenshot evidence includes Morning, Strong Sunshine and Night.
- The test browser blocks every nonlocal request before the first navigation. The build loads and works with zero external requests, zero failed requests, and zero browser console/page errors. This verifies independence from internet services, while the loopback static server remains available.
- A simulated WebGL-unavailable browser receives a translated fallback and retains working simulation controls.
- Original keyboard mappings, Help/Escape, Reset Demo, German/English, School/Bachelor, bounded orbit and all three camera presets are exercised.
- Layout checks cover 1600×1000, 1280×720 and 390×844. All device controls fit within the 720p desktop viewport; mobile has no horizontal page overflow. Mobile intentionally scrolls vertically.
- Supplementary presentation checks cover the browser fullscreen API, all three tint rows simultaneously, window and lighting close-ups, and the final mobile camera framing. See `tests/presentation-results.json`.

## Visual evidence

- `screenshots/morning.png`
- `screenshots/strongSun.png`
- `screenshots/night.png`
- `screenshots/projector-1280x720.png`
- `screenshots/mobile.png`
- `screenshots/windows-closeup.png`
- `screenshots/lighting-closeup.png`
- `screenshots/bachelor-architecture.png`

## Environment and practical limits

Testing used Linux, Node 20.20.2, Chromium 143 (Playwright Chromium build 1200), and software WebGL rendering. It did not use a physical Windows laptop, touchscreen, projector, campus network or real controller. Therefore hardware frame rate, Windows browser fullscreen policy, WSL networking configuration and actual projector colour reproduction are not certified by these checks. Rehearse on the presentation laptop before the visit.

Package installation in the development environment initially stalled during npm extraction. Dependencies were obtained from their official npm archive URLs and checked against the lockfile integrity hashes. No system libraries were installed: Chromium's three missing test libraries were extracted under `/tmp`. These development workarounds are not required to run the included offline build.

Outdoor and indoor lights are isolated using two render passes with preserved depth. Render-call observations are recorded in `tests/presentation-results.json`; they are not hardware frame-rate measurements.

The model is qualitative. Ambient fill keeps the scene interpretable; tint attenuation and indirect bounce are illustrative approximations. No optical-transmission, energy, measured lux or thermal claims are made. Historical communication roles are inherited from the supplied HTML and explicitly not verified live.

## Lighting and blind visibility correction

Fixed outdoor fill leaking into the room: camera layer membership alone does not isolate Three.js lights by mesh. Two depth-preserving render passes now separate indoor and outdoor light sets. Interior daylight also follows the scenario colour and intensity; lamp emitters and the indirect-light approximation have been adjusted to produce visible changes on room surfaces. No scenario device presets were changed.

Partially lowered blinds now deploy with constant slat pitch and gather the remaining slats above them. Previously all 27 slats were compressed into the lowered section, causing several angles to overlap and look closed.

`tests/lighting-visibility.mjs` samples rendered floor pixels with unchanged manual device settings across all six scenarios. It also checks direct and indirect lights on/off, warm/neutral surface colour, and daytime lamp visibility. These samples are 8-bit image brightness comparisons, not physical illuminance measurements. Comparison screenshots for every scenario and 0°/30°/45°/80° at 55% deployment are in `screenshots/visibility/`.

## Desk groups and occupants

Replaced the three rectangular desks with two groups of four rounded triangular worktops: left beside the electrochromic glass, right beside the blinds. Each square group is rotated 45° around its centre, including its chairs, monitors and seated occupants. Four people are modelled locally. The overview camera is slightly higher to show the individual worktops. All furniture participates in the existing static geometry batching.

The production build succeeds. The eleven browser control checks pass after the furniture replacement; the transition check now waits for a rendered intermediate state instead of a fixed 150 ms delay. Presentation checks and `screenshots/desk-groups.png` cover the final 45° arrangement. The offline archive contains the rebuilt application.
