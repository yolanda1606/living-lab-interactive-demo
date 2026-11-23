export const engineeringCopy = {
  en: {
    explore: 'Explore the Office', inspect: 'Inspect a Component', reveal: 'Reveal the Automation', start: 'Start Guided Tour',
    resume: 'Back to guided tour', navigationHelp: 'Move at your own pace with Previous and Next. Exit returns to the office and keeps your settings.',
    previous: 'Previous', next: 'Next', exit: 'Exit to office', finish: 'Finish tour', resetView: 'Reset View',
    principle: 'Principle', engineering: 'Engineering', info: 'Component information', controls: 'Go to component controls',
    physical: 'Inspect in the room', path: 'Follow the automation path', step: 'Step', of: 'of',
    architectureTitle: 'From environmental inputs to physical response',
    architectureStatus: 'Historical architecture · conceptual signals · no live building data',
    architectureHint: 'Select an actuator to return to its 3D component. Select a controller to inspect its historical role.',
    selectionLegend: 'Blue: selected path', signalLegend: 'Green: simulated command',
    automaticHint: 'Automatic targets are shown. Select Manual to adjust this component.',
    manualHint: 'Use the highlighted controls to change the physical component.',
    excludedHint: 'This system is excluded. Use its Active switch to include it in the demonstration.',
    sensorHint: 'Schematic environmental-input marker; sensor model and mounting position are not documented.',
    solarHint: 'Sunlight direction · illustrative', current: 'Current targets', selected: 'Selected path',
    lastAction: 'Conceptual signal', noSignal: 'Change a device setting to trace its control path.',
    sceneHint: 'Select glass, blinds, a luminaire or the schematic environmental marker in the model.',
    status: 'Historically documented · operation not verified', schematic: 'Schematic inputs · no measured values',
    environmentLine: 'Scenario inputs', historicalLink: 'Historical relationship',
    components: {
      glass: { title: 'Electrochromic glass · SageGlass', short: 'SageGlass',
        principle: 'An applied electrical potential changes the optical state of the electrochromic glazing. Darker states transmit less visible light and can help control glare and solar gains.',
        engineering: 'BACnet is the historically documented integration path. Three horizontal control rows each act across four window bays. None, Medium and Full are illustrative tint states, not measured transmission percentages or a solar-energy calculation.' },
      blinds: { title: 'Venetian blinds · Raffstore', short: 'Venetian blinds',
        principle: 'Position determines how much of the window is covered: 0% is raised, 100% lowered. Slat angle determines the orientation of the deployed slats and changes shading and the view outside.',
        engineering: 'SMI is the historically documented blind-control interface. Position and tilt are independent targets. Lower the blinds to see the 0°, 30°, 45° and 80° slat settings; raised slats remain stacked at the headrail.' },
      lighting: { title: 'Artificial lighting', short: 'Luminaires',
        principle: 'Dimming changes light output. Warm and neutral white change the visual colour of the light. Direct light reaches work surfaces; indirect light illuminates the ceiling and contributes reflected light.',
        engineering: 'The historical integration uses Modbus TCP, Raspberry Pi / CODESYS 3.5, REST/HTTP, deCONZ / Phoscon and ZigBee. Daylight-dependent lighting is demonstrated by scenario presets; no measured lux or closed-loop sensor control is calculated.' },
      sensors: { title: 'Environment and sensor inputs', short: 'Environment / sensors',
        principle: 'The source demo names daylight, solar irradiation and wind as environmental information. The selected weather scenario supplies the inputs in this application.',
        engineering: 'No sensor make, installation position, calibration or measured values are available in the supplied documentation. The 3D marker is schematic. Wind is a documented input category, but is not numerically simulated. There is no live sensor connection.' },
      wago: { title: 'WAGO 750-831', short: 'WAGO 750-831',
        principle: 'The central automation controller relates environmental inputs to actuator targets. The room then changes its glazing, shading and artificial lighting.',
        engineering: 'The historical architecture identifies WAGO 750-831 as the central controller, with BACnet for glazing and SMI for blinds. Modbus TCP belongs to the documented controller/integration relationships. This demo executes local presets, not a live PLC program.' },
      pi: { title: 'Raspberry Pi · CODESYS 3.5', short: 'Raspberry Pi',
        principle: 'This integration layer connects automation targets to the historical lighting-control stack.',
        engineering: 'The inherited architecture shows Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon. Historical software availability and current operation are unverified. Select Luminaires to inspect the associated physical system.' },
      gateway: { title: 'deCONZ / Phoscon', short: 'deCONZ / Phoscon',
        principle: 'The gateway represents the interface between software requests and wireless lighting devices.',
        engineering: 'REST/HTTP and ZigBee are shown as the historically documented lighting path. Traveling signals are explanatory animations, not network traffic. Select Luminaires to return to the physical lighting system.' },
      mpc: { title: 'Bachmann · LiSA MPC', short: 'Bachmann / LiSA MPC',
        principle: 'Model predictive control uses a model and predictions to plan future control actions. Bachmann / LiSA MPC is shown in its historical supporting role.',
        engineering: 'The dotted Modbus TCP relationship is historical and conceptual; predictive control is not executed here. Its present integration is unverified. No connection from the LiSA Voting App to a PLC is asserted or implemented.' },
      architecture: { title: 'Complete automation architecture', short: 'Automation architecture',
        principle: 'Follow the relationship from environmental information through the controller and communication interfaces to the physical actuators.',
        engineering: 'All views use the same simulation state. Select a node or change a device setting to connect the architectural view with the room. Historical links are identified explicitly; every signal shown here is simulated.' }
    },
    tour: {
      overview: ['Office overview', 'Locate the two facade systems, luminaires and workspaces. Orbit and zoom to establish the physical context.'],
      sensors: ['Environmental inputs', 'Inspect the schematic input marker. Distinguish documented input categories from measured sensor data.'],
      glass: ['Electrochromic glazing', 'Compare the three tint rows and follow the BACnet path. Use Manual to experiment with optical states.'],
      blinds: ['Blind position and slat angle', 'Lower the blinds and compare tilt angles. Coverage and slat orientation are independent targets.'],
      lighting: ['Artificial lighting', 'Compare dimming, warm/neutral white and direct/indirect distribution. Follow the historical lighting integration.'],
      controller: ['Controller and communication', 'Inspect WAGO and the protocol branches. Distinguish the lighting integration from the historical MPC relationship.'],
      architecture: ['Complete automation architecture', 'Change a device target and trace only its relevant conceptual signal path. Click an actuator to revisit the room.'],
      return: ['Return to the office', 'Observe the physical result. All weather, system selections and manual settings remain as you left them.']
    }
  },
  de: {
    explore: 'Raum erkunden', inspect: 'Komponente untersuchen', reveal: 'Automation aufdecken', start: 'Führung starten',
    resume: 'Zur laufenden Führung', navigationHelp: 'Mit Zurück und Weiter bestimmen Sie das Tempo. Verlassen führt zum Raum zurück; Ihre Einstellungen bleiben erhalten.',
    previous: 'Zurück', next: 'Weiter', exit: 'Führung verlassen → Raum', finish: 'Führung abschließen', resetView: 'Ansicht zurücksetzen',
    principle: 'Prinzip', engineering: 'Technische Integration', info: 'Komponenteninformationen', controls: 'Zu den Komponentenreglern',
    physical: 'Im Raum untersuchen', path: 'Automationspfad verfolgen', step: 'Schritt', of: 'von',
    architectureTitle: 'Von Umgebungseingängen zur physikalischen Reaktion',
    architectureStatus: 'Historische Architektur · konzeptionelle Signale · keine Live-Gebäudedaten',
    architectureHint: 'Wähle einen Aktor, um zur 3D-Komponente zurückzukehren. Wähle eine Steuerung, um ihre historische Rolle zu untersuchen.',
    selectionLegend: 'Blau: ausgewählter Pfad', signalLegend: 'Grün: simulierter Befehl',
    automaticHint: 'Automatische Zielwerte werden angezeigt. Zum Einstellen dieser Komponente „Manuell“ wählen.',
    manualHint: 'Nutze die markierten Regler, um die physikalische Komponente zu verändern.',
    excludedHint: 'Dieses System ist ausgeschlossen. Mit seinem Aktiv-Schalter wird es wieder einbezogen.',
    sensorHint: 'Schematischer Umgebungseingang; Sensormodell und Montageort sind nicht dokumentiert.',
    solarHint: 'Sonnenlichtrichtung · illustrativ', current: 'Aktuelle Zielwerte', selected: 'Ausgewählter Pfad',
    lastAction: 'Konzeptionelles Signal', noSignal: 'Ändere einen Gerätezielwert, um seinen Steuerungspfad zu verfolgen.',
    sceneHint: 'Wähle Glas, Jalousien, eine Leuchte oder den schematischen Umgebungsmarker im Modell.',
    status: 'Historisch dokumentiert · Betrieb nicht verifiziert', schematic: 'Schematische Eingänge · keine Messwerte',
    environmentLine: 'Szenarioeingänge', historicalLink: 'Historische Beziehung',
    components: {
      glass: { title: 'Elektrochromes Glas · SageGlass', short: 'SageGlass',
        principle: 'Eine angelegte elektrische Spannung verändert den optischen Zustand der elektrochromen Verglasung. Dunklere Zustände lassen weniger sichtbares Licht durch und können Blendung und solare Einträge begrenzen.',
        engineering: 'BACnet ist der historisch dokumentierte Integrationspfad. Drei horizontale Steuerungsreihen wirken jeweils auf vier Fensterfelder. Keine, Mittel und Voll sind illustrative Tönungszustände, keine gemessenen Transmissionswerte oder Berechnung solarer Energieeinträge.' },
      blinds: { title: 'Jalousien · Raffstore', short: 'Raffstore',
        principle: 'Die Position bestimmt den bedeckten Fensteranteil: 0% ist oben, 100% unten. Der Lamellenwinkel bestimmt die Ausrichtung der ausgefahrenen Lamellen und verändert Verschattung und Durchsicht.',
        engineering: 'SMI ist die historisch dokumentierte Schnittstelle der Jalousiensteuerung. Position und Neigung sind unabhängige Zielwerte. Fahre die Jalousien herunter, um 0°, 30°, 45° und 80° zu vergleichen; hochgefahrene Lamellen bleiben am Kopfprofil gestapelt.' },
      lighting: { title: 'Künstliche Beleuchtung', short: 'Leuchten',
        principle: 'Dimmen verändert die Lichtabgabe. Warmweiß und Neutralweiß verändern die sichtbare Lichtfarbe. Direktes Licht erreicht die Arbeitsflächen; indirektes Licht beleuchtet die Decke und trägt durch Reflexion zur Beleuchtung bei.',
        engineering: 'Die historische Integration nutzt Modbus TCP, Raspberry Pi / CODESYS 3.5, REST/HTTP, deCONZ / Phoscon und ZigBee. Tageslichtabhängige Beleuchtung wird mit Szenariovorgaben veranschaulicht; weder gemessene Luxwerte noch ein geschlossener Sensorregelkreis werden berechnet.' },
      sensors: { title: 'Umgebung und Sensoreingänge', short: 'Umgebung / Sensoren',
        principle: 'Die Ausgangsdemo nennt Tageslicht, Sonneneinstrahlung und Wind als Umgebungsinformationen. In dieser Anwendung liefert das gewählte Wetterszenario die Eingänge.',
        engineering: 'Die bereitgestellte Dokumentation enthält kein Sensormodell, keinen Installationsort, keine Kalibrierung und keine Messwerte. Der 3D-Marker ist schematisch. Wind ist eine dokumentierte Eingangskategorie, wird jedoch nicht numerisch simuliert. Es besteht keine Live-Sensorverbindung.' },
      wago: { title: 'WAGO 750-831', short: 'WAGO 750-831',
        principle: 'Die zentrale Automationssteuerung verknüpft Umgebungsinformationen mit Aktorzielwerten. Der Raum verändert daraufhin Verglasung, Verschattung und künstliche Beleuchtung.',
        engineering: 'Die historische Architektur nennt WAGO 750-831 als zentrale Steuerung, BACnet für Verglasung und SMI für Jalousien. Modbus TCP gehört zu den dokumentierten Steuerungs- und Integrationsbeziehungen. Diese Demo führt lokale Szenariovorgaben aus, kein Live-SPS-Programm.' },
      pi: { title: 'Raspberry Pi · CODESYS 3.5', short: 'Raspberry Pi',
        principle: 'Diese Integrationsschicht verbindet Automationszielwerte mit der historischen Beleuchtungssteuerung.',
        engineering: 'Die übernommene Architektur zeigt Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon. Verfügbarkeit und heutiger Betrieb der historischen Software sind nicht verifiziert. Über „Leuchten“ gelangst du zum zugehörigen physikalischen System.' },
      gateway: { title: 'deCONZ / Phoscon', short: 'deCONZ / Phoscon',
        principle: 'Das Gateway stellt die Schnittstelle zwischen Softwareanfragen und drahtlosen Beleuchtungsgeräten dar.',
        engineering: 'REST/HTTP und ZigBee werden als historisch dokumentierter Beleuchtungspfad gezeigt. Bewegte Signale sind Erklärungsanimationen, kein Netzwerkverkehr. Wähle „Leuchten“, um zur physikalischen Beleuchtung zurückzukehren.' },
      mpc: { title: 'Bachmann · LiSA MPC', short: 'Bachmann / LiSA MPC',
        principle: 'Modellprädiktive Regelung nutzt ein Modell und Vorhersagen zur Planung zukünftiger Stellgrößen. Bachmann / LiSA MPC wird in seiner historischen unterstützenden Rolle dargestellt.',
        engineering: 'Die punktierte Modbus-TCP-Beziehung ist historisch und konzeptionell; hier wird keine prädiktive Regelung ausgeführt. Die heutige Integration ist nicht verifiziert. Eine Verbindung der LiSA Voting App zu einer SPS wird weder behauptet noch implementiert.' },
      architecture: { title: 'Vollständige Automationsarchitektur', short: 'Automationsarchitektur',
        principle: 'Verfolge den Zusammenhang von Umgebungsinformationen über Steuerung und Kommunikationsschnittstellen bis zu den physikalischen Aktoren.',
        engineering: 'Alle Ansichten nutzen denselben Simulationszustand. Wähle einen Knoten oder ändere einen Zielwert, um Architektur und Raum zu verbinden. Historische Beziehungen sind ausdrücklich gekennzeichnet; alle dargestellten Signale sind simuliert.' }
    },
    tour: {
      overview: ['Raumübersicht', 'Ordne die beiden Fassadensysteme, Leuchten und Arbeitsplätze ein. Drehen und Zoomen zeigen den physikalischen Kontext.'],
      sensors: ['Umgebungseingänge', 'Untersuche den schematischen Eingangsmarker. Unterscheide dokumentierte Eingangskategorien von gemessenen Sensordaten.'],
      glass: ['Elektrochrome Verglasung', 'Vergleiche die drei Tönungsreihen und verfolge den BACnet-Pfad. Experimentiere im manuellen Modus mit den optischen Zuständen.'],
      blinds: ['Jalousienposition und Lamellenwinkel', 'Fahre die Jalousien herunter und vergleiche Neigungswinkel. Bedeckung und Lamellenausrichtung sind unabhängige Zielwerte.'],
      lighting: ['Künstliche Beleuchtung', 'Vergleiche Dimmen, Warmweiß/Neutralweiß und direkte/indirekte Verteilung. Verfolge die historische Lichtintegration.'],
      controller: ['Steuerung und Kommunikation', 'Untersuche WAGO und die Protokollzweige. Unterscheide die Lichtintegration von der historischen MPC-Beziehung.'],
      architecture: ['Vollständige Automationsarchitektur', 'Ändere einen Zielwert und verfolge nur den zugehörigen konzeptionellen Signalpfad. Ein Klick auf einen Aktor führt zurück in den Raum.'],
      return: ['Zurück im Raum', 'Beobachte das physikalische Ergebnis. Wetter, Systemauswahl und manuelle Einstellungen bleiben erhalten.']
    }
  }
};

Object.assign(engineeringCopy.en, {
  "architectureTitle": "User → LiSA System → Automation controllers → Physical devices",
  "environmentLine": "Inputs",
  "conceptual": "Conceptual",
  "fieldControl": "Field controller",
  "manualFlow": "Manual: User → LiSA → controllers → devices. The user requests the desired settings.",
  "automaticFlow": "Automatic: Environment / sensors → LiSA control logic → controllers → devices. Scenario presets illustrate decisions; they are not the deployed LiSA algorithm.",
  "manualTested": "Manually tested through LiSA",
  "lightingIssue": "Supported by design · control issue unresolved in the reported test",
  "status": "Historical integration · current operation not verified",
  "mpcAssociation": "Predictive-control role within LiSA",
  "hierarchy": "Interaction · Supervisory control · Field controllers · Actuators",
  "userLabel": "User / Operator",
  "lisaLabel": "LiSA System – User Interface and Automatic Control",
  "modes": "Manual / Automatic",
  "integrationNote": "LiSA → controllers: conceptual integration; protocol not confirmed. Bachmann is the historical MPC platform, not the complete LiSA system."
});
Object.assign(engineeringCopy.en.components, {
  "user": {
    "title": "User / Operator",
    "short": "User / Operator",
    "principle": "Manual: User → LiSA → controllers → devices. The user requests the desired settings.",
    "engineering": "The LiSA Android Voting App and AdminApp are separate interfaces; their integration is not confirmed as direct PLC control."
  },
  "lisa": {
    "title": "LiSA System – User Interface and Automatic Control",
    "short": "LiSA System – User Interface and Automatic Control",
    "principle": "LiSA is the overarching operating and control system for SageGlass, Venetian blinds and artificial lighting, with manual and automatic operation.",
    "engineering": "LiSA → controllers: conceptual integration; protocol not confirmed. Bachmann is the historical MPC platform, not the complete LiSA system. Automatic: Environment / sensors → LiSA control logic → controllers → devices. Scenario presets illustrate decisions; they are not the deployed LiSA algorithm."
  },
  "mpc": {
    "title": "Bachmann · LiSA MPC",
    "short": "Bachmann · MPC",
    "principle": "Historically documented platform for predictive control associated with LiSA. This component is not the complete LiSA system.",
    "engineering": "The historical Modbus TCP relationship with WAGO is retained. Predictive control is not executed in this demo; current integration is unverified."
  }
});
engineeringCopy.en.components.wago.principle = "WAGO is a field automation controller below the LiSA supervisory level. It connects the conceptual device requests to the historically documented protocol branches.";
engineeringCopy.en.components.architecture.principle = engineeringCopy.en.architectureTitle;
engineeringCopy.en.tour.controller = ["LiSA and field controllers", "Follow manual or automatic requests from LiSA to WAGO. Bachmann MPC is a separate historical predictive-control component."];

Object.assign(engineeringCopy.de, {
  "architectureTitle": "Bedienung → LiSA-System → Automationssteuerungen → Physikalische Geräte",
  "environmentLine": "Eingänge",
  "conceptual": "Konzeptionell",
  "fieldControl": "Feldsteuerung",
  "manualFlow": "Manuell: Bedienung → LiSA → Steuerungen → Geräte. Der Benutzer gibt die gewünschten Zielwerte vor.",
  "automaticFlow": "Automatisch: Umgebung / Sensoren → LiSA-Steuerungslogik → Steuerungen → Geräte. Szenariovorgaben veranschaulichen Entscheidungen; sie sind nicht der eingesetzte LiSA-Algorithmus.",
  "manualTested": "Über LiSA manuell getestet",
  "lightingIssue": "Im Systemdesign vorgesehen · Steuerungsproblem im berichteten Test ungelöst",
  "status": "Historische Integration · heutiger Betrieb nicht verifiziert",
  "mpcAssociation": "Prädiktive Regelung im LiSA-System",
  "hierarchy": "Bedienung · Übergeordnete Steuerung · Feldsteuerungen · Aktoren",
  "userLabel": "Benutzer / Bedienung",
  "lisaLabel": "LiSA-System – Bedienung und automatische Steuerung",
  "modes": "Manuell / Automatisch",
  "integrationNote": "LiSA → Steuerungen: konzeptionelle Integration; Protokoll nicht bestätigt. Bachmann ist die historische MPC-Plattform, nicht das gesamte LiSA-System."
});
Object.assign(engineeringCopy.de.components, {
  "user": {
    "title": "Benutzer / Bedienung",
    "short": "Benutzer / Bedienung",
    "principle": "Manuell: Bedienung → LiSA → Steuerungen → Geräte. Der Benutzer gibt die gewünschten Zielwerte vor.",
    "engineering": "LiSA Android Voting App und AdminApp sind separate Oberflächen; ihre Integration ist nicht als direkter SPS-Zugriff bestätigt."
  },
  "lisa": {
    "title": "LiSA-System – Bedienung und automatische Steuerung",
    "short": "LiSA-System – Bedienung und automatische Steuerung",
    "principle": "LiSA ist das übergeordnete Bedien- und Steuerungssystem für SageGlass, Raffstore und künstliche Beleuchtung mit manuellem und automatischem Betrieb.",
    "engineering": "LiSA → Steuerungen: konzeptionelle Integration; Protokoll nicht bestätigt. Bachmann ist die historische MPC-Plattform, nicht das gesamte LiSA-System. Automatisch: Umgebung / Sensoren → LiSA-Steuerungslogik → Steuerungen → Geräte. Szenariovorgaben veranschaulichen Entscheidungen; sie sind nicht der eingesetzte LiSA-Algorithmus."
  },
  "mpc": {
    "title": "Bachmann · LiSA MPC",
    "short": "Bachmann · MPC",
    "principle": "Historisch dokumentierte Plattform für prädiktive Regelung im LiSA-System. Diese Komponente ist nicht das gesamte LiSA-System.",
    "engineering": "Die historische Modbus-TCP-Beziehung zu WAGO bleibt dargestellt. Diese Demo führt keine prädiktive Regelung aus; die heutige Integration ist nicht verifiziert."
  }
});
engineeringCopy.de.components.wago.principle = "WAGO ist eine Automationssteuerung unterhalb der übergeordneten LiSA-Ebene. Sie verbindet die konzeptionellen Gerätezielwerte mit den historisch dokumentierten Protokollzweigen.";
engineeringCopy.de.components.architecture.principle = engineeringCopy.de.architectureTitle;
engineeringCopy.de.tour.controller = ["LiSA und Feldsteuerungen", "Verfolge manuelle oder automatische Zielwerte von LiSA zu WAGO. Bachmann MPC ist eine separate historische Komponente für prädiktive Regelung."];
