# Living Lab · Smart Office 3D

An offline, bilingual Three.js teaching simulator for RPTU university visits. The original `../LivingLab_Interactive_Demo_v2.html` and its logo are unchanged. This separate version preserves all six scenario presets, shared glass-row controls, blinds, lighting, keyboard controls and simulated communication.

## Present the included build — no installation or internet needed

The complete browser application is in `dist/`. A portable copy is also provided as `livinglab-3d-demo-offline.zip`; extract it before launching. It includes Three.js, OrbitControls, JavaScript, CSS and the local logo. No CDN, fonts, texture downloads, telemetry or real-device API calls are used. A small local HTTP server is needed because browsers restrict JavaScript modules opened using `file://`.

Have Node.js 20.19+ (or Python 3) installed on the presentation computer before going offline. You do **not** need `npm install` to present the included build.

### Windows

Double-click `start-windows.cmd`, then open **http://127.0.0.1:4173** in Edge, Chrome or Firefox. Keep the terminal open during the presentation; Ctrl+C stops the server.

Or use PowerShell from this folder:

```powershell
node serve.mjs
```

Python alternative:

```powershell
py -m http.server 4173 --bind 127.0.0.1 --directory dist
```

### WSL / Linux

```bash
cd /path/to/livinglab-3d-demo
./start-wsl.sh
```

Open **http://localhost:4173** in the Windows browser. Standard WSL localhost forwarding must be enabled. Alternatively copy this folder to Windows and use the Windows launcher.

```bash
# Python alternative
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Both server options serve only local files. The bundled Node server binds to loopback, not the campus network. Use browser fullscreen (F11) or the Fullscreen button. Desktop controls adapt to a 1280 × 720 projector; education and communication details continue below the main demonstration.

## Use the demo

German, Automatic and Sunrise are the startup settings. Choose one of six weather scenarios. Automatic applies the original device preset. Manual copies the **current** automatic settings every time you enter it, then lets you change three tint rows, blind position, slat angle, brightness, colour and light direction independently. Changing weather in Manual keeps your settings. Returning to Automatic restores the selected scenario.

The selected Automatic/Manual mode has a teal background and check mark. Each system heading has an **Active / Off** switch, available in both modes. For a lighting-only demonstration, leave Lighting active and turn Glass and Blinds off. Off means clear glass, fully raised blinds with a 0° slat target, or lamps at 0%. The other systems keep following the scenario in Automatic mode. Active means included in the demonstration: automatic lighting can still select 0% in daylight.

System selection persists across weather and mode changes. Excluded manual controls are disabled; their saved settings return when reactivated. Entering Manual copies the current scenario settings, including saved targets for excluded systems. Reset Demo enables all three systems. The technical diagram and event history show the effective targets and active-system selection.

Drag the scene to orbit; scroll or pinch to zoom. Panning is disabled and the orbit is bounded to keep the room in view. The camera presets and Reset View restore useful views. Cutaway hides side walls and the main ceiling shell; a ceiling island remains to show indirect lighting. Turn cutaway off for a translucent shell.

The office has two square desk groups: one beside the electrochromic glass and one beside the blinds. Each group consists of four rounded triangular desks facing inward, with individual monitors and chairs. Both groups are rotated 45° around their centres. Four seated people give the room scale. The elevated overview shows the desk arrangement; drag to inspect it from other angles.

The demo always presents the Bachelor-level technical view: historical architecture, animated signal paths, device targets and protocol details. There is no learning-level selector. Select a diagram node for its explanation; open Details for the last eight simulated events. Events retain snapshots and are retranslated when language changes.

| Key | Action |
| --- | --- |
| 1 / 2 / 3 | Strong Sunshine / Cloudy / Night (original mapping) |
| 4 / 5 / 6 | Enter Manual and focus top / middle / bottom tint row |
| M / 0 | Manual / Automatic |
| R | Reset camera |
| F / F11 | App fullscreen / browser fullscreen |
| ? / Escape | Open / close help |

Shortcuts do not hijack text, range or select input. Reset Demo restores startup language, mode, scenario, camera and cutaway.

## Interactive engineering tour

Use **Start Guided Tour** in the header for an eight-step, presenter-controlled route: office → environmental inputs → electrochromic glazing → blinds → lighting → central controller → complete architecture → office. **Previous**, **Next** and **Exit tour** are explicit controls; the tour never advances automatically. You can pause to orbit, change the weather or demonstrate a device at any step. Navigating, entering or exiting the tour preserves device settings, system selections and the event history. Reset Demo retains its original full-reset meaning.

The presentation toolbar below the room connects three perspectives:

- **Explore the Office** returns to the architectural overview. The muted orange arrow indicates illustrative incoming sunlight direction during daytime.
- **Inspect a Component** moves to a close-up. Select SageGlass, blinds, lighting or environmental inputs from the menu, or click the component directly in the model. A thin outline identifies the selection. The information panel below the scene provides expandable **Principle** and **Engineering** explanations. The corresponding existing controls are outlined; **Go to component controls** focuses the mode selector or relevant control without silently changing device settings.
- **Reveal the Automation** moves the camera toward an overall context view and fades in an interactive technical diagram within the same viewport. It shows current targets, the selected path and short-lived simulated command flows. Clicking an actuator or environmental node returns to its 3D inspection. Controller and integration nodes open their engineering explanations. Raspberry Pi and deCONZ also provide an **Inspect in the room** link to the associated lighting system.

The diagram represents Environment/sensors, WAGO 750-831, BACnet/SageGlass, SMI/blinds, the historical Modbus TCP → Raspberry Pi/CODESYS 3.5 → REST/HTTP → deCONZ/Phoscon → ZigBee → luminaires path, and the historical Bachmann/LiSA MPC relationship. The MPC link is dotted and non-directional: it is not a claim of current operation or an executing predictive controller. No LiSA Voting App-to-PLC path has been added.

The supplied source names daylight, solar irradiation and wind as environmental input categories. It does **not** identify sensor models or mounting positions. The new 3D environmental marker is explicitly schematic; no sensor readings, measured lux, transmission percentages or wind values are invented. Wind is not numerically simulated. All explanatory text is available in German and English.

On small screens, the architecture is scrollable within its own panel so labels remain readable. All controls and information remain available further down the page. Reduced-motion preferences use immediate camera placement and disable animated flows. The architecture remains navigable even if WebGL is unavailable; physical inspection still requires WebGL.

### Camera and tour architecture

- `src/presentation/model.js` contains named camera targets, the eight tour steps and physical/architecture associations.
- `src/scene/camera-tour-controller.js` exports the reusable `CameraTourController` and route generator. Positions and look-at targets interpolate independently. Routes pass through the open front corridor before entering a close-up, keeping entry above furniture and below fittings. Orbit cancels an in-progress route. Interior orbit constraints keep the camera clear of furniture, the facade and ceiling; sensor inspection stays above the roof.
- The existing store owns `view`, `component`, `tourStep` and `camera` alongside the unchanged device state. Presentation actions do not append device events or reset targets. Scene, existing controls, event log and new architecture all read this same store.
- `src/scene/office.js` adds non-rendering pick volumes and separately managed selection outlines after static geometry batching. Direct clicks dispatch inspection through the store. No duplicate physical scene is created.
- `src/presentation/interface.js` builds the connected toolbar, information panel, tour navigation and responsive HTML/SVG architecture overlay. It renders effective device targets through the existing `devices(state)` selector. Only branches affected by a command animate; excluded systems remain identified as off.
- `src/presentation/copy.js` supplies the bilingual engineering content. Historical and schematic associations are labeled explicitly.

These additions change presentation and camera navigation, not scenario values, optical assumptions, light intensities or control algorithms. The light-view camera may now look upward toward the luminaires instead of being forced above its target by the former orbit-angle limit.

## Preserved presets

Tint order is top / middle / bottom. Position 0% means raised; 100% means lowered. The numbers below are original educational presets, not measurements.

| Scenario | Tint rows | Blinds | Slats | Light | Colour | Direction |
| --- | --- | ---: | ---: | ---: | --- | --- |
| Sunrise | high / medium / low | 0% | 0° | 30% | warm | indirect |
| Morning | low / low / low | 0% | 0° | 0% | neutral | direct |
| Strong Sunshine | high / high / high | 55% | 80° | 10% | neutral | indirect |
| Cloudy | low / low / low | 0% | 0° | 45% | neutral | direct |
| Sunset | medium / low / low | 25% | 30° | 55% | warm | indirect |
| Night | low / low / low | 100% | 80° | 70% | warm | indirect |

The original CSS positions **four narrow EC bays on the left, a structural column in the middle, and two wider blind bays on the right**, with the two banks occupying approximately equal widths. That rendered arrangement is preserved even though an old HTML comment describes the reverse order.

## Architecture

- `src/simulation/scenarios.js`: original scenario objects, copied verbatim, including original 2D environment metadata for provenance. No preset values changed.
- `src/simulation/state.js`: one store and one `devices(state)` selector. Automatic reads preset targets; Manual reads copied editable targets. Events store snapshots. Language, camera and cutaway selections live here too.
- `src/ui/copy.js`: original German/English dictionary plus 3D, education, accessibility and help text.
- `src/ui/interface.js`: controls, original communication paths/explanations adapted to the store, event log, keyboard and fullscreen. No separate device state.
- `src/scene/office.js`: geometry, materials, outdoor environment, lighting, OrbitControls, resize, animation and resource disposal. It subscribes to the store and only interpolates visual values toward its targets. It never changes simulation state.
- `src/main.js`: initialization, WebGL fallback and subscriptions.
- `src/styles/main.css`: responsive, projector-oriented UI.
- `serve.mjs`: dependency-free offline server.

Device target labels update immediately; animated geometry reaches those targets smoothly. Changes are interruptible. Reduced-motion preferences remove transitions and cloud motion. The glass uses twelve independent transparent surfaces with depth writes disabled. The original illustrative opacity values are retained: 0.035 / 0.34 / 0.72. The two blind banks each use 27 instanced slats. Lowering deploys slats at a constant pitch; raising gathers the remaining slats at the headrail. Angle rotates the individual slats around their horizontal axes. Lower the blinds above 0% to observe the deployed slat angles.

Daylight attenuation combines the animated glass and blind states illustratively. One directional shadow light, hemisphere fill, emissive fittings, downward/upward spotlights and indirect bounce lights create differences between weather, tint and artificial lighting. Outdoor and indoor illumination use separate render passes with shared depth. This matters because Three.js selects lights by camera layers, not mesh layers: a single pass would let outdoor fill also illuminate the room. Scenario daylight colours the interior fill, while direct lamps illuminate work surfaces and indirect lamps illuminate the ceiling and supply illustrative reflected light. Static geometry is merged by material; slats are instanced; pixel ratio is capped at 1.5. No postprocessing is used. Geometries, materials, textures, controls, resize observer and renderer are disposed on page exit.

### Scope and provenance

The office dimensions and furnishings are conceptual, **not a surveyed digital twin**. Tint opacity is an illustration, **not SageGlass optical-transmission data**. Light intensity and attenuation are art direction, not calibrated lux, thermal performance or energy predictions. Slat obstruction is qualitative. No live sensing or protocols are implemented.

Historical hardware and relationships are carried forward from the supplied simulator: WAGO 750-831, Raspberry Pi with CODESYS 3.5, deCONZ/Phoscon and ZigBee, BACnet for glass, SMI for blinds, and the supporting Bachmann/LiSA MPC and Modbus TCP relationship. They are labeled historically documented and simulated; this migration does not independently verify today's installation.

Three.js integration follows its [renderer documentation](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) and [OrbitControls documentation](https://threejs.org/docs/#examples/en/controls/OrbitControls). These links are developer references, not runtime dependencies. The original supplied logo is copied locally and hidden gracefully if unavailable. Wood grain is generated locally; other materials do not require textures.

## Develop and verify

Install dependencies once while online:

```bash
npm ci
npm run dev
npm test
npm run build
npm start
```

The build is reproducible from `package-lock.json`; `dist/` is included so the presentation machine needs no package manager or internet. Development dependencies are not needed by the production server.

In another terminal, with Chromium installed for Playwright:

```bash
npx playwright install chromium
npm run test:browser
npm run test:visibility
npm run test:tour
# Supplemental fullscreen and presentation checks
node tests/presentation.mjs
```

For an existing Chromium installation set `CHROMIUM_PATH` to its executable. Set `DEMO_URL` to test another local server. The browser test blocks every nonlocal request before navigation, exercises actual UI interactions and inspects the rendered Three.js objects via the opt-in read-only `?inspect` diagnostics. It captures Morning, Strong Sunshine, Night, a 1280×720 projector view, and a mobile view into `screenshots/`.

See `VERIFICATION.md`, `tests/browser-results.json` and `tests/engineering-tour-results.json` for executed checks and limitations. If WebGL 2 is unavailable, a translated message replaces the scene and the simulation controls continue working. The browser should have hardware acceleration enabled; a final rehearsal on the actual projector/laptop is recommended.

The requested tour screenshots are in `screenshots/tour/`: `office-overview.png`, `glass-inspection.png`, `blinds-inspection.png`, `lighting-inspection.png`, and `automation-architecture.png`. Additional captures cover the schematic sensor marker and compact architecture layouts.

Tour screenshot gallery: [Office overview](screenshots/tour/office-overview.png) · [Glass inspection](screenshots/tour/glass-inspection.png) · [Blinds inspection](screenshots/tour/blinds-inspection.png) · [Lighting inspection](screenshots/tour/lighting-inspection.png) · [Automation architecture](screenshots/tour/automation-architecture.png).
