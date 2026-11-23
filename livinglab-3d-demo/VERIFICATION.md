# Verification — 23 November 2026

The original HTML and original logo have no Git diff. All changes are contained in `livinglab-3d-demo/`.

## Executed checks

- Fourteen Node regression tests pass (including blind geometry, system isolation, tour state and camera route checks): verbatim comparison of all six original presets (including environment metadata); repeated automatic/manual entry; independent manual controls; automatic edit guards and input validation; immutable communication snapshots; language/reset behavior; bilingual dictionary-key parity.
- Production build succeeds with Vite. JavaScript is approximately 624 kB before compression, including Three.js and OrbitControls; CSS is approximately 23 kB. The complete `dist/` is approximately 1.2 MB including the provided logo and licenses.
- Twelve Playwright browser groups pass against the local production build. See `tests/browser-results.json` for the executed test names.
- Actual Three.js diagnostics verify twelve glass panes, selected-row opacity on four bays, separate blind position and slat angle, light colour/intensity/direction, camera changes and animated intermediate values. Tests use UI interactions; the diagnostics are read-only and opt-in via `?inspect`.
- All six scenarios produce distinct rendered skies and correct device targets. Screenshot evidence includes Morning, Strong Sunshine and Night.
- The test browser blocks every nonlocal request before the first navigation. The build loads and works with zero external requests, zero failed requests, and zero browser console/page errors. This verifies independence from internet services, while the loopback static server remains available.
- A simulated WebGL-unavailable browser receives a translated fallback and retains working simulation controls.
- Original keyboard mappings, Help/Escape, Reset Demo, German/English, Bachelor-only presentation, bounded orbit and all three camera presets are exercised.
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

## Bachelor-only interface

Removed the learning-level selector and its state/action. The technical architecture, protocol labels and technical node explanations are always active, including after Reset Demo. Updated the browser checks to verify selector absence, technical node explanations and technical content after reset. Node regression tests, all eleven browser checks and the production build pass.

## Mode visibility and individual system demonstrations

Automatic/Manual now uses a solid selected background and check mark. Each system has an accessible Active/Off switch in both modes. Excluded outputs become clear glass, raised blinds at 0°, or lights at 0%; saved manual settings remain available when reactivated. Selection survives weather and mode changes, and reset restores all systems. Event snapshots include system selection and effective targets; scenario signals omit excluded systems.

Added state coverage for each system in isolation across all six scenarios, manual target retention, ignored edits while excluded, no active systems, reset and event snapshots. Browser coverage exercises each system alone in strong sun and at night, actual rendered targets, selected-mode contrast, disabled controls and restoration. Production build and offline archive updated.

## Interactive engineering tour

Implemented three connected perspectives in the existing application: office exploration, component inspection and an interactive automation architecture within the same viewport. The camera routes, pick volumes and outline selection reuse the existing Three.js scene. The technical diagram is a responsive HTML/SVG overlay, not a second copy of the physical simulation. Its current target labels and animated paths are driven by the same state store as the room.

The eight-step guided tour has explicit Previous/Next/Exit navigation. Presentation actions preserve scenario, manual/automatic mode, active-system selections, manual targets and communication history. The Principle/Engineering information panel is bilingual and expandable. Both the new diagram and the original communication area follow the selected component.

Validation evidence:

- `npm test`: 14 assertions/tests across the three Node test files, including all named camera-route pairs sampled at 2.5% segment intervals against floor, facade, side-wall and ceiling clearance bounds. Tour state tests cover each step, entry/exit, component selection and controller/physical associations.
- `tests/browser.mjs`: all 12 existing browser groups passed after integration, covering six unchanged presets, independent system switches, automatic/manual behaviour, glass/blind/light controls, camera presets, shortcuts, language, reset, offline requests and WebGL fallback.
- `tests/engineering-tour.mjs`: component-menu and real 3D picking; visible Three.js selection outlines; bidirectional architecture/physical navigation; controller information and historical status; appropriate protocol branches; all eight tour steps with Previous/Next/Exit; live blind adjustment during the tour; state retention; a real non-reduced camera transition with multiple intermediate rendered positions; interruption and retargeting; German/English content; 1280×720 and 390×844 layouts; offline requests; and architecture navigation when WebGL is unavailable. Results are in `tests/engineering-tour-results.json`.
- The new tour browser blocks external requests and checks browser page/console errors.
- Production build succeeded. The offline ZIP was regenerated, checked for archive integrity and compared with the current build entry. Original HTML and logo have no Git diff.

Requested screenshots:

1. [Office overview](screenshots/tour/office-overview.png)
2. [Electrochromic-glass inspection](screenshots/tour/glass-inspection.png)
3. [Venetian-blind inspection](screenshots/tour/blinds-inspection.png)
4. [Lighting inspection](screenshots/tour/lighting-inspection.png)
5. [Automation architecture](screenshots/tour/automation-architecture.png)

Additional evidence includes full-interface captures, the schematic input marker, guided-tour controls and compact architecture layouts in `screenshots/tour/`. The blind capture uses 65% deployment and 45° tilt; the lighting capture shows 70% warm indirect lighting at night. These are demonstration settings selected for the captures, not settings applied by tour navigation.

Scope limits: the supplied documentation identifies environmental input categories but no specific sensor models or mounting positions. The environmental marker is schematic and contains no fabricated readings. Bachmann/LiSA MPC and software integrations remain historical/unverified; no predictive algorithm, live sensor feed, PLC connection or Voting App path is implemented. The new solar-direction arrow is only an annotation. No scenario values, tint-opacity assumptions or lighting intensities were changed. Camera clearance tests cover the conceptual model and sampled routes, not a surveyed building or physical collision certification. Testing remains Chromium software WebGL on Linux; actual projector/laptop performance needs a local rehearsal.
