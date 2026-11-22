# Verification — 22 November 2026

The original HTML and original logo have no Git diff. All changes are contained in `livinglab-3d-demo/`.

## Executed checks

- Seven Node regression tests pass: verbatim comparison of all six original presets (including environment metadata); repeated automatic/manual entry; independent manual controls; automatic edit guards and input validation; immutable communication snapshots; education/language/reset behavior; bilingual dictionary-key parity.
- Production build succeeds with Vite. JavaScript is approximately 552 kB before compression, including Three.js and OrbitControls; CSS is approximately 16 kB. The complete `dist/` is approximately 1.2 MB including the provided logo and licenses.
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

The lighting close-up recorded 91 render calls, including the outdoor scene. This is a rendering-complexity observation, not a hardware frame-rate measurement.

The model is qualitative. Ambient fill keeps the scene interpretable; tint attenuation and indirect bounce are illustrative approximations. No optical-transmission, energy, measured lux or thermal claims are made. Historical communication roles are inherited from the supplied HTML and explicitly not verified live.
