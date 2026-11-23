(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mn=["glass","blinds","lighting","sensors"],Bc=["user","lisa","sensors","wago","glass","blinds","pi","gateway","lighting","mpc"],ql={overview:{position:[6,5.6,10.2],target:[0,.95,-.5]},windows:{position:[0,2.6,5.7],target:[0,1.95,-3.4]},glass:{position:[-2.9,2.25,1.2],target:[-2.9,1.95,-3.4]},blinds:{position:[3,2.25,.8],target:[3,1.95,-3.28]},lighting:{position:[3.8,2.2,4.8],target:[0,2.8,-.1]},sensors:{position:[1.6,4.7,2.3],target:[.3,3.85,-3.4]},controller:{position:[0,4.8,10.6],target:[0,1.6,-1.8]},automation:{position:[0,6,12],target:[0,1.2,-.5]}},pn=[{view:"office",camera:"overview",component:null,key:"overview"},{view:"inspect",camera:"sensors",component:"sensors",key:"sensors"},{view:"inspect",camera:"glass",component:"glass",key:"glass"},{view:"inspect",camera:"blinds",component:"blinds",key:"blinds"},{view:"inspect",camera:"lighting",component:"lighting",key:"lighting"},{view:"automation",camera:"controller",component:"lisa",key:"controller"},{view:"automation",camera:"automation",component:null,key:"architecture"},{view:"office",camera:"overview",component:null,key:"return"}],zc={user:"user",lisa:"supervisory",sensors:"sensors",wago:"controller",glass:"glass",blinds:"blinds",lighting:"lighting",pi:"lighting",gateway:"lighting",mpc:"mpc"},oo=i=>mn.includes(i)?i:["pi","gateway"].includes(i)?"lighting":null,Ln={sunrise:{labels:{de:"Sonnenaufgang",en:"Sunrise"},environment:{sky:"linear-gradient(180deg,#f6a47d,#f3b9b2 40%,#b9d8ea)",land:"linear-gradient(180deg,transparent 63%,#7b9077 64%,#4f735f)",sun:[8,38,1],moon:[0,0,0],clouds:[.32,.2,.16],cloud:"rgba(255,238,235,.72)",stars:0,shooting:0},devices:{tints:["high","medium","low"],blindPosition:0,slatAngle:0,lampBrightness:30,lampTemperature:"warm",lampDirection:"indirect",goal:"comfort"}},morning:{labels:{de:"Vormittag",en:"Morning"},environment:{sky:"linear-gradient(180deg,#87c7eb,#b9e0ef 68%,#a0b889)",land:"linear-gradient(180deg,transparent 63%,#8ca57c 64%,#5f865d)",sun:[44,16,1],moon:[0,0,0],clouds:[.16,.11,.08],cloud:"rgba(255,255,255,.82)",stars:0,shooting:0},devices:{tints:["low","low","low"],blindPosition:0,slatAngle:0,lampBrightness:0,lampTemperature:"neutral",lampDirection:"direct",goal:"daylight"}},strongSun:{labels:{de:"Starke Sonne",en:"Strong sun"},environment:{sky:"linear-gradient(180deg,#59b8eb,#9edaf1 68%,#9fba84)",land:"linear-gradient(180deg,transparent 63%,#8ba875 64%,#527a55)",sun:[78,9,1],moon:[0,0,0],clouds:[.08,.05,.04],cloud:"rgba(255,255,255,.75)",stars:0,shooting:0},devices:{tints:["high","high","high"],blindPosition:55,slatAngle:80,lampBrightness:10,lampTemperature:"neutral",lampDirection:"indirect",goal:"glare"}},cloudy:{labels:{de:"Bewölkt",en:"Cloudy"},environment:{sky:"linear-gradient(180deg,#92aabd,#b7c7d0 68%,#91a486)",land:"linear-gradient(180deg,transparent 63%,#748b72 64%,#4f6c57)",sun:[50,24,.16],moon:[0,0,0],clouds:[.78,.68,.58],cloud:"rgba(221,230,235,.88)",stars:0,shooting:0},devices:{tints:["low","low","low"],blindPosition:0,slatAngle:0,lampBrightness:45,lampTemperature:"neutral",lampDirection:"direct",goal:"daylight"}},sunset:{labels:{de:"Sonnenuntergang",en:"Sunset"},environment:{sky:"linear-gradient(180deg,#7a78b6,#d185a6 38%,#f1a477)",land:"linear-gradient(180deg,transparent 63%,#596c67 64%,#364e51)",sun:[85,44,1],moon:[0,0,0],clouds:[.3,.24,.2],cloud:"rgba(239,174,164,.7)",stars:0,shooting:0},devices:{tints:["medium","low","low"],blindPosition:25,slatAngle:30,lampBrightness:55,lampTemperature:"warm",lampDirection:"indirect",goal:"comfort"}},night:{labels:{de:"Nacht",en:"Night"},environment:{sky:"linear-gradient(180deg,#102849,#1c4166 67%,#2e5062)",land:"linear-gradient(180deg,transparent 63%,#324755 64%,#182f39)",sun:[0,0,0],moon:[28,16,1],clouds:[.12,.08,.1],cloud:"rgba(117,145,174,.35)",stars:1,shooting:.65},devices:{tints:["low","low","low"],blindPosition:100,slatAngle:80,lampBrightness:70,lampTemperature:"warm",lampDirection:"indirect",goal:"comfort"}}},Yl=Object.freeze({low:.035,medium:.34,high:.72}),kc=Object.freeze([0,30,45,80]),Xn=i=>structuredClone(i),xa=()=>({language:"de",scenario:"sunrise",automatic:!0,systems:{glass:!0,blinds:!0,lighting:!0},camera:"overview",view:"office",component:null,tourStep:null,cutaway:!0,manual:Xn(Ln.sunrise.devices),events:[]});function hs(i){const e=Xn(i.automatic?Ln[i.scenario].devices:i.manual);return i.systems.glass||(e.tints=["low","low","low"]),i.systems.blinds||(e.blindPosition=0,e.slatAngle=0),i.systems.lighting||(e.lampBrightness=0),e}function Hc(){let i=xa();const e=new Set,t=(n,s,r="local")=>{i.events.unshift({type:n,paths:n==="system"?s:s.filter(o=>i.systems[o]!==!1),systems:Xn(i.systems),protocol:r,scenario:i.scenario,automatic:i.automatic,devices:Xn(hs(i))}),i.events.splice(8)};return t("scenario",["environment","lisa","wago","glass","blinds","lighting"]),{getState:()=>Xn(i),subscribe(n){return e.add(n),()=>e.delete(n)},dispatch(n){const{type:s,value:r}=n;if(s==="scenario"&&Ln[r])i.scenario=r,t(s,i.automatic?["environment","lisa","wago","glass","blinds","lighting"]:["environment"]);else if(s==="mode")!r&&i.automatic&&(i.manual=Xn(Ln[i.scenario].devices)),i.automatic=!!r,t("mode",r?["environment","lisa","wago","glass","blinds","lighting"]:["user","lisa"]);else if(s==="system"&&Object.hasOwn(i.systems,n.key)&&typeof r=="boolean")i.systems[n.key]=r,t("system",[i.automatic?"environment":"user","lisa","wago",n.key]);else if(s==="device"&&!i.automatic){const{key:o,row:a}=n,l=o==="tints"?"glass":o!=null&&o.startsWith("lamp")?"lighting":"blinds";if(!i.systems[l])return;if(o==="tints"&&[0,1,2].includes(a)&&Object.hasOwn(Yl,r))i.manual.tints[a]=r;else if(["blindPosition","lampBrightness"].includes(o)&&Number.isFinite(r))i.manual[o]=Math.max(0,Math.min(100,Math.round(r)));else if(o==="slatAngle"&&kc.includes(r))i.manual[o]=r;else if(o==="lampTemperature"&&["warm","neutral"].includes(r))i.manual[o]=r;else if(o==="lampDirection"&&["direct","indirect"].includes(r))i.manual[o]=r;else return;const u=o==="tints"?"glass":o.startsWith("lamp")?"lighting":"blinds";n.commit!==!1&&t(o,["user","lisa","wago",u],{glass:"BACnet",blinds:"SMI",lighting:"ZigBee"}[u])}else if(s==="language"&&["de","en"].includes(r))i.language=r;else if(s==="camera"&&Object.hasOwn(ql,r))i.camera=r,i.view=r==="overview"?"office":["automation","controller"].includes(r)?"automation":"inspect",i.component=r==="windows"?"glass":r==="controller"?"wago":r==="automation"?i.component:mn.includes(r)?r:null;else if(s==="inspect"&&mn.includes(r))i.view="inspect",i.component=r,i.camera=r;else if(s==="reveal")i.view="automation",i.camera="automation";else if(s==="architecture-node"&&Bc.includes(r))i.component=r,i.view=mn.includes(r)?"inspect":"automation",i.camera=mn.includes(r)?r:r==="wago"?"controller":"automation";else if(s==="tour-start"||s==="tour-step"){const o=s==="tour-start"?0:r;if(!Number.isInteger(o)||!pn[o])return;const a=pn[o];i.tourStep=o,i.view=a.view,i.camera=a.camera,i.component=a.component}else if(s==="tour-exit")i.tourStep=null,i.view="office",i.component=null,i.camera="overview";else if(s==="cutaway")i.cutaway=!!r;else if(s==="reset")i=xa(),t("scenario",["environment","lisa","wago","glass","blinds","lighting"]);else return;e.forEach(o=>o(Xn(i),n))}}}const Ft={en:{explore:"Explore the Office",inspect:"Inspect a Component",reveal:"Reveal the Automation",start:"Start Guided Tour",resume:"Back to guided tour",navigationHelp:"Move at your own pace with Previous and Next. Exit returns to the office and keeps your settings.",previous:"Previous",next:"Next",exit:"Exit to office",finish:"Finish tour",resetView:"Reset View",principle:"Principle",engineering:"Engineering",info:"Component information",controls:"Go to component controls",physical:"Inspect in the room",path:"Follow the automation path",step:"Step",of:"of",architectureTitle:"From environmental inputs to physical response",architectureStatus:"Historical architecture · conceptual signals · no live building data",architectureHint:"Select an actuator to return to its 3D component. Select a controller to inspect its historical role.",selectionLegend:"Blue: selected path",signalLegend:"Green: simulated command",automaticHint:"Automatic targets are shown. Select Manual to adjust this component.",manualHint:"Use the highlighted controls to change the physical component.",excludedHint:"This system is excluded. Use its Active switch to include it in the demonstration.",sensorHint:"Schematic environmental-input marker; sensor model and mounting position are not documented.",solarHint:"Sunlight direction · illustrative",current:"Current targets",selected:"Selected path",lastAction:"Conceptual signal",noSignal:"Change a device setting to trace its control path.",sceneHint:"Select glass, blinds, a luminaire or the schematic environmental marker in the model.",status:"Historically documented · operation not verified",schematic:"Schematic inputs · no measured values",environmentLine:"Scenario inputs",historicalLink:"Historical relationship",components:{glass:{title:"Electrochromic glass · SageGlass",short:"SageGlass",principle:"An applied electrical potential changes the optical state of the electrochromic glazing. Darker states transmit less visible light and can help control glare and solar gains.",engineering:"BACnet is the historically documented integration path. Three horizontal control rows each act across four window bays. None, Medium and Full are illustrative tint states, not measured transmission percentages or a solar-energy calculation."},blinds:{title:"Venetian blinds · Raffstore",short:"Venetian blinds",principle:"Position determines how much of the window is covered: 0% is raised, 100% lowered. Slat angle determines the orientation of the deployed slats and changes shading and the view outside.",engineering:"SMI is the historically documented blind-control interface. Position and tilt are independent targets. Lower the blinds to see the 0°, 30°, 45° and 80° slat settings; raised slats remain stacked at the headrail."},lighting:{title:"Artificial lighting",short:"Luminaires",principle:"Dimming changes light output. Warm and neutral white change the visual colour of the light. Direct light reaches work surfaces; indirect light illuminates the ceiling and contributes reflected light.",engineering:"The historical integration uses Modbus TCP, Raspberry Pi / CODESYS 3.5, REST/HTTP, deCONZ / Phoscon and ZigBee. Daylight-dependent lighting is demonstrated by scenario presets; no measured lux or closed-loop sensor control is calculated."},sensors:{title:"Environment and sensor inputs",short:"Environment / sensors",principle:"The source demo names daylight, solar irradiation and wind as environmental information. The selected weather scenario supplies the inputs in this application.",engineering:"No sensor make, installation position, calibration or measured values are available in the supplied documentation. The 3D marker is schematic. Wind is a documented input category, but is not numerically simulated. There is no live sensor connection."},wago:{title:"WAGO 750-831",short:"WAGO 750-831",principle:"The central automation controller relates environmental inputs to actuator targets. The room then changes its glazing, shading and artificial lighting.",engineering:"The historical architecture identifies WAGO 750-831 as the central controller, with BACnet for glazing and SMI for blinds. Modbus TCP belongs to the documented controller/integration relationships. This demo executes local presets, not a live PLC program."},pi:{title:"Raspberry Pi · CODESYS 3.5",short:"Raspberry Pi",principle:"This integration layer connects automation targets to the historical lighting-control stack.",engineering:"The inherited architecture shows Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon. Historical software availability and current operation are unverified. Select Luminaires to inspect the associated physical system."},gateway:{title:"deCONZ / Phoscon",short:"deCONZ / Phoscon",principle:"The gateway represents the interface between software requests and wireless lighting devices.",engineering:"REST/HTTP and ZigBee are shown as the historically documented lighting path. Traveling signals are explanatory animations, not network traffic. Select Luminaires to return to the physical lighting system."},mpc:{title:"Bachmann · LiSA MPC",short:"Bachmann / LiSA MPC",principle:"Model predictive control uses a model and predictions to plan future control actions. Bachmann / LiSA MPC is shown in its historical supporting role.",engineering:"The dotted Modbus TCP relationship is historical and conceptual; predictive control is not executed here. Its present integration is unverified. No connection from the LiSA Voting App to a PLC is asserted or implemented."},architecture:{title:"Complete automation architecture",short:"Automation architecture",principle:"Follow the relationship from environmental information through the controller and communication interfaces to the physical actuators.",engineering:"All views use the same simulation state. Select a node or change a device setting to connect the architectural view with the room. Historical links are identified explicitly; every signal shown here is simulated."}},tour:{overview:["Office overview","Locate the two facade systems, luminaires and workspaces. Orbit and zoom to establish the physical context."],sensors:["Environmental inputs","Inspect the schematic input marker. Distinguish documented input categories from measured sensor data."],glass:["Electrochromic glazing","Compare the three tint rows and follow the BACnet path. Use Manual to experiment with optical states."],blinds:["Blind position and slat angle","Lower the blinds and compare tilt angles. Coverage and slat orientation are independent targets."],lighting:["Artificial lighting","Compare dimming, warm/neutral white and direct/indirect distribution. Follow the historical lighting integration."],controller:["Controller and communication","Inspect WAGO and the protocol branches. Distinguish the lighting integration from the historical MPC relationship."],architecture:["Complete automation architecture","Change a device target and trace only its relevant conceptual signal path. Click an actuator to revisit the room."],return:["Return to the office","Observe the physical result. All weather, system selections and manual settings remain as you left them."]}},de:{explore:"Raum erkunden",inspect:"Komponente untersuchen",reveal:"Automation aufdecken",start:"Führung starten",resume:"Zur laufenden Führung",navigationHelp:"Mit Zurück und Weiter bestimmen Sie das Tempo. Verlassen führt zum Raum zurück; Ihre Einstellungen bleiben erhalten.",previous:"Zurück",next:"Weiter",exit:"Führung verlassen → Raum",finish:"Führung abschließen",resetView:"Ansicht zurücksetzen",principle:"Prinzip",engineering:"Technische Integration",info:"Komponenteninformationen",controls:"Zu den Komponentenreglern",physical:"Im Raum untersuchen",path:"Automationspfad verfolgen",step:"Schritt",of:"von",architectureTitle:"Von Umgebungseingängen zur physikalischen Reaktion",architectureStatus:"Historische Architektur · konzeptionelle Signale · keine Live-Gebäudedaten",architectureHint:"Wähle einen Aktor, um zur 3D-Komponente zurückzukehren. Wähle eine Steuerung, um ihre historische Rolle zu untersuchen.",selectionLegend:"Blau: ausgewählter Pfad",signalLegend:"Grün: simulierter Befehl",automaticHint:"Automatische Zielwerte werden angezeigt. Zum Einstellen dieser Komponente „Manuell“ wählen.",manualHint:"Nutze die markierten Regler, um die physikalische Komponente zu verändern.",excludedHint:"Dieses System ist ausgeschlossen. Mit seinem Aktiv-Schalter wird es wieder einbezogen.",sensorHint:"Schematischer Umgebungseingang; Sensormodell und Montageort sind nicht dokumentiert.",solarHint:"Sonnenlichtrichtung · illustrativ",current:"Aktuelle Zielwerte",selected:"Ausgewählter Pfad",lastAction:"Konzeptionelles Signal",noSignal:"Ändere einen Gerätezielwert, um seinen Steuerungspfad zu verfolgen.",sceneHint:"Wähle Glas, Jalousien, eine Leuchte oder den schematischen Umgebungsmarker im Modell.",status:"Historisch dokumentiert · Betrieb nicht verifiziert",schematic:"Schematische Eingänge · keine Messwerte",environmentLine:"Szenarioeingänge",historicalLink:"Historische Beziehung",components:{glass:{title:"Elektrochromes Glas · SageGlass",short:"SageGlass",principle:"Eine angelegte elektrische Spannung verändert den optischen Zustand der elektrochromen Verglasung. Dunklere Zustände lassen weniger sichtbares Licht durch und können Blendung und solare Einträge begrenzen.",engineering:"BACnet ist der historisch dokumentierte Integrationspfad. Drei horizontale Steuerungsreihen wirken jeweils auf vier Fensterfelder. Keine, Mittel und Voll sind illustrative Tönungszustände, keine gemessenen Transmissionswerte oder Berechnung solarer Energieeinträge."},blinds:{title:"Jalousien · Raffstore",short:"Raffstore",principle:"Die Position bestimmt den bedeckten Fensteranteil: 0% ist oben, 100% unten. Der Lamellenwinkel bestimmt die Ausrichtung der ausgefahrenen Lamellen und verändert Verschattung und Durchsicht.",engineering:"SMI ist die historisch dokumentierte Schnittstelle der Jalousiensteuerung. Position und Neigung sind unabhängige Zielwerte. Fahre die Jalousien herunter, um 0°, 30°, 45° und 80° zu vergleichen; hochgefahrene Lamellen bleiben am Kopfprofil gestapelt."},lighting:{title:"Künstliche Beleuchtung",short:"Leuchten",principle:"Dimmen verändert die Lichtabgabe. Warmweiß und Neutralweiß verändern die sichtbare Lichtfarbe. Direktes Licht erreicht die Arbeitsflächen; indirektes Licht beleuchtet die Decke und trägt durch Reflexion zur Beleuchtung bei.",engineering:"Die historische Integration nutzt Modbus TCP, Raspberry Pi / CODESYS 3.5, REST/HTTP, deCONZ / Phoscon und ZigBee. Tageslichtabhängige Beleuchtung wird mit Szenariovorgaben veranschaulicht; weder gemessene Luxwerte noch ein geschlossener Sensorregelkreis werden berechnet."},sensors:{title:"Umgebung und Sensoreingänge",short:"Umgebung / Sensoren",principle:"Die Ausgangsdemo nennt Tageslicht, Sonneneinstrahlung und Wind als Umgebungsinformationen. In dieser Anwendung liefert das gewählte Wetterszenario die Eingänge.",engineering:"Die bereitgestellte Dokumentation enthält kein Sensormodell, keinen Installationsort, keine Kalibrierung und keine Messwerte. Der 3D-Marker ist schematisch. Wind ist eine dokumentierte Eingangskategorie, wird jedoch nicht numerisch simuliert. Es besteht keine Live-Sensorverbindung."},wago:{title:"WAGO 750-831",short:"WAGO 750-831",principle:"Die zentrale Automationssteuerung verknüpft Umgebungsinformationen mit Aktorzielwerten. Der Raum verändert daraufhin Verglasung, Verschattung und künstliche Beleuchtung.",engineering:"Die historische Architektur nennt WAGO 750-831 als zentrale Steuerung, BACnet für Verglasung und SMI für Jalousien. Modbus TCP gehört zu den dokumentierten Steuerungs- und Integrationsbeziehungen. Diese Demo führt lokale Szenariovorgaben aus, kein Live-SPS-Programm."},pi:{title:"Raspberry Pi · CODESYS 3.5",short:"Raspberry Pi",principle:"Diese Integrationsschicht verbindet Automationszielwerte mit der historischen Beleuchtungssteuerung.",engineering:"Die übernommene Architektur zeigt Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon. Verfügbarkeit und heutiger Betrieb der historischen Software sind nicht verifiziert. Über „Leuchten“ gelangst du zum zugehörigen physikalischen System."},gateway:{title:"deCONZ / Phoscon",short:"deCONZ / Phoscon",principle:"Das Gateway stellt die Schnittstelle zwischen Softwareanfragen und drahtlosen Beleuchtungsgeräten dar.",engineering:"REST/HTTP und ZigBee werden als historisch dokumentierter Beleuchtungspfad gezeigt. Bewegte Signale sind Erklärungsanimationen, kein Netzwerkverkehr. Wähle „Leuchten“, um zur physikalischen Beleuchtung zurückzukehren."},mpc:{title:"Bachmann · LiSA MPC",short:"Bachmann / LiSA MPC",principle:"Modellprädiktive Regelung nutzt ein Modell und Vorhersagen zur Planung zukünftiger Stellgrößen. Bachmann / LiSA MPC wird in seiner historischen unterstützenden Rolle dargestellt.",engineering:"Die punktierte Modbus-TCP-Beziehung ist historisch und konzeptionell; hier wird keine prädiktive Regelung ausgeführt. Die heutige Integration ist nicht verifiziert. Eine Verbindung der LiSA Voting App zu einer SPS wird weder behauptet noch implementiert."},architecture:{title:"Vollständige Automationsarchitektur",short:"Automationsarchitektur",principle:"Verfolge den Zusammenhang von Umgebungsinformationen über Steuerung und Kommunikationsschnittstellen bis zu den physikalischen Aktoren.",engineering:"Alle Ansichten nutzen denselben Simulationszustand. Wähle einen Knoten oder ändere einen Zielwert, um Architektur und Raum zu verbinden. Historische Beziehungen sind ausdrücklich gekennzeichnet; alle dargestellten Signale sind simuliert."}},tour:{overview:["Raumübersicht","Ordne die beiden Fassadensysteme, Leuchten und Arbeitsplätze ein. Drehen und Zoomen zeigen den physikalischen Kontext."],sensors:["Umgebungseingänge","Untersuche den schematischen Eingangsmarker. Unterscheide dokumentierte Eingangskategorien von gemessenen Sensordaten."],glass:["Elektrochrome Verglasung","Vergleiche die drei Tönungsreihen und verfolge den BACnet-Pfad. Experimentiere im manuellen Modus mit den optischen Zuständen."],blinds:["Jalousienposition und Lamellenwinkel","Fahre die Jalousien herunter und vergleiche Neigungswinkel. Bedeckung und Lamellenausrichtung sind unabhängige Zielwerte."],lighting:["Künstliche Beleuchtung","Vergleiche Dimmen, Warmweiß/Neutralweiß und direkte/indirekte Verteilung. Verfolge die historische Lichtintegration."],controller:["Steuerung und Kommunikation","Untersuche WAGO und die Protokollzweige. Unterscheide die Lichtintegration von der historischen MPC-Beziehung."],architecture:["Vollständige Automationsarchitektur","Ändere einen Zielwert und verfolge nur den zugehörigen konzeptionellen Signalpfad. Ein Klick auf einen Aktor führt zurück in den Raum."],return:["Zurück im Raum","Beobachte das physikalische Ergebnis. Wetter, Systemauswahl und manuelle Einstellungen bleiben erhalten."]}}};Object.assign(Ft.en,{architectureTitle:"User → LiSA System → Automation controllers → Physical devices",environmentLine:"Inputs",conceptual:"Conceptual",fieldControl:"Field controller",manualFlow:"Manual: User → LiSA → controllers → devices. The user requests the desired settings.",automaticFlow:"Automatic: Environment / sensors → LiSA control logic → controllers → devices. Scenario presets illustrate decisions; they are not the deployed LiSA algorithm.",manualTested:"Manually tested through LiSA",lightingIssue:"Supported by design · control issue unresolved in the reported test",status:"Historical integration · current operation not verified",mpcAssociation:"Predictive-control role within LiSA",hierarchy:"Interaction · Supervisory control · Field controllers · Actuators",userLabel:"User / Operator",lisaLabel:"LiSA System – User Interface and Automatic Control",modes:"Manual / Automatic",integrationNote:"LiSA → controllers: conceptual integration; protocol not confirmed. Bachmann is the historical MPC platform, not the complete LiSA system."});Object.assign(Ft.en.components,{user:{title:"User / Operator",short:"User / Operator",principle:"Manual: User → LiSA → controllers → devices. The user requests the desired settings.",engineering:"The LiSA Android Voting App and AdminApp are separate interfaces; their integration is not confirmed as direct PLC control."},lisa:{title:"LiSA System – User Interface and Automatic Control",short:"LiSA System – User Interface and Automatic Control",principle:"LiSA is the overarching operating and control system for SageGlass, Venetian blinds and artificial lighting, with manual and automatic operation.",engineering:"LiSA → controllers: conceptual integration; protocol not confirmed. Bachmann is the historical MPC platform, not the complete LiSA system. Automatic: Environment / sensors → LiSA control logic → controllers → devices. Scenario presets illustrate decisions; they are not the deployed LiSA algorithm."},mpc:{title:"Bachmann · LiSA MPC",short:"Bachmann · MPC",principle:"Historically documented platform for predictive control associated with LiSA. This component is not the complete LiSA system.",engineering:"The historical Modbus TCP relationship with WAGO is retained. Predictive control is not executed in this demo; current integration is unverified."}});Ft.en.components.wago.principle="WAGO is a field automation controller below the LiSA supervisory level. It connects the conceptual device requests to the historically documented protocol branches.";Ft.en.components.architecture.principle=Ft.en.architectureTitle;Ft.en.tour.controller=["LiSA and field controllers","Follow manual or automatic requests from LiSA to WAGO. Bachmann MPC is a separate historical predictive-control component."];Object.assign(Ft.de,{architectureTitle:"Bedienung → LiSA-System → Automationssteuerungen → Physikalische Geräte",environmentLine:"Eingänge",conceptual:"Konzeptionell",fieldControl:"Feldsteuerung",manualFlow:"Manuell: Bedienung → LiSA → Steuerungen → Geräte. Der Benutzer gibt die gewünschten Zielwerte vor.",automaticFlow:"Automatisch: Umgebung / Sensoren → LiSA-Steuerungslogik → Steuerungen → Geräte. Szenariovorgaben veranschaulichen Entscheidungen; sie sind nicht der eingesetzte LiSA-Algorithmus.",manualTested:"Über LiSA manuell getestet",lightingIssue:"Im Systemdesign vorgesehen · Steuerungsproblem im berichteten Test ungelöst",status:"Historische Integration · heutiger Betrieb nicht verifiziert",mpcAssociation:"Prädiktive Regelung im LiSA-System",hierarchy:"Bedienung · Übergeordnete Steuerung · Feldsteuerungen · Aktoren",userLabel:"Benutzer / Bedienung",lisaLabel:"LiSA-System – Bedienung und automatische Steuerung",modes:"Manuell / Automatisch",integrationNote:"LiSA → Steuerungen: konzeptionelle Integration; Protokoll nicht bestätigt. Bachmann ist die historische MPC-Plattform, nicht das gesamte LiSA-System."});Object.assign(Ft.de.components,{user:{title:"Benutzer / Bedienung",short:"Benutzer / Bedienung",principle:"Manuell: Bedienung → LiSA → Steuerungen → Geräte. Der Benutzer gibt die gewünschten Zielwerte vor.",engineering:"LiSA Android Voting App und AdminApp sind separate Oberflächen; ihre Integration ist nicht als direkter SPS-Zugriff bestätigt."},lisa:{title:"LiSA-System – Bedienung und automatische Steuerung",short:"LiSA-System – Bedienung und automatische Steuerung",principle:"LiSA ist das übergeordnete Bedien- und Steuerungssystem für SageGlass, Raffstore und künstliche Beleuchtung mit manuellem und automatischem Betrieb.",engineering:"LiSA → Steuerungen: konzeptionelle Integration; Protokoll nicht bestätigt. Bachmann ist die historische MPC-Plattform, nicht das gesamte LiSA-System. Automatisch: Umgebung / Sensoren → LiSA-Steuerungslogik → Steuerungen → Geräte. Szenariovorgaben veranschaulichen Entscheidungen; sie sind nicht der eingesetzte LiSA-Algorithmus."},mpc:{title:"Bachmann · LiSA MPC",short:"Bachmann · MPC",principle:"Historisch dokumentierte Plattform für prädiktive Regelung im LiSA-System. Diese Komponente ist nicht das gesamte LiSA-System.",engineering:"Die historische Modbus-TCP-Beziehung zu WAGO bleibt dargestellt. Diese Demo führt keine prädiktive Regelung aus; die heutige Integration ist nicht verifiziert."}});Ft.de.components.wago.principle="WAGO ist eine Automationssteuerung unterhalb der übergeordneten LiSA-Ebene. Sie verbindet die konzeptionellen Gerätezielwerte mit den historisch dokumentierten Protokollzweigen.";Ft.de.components.architecture.principle=Ft.de.architectureTitle;Ft.de.tour.controller=["LiSA und Feldsteuerungen","Verfolge manuelle oder automatische Zielwerte von LiSA zu WAGO. Bachmann MPC ist eine separate historische Komponente für prädiktive Regelung."];const yt={de:{pageTitle:"Living Lab · Interaktive Demonstration",eyebrow:"Living Lab · Demo für Schülerinnen und Schüler",headline:"Wie reagiert ein intelligenter Raum?",subtitle:"Licht, Jalousien und elektrochrome Fenster arbeiten zusammen.",logoAlt:"Living Lab Logo",languageLabel:"Sprache",room:"Der Raum",simBadge:"KONZEPTSIMULATION",sunlight:"☀ Tageslicht",blindsLabel:"↕ Jalousien",glassLabel:"◐ Elektrochromes Glas",flowWeather:"Wetter / Tageslicht",flowSensors:"Sensoren",flowControl:"Steuerung",flowRoom:"Raum",scenarioQuestion:"Was passiert draußen?",scenarioIntro:"Wähle ein Szenario. Beobachte, wie sich <strong>Glas, Jalousien und Beleuchtung</strong> verändern.",sceneSunny:"Starke Sonne",sceneSunnyDesc:"Blendung vermeiden",sceneCloudy:"Bewölkt",sceneCloudyDesc:"Mehr Tageslicht nutzen",sceneEvening:"Abend",sceneEveningDesc:"Raumbeleuchtung anpassen",controlModeTitle:"Steuerungsmodus",controlModeGroup:"Steuerungsmodus",controlModeIntro:"Automatisch folgt dem Wetter. Manuell ermöglicht separate Einstellungen für Glas und Jalousien.",tintTitle:"Elektrochromes Glas",automatic:"Automatisch",manual:"Manuell",tintIntro:"Stelle die Tönung für jede der drei Reihen über alle vier Fenster ein.",tintLow:"Keine",tintLowDesc:"transparent",tintMedium:"Mittel",tintMediumDesc:"mittlere Tönung",tintHigh:"Voll",tintHighDesc:"starke Tönung",tintTop:"Oben",tintMiddle:"Mitte",tintBottom:"Unten",tintTopGroup:"Tönung der oberen Reihe",tintMiddleGroup:"Tönung der mittleren Reihe",tintBottomGroup:"Tönung der unteren Reihe",tintAutoFeedback:"Automatik: Der Wettermodus bestimmt die Abdeckung (1/3, 2/3 oder 3/3).",tintManualFeedback:"Manuell: Obere, mittlere und untere Reihe können unabhängig eingestellt werden.",glassManualStatus:(i,e,t)=>`Manuell · Oben: ${i} · Mitte: ${e} · Unten: ${t}`,blindTitle:"Jalousien",blindPosition:"Position",slatAngle:"Lamellenwinkel",slatAngleGroup:"Lamellenwinkel auswählen",blindStatus:(i,e,t)=>`${i} · ${e}% · ${t}°`,tintMatrix:"Tönungsmatrix für die drei Glasreihen",tintCell:(i,e)=>`${i}: ${e}`,lightingTitle:"Beleuchtung",lampBrightness:"Helligkeit",brightnessOff:"Aus",brightnessMaximum:"Maximal",lightStatus:i=>`Helligkeit ${i}%`,temperatureGroup:"Lichtfarbe",directionGroup:"Lichtrichtung",warmWhite:"Warmweiß",neutralWhite:"Neutralweiß",directLight:"Direkt",indirectLight:"Indirekt",glassMetric:"Elektrochromes Glas",blindsMetric:"Jalousien",lightingMetric:"Künstliches Licht",goalMetric:"Ziel",states:{low:"Keine Tönung",medium:"Mittlere Tönung",high:"Volle Tönung",reduced:"Reduziert",asNeeded:"Nach Bedarf",on:"Eingeschaltet",glare:"Weniger Blendung",daylight:"Tageslicht nutzen",comfort:"Angenehmes Licht",autoSuffix:"Automatisch",manualSuffix:"Manuell"},communicationTitle:"Wie kommuniziert der Raum?",communicationIntro:"Historisch dokumentierte Rollen und lokale Simulation.",simulationStatus:"Simulation · Keine Verbindung zu realen Geräten",communicationDiagram:"Konzeptionelles Kommunikationsdiagramm",communicationViewGroup:"Kommunikationsansicht",simpleView:"Einfach",technicalView:"Technisch",happeningTitle:"Was passiert gerade?",showDetails:"Details anzeigen",communicationLogTitle:"Kommunikationsprotokoll",nodeEnvironment:"Umgebung",nodeEnvironmentDetail:"Szenario, Tageslicht, Sonneneinstrahlung und Wind",nodeWago:"Steuerung",nodeWagoDetail:"WAGO 750-831 · historische zentrale Gebäudeautomation",nodeLighting:"Licht",nodeLightingDetail:"Raspberry Pi / CODESYS → deCONZ / Licht-Gateway",nodeBlinds:"Jalousien",nodeBlindsDetail:"Venetian blinds / Raffstore",nodeGlass:"Glas",nodeGlassDetail:"SageGlass · drei Tönungsreihen",nodeMpc:"Bachmann / LiSA MPC",nodeMpcDetail:"Historische unterstützende Rolle · Modbus TCP",protocolLighting:"Modbus TCP → Raspberry Pi / CODESYS → REST/HTTP → deCONZ → ZigBee",localModel:"Lokales Szenariomodell",actionExplanations:{strongSun:"Die Sonne scheint stark. Die Fenster werden dunkler und die Jalousien schützen vor Blendung.",cloudy:"Es gibt weniger Sonnenlicht. Die Fenster bleiben hell und die Jalousien öffnen sich.",sunrise:"Der Tag beginnt. Der Raum nutzt Licht und Schutz passend zur Situation.",morning:"Es ist hell. Der Raum nutzt vor allem Tageslicht.",sunset:"Es wird später. Der Raum passt Licht und Sonnenschutz an.",night:"Es ist Nacht. Die Jalousien schließen und das Raumlicht sorgt für angenehmes Licht.",manual:"Du steuerst die Geräte selbst. Der Raum zeigt deine Einstellung.",tint:"Du hast die Tönung geändert. Das hilft, Licht und Blendung passend einzustellen.",blinds:"Du hast die Jalousien eingestellt. Sie können Licht und Blendung beeinflussen.",lighting:"Du hast die Beleuchtung geändert. So passt das Licht im Raum zu deinen Bedürfnissen.",automatic:"Das Wetter steuert Glas, Jalousien und Licht.",mode:"Du hast den Steuerungsmodus geändert."},explanations:{environment:"Veranschaulicht Umgebungsinformationen. Es werden keine realen Sensordaten gemessen.",wago:"Der WAGO 750-831 koordiniert historisch dokumentiert die Gebäudeautomation. Die Entscheidungen dieser Demo laufen lokal im JavaScript-Szenariomodell.",lighting:"Die Beleuchtungskette zeigt die historische Raspberry-Pi-Integration mit REST/HTTP, deCONZ und ZigBee. Es besteht keine Verbindung zu Hardware.",blinds:"SMI ist die historisch dokumentierte Schnittstelle für motorisierte Jalousien bzw. Raffstore.",glass:"BACnet ist der historisch dokumentierte Kommunikationsweg für SageGlass. Die dargestellten Tönungen sind illustrative Opazitäten.",mpc:"Bachmann / LiSA MPC steht für eine historisch dokumentierte prädiktive Rolle. Die punktierte Modbus-TCP-Beziehung ist konzeptionell und in dieser Demo nicht aktiv."},disclaimer:"Konzeptdemo: Die Darstellung ist vereinfacht und steuert keine realen Geräte.",shortcuts:"Vollbild: F11 · Szenarien: 1–3 · Reihen: 4–6 · Manuell: M · Automatik: 0"},en:{pageTitle:"Living Lab · Interactive Demonstration",eyebrow:"Living Lab · Demonstration for school students",headline:"How does a smart room respond?",subtitle:"Lights, blinds and electrochromic windows work together.",logoAlt:"Living Lab logo",languageLabel:"Language",room:"The room",simBadge:"ILLUSTRATIVE SIMULATION",sunlight:"☀ Daylight",blindsLabel:"↕ Blinds",glassLabel:"◐ Electrochromic glass",flowWeather:"Weather / daylight",flowSensors:"Sensors",flowControl:"Control system",flowRoom:"Room",scenarioQuestion:"What is happening outside?",scenarioIntro:"Choose a scenario. Watch how <strong>glass, blinds and lighting</strong> change.",sceneSunny:"Strong sunshine",sceneSunnyDesc:"Reduce glare",sceneCloudy:"Cloudy",sceneCloudyDesc:"Make use of daylight",sceneEvening:"Evening",sceneEveningDesc:"Adjust room lighting",controlModeTitle:"Control mode",controlModeGroup:"Control mode",controlModeIntro:"Automatic follows the weather. Manual enables separate glass and blind settings.",tintTitle:"Electrochromic glass",automatic:"Automatic",manual:"Manual",tintIntro:"Set the tint for each of the three rows across all four windows.",tintLow:"None",tintLowDesc:"clear",tintMedium:"Medium",tintMediumDesc:"moderate tint",tintHigh:"Full",tintHighDesc:"strong tint",tintTop:"Top",tintMiddle:"Middle",tintBottom:"Bottom",tintTopGroup:"Tint of top row",tintMiddleGroup:"Tint of middle row",tintBottomGroup:"Tint of bottom row",tintAutoFeedback:"Automatic: Weather determines coverage (1/3, 2/3 or 3/3).",tintManualFeedback:"Manual: Top, middle and bottom rows can be adjusted independently.",glassManualStatus:(i,e,t)=>`Manual · Top: ${i} · Middle: ${e} · Bottom: ${t}`,blindTitle:"Blinds",blindPosition:"Position",slatAngle:"Slat angle",slatAngleGroup:"Choose slat angle",blindStatus:(i,e,t)=>`${i} · ${e}% · ${t}°`,tintMatrix:"Tint matrix for the three glass rows",tintCell:(i,e)=>`${i}: ${e}`,lightingTitle:"Lighting",lampBrightness:"Brightness",brightnessOff:"Off",brightnessMaximum:"Maximum",lightStatus:i=>`Brightness ${i}%`,temperatureGroup:"Light colour",directionGroup:"Light direction",warmWhite:"Warm white",neutralWhite:"Neutral white",directLight:"Direct",indirectLight:"Indirect",glassMetric:"Electrochromic glass",blindsMetric:"Blinds",lightingMetric:"Artificial light",goalMetric:"Goal",states:{low:"No tint",medium:"Medium tint",high:"Full tint",reduced:"Reduced",asNeeded:"As needed",on:"On",glare:"Less glare",daylight:"Use daylight",comfort:"Comfortable lighting",autoSuffix:"Automatic",manualSuffix:"Manual"},communicationTitle:"How does the room communicate?",communicationIntro:"Historically documented roles and local simulation.",simulationStatus:"Simulation · No connection to physical devices",communicationDiagram:"Conceptual communication diagram",communicationViewGroup:"Communication view",simpleView:"Simple",technicalView:"Technical",happeningTitle:"What's happening?",showDetails:"Show details",communicationLogTitle:"Communication Log",nodeEnvironment:"Environment",nodeEnvironmentDetail:"Scenario, daylight, solar irradiation and wind",nodeWago:"Controller",nodeWagoDetail:"WAGO 750-831 · historical central building automation",nodeLighting:"Lighting",nodeLightingDetail:"Raspberry Pi / CODESYS → deCONZ / lighting gateway",nodeBlinds:"Blinds",nodeBlindsDetail:"Venetian blinds / Raffstore",nodeGlass:"Glass",nodeGlassDetail:"SageGlass · three tint rows",nodeMpc:"Bachmann / LiSA MPC",nodeMpcDetail:"Historical supporting role · Modbus TCP",protocolLighting:"Modbus TCP → Raspberry Pi / CODESYS → REST/HTTP → deCONZ → ZigBee",localModel:"Local scenario model",actionExplanations:{strongSun:"The sun is strong. The windows become darker and the blinds reduce glare.",cloudy:"There is less sunlight. The windows stay clear and the blinds open.",sunrise:"The day begins. The room uses light and shading for the situation.",morning:"It is bright. The room mainly uses daylight.",sunset:"It is getting later. The room adjusts lighting and shading.",night:"It is night. The blinds close and room lighting supports a comfortable space.",manual:"You control the devices yourself. The room shows your setting.",tint:"You changed the window tint. This can help adjust light and glare.",blinds:"You adjusted the blinds. They can influence light and glare.",lighting:"You changed the lighting. This adapts the room light to your needs.",automatic:"The weather controls the glass, blinds and lighting.",mode:"You changed the control mode."},explanations:{environment:"Illustrates environmental information. No real sensor data is measured.",wago:"The WAGO 750-831 historically coordinates building automation. This demo makes decisions locally in its JavaScript scenario model.",lighting:"The lighting chain shows the historical Raspberry Pi integration with REST/HTTP, deCONZ and ZigBee. It has no hardware connection.",blinds:"SMI is the historically documented interface for motorized Venetian blinds and Raffstore.",glass:"BACnet is the historically documented communication path for SageGlass. The displayed tints are illustrative opacities.",mpc:"Bachmann / LiSA MPC represents a historically documented predictive role. The dotted Modbus TCP relationship is conceptual and inactive in this demo."},disclaimer:"Concept demonstration: This is a simplified simulation and does not control real devices.",shortcuts:"Fullscreen: F11 · Scenarios: 1–3 · Rows: 4–6 · Manual: M · Automatic: 0"}};Object.assign(yt.de,{eyebrow:"RPTU · LIVING LAB",headline:"Ein Raum, der mitdenkt.",subtitle:"Entdecke das Zusammenspiel von Tageslicht, Glas und Beleuchtung.",reset:"Demo zurücksetzen",fullscreen:"Vollbild",help:"Hilfe",overview:"Raumübersicht",windows:"Fenster & Jalousien",lighting:"Lichtsystem",cameraReset:"Ansicht zurücksetzen",cutaway:"Schnittansicht",drag:"Ziehen: drehen · Scrollen: zoomen",room:"Smart Office",simBadge:"3D · KONZEPTSIMULATION",controlsTitle:"Den Raum steuern",autoHint:"Automatik folgt dem Szenario. Zum Experimentieren „Manuell“ wählen.",manualHint:"Deine Einstellungen bleiben bei einem Wetterwechsel erhalten.",tintIntro:"Eine Reihe steuert alle vier Fenster.",blindEndpoints:"0% oben · 100% unten",tintNote:"Illustrative Tönung, keine gemessene Lichttransmission.",facadeGlass:"4 Fenster · 3 Glaszonen",facadeBlinds:"2 Fenster · Raffstore",outside:"Draußen",detection:"Erkennen",response:"Reagieren",benefit:"Nutzen",detectionText:"Sensoren würden Helligkeit und Sonneneinstrahlung erfassen. Hier liefert das Szenario diese Information.",historical:"Historisch dokumentierte Architektur aus der ursprünglichen Demo · Signale simuliert · Heute nicht live verifiziert.",geometryNote:"Kein vermessener digitaler Zwilling. Lichtwirkung und Tönung sind illustrativ, keine Messwerte.",nodeLightingDetail:"Raspberry Pi · CODESYS 3.5 · deCONZ / Phoscon · ZigBee",protocolLighting:"Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon → ZigBee",request:"Zielwerte",manualWeather:"Das Wetter ändert sich. Im manuellen Modus bleiben deine Geräteeinstellungen unverändert.",helpTitle:"So erkundest du den Raum",helpText:"Wähle ein Wetter und beobachte den Raum. Wechsle zu „Manuell“, um jedes System selbst einzustellen. Ziehen dreht die Ansicht, Scrollen oder zwei Finger zoomen. Die Kameratasten bringen dich immer zurück.",shortcuts:"1 starke Sonne · 2 bewölkt · 3 Nacht · 4–6 Glasreihe fokussieren · M manuell · 0 Automatik · R Kamera · F Vollbild · ? Hilfe · F11 Browser-Vollbild",close:"Schließen",webgl:"Die 3D-Ansicht benötigt WebGL 2. Aktiviere Hardwarebeschleunigung in einem aktuellen Chrome, Edge oder Firefox und lade die Seite neu. Alle Simulationsregler bleiben bedienbar.",contextLost:"Die Grafikverbindung wurde unterbrochen. Lade die Seite neu, um die 3D-Ansicht wiederherzustellen.",fullscreenError:"Vollbild ist hier nicht verfügbar. Nutze F11 im Browser.",weather:{sunrise:"Die Sonne steht tief. Warmes Licht fällt in den Raum.",morning:"Klarer Himmel und helles Tageslicht.",strongSun:"Starke Sonne kann am Arbeitsplatz blenden.",cloudy:"Wolken verteilen das Licht. Direkte Sonne nimmt ab.",sunset:"Die Sonne steht tief. Das Tageslicht wird schwächer.",night:"Draußen ist es dunkel. Kunstlicht übernimmt."}});Object.assign(yt.en,{eyebrow:"RPTU · LIVING LAB",headline:"A room that responds.",subtitle:"Explore how daylight, smart glass and lighting work together.",reset:"Reset Demo",fullscreen:"Fullscreen",help:"Help",overview:"Office Overview",windows:"Windows and Blinds",lighting:"Lighting System",cameraReset:"Reset View",cutaway:"Cutaway view",drag:"Drag to rotate · Scroll to zoom",room:"Smart Office",simBadge:"3D · CONCEPT SIMULATION",controlsTitle:"Control the room",autoHint:"Automatic follows the scenario. Select Manual to experiment.",manualHint:"Your settings stay in place when the weather changes.",tintIntro:"One row controls all four windows.",blindEndpoints:"0% raised · 100% lowered",tintNote:"Illustrative tint, not measured light transmission.",facadeGlass:"4 windows · 3 glass zones",facadeBlinds:"2 windows · Venetian blinds",outside:"Outside",detection:"Detect",response:"Respond",benefit:"Benefit",detectionText:"Sensors would detect brightness and sunlight. Here, the scenario supplies this information.",historical:"Historically documented architecture from the original demo · Simulated signals · Not verified live today.",geometryNote:"Not a surveyed digital twin. Lighting and tint are illustrative, not measured specifications.",nodeLightingDetail:"Raspberry Pi · CODESYS 3.5 · deCONZ / Phoscon · ZigBee",protocolLighting:"Modbus TCP → Raspberry Pi / CODESYS 3.5 → REST/HTTP → deCONZ / Phoscon → ZigBee",request:"Target settings",manualWeather:"The weather changes. In manual mode, your device settings remain unchanged.",helpTitle:"Explore the room",helpText:"Choose the weather and watch the room respond. Switch to Manual to adjust each system. Drag to rotate, scroll or pinch to zoom. Camera buttons always bring you back.",shortcuts:"1 strong sun · 2 cloudy · 3 night · 4–6 focus glass row · M manual · 0 automatic · R camera · F fullscreen · ? help · F11 browser fullscreen",close:"Close",webgl:"The 3D view requires WebGL 2. Enable hardware acceleration in a current Chrome, Edge or Firefox and reload. All simulation controls remain available.",contextLost:"The graphics connection was interrupted. Reload the page to restore the 3D view.",fullscreenError:"Fullscreen is unavailable here. Use F11 in your browser.",weather:{sunrise:"The sun is low. Warm light enters the room.",morning:"Clear skies and bright daylight.",strongSun:"Strong sunlight can cause glare at the desk.",cloudy:"Clouds diffuse the light. Direct sunlight decreases.",sunset:"The sun is low. Daylight is fading.",night:"It is dark outside. Artificial lighting takes over."}});Object.assign(yt.de,{modeLabel:"Betriebsmodus",systemHint:"Systeme für die Vorführung auswählen",systemSelection:"Aktive Systeme",systemActive:"Aktiv",systemOff:"Aus",noSystems:"Keine",isolationHint:"Ausgeschaltet: klares Glas, hochgefahrene Jalousien, Licht aus.",systemResponse:i=>`Aktive Systeme: ${i}. Nur diese Systeme reagieren auf Automatik oder manuelle Einstellungen.`,systemOffState:{glass:"Klares Glas",blinds:"Hochgefahren",lighting:"Licht aus"},systemOffHelp:{glass:"Aus: Glas bleibt klar. Aktiv: Tönung folgt dem gewählten Modus.",blinds:"Aus: Jalousien bleiben oben. Aktiv: Jalousien folgen dem gewählten Modus.",lighting:"Aus: Leuchten bleiben aus. Aktiv: Beleuchtung folgt dem gewählten Modus; bei Tageslicht kann sie 0% betragen."}});Object.assign(yt.en,{modeLabel:"Operating mode",systemHint:"Select systems to demonstrate",systemSelection:"Active systems",systemActive:"Active",systemOff:"Off",noSystems:"None",isolationHint:"When off: clear glass, raised blinds, lights off.",systemResponse:i=>`Active systems: ${i}. Only these systems respond to automatic or manual settings.`,systemOffState:{glass:"Clear glass",blinds:"Raised",lighting:"Lights off"},systemOffHelp:{glass:"Off: glass stays clear. Active: tint follows the selected mode.",blinds:"Off: blinds stay raised. Active: blinds follow the selected mode.",lighting:"Off: lamps stay off. Active: lighting follows the selected mode; daylight may result in 0% brightness."}});Object.assign(yt.en,{nodeUser:"User / Operator",nodeLisa:"LiSA System – User Interface and Automatic Control",supervisoryDetail:"Manual / Automatic → field controllers → physical devices. Upper-level integration is conceptual; no protocol is confirmed.",nodeMpc:"Bachmann · MPC",nodeMpcDetail:"Historical predictive-control platform associated with LiSA; not the entire LiSA system",historical:"LiSA supports glass, blinds and lighting by design. In the reported physical test, glass and blinds were operated manually through LiSA; the lighting-control issue remained unresolved. All demo signals are simulated.",eventManual:"User → LiSA → relevant controllers → devices (conceptual manual request)",eventAutomatic:"Environment / sensors → LiSA automatic logic → controllers → devices (demo presets, not the deployed algorithm)",nodeWagoDetail:"WAGO 750-831 · field automation below LiSA",autoHint:"Demo scenario presets illustrate LiSA automatic control; they are not its deployed algorithm."});Object.assign(yt.de,{nodeUser:"Benutzer / Bedienung",nodeLisa:"LiSA-System – Bedienung und automatische Steuerung",supervisoryDetail:"Manuell / Automatisch → Feldsteuerungen → physikalische Geräte. Übergeordnete Integration konzeptionell; kein Protokoll bestätigt.",nodeMpc:"Bachmann · MPC",nodeMpcDetail:"Historische Plattform für prädiktive Regelung im LiSA-System; nicht das gesamte LiSA-System",historical:"LiSA unterstützt gemäß Systemdesign Glas, Jalousien und Licht. Im berichteten Praxistest wurden Glas und Jalousien über LiSA manuell bedient; das Problem der Lichtsteuerung blieb ungelöst. Alle Demo-Signale sind simuliert.",eventManual:"Bedienung → LiSA → zuständige Steuerungen → Geräte (konzeptioneller manueller Zielwert)",eventAutomatic:"Umgebung / Sensoren → LiSA-Automatik → Steuerungen → Geräte (Demo-Vorgaben, nicht der eingesetzte Algorithmus)",nodeWagoDetail:"WAGO 750-831 · Feldautomation unter LiSA",autoHint:"Demo-Szenariovorgaben veranschaulichen die LiSA-Automatik; sie sind nicht deren eingesetzter Algorithmus."});Object.assign(yt.en.explanations,{user:"Users request settings through LiSA. The Android Voting App and AdminApp are separate; direct PLC integration is not confirmed.",lisa:"LiSA supervises manual and automatic control of glass, blinds and lighting. Its integration with field controllers is conceptual here; no upper-level protocol is asserted.",wago:"WAGO is the historical field automation controller below LiSA, with BACnet for glass and SMI for blinds. Lighting uses the Raspberry Pi integration.",glass:"LiSA manual operation of SageGlass was confirmed in the reported test. WAGO → BACnet → SageGlass is the historical field path; demo tints are illustrative.",blinds:"LiSA manual operation of the blinds was confirmed in the reported test. WAGO → SMI → Raffstore is the historical field path.",lighting:"LiSA supports lighting by design, but the reported physical test left a control issue unresolved. The historical Raspberry Pi / CODESYS → REST/HTTP → deCONZ / Phoscon → ZigBee path is simulated here.",mpc:"Bachmann is the historical predictive-control platform associated with LiSA, not the complete LiSA system. Its historical Modbus TCP relationship is shown; no predictive algorithm runs here."});Object.assign(yt.de.explanations,{user:"Benutzer geben Zielwerte über LiSA vor. Android Voting App und AdminApp sind getrennt zu betrachten; direkter SPS-Zugriff ist nicht bestätigt.",lisa:"LiSA übernimmt die übergeordnete manuelle und automatische Steuerung von Glas, Jalousien und Licht. Die Integration mit Feldsteuerungen ist hier konzeptionell; ein übergeordnetes Protokoll wird nicht behauptet.",wago:"WAGO ist die historische Feldsteuerung unter LiSA: BACnet für Glas, SMI für Jalousien und Raspberry-Pi-Integration für Licht.",glass:"Die manuelle SageGlass-Bedienung über LiSA wurde im berichteten Test bestätigt. WAGO → BACnet → SageGlass ist der historische Feldpfad; die Demo-Tönung ist illustrativ.",blinds:"Die manuelle Jalousienbedienung über LiSA wurde im berichteten Test bestätigt. WAGO → SMI → Raffstore ist der historische Feldpfad.",lighting:"LiSA unterstützt Licht gemäß Systemdesign; im berichteten Praxistest blieb ein Steuerungsproblem ungelöst. Der historische Pfad Raspberry Pi / CODESYS → REST/HTTP → deCONZ / Phoscon → ZigBee wird hier simuliert.",mpc:"Bachmann ist die historische Plattform für prädiktive Regelung im LiSA-System, nicht das gesamte LiSA-System. Die historische Modbus-TCP-Beziehung wird gezeigt; hier läuft kein prädiktiver Algorithmus."});for(const i of["de","en"])yt[i].actionExplanations.manual=yt[i].eventManual,yt[i].actionExplanations.automatic=yt[i].eventAutomatic;const Gc=[["user",2,8,16,""],["sensors",2,42,16,""],["lisa",24,8,24,""],["mpc",25,42,22,"MPC"],["wago",59,8,17,""],["glass",81,4,18,"BACnet"],["blinds",81,30,18,"SMI"],["pi",59,56,18,"CODESYS 3.5"],["gateway",59,80,18,"REST/HTTP ↔ ZigBee"],["lighting",81,80,18,"ZigBee"]],Vc=[["user","M180 90 H240",210,72,""],["sensors","M180 294 H210 V120 H240",109,225,"inputs"],["supervisory","M480 90 H590",535,72,"conceptual"],["glass","M760 90 H790 V66 H810",785,40,"BACnet"],["blinds","M760 100 H790 V222 H810",852,168,"SMI"],["lighting","M675 132 V336",724,296,"Modbus TCP"],["lighting","M675 420 V480",730,455,"REST/HTTP"],["lighting","M770 522 H810",795,500,"ZigBee"],["mpc","M360 252 V132",390,207,"MPC"],["mpc","M470 294 H535 V112 H590",534,249,"Modbus TCP"]];function Wc(i){const e=document.getElementById("viewport"),t=(v,g)=>i.dispatch({type:v,value:g}),n=matchMedia("(prefers-reduced-motion: reduce)"),s=document.createElement("nav");s.className="engineering-toolbar",s.innerHTML=`<button id="view-office" data-tour-text="explore"></button>
    <label><span class="sr-only" data-tour-text="inspect"></span><select id="inspect-select"><option value="" data-tour-text="inspect"></option>${mn.map(v=>`<option value="${v}"></option>`).join("")}</select></label>
    <button id="view-automation" data-tour-text="reveal"></button><button id="tour-start" data-tour-text="start"></button>`,document.querySelector(".camera-bar").after(s),document.querySelector(".header-tools").prepend(s.querySelector("#tour-start"));const r=document.createElement("section");r.id="engineering-info",r.hidden=!0,r.innerHTML=`<div class="inspection-heading"><div><span class="inspection-status"></span><h2 id="inspection-title"></h2></div><button id="inspection-return" data-tour-text="explore"></button></div>
    <p id="inspection-live"></p><div class="inspection-details"><details open><summary data-tour-text="principle"></summary><p id="inspection-principle"></p></details><details><summary data-tour-text="engineering"></summary><p id="inspection-engineering"></p></details></div>
    <div class="inspection-actions"><button id="inspection-physical" data-tour-text="physical"></button><button id="inspection-path" data-tour-text="path"></button><button id="inspection-controls" data-tour-text="controls"></button></div><p id="inspection-hint"></p>`,s.after(r);const o=document.createElement("section");o.id="guided-tour",o.hidden=!0,o.innerHTML='<div class="tour-step-copy" aria-live="polite"><span id="tour-count"></span><strong id="tour-title"></strong><p id="tour-description"></p></div><div class="tour-actions"><button id="tour-previous" data-tour-text="previous"></button><button id="tour-next" data-tour-text="next"></button><button id="tour-exit" data-tour-text="exit"></button><small data-tour-text="navigationHelp"></small></div>',document.querySelector("main").before(o);const a=document.createElement("section");a.id="automation-view",a.setAttribute("aria-hidden","true"),a.inert=!0,a.innerHTML=`<header><strong data-tour-text="architectureTitle"></strong><span data-tour-text="architectureStatus"></span><span data-tour-text="hierarchy"></span></header>
    <p id="architecture-mode" role="status"></p><div class="architecture-scroll" tabindex="0"><div class="architecture-board">
      <svg viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="engineering-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#6a8d9e"/></marker></defs>
      ${Vc.map(([v,g,h,E,M])=>`<g data-engineering-path="${v}" class="architecture-edge ${v==="mpc"?"historical-edge":""}"><path d="${g}" ${v==="mpc"?"":'marker-end="url(#engineering-arrow)"'}/><text x="${h}" y="${E}" text-anchor="middle" ${M==="inputs"?"data-input-label":M==="conceptual"?"data-conceptual-label":""}>${["inputs","conceptual"].includes(M)?"":M}</text></g>`).join("")}</svg>
      ${Gc.map(([v,g,h,E,M])=>`<button class="architecture-node" data-architecture-node="${v}" style="left:${g}%;top:${h}%;width:${E}%"><strong></strong><small>${M}</small><span class="architecture-live"></span><span class="architecture-status"></span></button>`).join("")}
      <span class="historical-link-note" data-tour-text="mpcAssociation"></span>
    </div></div>
    <div class="architecture-signal" role="status"><span data-tour-text="lastAction"></span><strong id="engineering-signal"></strong></div>
    <p class="integration-note" data-tour-text="integrationNote"></p><footer><span data-tour-text="selectionLegend"></span><span data-tour-text="signalLegend"></span></footer>`,e.append(a);const l=document.createElement("p");l.className="component-pick-hint",l.dataset.tourText="sceneHint",s.after(l);function u(){e.scrollIntoView({behavior:n.matches?"instant":"smooth",block:"center"})}document.getElementById("view-office").onclick=()=>t("camera","overview"),document.getElementById("inspection-return").onclick=()=>{t("camera","overview"),u()},document.getElementById("inspect-select").onchange=v=>{v.target.value&&t("inspect",v.target.value)},document.getElementById("view-automation").onclick=()=>t("reveal"),document.getElementById("inspection-physical").onclick=()=>{t("inspect",oo(i.getState().component)),u()},document.getElementById("inspection-path").onclick=()=>{t("reveal"),u()},document.getElementById("tour-start").onclick=()=>{i.getState().tourStep===null&&t("tour-start"),u()},document.getElementById("tour-previous").onclick=()=>{t("tour-step",i.getState().tourStep-1),u()},document.getElementById("tour-next").onclick=()=>{const v=i.getState().tourStep;t(v===pn.length-1?"tour-exit":"tour-step",v+1),u(),v===pn.length-1&&document.getElementById("tour-start").focus({preventScroll:!0})},document.getElementById("tour-exit").onclick=()=>{t("tour-exit"),u(),document.getElementById("tour-start").focus({preventScroll:!0})},a.querySelectorAll("[data-architecture-node]").forEach(v=>v.onclick=()=>t("architecture-node",v.dataset.architectureNode)),document.getElementById("inspection-controls").onclick=()=>{var M,S;const v=i.getState(),g=v.component,h=(M=document.querySelector(`[data-system="${g}"]`))==null?void 0:M.closest(".device-section"),E=v.systems[g]?v.automatic?document.getElementById("manualMode"):h==null?void 0:h.querySelector("input:not(:disabled),button:not([data-system]):not(:disabled)"):h==null?void 0:h.querySelector("[data-system]");E==null||E.focus({preventScroll:!0}),(S=h||E)==null||S.scrollIntoView({behavior:n.matches?"instant":"smooth",block:"center"})};let c=[],f=null,d=null;const p=(v,g)=>({glass:"WAGO → BACnet → SageGlass",blinds:"WAGO → SMI → "+g.components.blinds.short,lighting:"WAGO → Modbus TCP → Raspberry Pi / CODESYS → REST/HTTP → deCONZ → ZigBee → "+g.components.lighting.short,sensors:g.components.sensors.short+" → WAGO"})[v];function _(v,g={}){const h=Ft[v.language],E=yt[v.language],M=hs(v),S=v.component;document.querySelectorAll("[data-tour-text]").forEach(x=>{x.textContent=h[x.dataset.tourText]}),s.setAttribute("aria-label",h.inspect),o.setAttribute("aria-label",h.start),document.getElementById("camera-reset").title=h.resetView,a.querySelector(".architecture-scroll").setAttribute("aria-label",h.architectureTitle),l.textContent=`${h.sceneHint}${v.view==="office"&&v.scenario!=="night"?` ${h.solarHint} ↘`:""}`;const F=document.getElementById("inspect-select");mn.forEach(x=>{F.querySelector(`[value="${x}"]`).textContent=h.components[x].title}),F.value=v.view==="inspect"&&mn.includes(S)?S:"";for(const[x,P]of[["view-office","office"],["view-automation","automation"]]){const k=document.getElementById(x);k.classList.toggle("active",v.view===P),k.setAttribute("aria-pressed",String(v.view===P))}const T=v.view==="automation";a.classList.toggle("is-visible",T),a.setAttribute("aria-hidden",String(!T)),a.inert=!T,e.dataset.perspective=v.view,e.dataset.touring=String(v.tourStep!==null),document.querySelectorAll("[data-system]").forEach(x=>x.closest(".device-section").classList.toggle("inspected-system",x.dataset.system===S));const R={glass:M.tints.map(x=>E.states[x]).join(" / "),blinds:`${M.blindPosition}% · ${M.slatAngle}°`,lighting:`${M.lampBrightness}% · ${E[M.lampTemperature==="warm"?"warmWhite":"neutralWhite"]} · ${E[M.lampDirection==="direct"?"directLight":"indirectLight"]}`};for(const x of Object.keys(R))v.systems[x]||(R[x]=`${E.systemOff} · ${E.systemOffState[x]}`);r.hidden=v.view==="office",r.setAttribute("aria-label",h.info);const N=h.components[S]||h.components.architecture;document.getElementById("inspection-title").textContent=N.title,r.querySelector(".inspection-status").textContent=S==="sensors"?h.schematic:["glass","blinds"].includes(S)?h.manualTested:S==="lighting"?h.lightingIssue:h.status,document.getElementById("inspection-principle").textContent=N.principle,document.getElementById("inspection-engineering").textContent=N.engineering,document.getElementById("inspection-live").textContent=R[S]?`${h.current}: ${R[S]}`:S==="sensors"?h.sensorHint:h.architectureHint,document.getElementById("inspection-physical").hidden=!T||!oo(S),document.getElementById("inspection-path").hidden=T,document.getElementById("inspection-controls").hidden=!Object.hasOwn(v.systems,S),document.getElementById("inspection-hint").textContent=Object.hasOwn(v.systems,S)?v.systems[S]?v.automatic?h.automaticHint:h.manualHint:h.excludedHint:"";const b=zc[S];if(a.querySelectorAll("[data-architecture-node]").forEach(x=>{const P=x.dataset.architectureNode;x.querySelector("strong").textContent=h.components[P].short,P==="wago"&&(x.querySelector("small").textContent=h.fieldControl),P==="lisa"&&(x.querySelector("small").textContent=`${h.modes} · ${v.automatic?E.automatic:E.manual}`),x.querySelector(".architecture-status").textContent=["glass","blinds"].includes(P)?h.manualTested:P==="lighting"?h.lightingIssue:"",x.querySelector(".architecture-live").textContent=R[P]||(P==="sensors"?h.schematic:P==="mpc"?h.historicalLink:""),x.classList.toggle("selected-node",P===S||b==="lighting"&&["pi","gateway","lighting"].includes(P)),x.classList.toggle("excluded-node",v.systems[P]===!1),x.setAttribute("aria-pressed",String(P===S)),x.setAttribute("aria-label",`${h.components[P].title}. ${mn.includes(P)?h.physical:h.engineering}`)}),a.querySelector("[data-input-label]").textContent=h.environmentLine,a.querySelector("[data-conceptual-label]").textContent=h.conceptual,document.getElementById("architecture-mode").textContent=v.automatic?h.automaticFlow:h.manualFlow,a.querySelectorAll("[data-engineering-path]").forEach(x=>{x.classList.toggle("selected-edge",x.dataset.engineeringPath===b)}),document.querySelectorAll("[data-comm-node]").forEach(x=>{const P=x.dataset.commNode==="environment"?"sensors":x.dataset.commNode;x.classList.toggle("selected-node",P===S)}),["device","system","scenario","mode","reset"].includes(g.type)&&(clearTimeout(f),d=g.type,g.type==="reset"?(c=[],d=null):g.type==="device"?c=[g.key==="tints"?"glass":g.key.startsWith("lamp")?"lighting":"blinds"]:g.type==="system"?c=[g.key]:c=g.type==="mode"||v.automatic?Object.keys(v.systems).filter(x=>v.systems[x]):[],a.querySelectorAll(".signal-path").forEach(x=>x.classList.remove("signal-path")),a.offsetWidth,a.querySelectorAll("[data-engineering-path]").forEach(x=>x.classList.toggle("signal-path",c.includes(x.dataset.engineeringPath)||c.length>0&&["supervisory",v.automatic?"sensors":"user"].includes(x.dataset.engineeringPath))),f=setTimeout(()=>a.querySelectorAll(".signal-path").forEach(x=>x.classList.remove("signal-path")),2400)),document.getElementById("engineering-signal").textContent=c.length?c.map(x=>`${v.automatic?h.components.sensors.short:h.userLabel} → LiSA → ${p(x,h)}${R[x]?` · ${R[x]}`:""}`).join(" | "):d?v.automatic?E.automatic:E.manualWeather:h.noSignal,o.hidden=v.tourStep===null,document.getElementById("tour-start").textContent=o.hidden?h.start:h.resume,document.documentElement.style.setProperty("--tour-height",o.hidden?"0px":`${o.offsetHeight}px`),!o.hidden){const x=v.tourStep,P=pn[x],[k,z]=h.tour[P.key];document.getElementById("tour-count").textContent=`${h.step} ${x+1} ${h.of} ${pn.length}`,document.getElementById("tour-title").textContent=k,document.getElementById("tour-description").textContent=z,document.getElementById("tour-previous").disabled=x===0,document.getElementById("tour-previous").textContent=x===0?`← ${h.previous}`:`← ${h.previous}: ${h.tour[pn[x-1].key][0]}`,document.getElementById("tour-next").textContent=x===pn.length-1?h.finish:`${h.next}: ${h.tour[pn[x+1].key][0]} →`}}return new ResizeObserver(()=>document.documentElement.style.setProperty("--tour-height",o.hidden?"0px":`${o.offsetHeight}px`)).observe(o),_(i.getState()),i.subscribe(_),window.addEventListener("pagehide",()=>clearTimeout(f),{once:!0}),{focusScene:u}}const Mn=i=>`<span data-i18n="${i}"></span>`,an=(i,e,t="")=>`<button type="button" id="${i}" class="${t}" data-i18n="${e}"></button>`,xr=i=>`<button type="button" class="system-switch" role="switch" data-system="${i}"><i aria-hidden="true"></i><span></span></button>`;function Xc(i){document.querySelector("#app").innerHTML=`
    <header class="header"><div class="brand"><img src="./logo_living_lab.png" data-i18n-alt="logoAlt"><div><span class="eyebrow" data-i18n="eyebrow"></span><strong>Smart Office <span class="brand-3d">3D</span></strong></div></div>
      <div class="header-tools"><label class="language"><span class="sr-only" data-i18n="languageLabel"></span><select id="languageSelect"><option value="de">Deutsch</option><option value="en">English</option></select></label>${an("help","help","quiet")}${an("fullscreen","fullscreen","quiet")}${an("reset","reset","reset")}</div></header>
    <main><div class="intro"><div><h1 data-i18n="headline"></h1><p data-i18n="subtitle"></p></div><span class="local-badge" data-i18n="simBadge"></span></div>
    <nav class="scenarios" data-label="scenarioQuestion">${Object.entries(Ln).map(([c],f)=>`<button class="scenario" data-scenario="${c}"><span class="weather-icon" aria-hidden="true">${["◒","◔","☀","☁","◓","☾"][f]}</span><span class="scenario-name"></span></button>`).join("")}</nav>
    <div class="workspace"><section class="visual-panel"><div id="viewport"><div class="scene-heading"><div><span class="overline" data-i18n="room"></span><strong id="sceneName"></strong></div><span id="modeBadge"></span></div><div id="fallback" role="status" hidden></div><div class="facade-legend"><span><i class="glass-dot"></i>${Mn("facadeGlass")}</span><span><i class="blind-dot"></i>${Mn("facadeBlinds")}</span></div></div>
      <div class="camera-bar"><div class="camera-presets">${an("camera-overview","overview","active")}${an("camera-windows","windows")}${an("camera-lighting","lighting")}</div><button id="camera-reset" class="icon-button" data-label="cameraReset">↺</button><label class="cutaway"><input id="cutaway" type="checkbox" checked>${Mn("cutaway")}</label></div>
      <div class="scene-caption"><span data-i18n="drag"></span><span data-i18n="geometryNote"></span></div>
      <div class="learning-cards"><article><span class="card-number">01</span><h3 data-i18n="outside"></h3><p id="outsideText"></p></article><article><span class="card-number">02</span><h3 data-i18n="detection"></h3><p data-i18n="detectionText"></p></article><article><span class="card-number">03</span><h3 data-i18n="response"></h3><p id="responseText"></p></article><article><span class="card-number">04</span><h3 data-i18n="benefit"></h3><p id="benefitText"></p></article></div>
    </section>
    <aside class="controls"><div class="control-header"><h2 data-i18n="controlsTitle"></h2><div class="segmented modes" role="group" data-label="modeLabel">${an("automaticMode","automatic","active")}${an("manualMode","manual")}</div><div class="system-hint" data-i18n="systemHint"></div><p id="modeHint"></p></div>
      <section class="device-section"><div class="device-title"><span class="device-symbol">▦</span><h3 data-i18n="tintTitle"></h3>${xr("glass")}</div><p data-i18n="tintIntro"></p><div class="tint-matrix" role="group" data-label="tintMatrix"><span></span>${["tintLow","tintMedium","tintHigh"].map(Mn).join("")}${["tintTop","tintMiddle","tintBottom"].map((c,f)=>`${Mn(c)}${["low","medium","high"].map(d=>`<button class="tint-option" data-row="${f}" data-tint="${d}"><i class="swatch ${d}"></i></button>`).join("")}`).join("")}</div><small data-i18n="tintNote"></small></section>
      <section class="device-section"><div class="device-title"><span class="device-symbol">☰</span><h3 data-i18n="blindTitle"></h3>${xr("blinds")}</div><label class="range-label" for="blindPosition">${Mn("blindPosition")}<output id="blindPositionValue"></output></label><input id="blindPosition" type="range" min="0" max="100" step="1"><small data-i18n="blindEndpoints"></small><div class="range-label angle-label">${Mn("slatAngle")}<output id="slatAngleValue"></output></div><div class="angles" role="group" data-label="slatAngleGroup">${[0,30,45,80].map(c=>`<button class="angle-option" data-angle="${c}"><i style="--angle:${-c}deg" aria-hidden="true"></i>${c}°</button>`).join("")}</div></section>
      <section class="device-section"><div class="device-title"><span class="device-symbol">⊙</span><h3 data-i18n="lightingTitle"></h3>${xr("lighting")}</div><label class="range-label" for="lampBrightness">${Mn("lampBrightness")}<output id="lampBrightnessValue"></output></label><input id="lampBrightness" type="range" min="0" max="100" step="1"><div class="lighting-options" role="group" data-label="temperatureGroup"><button data-temperature="warm" data-i18n="warmWhite"></button><button data-temperature="neutral" data-i18n="neutralWhite"></button></div><div class="lighting-options" role="group" data-label="directionGroup"><button data-direction="direct" data-i18n="directLight"></button><button data-direction="indirect" data-i18n="indirectLight"></button></div></section>
    </aside></div>
    <section class="communication-area" data-view="technical"><div class="communication-head"><h2 data-i18n="communicationTitle"></h2><span data-i18n="simulationStatus"></span></div>
      <div class="technical-only"><p class="historical" data-i18n="historical"></p></div>
      <div class="supervisory-summary"><button data-comm-node="user" data-i18n="nodeUser"></button><span>→</span><button data-comm-node="lisa" data-i18n="nodeLisa"></button><span data-i18n="supervisoryDetail"></span></div><div class="communication-diagram"><button data-comm-node="environment"><strong data-i18n="nodeEnvironment"></strong></button><span class="communication-link" data-comm-path="environment"></span><button data-comm-node="wago"><strong data-i18n="nodeWago"></strong><small class="technical-only" data-i18n="nodeWagoDetail"></small></button><div class="device-paths">${[["glass","nodeGlass","BACnet","nodeGlassDetail"],["blinds","nodeBlinds","SMI","nodeBlindsDetail"],["lighting","nodeLighting","ZigBee","nodeLightingDetail"]].map(([c,f,d,p])=>`<div class="device-path" data-comm-path="${c}"><span class="protocol technical-only">${d}</span><button data-comm-node="${c}"><strong data-i18n="${f}"></strong><small class="technical-only" data-i18n="${p}"></small><span class="device-live" id="live-${c}"></span></button></div>`).join("")}</div><div class="technical-only mpc"><span>Modbus TCP ···</span><button data-comm-node="mpc"><strong data-i18n="nodeMpc"></strong><small data-i18n="nodeMpcDetail"></small></button></div></div>
      <p class="technical-only protocol-chain" data-i18n="protocolLighting"></p><div class="communication-explanation" aria-live="polite"><strong data-i18n="happeningTitle"></strong><p id="communicationExplanation"></p></div><details><summary data-i18n="showDetails"></summary><h3 data-i18n="communicationLogTitle"></h3><ol id="eventList"></ol></details>
    </section><footer><span data-i18n="disclaimer"></span><span data-i18n="shortcuts"></span></footer></main>
    <dialog id="helpDialog"><h2 data-i18n="helpTitle"></h2><p data-i18n="helpText"></p><p data-i18n="autoHint"></p><p data-i18n="tintNote"></p><p data-i18n="shortcuts"></p>${an("closeHelp","close")}</dialog><div id="notice" role="status"></div>`,document.querySelector(".brand img").addEventListener("error",c=>c.currentTarget.hidden=!0);let e=null,t=[];const n=(c,f,d={})=>i.dispatch({type:c,value:f,...d});document.querySelectorAll("[data-scenario]").forEach(c=>c.onclick=()=>n("scenario",c.dataset.scenario)),document.getElementById("languageSelect").onchange=c=>n("language",c.target.value),document.querySelectorAll("[data-system]").forEach(c=>c.onclick=()=>n("system",!i.getState().systems[c.dataset.system],{key:c.dataset.system})),document.getElementById("automaticMode").onclick=()=>n("mode",!0),document.getElementById("manualMode").onclick=()=>n("mode",!1),document.querySelectorAll("[data-tint]").forEach(c=>c.onclick=()=>n("device",c.dataset.tint,{key:"tints",row:+c.dataset.row})),document.querySelectorAll("[data-angle]").forEach(c=>c.onclick=()=>n("device",+c.dataset.angle,{key:"slatAngle"}));for(const[c,f]of[["temperature","lampTemperature"],["direction","lampDirection"]])document.querySelectorAll(`[data-${c}]`).forEach(d=>d.onclick=()=>n("device",d.dataset[c],{key:f}));for(const c of["blindPosition","lampBrightness"]){const f=document.getElementById(c);f.oninput=d=>n("device",+d.target.value,{key:c,commit:!1}),f.onchange=d=>n("device",+d.target.value,{key:c})}for(const c of["overview","windows","lighting"])document.getElementById(`camera-${c}`).onclick=()=>n("camera",c);document.getElementById("camera-reset").onclick=()=>n("camera","overview"),document.getElementById("cutaway").onchange=c=>n("cutaway",c.target.checked),document.getElementById("reset").onclick=()=>{e=null,document.querySelector(".communication-area details").open=!1,n("reset")};const s=document.getElementById("helpDialog");document.getElementById("help").onclick=()=>s.showModal(),document.getElementById("closeHelp").onclick=()=>s.close();const r=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{document.getElementById("notice").textContent=yt[i.getState().language].fullscreenError}};document.getElementById("fullscreen").onclick=r,document.addEventListener("keydown",c=>{if(c.altKey||c.ctrlKey||c.metaKey||c.repeat||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||s.open)return;const f=c.key.toLowerCase();if(["1","2","3"].includes(f))n("scenario",{1:"strongSun",2:"cloudy",3:"night"}[f]);else if(["4","5","6"].includes(f))n("mode",!1),document.querySelector(`[data-row="${+f-4}"].active`).focus();else if(f==="m")n("mode",!1);else if(f==="0")n("mode",!0);else if(f==="r")n("camera","overview");else if(f==="f")r();else if(f==="?")s.showModal();else return;c.preventDefault()}),document.querySelectorAll("[data-comm-node]").forEach(c=>c.onclick=()=>{e=c.dataset.commNode,n("architecture-node",e==="environment"?"sensors":e),u.focusScene()});function o(c,f){c.classList.toggle("active",f),c.setAttribute("aria-pressed",String(f))}function a(c,f){return`${f.nodeGlass}: ${c.tints.map(d=>f.states[d]).join(" / ")}. ${f.nodeBlinds}: ${c.blindPosition}% · ${c.slatAngle}°. ${f.nodeLighting}: ${c.lampBrightness}% · ${f[c.lampTemperature==="warm"?"warmWhite":"neutralWhite"]} · ${f[c.lampDirection==="direct"?"directLight":"indirectLight"]}.`}function l(c,f={}){var F;const d=yt[c.language],p=hs(c),_=Ln[c.scenario],v={glass:d.nodeGlass,blinds:d.nodeBlinds,lighting:d.nodeLighting},g=Object.keys(c.systems).filter(T=>c.systems[T]).map(T=>v[T]),h=g.length<3;document.querySelectorAll("[data-system]").forEach(T=>{const R=T.dataset.system,N=c.systems[R];T.setAttribute("aria-checked",String(N)),T.setAttribute("aria-label",`${v[R]}: ${d.systemSelection}`),T.title=d.systemOffHelp[R],T.querySelector("span").textContent=N?d.systemActive:d.systemOff,T.closest(".device-section").classList.toggle("system-excluded",!N),document.querySelector(`[data-comm-path="${R}"]`).classList.toggle("system-excluded",!N)}),document.documentElement.lang=c.language,document.title=`${d.pageTitle} · 3D`,document.querySelectorAll("[data-i18n]").forEach(T=>T.textContent=d[T.dataset.i18n]),document.querySelectorAll("[data-i18n-alt]").forEach(T=>T.alt=d[T.dataset.i18nAlt]),document.querySelectorAll("[data-label]").forEach(T=>T.setAttribute("aria-label",d[T.dataset.label])),(F=document.querySelector("#viewport canvas"))==null||F.setAttribute("aria-label",`${d.room}. ${d.drag}`),document.getElementById("languageSelect").value=c.language,document.getElementById("sceneName").textContent=_.labels[c.language],document.getElementById("modeBadge").textContent=c.automatic?d.automatic:d.manual,document.querySelectorAll("[data-scenario]").forEach(T=>{o(T,c.scenario===T.dataset.scenario),T.querySelector(".scenario-name").textContent=Ln[T.dataset.scenario].labels[c.language]}),o(document.getElementById("automaticMode"),c.automatic),o(document.getElementById("manualMode"),!c.automatic),document.getElementById("modeHint").textContent=d[c.automatic?"autoHint":"manualHint"],document.querySelectorAll("[data-tint]").forEach(T=>{o(T,p.tints[+T.dataset.row]===T.dataset.tint),T.disabled=c.automatic||!c.systems.glass,T.setAttribute("aria-label",d.tintCell(d[["tintTop","tintMiddle","tintBottom"][+T.dataset.row]],d.states[T.dataset.tint]))}),document.querySelectorAll("[data-angle]").forEach(T=>{o(T,p.slatAngle===+T.dataset.angle),T.disabled=c.automatic||!c.systems.blinds});for(const[T,R]of[["temperature","lampTemperature"],["direction","lampDirection"]])document.querySelectorAll(`[data-${T}]`).forEach(N=>{o(N,p[R]===N.dataset[T]),N.disabled=c.automatic||!c.systems.lighting});for(const T of["blindPosition","lampBrightness"])document.getElementById(T).value=p[T],document.getElementById(T).disabled=c.automatic||!c.systems[T==="blindPosition"?"blinds":"lighting"],document.getElementById(`${T}Value`).textContent=`${p[T]}%`;document.getElementById("slatAngleValue").textContent=`${p.slatAngle}°`;for(const T of["overview","windows","lighting"])o(document.getElementById(`camera-${T}`),c.camera===T);document.getElementById("cutaway").checked=c.cutaway,document.getElementById("outsideText").textContent=d.weather[c.scenario],document.getElementById("responseText").textContent=h?d.systemResponse(g.join(", ")||d.noSystems):c.automatic?d.actionExplanations[c.scenario]:d.actionExplanations.manual,document.getElementById("benefitText").textContent=h?d.isolationHint:c.automatic?d.states[p.goal]:d.manualHint,document.getElementById("live-glass").textContent=p.tints.map(T=>d.states[T]).join(" / "),document.getElementById("live-blinds").textContent=`${p.blindPosition}% · ${p.slatAngle}°`,document.getElementById("live-lighting").textContent=`${p.lampBrightness}% · ${d[p.lampTemperature==="warm"?"warmWhite":"neutralWhite"]} · ${d[p.lampDirection==="direct"?"directLight":"indirectLight"]}`,["scenario","mode","device","system","reset"].includes(f.type)&&(e=null),["camera","inspect","reveal","architecture-node","tour-start","tour-step","tour-exit"].includes(f.type)&&(e=c.component==="sensors"?"environment":["pi","gateway"].includes(c.component)?"lighting":c.component);for(const T of Object.keys(c.systems))c.systems[T]||(document.getElementById(`live-${T}`).textContent=`${d.systemOff} · ${d.systemOffState[T]}`);const E=c.events[0],M=(E==null?void 0:E.type)==="scenario"?c.automatic?c.scenario:"manual":(E==null?void 0:E.type)==="tints"?"tint":E!=null&&E.type.startsWith("lamp")?"lighting":["blindPosition","slatAngle"].includes(E==null?void 0:E.type)?"blinds":c.automatic?"automatic":"manual";document.getElementById("communicationExplanation").textContent=e?d.explanations[e]:h?d.systemResponse(g.join(", ")||d.noSystems):(E==null?void 0:E.type)==="scenario"&&!c.automatic?d.manualWeather:d.actionExplanations[M],document.getElementById("eventList").replaceChildren(...c.events.map(T=>{const R=document.createElement("li"),N=document.createElement("b");return N.textContent=`${T.automatic?d.eventAutomatic:T.type==="scenario"?d.manualWeather:d.eventManual} · ${T.protocol==="local"?d.localModel:T.protocol}`,R.append(N,document.createTextNode(`${Ln[T.scenario].labels[c.language]} · ${d.request}: ${a(T.devices,d)} ${d.systemSelection}: ${Object.keys(T.systems).filter(b=>T.systems[b]).map(b=>v[b]).join(", ")||d.noSystems}.`)),R})),["scenario","mode","device","system","reset"].includes(f.type)&&f.commit!==!1&&(t.forEach(clearTimeout),t=[],document.querySelectorAll(".signal-active").forEach(T=>T.classList.remove("signal-active")),E.paths.forEach((T,R)=>t.push(setTimeout(()=>{var N,b;(N=document.querySelector(`[data-comm-node="${T}"]`))==null||N.classList.add("signal-active"),(b=document.querySelector(`[data-comm-path="${T}"]`))==null||b.classList.add("signal-active")},R*180))),t.push(setTimeout(()=>document.querySelectorAll(".signal-active").forEach(T=>T.classList.remove("signal-active")),2100)));const S=document.getElementById("fallback");S.hidden||(S.textContent=d[S.dataset.reason||"webgl"])}l(i.getState()),i.subscribe(l);const u=Wc(i);return{host:document.getElementById("viewport"),render:l,showFailure(c="webgl"){const f=document.getElementById("fallback");f.hidden=!1,f.dataset.reason=c,f.textContent=yt[i.getState().language][c]},clearCameraSelection(){document.querySelectorAll(".camera-presets button").forEach(c=>o(c,!1))}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="170",Li={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qc=0,ya=1,Yc=2,$l=1,Zl=2,fn=3,Un=0,Lt=1,kt=2,Dn=0,Di=1,Sa=2,Ma=3,Ea=4,$c=5,qn=100,Zc=101,jc=102,Kc=103,Jc=104,Qc=200,eu=201,tu=202,nu=203,ao=204,lo=205,iu=206,su=207,ru=208,ou=209,au=210,lu=211,cu=212,uu=213,hu=214,co=0,uo=1,ho=2,Oi=3,fo=4,po=5,mo=6,go=7,jl=0,du=1,fu=2,In=0,pu=1,mu=2,gu=3,Kl=4,_u=5,vu=6,xu=7,Jl=300,Fi=301,Bi=302,_o=303,vo=304,hr=306,xo=1e3,$n=1001,yo=1002,Ot=1003,yu=1004,ys=1005,en=1006,yr=1007,Zn=1008,vn=1009,Ql=1010,ec=1011,ds=1012,ea=1013,Kn=1014,tn=1015,_s=1016,ta=1017,na=1018,zi=1020,tc=35902,nc=1021,ic=1022,Kt=1023,sc=1024,rc=1025,Ii=1026,ki=1027,ia=1028,sa=1029,oc=1030,ra=1031,oa=1033,er=33776,tr=33777,nr=33778,ir=33779,So=35840,Mo=35841,Eo=35842,bo=35843,To=36196,Ao=37492,wo=37496,Co=37808,Ro=37809,Po=37810,Lo=37811,Do=37812,Io=37813,Uo=37814,No=37815,Oo=37816,Fo=37817,Bo=37818,zo=37819,ko=37820,Ho=37821,sr=36492,Go=36494,Vo=36495,ac=36283,Wo=36284,Xo=36285,qo=36286,Su=3200,Mu=3201,lc=0,Eu=1,Pn="",Nt="srgb",Vi="srgb-linear",dr="linear",tt="srgb",ci=7680,ba=519,bu=512,Tu=513,Au=514,cc=515,wu=516,Cu=517,Ru=518,Pu=519,Ta=35044,Lu=35048,Aa="300 es",gn=2e3,or=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const Ui=Math.PI/180,Hi=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function aa(i,e){return(i%e+e)%e}function Du(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Iu(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function Uu(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function Nu(i,e=1){return e-Math.abs(aa(i,e*2)-e)}function Ou(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zu(i,e){return i+Math.random()*(e-i)}function ku(i){return i*(.5-Math.random())}function Hu(i){i!==void 0&&(wa=i);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gu(i){return i*Ui}function Vu(i){return i*Hi}function Wu(i){return(i&i-1)===0&&i!==0}function Xu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yu(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),c=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*c,l*f,l*d,a*u);break;case"YZY":i.set(l*d,a*c,l*f,a*u);break;case"ZXZ":i.set(l*f,l*d,a*c,a*u);break;case"XZX":i.set(a*c,l*_,l*p,a*u);break;case"YXY":i.set(l*p,a*c,l*_,a*u);break;case"ZYZ":i.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:Ui,RAD2DEG:Hi,generateUUID:ii,clamp:mt,euclideanModulo:aa,mapLinear:Du,inverseLerp:Iu,lerp:as,damp:Uu,pingpong:Nu,smoothstep:Ou,smootherstep:Fu,randInt:Bu,randFloat:zu,randFloatSpread:ku,seededRandom:Hu,degToRad:Gu,radToDeg:Vu,isPowerOfTwo:Wu,ceilPowerOfTwo:Xu,floorPowerOfTwo:qu,setQuaternionFromProperEuler:Yu,normalize:bt,denormalize:bi};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u)}set(e,t,n,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],d=n[2],p=n[5],_=n[8],v=s[0],g=s[3],h=s[6],E=s[1],M=s[4],S=s[7],F=s[2],T=s[5],R=s[8];return r[0]=o*v+a*E+l*F,r[3]=o*g+a*M+l*T,r[6]=o*h+a*S+l*R,r[1]=u*v+c*E+f*F,r[4]=u*g+c*M+f*T,r[7]=u*h+c*S+f*R,r[2]=d*v+p*E+_*F,r[5]=d*g+p*M+_*T,r[8]=d*h+p*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*r*c+n*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*r,p=u*r-o*l,_=t*f+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*u-c*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-u*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new ze;function uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){const i=ar("canvas");return i.style.display="block",i}const Ca={};function ss(i){i in Ca||(Ca[i]=!0,console.warn(i))}function Zu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ju(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ku(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ra=[.64,.33,.3,.6,.15,.06],Pa=[.2126,.7152,.0722],La=[.3127,.329],Da=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Vi]:{primaries:Ra,whitePoint:La,transfer:dr,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:Pa,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Ra,whitePoint:La,transfer:tt,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:Pa,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let ui;class Ju{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ar("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qu=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mr(s[o].image)):r.push(Mr(s[o]))}else r=Mr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class St extends ni{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=$n,s=$n,r=en,o=Zn,a=Kt,l=vn,u=St.DEFAULT_ANISOTROPY,c=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ii(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Jl;St.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,S=(p+1)/2,F=(h+1)/2,T=(c+d)/4,R=(f+v)/4,N=(_+g)/4;return M>S&&M>F?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=R/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=N/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=R/r,s=N/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(f-v)/E,this.z=(d-c)/E,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],c=n[s+2],f=n[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||u!==p||c!==_){let g=1-a;const h=l*d+u*p+c*_+f*v,E=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const F=Math.sqrt(M),T=Math.atan2(F,h*E);g=Math.sin(g*T)/F,a=Math.sin(a*T)/F}const S=a*E;if(l=l*g+d*S,u=u*g+p*S,c=c*g+_*S,f=f*g+v*S,g===1-a){const F=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=F,u*=F,c*=F,f*=F}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-a*p,e[t+2]=u*_+c*p+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-n*u,this._z=r*c+o*u+n*l-s*a,this._w=o*c-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),c=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*u+o*f-a*c,this.y=n+l*c+a*u-r*f,this.z=s+l*f+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new U,Ua=new Qn;class si{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(r,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Ms.subVectors(this.max,ji),hi.subVectors(e.a,ji),di.subVectors(e.b,ji),fi.subVectors(e.c,ji),En.subVectors(di,hi),bn.subVectors(fi,di),Bn.subVectors(hi,fi);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,En.z,0,-En.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-En.y,En.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!br(t,hi,di,fi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!br(t,hi,di,fi,Ms))?!1:(Es.crossVectors(En,bn),t=[Es.x,Es.y,Es.z],br(t,hi,di,fi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new U,new U,new U,new U,new U,new U,new U,new U],qt=new U,Ss=new si,hi=new U,di=new U,fi=new U,En=new U,bn=new U,Bn=new U,ji=new U,Ms=new U,Es=new U,zn=new U;function br(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),u=t.dot(zn),c=n.dot(zn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ih=new si,Ki=new U,Tr=new U;class ri{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ih.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Tr)),this.expandByPoint(Ki.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new U,Ar=new U,bs=new U,Tn=new U,wr=new U,Ts=new U,Cr=new U;class vs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ar.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Tn.dot(this.direction),l=-Tn.dot(bs),u=Tn.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=r*c,f>=0)if(d>=-_)if(d<=_){const v=1/c;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ar).addScaledVector(bs,d),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){wr.subVectors(t,e),Ts.subVectors(n,e),Cr.crossVectors(wr,Ts);let o=this.direction.dot(Cr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(Tn,Ts));if(l<0)return null;const u=a*this.direction.dot(wr.cross(Tn));if(u<0||l+u>o)return null;const c=-a*Tn.dot(Cr);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,o,a,l,u,c,f,d,p,_,v,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u,c,f,d,p,_,v,g)}set(e,t,n,s,r,o,a,l,u,c,f,d,p,_,v,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/pi.setFromMatrixColumn(e,0).length(),r=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,v=u*f;t[0]=d+v*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,v=u*f;t[0]=d-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,v=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+v,t[1]=l*f,t[5]=v*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=v-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+v,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sh,e,rh)}lookAt(e,t,n){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),An.crossVectors(n,It),An.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),An.crossVectors(n,It)),An.normalize(),As.crossVectors(It,An),s[0]=An.x,s[4]=As.x,s[8]=It.x,s[1]=An.y,s[5]=As.y,s[9]=It.y,s[2]=An.z,s[6]=As.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],d=n[9],p=n[13],_=n[2],v=n[6],g=n[10],h=n[14],E=n[3],M=n[7],S=n[11],F=n[15],T=s[0],R=s[4],N=s[8],b=s[12],x=s[1],P=s[5],k=s[9],z=s[13],X=s[2],$=s[6],W=s[10],Q=s[14],G=s[3],ue=s[7],me=s[11],Ee=s[15];return r[0]=o*T+a*x+l*X+u*G,r[4]=o*R+a*P+l*$+u*ue,r[8]=o*N+a*k+l*W+u*me,r[12]=o*b+a*z+l*Q+u*Ee,r[1]=c*T+f*x+d*X+p*G,r[5]=c*R+f*P+d*$+p*ue,r[9]=c*N+f*k+d*W+p*me,r[13]=c*b+f*z+d*Q+p*Ee,r[2]=_*T+v*x+g*X+h*G,r[6]=_*R+v*P+g*$+h*ue,r[10]=_*N+v*k+g*W+h*me,r[14]=_*b+v*z+g*Q+h*Ee,r[3]=E*T+M*x+S*X+F*G,r[7]=E*R+M*P+S*$+F*ue,r[11]=E*N+M*k+S*W+F*me,r[15]=E*b+M*z+S*Q+F*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],g=e[11],h=e[15];return _*(+r*l*f-s*u*f-r*a*d+n*u*d+s*a*p-n*l*p)+v*(+t*l*p-t*u*d+r*o*d-s*o*p+s*u*c-r*l*c)+g*(+t*u*f-t*a*p-r*o*f+n*o*p+r*a*c-n*u*c)+h*(-s*a*c-t*l*f+t*a*d+s*o*f-n*o*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],g=e[14],h=e[15],E=f*g*u-v*d*u+v*l*p-a*g*p-f*l*h+a*d*h,M=_*d*u-c*g*u-_*l*p+o*g*p+c*l*h-o*d*h,S=c*v*u-_*f*u+_*a*p-o*v*p-c*a*h+o*f*h,F=_*f*l-c*v*l-_*a*d+o*v*d+c*a*g-o*f*g,T=t*E+n*M+s*S+r*F;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(v*d*r-f*g*r-v*s*p+n*g*p+f*s*h-n*d*h)*R,e[2]=(a*g*r-v*l*r+v*s*u-n*g*u-a*s*h+n*l*h)*R,e[3]=(f*l*r-a*d*r-f*s*u+n*d*u+a*s*p-n*l*p)*R,e[4]=M*R,e[5]=(c*g*r-_*d*r+_*s*p-t*g*p-c*s*h+t*d*h)*R,e[6]=(_*l*r-o*g*r-_*s*u+t*g*u+o*s*h-t*l*h)*R,e[7]=(o*d*r-c*l*r+c*s*u-t*d*u-o*s*p+t*l*p)*R,e[8]=S*R,e[9]=(_*f*r-c*v*r-_*n*p+t*v*p+c*n*h-t*f*h)*R,e[10]=(o*v*r-_*a*r+_*n*u-t*v*u-o*n*h+t*a*h)*R,e[11]=(c*a*r-o*f*r-c*n*u+t*f*u+o*n*p-t*a*p)*R,e[12]=F*R,e[13]=(c*v*s-_*f*s+_*n*d-t*v*d-c*n*g+t*f*g)*R,e[14]=(_*a*s-o*v*s-_*n*l+t*v*l+o*n*g-t*a*g)*R,e[15]=(o*f*s-c*a*s+c*n*l-t*f*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,f=a+a,d=r*u,p=r*c,_=r*f,v=o*c,g=o*f,h=a*f,E=l*u,M=l*c,S=l*f,F=n.x,T=n.y,R=n.z;return s[0]=(1-(v+h))*F,s[1]=(p+S)*F,s[2]=(_-M)*F,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+h))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(_+M)*R,s[9]=(g-E)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const u=1/r,c=1/o,f=1/a;return Yt.elements[0]*=u,Yt.elements[1]*=u,Yt.elements[2]*=u,Yt.elements[4]*=c,Yt.elements[5]*=c,Yt.elements[6]*=c,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gn){const l=this.elements,u=2*r/(t-e),c=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(a===gn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===or)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gn){const l=this.elements,u=1/(t-e),c=1/(n-s),f=1/(o-r),d=(t+e)*u,p=(n+s)*c;let _,v;if(a===gn)_=(o+r)*f,v=-2*f;else if(a===or)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new U,Yt=new Qe,sh=new U(0,0,0),rh=new U(1,1,1),An=new U,As=new U,It=new U,Na=new Qe,Oa=new Qn;class nn{constructor(e=0,t=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class la{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oh=0;const Fa=new U,mi=new Qn,un=new Qe,ws=new U,Ji=new U,ah=new U,lh=new Qn,Ba=new U(1,0,0),za=new U(0,1,0),ka=new U(0,0,1),Ha={type:"added"},ch={type:"removed"},gi={type:"childadded",child:null},Rr={type:"childremoved",child:null};class at extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new U,t=new nn,n=new Qn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ze}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(za,e)}rotateZ(e){return this.rotateOnAxis(ka,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(za,e)}translateZ(e){return this.translateOnAxis(ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ji,ws,this.up):un.lookAt(ws,Ji,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(un),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ha),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ha),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}at.DEFAULT_UP=new U(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new U,hn=new U,Pr=new U,dn=new U,_i=new U,vi=new U,Ga=new U,Lr=new U,Dr=new U,Ir=new U,Ur=new it,Nr=new it,Or=new it;class Ht{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),hn.subVectors(n,t),Pr.subVectors(e,t);const o=$t.dot($t),a=$t.dot(hn),l=$t.dot(Pr),u=hn.dot(hn),c=hn.dot(Pr),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ur.setScalar(0),Nr.setScalar(0),Or.setScalar(0),Ur.fromBufferAttribute(e,t),Nr.fromBufferAttribute(e,n),Or.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ur,r.x),o.addScaledVector(Nr,r.y),o.addScaledVector(Or,r.z),o}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),hn.subVectors(e,t),$t.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;_i.subVectors(s,n),vi.subVectors(r,n),Lr.subVectors(e,n);const l=_i.dot(Lr),u=vi.dot(Lr);if(l<=0&&u<=0)return t.copy(n);Dr.subVectors(e,s);const c=_i.dot(Dr),f=vi.dot(Dr);if(c>=0&&f<=c)return t.copy(s);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(_i,o);Ir.subVectors(e,r);const p=_i.dot(Ir),_=vi.dot(Ir);if(_>=0&&p<=_)return t.copy(r);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(vi,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return Ga.subVectors(r,s),a=(f-c)/(f-c+(p-_)),t.copy(s).addScaledVector(Ga,a);const h=1/(g+v+d);return o=v*h,a=d*h,t.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=aa(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fr(o,r,e+1/3),this.g=Fr(o,r,e),this.b=Fr(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return $e.fromWorkingColorSpace(xt.copy(this),e),Math.round(mt(xt.r*255,0,255))*65536+Math.round(mt(xt.g*255,0,255))*256+Math.round(mt(xt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Nt){$e.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,s=xt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Cs);const n=as(wn.h,Cs.h,t),s=as(wn.s,Cs.s,t),r=as(wn.l,Cs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new He;He.NAMES=fc;let uh=0;class oi extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=ii(),this.name="",this.blending=Di,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=lo,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fs extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new U,Rs=new ae;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class pc extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mc extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hh=0;const zt=new Qe,Br=new at,xi=new U,Ut=new si,Qi=new si,pt=new U;class Mt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Ut.min,Qi.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,Qi.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(Qi.min),Ut.expandByPoint(Qi.max))}Ut.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)pt.fromBufferAttribute(a,u),l&&(xi.fromBufferAttribute(e,u),pt.add(xi)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new U,l[N]=new U;const u=new U,c=new U,f=new U,d=new ae,p=new ae,_=new ae,v=new U,g=new U;function h(N,b,x){u.fromBufferAttribute(n,N),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,x),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[N].add(v),a[b].add(v),a[x].add(v),l[N].add(g),l[b].add(g),l[x].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,b=E.length;N<b;++N){const x=E[N],P=x.start,k=x.count;for(let z=P,X=P+k;z<X;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new U,S=new U,F=new U,T=new U;function R(N){F.fromBufferAttribute(s,N),T.copy(F);const b=a[N];M.copy(b),M.sub(F.multiplyScalar(F.dot(b))).normalize(),S.crossVectors(T,b);const P=S.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,P)}for(let N=0,b=E.length;N<b;++N){const x=E[N],P=x.start,k=x.count;for(let z=P,X=P+k;z<X;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),a.add(c),l.add(c),u.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new Gt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],f=r[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new Qe,kn=new vs,Ps=new ri,Wa=new U,Ls=new U,Ds=new U,Is=new U,zr=new U,Us=new U,Xa=new U,Ns=new U;class Pt extends at{constructor(e=new Mt,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],f=r[l];c!==0&&(zr.fromBufferAttribute(f,e),o?Us.addScaledVector(zr,c):Us.addScaledVector(zr.sub(t),c))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(Ps.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ps,Wa)===null||kn.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(Va.copy(r).invert(),kn.copy(e.ray).applyMatrix4(Va),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const g=d[_],h=o[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=E,F=M;S<F;S+=3){const T=a.getX(S),R=a.getX(S+1),N=a.getX(S+2);s=Os(this,h,e,n,u,c,f,T,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const E=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);s=Os(this,o,e,n,u,c,f,E,M,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const g=d[_],h=o[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=E,F=M;S<F;S+=3){const T=S,R=S+1,N=S+2;s=Os(this,h,e,n,u,c,f,T,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const E=g,M=g+1,S=g+2;s=Os(this,o,e,n,u,c,f,E,M,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function dh(i,e,t,n,s,r,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Un,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ns);return u<t.near||u>t.far?null:{distance:u,point:Ns.clone(),object:i}}function Os(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,Ls),i.getVertexPosition(l,Ds),i.getVertexPosition(u,Is);const c=dh(i,e,t,n,Ls,Ds,Is,Xa);if(c){const f=new U;Ht.getBarycoord(Xa,Ls,Ds,Is,f),s&&(c.uv=Ht.getInterpolatedAttribute(s,a,l,u,f,new ae)),r&&(c.uv1=Ht.getInterpolatedAttribute(r,a,l,u,f,new ae)),o&&(c.normal=Ht.getInterpolatedAttribute(o,a,l,u,f,new U),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new U,materialIndex:0};Ht.getNormal(Ls,Ds,Is,d.normal),c.face=d,c.barycoord=f}return c}class ei extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(f,2));function _(v,g,h,E,M,S,F,T,R,N,b){const x=S/R,P=F/N,k=S/2,z=F/2,X=T/2,$=R+1,W=N+1;let Q=0,G=0;const ue=new U;for(let me=0;me<W;me++){const Ee=me*P-z;for(let Pe=0;Pe<$;Pe++){const Xe=Pe*x-k;ue[v]=Xe*E,ue[g]=Ee*M,ue[h]=X,u.push(ue.x,ue.y,ue.z),ue[v]=0,ue[g]=0,ue[h]=T>0?1:-1,c.push(ue.x,ue.y,ue.z),f.push(Pe/R),f.push(1-me/N),Q+=1}}for(let me=0;me<N;me++)for(let Ee=0;Ee<R;Ee++){const Pe=d+Ee+$*me,Xe=d+Ee+$*(me+1),Z=d+(Ee+1)+$*(me+1),re=d+(Ee+1)+$*me;l.push(Pe,Xe,re),l.push(Xe,Z,re),G+=6}a.addGroup(p,G,b),p+=G,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function fh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const ph={clone:Gi,merge:At};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _c extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new U,qa=new ae,Ya=new ae;class Rt extends _c{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,qa,Ya),t.subVectors(Ya,qa)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Si=1;class _h extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rt(yi,Si,e,t);s.layers=this.layers,this.add(s);const r=new Rt(yi,Si,e,t);r.layers=this.layers,this.add(r);const o=new Rt(yi,Si,e,t);o.layers=this.layers,this.add(o);const a=new Rt(yi,Si,e,t);a.layers=this.layers,this.add(a);const l=new Rt(yi,Si,e,t);l.layers=this.layers,this.add(l);const u=new Rt(yi,Si,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vc extends St{constructor(e,t,n,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ei(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Dn});r.uniforms.tEquirect.value=t;const o=new Pt(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=en),new _h(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const kr=new U,xh=new U,yh=new ze;class Rn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=kr.subVectors(n,t).cross(xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yh.getNormalMatrix(e),s=this.coplanarPoint(kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ri,Fs=new U;class ca{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],f=s[6],d=s[7],p=s[8],_=s[9],v=s[10],g=s[11],h=s[12],E=s[13],M=s[14],S=s[15];if(n[0].setComponents(l-r,d-u,g-p,S-h).normalize(),n[1].setComponents(l+r,d+u,g+p,S+h).normalize(),n[2].setComponents(l+o,d+c,g+_,S+E).normalize(),n[3].setComponents(l-o,d-c,g-_,S-E).normalize(),n[4].setComponents(l-a,d-f,g-v,S-M).normalize(),t===gn)n[5].setComponents(l+a,d+f,g+v,S+M).normalize();else if(t===or)n[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fs.x=s.normal.x>0?e.max.x:e.min.x,Fs.y=s.normal.y>0?e.max.y:e.min.y,Fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sh(i){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,u){const c=l.array,f=l.updateRanges;if(i.bindBuffer(u,a),f.length===0)i.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];i.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class jn extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,f=e/a,d=t/l,p=[],_=[],v=[],g=[];for(let h=0;h<c;h++){const E=h*d-o;for(let M=0;M<u;M++){const S=M*f-r;_.push(S,-E,0),v.push(0,0,1),g.push(M/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const M=E+u*h,S=E+u*(h+1),F=E+1+u*(h+1),T=E+1+u*h;p.push(M,S,T),p.push(S,F,T)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ld=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Mh,alphahash_pars_fragment:Eh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:wh,aomap_fragment:Ch,aomap_pars_fragment:Rh,batching_pars_vertex:Ph,batching_vertex:Lh,begin_vertex:Dh,beginnormal_vertex:Ih,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:kh,color_fragment:Hh,color_pars_fragment:Gh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:$h,displacementmap_vertex:Zh,emissivemap_fragment:jh,emissivemap_pars_fragment:Kh,colorspace_fragment:Jh,colorspace_pars_fragment:Qh,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:sd,fog_vertex:rd,fog_pars_vertex:od,fog_fragment:ad,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_pars_fragment:ud,lights_lambert_fragment:hd,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:yd,lights_fragment_begin:Sd,lights_fragment_maps:Md,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:wd,map_fragment:Cd,map_pars_fragment:Rd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Od,morphtarget_pars_vertex:Fd,morphtarget_vertex:Bd,normal_fragment_begin:zd,normal_fragment_maps:kd,normal_pars_fragment:Hd,normal_pars_vertex:Gd,normal_vertex:Vd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:$d,opaque_fragment:Zd,packing:jd,premultiplied_alpha_fragment:Kd,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:rf,shadowmap_vertex:of,shadowmask_pars_fragment:af,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:uf,skinnormal_vertex:hf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:_f,uv_pars_fragment:vf,uv_pars_vertex:xf,uv_vertex:yf,worldpos_vertex:Sf,background_vert:Mf,background_frag:Ef,backgroundCube_vert:bf,backgroundCube_frag:Tf,cube_vert:Af,cube_frag:wf,depth_vert:Cf,depth_frag:Rf,distanceRGBA_vert:Pf,distanceRGBA_frag:Lf,equirect_vert:Df,equirect_frag:If,linedashed_vert:Uf,linedashed_frag:Nf,meshbasic_vert:Of,meshbasic_frag:Ff,meshlambert_vert:Bf,meshlambert_frag:zf,meshmatcap_vert:kf,meshmatcap_frag:Hf,meshnormal_vert:Gf,meshnormal_frag:Vf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:$f,meshtoon_frag:Zf,points_vert:jf,points_frag:Kf,shadow_vert:Jf,shadow_frag:Qf,sprite_vert:ep,sprite_frag:tp},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qt={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Bs={r:0,b:0,g:0},Gn=new nn,np=new Qe;function ip(i,e,t,n,s,r,o){const a=new He(0);let l=r===!0?0:1,u,c,f=null,d=0,p=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function v(E){let M=!1;const S=_(E);S===null?h(a,l):S&&S.isColor&&(h(S,1),M=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===hr)?(c===void 0&&(c=new Pt(new ei(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Gi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(Gn)),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,(f!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Pt(new jn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function h(E,M){E.getRGB(Bs,gc(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:g}}function sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,P,k,z,X){let $=!1;const W=f(z,k,P);r!==W&&(r=W,u(r.object)),$=p(x,z,k,X),$&&_(x,z,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(x,P,k,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function c(x){return i.deleteVertexArray(x)}function f(x,P,k){const z=k.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let W=$[z];return W===void 0&&(W=d(l()),$[z]=W),W}function d(x){const P=[],k=[],z=[];for(let X=0;X<t;X++)P[X]=0,k[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,P,k,z){const X=r.attributes,$=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){const me=X[G];let Ee=$[G];if(Ee===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),me===void 0||me.attribute!==Ee||Ee&&me.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function _(x,P,k,z){const X={},$=P.attributes;let W=0;const Q=k.getAttributes();for(const G in Q)if(Q[G].location>=0){let me=$[G];me===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const Ee={};Ee.attribute=me,me&&me.data&&(Ee.data=me.data),X[G]=Ee,W++}r.attributes=X,r.attributesNum=W,r.index=z}function v(){const x=r.newAttributes;for(let P=0,k=x.length;P<k;P++)x[P]=0}function g(x){h(x,0)}function h(x,P){const k=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;k[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),X[x]!==P&&(i.vertexAttribDivisor(x,P),X[x]=P)}function E(){const x=r.newAttributes,P=r.enabledAttributes;for(let k=0,z=P.length;k<z;k++)P[k]!==x[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function M(x,P,k,z,X,$,W){W===!0?i.vertexAttribIPointer(x,P,k,X,$):i.vertexAttribPointer(x,P,k,z,X,$)}function S(x,P,k,z){v();const X=z.attributes,$=k.getAttributes(),W=P.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let ue=X[Q];if(ue===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const me=ue.normalized,Ee=ue.itemSize,Pe=e.get(ue);if(Pe===void 0)continue;const Xe=Pe.buffer,Z=Pe.type,re=Pe.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===ea;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Re=oe.stride,Oe=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)h(G.location+Ie,oe.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)g(G.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<G.locationSize;Ie++)M(G.location+Ie,Ee/G.locationSize,Z,me,Re*re,(Oe+Ee/G.locationSize*Ie)*re,be)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)h(G.location+oe,ue.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<G.locationSize;oe++)g(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let oe=0;oe<G.locationSize;oe++)M(G.location+oe,Ee/G.locationSize,Z,me,Ee*re,Ee/G.locationSize*oe*re,be)}}else if(W!==void 0){const me=W[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(G.location,me);break;case 3:i.vertexAttrib3fv(G.location,me);break;case 4:i.vertexAttrib4fv(G.location,me);break;default:i.vertexAttrib1fv(G.location,me)}}}}E()}function F(){N();for(const x in n){const P=n[x];for(const k in P){const z=P[k];for(const X in z)c(z[X].object),delete z[X];delete P[k]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const k in P){const z=P[k];for(const X in z)c(z[X].object),delete z[X];delete P[k]}delete n[x.id]}function R(x){for(const P in n){const k=n[P];if(k[x.id]===void 0)continue;const z=k[x.id];for(const X in z)c(z[X].object),delete z[X];delete k[x.id]}}function N(){b(),o=!0,r!==s&&(r=s,u(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function rp(i,e,t){let n;function s(u){n=u}function r(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function o(u,c,f){f!==0&&(i.drawArraysInstanced(n,u,c,f),t.update(c,n,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,n,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=c[v]*d[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function op(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Kt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!N)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:F,maxSamples:T}}function ap(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?c(null):u();else{const E=r?0:n,M=E*4;let S=h.clippingState||null;l.value=S,S=c(_,d,M,p);for(let F=0;F!==M;++F)S[F]=t[F];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,d,p,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const h=p+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<h)&&(g=new Float32Array(h));for(let M=0,S=p;M!==v;++M,S+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function lp(i){let e=new WeakMap;function t(o,a){return a===_o?o.mapping=Fi:a===vo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_o||a===vo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vh(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yc extends _c{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,$a=[.125,.215,.35,.446,.526,.582],Yn=20,Hr=new yc,Za=new He;let Gr=null,Vr=0,Wr=0,Xr=!1;const Wn=(1+Math.sqrt(5))/2,Mi=1/Wn,ja=[new U(-Wn,Mi,0),new U(Wn,Mi,0),new U(-Mi,0,Wn),new U(Mi,0,Wn),new U(0,Wn,-Mi),new U(0,Wn,Mi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr,Vr,Wr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:_s,format:Kt,colorSpace:Vi,depthBuffer:!1},s=Ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(r)),this._blurMaterial=up(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,s){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Za),c.toneMapping=In,c.autoClear=!1;const p=new fs({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),_=new Pt(new ei,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Za),v=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const M=this._cubeSize;zs(s,E*M,h>2?M:0,M,M),c.setRenderTarget(s),v&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ja[(s-r-1)%ja.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Pt(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=r/_,g=isFinite(r)?1+Math.floor(c*v):Yn;g>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const h=[];let E=0;for(let R=0;R<Yn;++R){const N=R/v,b=Math.exp(-N*N/2);h.push(b),R===0?E+=b:R<g&&(E+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const S=this._sizeLods[s],F=3*S*(s>M-Ai?s-M+Ai:0),T=4*(this._cubeSize-S);zs(t,F,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Hr)}}function cp(i){const e=[],t=[],n=[];let s=i;const r=i-Ai+1+$a.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ai?l=$a[o-i+Ai-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,v=3,g=2,h=1,E=new Float32Array(v*_*p),M=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,N=T>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];E.set(b,v*_*T),M.set(d,g*_*T);const x=[T,T,T,T,T,T];S.set(x,h*_*T)}const F=new Mt;F.setAttribute("position",new Gt(E,v)),F.setAttribute("uv",new Gt(M,g)),F.setAttribute("faceIndex",new Gt(S,h)),e.push(F),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ja(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function up(i,e,t){const n=new Float32Array(Yn),s=new U(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Qa(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function el(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===_o||l===vo,c=l===Fi||l===Bi;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ka(i)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(t===null&&(t=new Ka(i)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fp(i,e,t,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let g=0,h=v.length;g<h;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,h=v.length;g<h;g++)e.update(v[g],i.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let M=0,S=E.length;M<S;M+=3){const F=E[M+0],T=E[M+1],R=E[M+2];d.push(F,T,T,R,R,F)}}else if(_!==void 0){const E=_.array;v=_.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const F=M+0,T=M+1,R=M+2;d.push(F,T,T,R,R,F)}}else return;const g=new(uc(d)?mc:pc)(d,1);g.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,g)}function c(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function pp(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function u(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];t.update(g,n,1)}function f(d,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,_);let h=0;for(let E=0;E<_;E++)h+=p[E]*v[E];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function mp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gp(i,e,t){const n=new WeakMap,s=new it;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let x=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let F=a.attributes.position.count*S,T=1;F>e.maxTextureSize&&(T=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*T*4*f),N=new dc(R,F,T,f);N.type=tn,N.needsUpdate=!0;const b=S*4;for(let P=0;P<f;P++){const k=h[P],z=E[P],X=M[P],$=F*T*4*P;for(let W=0;W<k.count;W++){const Q=W*b;_===!0&&(s.fromBufferAttribute(k,W),R[$+Q+0]=s.x,R[$+Q+1]=s.y,R[$+Q+2]=s.z,R[$+Q+3]=0),v===!0&&(s.fromBufferAttribute(z,W),R[$+Q+4]=s.x,R[$+Q+5]=s.y,R[$+Q+6]=s.z,R[$+Q+7]=0),g===!0&&(s.fromBufferAttribute(X,W),R[$+Q+8]=s.x,R[$+Q+9]=s.y,R[$+Q+10]=s.z,R[$+Q+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:N,size:new ae(F,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _p(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Sc extends St{constructor(e,t,n,s,r,o,a,l,u,c=Ii){if(c!==Ii&&c!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Ii&&(n=Kn),n===void 0&&c===ki&&(n=zi),super(null,s,r,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mc=new St,tl=new Sc(1,1),Ec=new dc,bc=new nh,Tc=new vc,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nl[s];if(r===void 0&&(r=new Float32Array(s),nl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),ft(t,n)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),ft(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),ft(t,n)}}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Ip(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=cc,r=tl):r=Mc,t.setTexture2D(e||r,s)}function Up(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bc,s)}function Np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tc,s)}function Op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ec,s)}function Fp(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return yp;case 35666:return Sp;case 35674:return Mp;case 35675:return Ep;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return wp;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}}function Bp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function kp(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Hp(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Gp(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vp(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wp(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xp(i,e){i.uniform1iv(this.addr,e)}function qp(i,e){i.uniform2iv(this.addr,e)}function Yp(i,e){i.uniform3iv(this.addr,e)}function $p(i,e){i.uniform4iv(this.addr,e)}function Zp(i,e){i.uniform1uiv(this.addr,e)}function jp(i,e){i.uniform2uiv(this.addr,e)}function Kp(i,e){i.uniform3uiv(this.addr,e)}function Jp(i,e){i.uniform4uiv(this.addr,e)}function Qp(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mc,r[o])}function em(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bc,r[o])}function tm(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tc,r[o])}function nm(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ec,r[o])}function im(i){switch(i){case 5126:return Bp;case 35664:return zp;case 35665:return kp;case 35666:return Hp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Zp;case 36294:return jp;case 36295:return Kp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=im(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function am(i,e,t){const n=i.name,s=n.length;for(qr.lastIndex=0;;){const r=qr.exec(n),o=qr.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){al(t,u===void 0?new sm(a,i,e):new rm(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new om(a),al(t,f)),t=f}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);am(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lm=37297;let cm=0;function um(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const cl=new ze;function hm(i){$e._getMatrix(cl,$e.workingColorSpace,i);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+um(i.getShaderSource(e),o)}else return s}function dm(i,e){const t=hm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fm(i,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="Cineon";break;case Kl:t="ACESFilmic";break;case vu:t="AgX";break;case xu:t="Neutral";break;case _u:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new U;function pm(){$e.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function gm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function rs(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(vm,ym)}const xm=new Map;function ym(i,e){let t=ke[e];if(t===void 0){const n=xm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Sm,Mm)}function Mm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Em(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Am(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case du:e="ENVMAP_BLENDING_MIX";break;case fu:e="ENVMAP_BLENDING_ADD";break}return e}function wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Em(t),u=bm(t),c=Tm(t),f=Am(t),d=wm(t),p=mm(t),_=gm(r),v=s.createProgram();let g,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),h.length>0&&(h+=`
`)):(g=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),h=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=Yo(o),o=hl(o,t),o=dl(o,t),a=Yo(a),a=hl(a,t),a=dl(a,t),o=fl(o),a=fl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+g+o,S=E+h+a,F=ll(s,s.VERTEX_SHADER,M),T=ll(s,s.FRAGMENT_SHADER,S);s.attachShader(v,F),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(F).trim(),X=s.getShaderInfoLog(T).trim();let $=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,T);else{const Q=ul(s,F,"vertex"),G=ul(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:h}})}s.deleteShader(F),s.deleteShader(T),N=new rr(s,v),b=_m(s,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,lm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=T,this}let Rm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lm(e),t.set(e,n)),n}}class Lm{constructor(e){this.id=Rm++,this.code=e,this.usedTimes=0}}function Dm(i,e,t,n,s,r,o){const a=new la,l=new Pm,u=new Set,c=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,x,P,k,z){const X=k.fog,$=z.geometry,W=b.isMeshStandardMaterial?k.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=Q&&Q.mapping===hr?Q.image.height:null,ue=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ee=me!==void 0?me.length:0;let Pe=0;$.morphAttributes.position!==void 0&&(Pe=1),$.morphAttributes.normal!==void 0&&(Pe=2),$.morphAttributes.color!==void 0&&(Pe=3);let Xe,Z,re,be;if(ue){const Ze=Qt[ue];Xe=Ze.vertexShader,Z=Ze.fragmentShader}else Xe=b.vertexShader,Z=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const oe=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,Ge=!!b.map,j=!!b.matcap,te=!!Q,C=!!b.aoMap,we=!!b.lightMap,ie=!!b.bumpMap,Se=!!b.normalMap,le=!!b.displacementMap,Le=!!b.emissiveMap,ve=!!b.metalnessMap,A=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,q=b.dispersion>0,J=b.iridescence>0,Y=b.sheen>0,Ae=b.transmission>0,he=y&&!!b.anisotropyMap,_e=B&&!!b.clearcoatMap,Ve=B&&!!b.clearcoatNormalMap,se=B&&!!b.clearcoatRoughnessMap,Me=J&&!!b.iridescenceMap,De=J&&!!b.iridescenceThicknessMap,Ne=Y&&!!b.sheenColorMap,xe=Y&&!!b.sheenRoughnessMap,We=!!b.specularMap,Fe=!!b.specularColorMap,je=!!b.specularIntensityMap,O=Ae&&!!b.transmissionMap,de=Ae&&!!b.thicknessMap,H=!!b.gradientMap,K=!!b.alphaMap,ge=b.alphaTest>0,pe=!!b.alphaHash,Ue=!!b.extensions;let qe=In;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ut={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Xe,fragmentShader:Z,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Vi,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:j,envMap:te,envMapMode:te&&Q.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:we,bumpMap:ie,normalMap:Se,displacementMap:d&&le,emissiveMap:Le,normalMapObjectSpace:Se&&b.normalMapType===Eu,normalMapTangentSpace:Se&&b.normalMapType===lc,metalnessMap:ve,roughnessMap:A,anisotropy:y,anisotropyMap:he,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:Ve,clearcoatRoughnessMap:se,dispersion:q,iridescence:J,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:Y,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:We,specularColorMap:Fe,specularIntensityMap:je,transmission:Ae,transmissionMap:O,thicknessMap:de,gradientMap:H,opaque:b.transparent===!1&&b.blending===Di&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ge,alphaHash:pe,combine:b.combine,mapUv:Ge&&v(b.map.channel),aoMapUv:C&&v(b.aoMap.channel),lightMapUv:we&&v(b.lightMap.channel),bumpMapUv:ie&&v(b.bumpMap.channel),normalMapUv:Se&&v(b.normalMap.channel),displacementMapUv:le&&v(b.displacementMap.channel),emissiveMapUv:Le&&v(b.emissiveMap.channel),metalnessMapUv:ve&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:he&&v(b.anisotropyMap.channel),clearcoatMapUv:_e&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:We&&v(b.specularMap.channel),specularColorMapUv:Fe&&v(b.specularColorMap.channel),specularIntensityMapUv:je&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:de&&v(b.thicknessMap.channel),alphaMapUv:K&&v(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Se||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Ge||K),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Pe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===tt,decodeVideoTextureEmissive:Le&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kt,flipSided:b.side===Lt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function h(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)x.push(P),x.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(E(x,b),M(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function E(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function M(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const x=_[b.type];let P;if(x){const k=Qt[x];P=ph.clone(k.uniforms)}else P=b.uniforms;return P}function F(b,x){let P;for(let k=0,z=c.length;k<z;k++){const X=c[k];if(X.cacheKey===x){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Cm(i,x,b,r),c.push(P)),P}function T(b){if(--b.usedTimes===0){const x=c.indexOf(b);c[x]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:N}}function Im(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,p,_,v,g){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=g),e++,h}function a(f,d,p,_,v,g){const h=o(f,d,p,_,v,g);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,v,g){const h=o(f,d,p,_,v,g);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||Um),n.length>1&&n.sort(d||ml),s.length>1&&s.sort(d||ml)}function c(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function Nm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new gl,i.set(n,[o])):s>=r.length?(o=new gl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bm=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function km(i){const e=new Om,t=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const s=new U,r=new Qe,o=new Qe;function a(u){let c=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,g=0,h=0,E=0,M=0,S=0,F=0,T=0,R=0;u.sort(zm);for(let b=0,x=u.length;b<x;b++){const P=u[b],k=P.color,z=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*z,f+=k.g*z,d+=k.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);R++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;const Q=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,Q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=$,S++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(k).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[h]=W,h++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==g||N.hemiLength!==h||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==F||N.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+F-T,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=g,N.hemiLength=h,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=F,N.numLightProbes=R,n.version=Bm++)}function l(u,c){let f=0,d=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let h=0,E=u.length;h<E;h++){const M=u[h];if(M.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(M.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function _l(i){const e=new km(i),t=[],n=[];function s(c){u.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hm(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _l(i),e.set(s,[a])):r>=o.length?(a=new _l(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gm extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vm extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(i,e,t){let n=new ca;const s=new ae,r=new ae,o=new it,a=new Gm({depthPacking:Mu}),l=new Vm,u={},c=t.maxTextureSize,f={[Un]:Lt,[Lt]:Un,[kt]:kt},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let h=this.type;this.render=function(T,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==fn&&this.type===fn,X=h===fn&&this.type!==fn;for(let $=0,W=T.length;$<W;$++){const Q=T[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||z===!0||X===!0){const Ee=this.type!==fn?{minFilter:Ot,magFilter:Ot}:{};G.map!==null&&G.map.dispose(),G.map=new Jn(s.x,s.y,Ee),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const me=G.getViewportCount();for(let Ee=0;Ee<me;Ee++){const Pe=G.getViewport(Ee);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),k.viewport(o),G.updateMatrices(Q,Ee),n=G.getFrustum(),S(R,N,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===fn&&E(G,N),G.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(b,x,P)};function E(T,R){const N=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,N,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,N,p,v,null)}function M(T,R,N,b){let x=null;const P=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=N.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=x.uuid,z=R.uuid;let X=u[k];X===void 0&&(X={},u[k]=X);let $=X[z];$===void 0&&($=x.clone(),X[z]=$,R.addEventListener("dispose",F)),x=$}if(x.visible=R.visible,x.wireframe=R.wireframe,b===fn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=N}return x}function S(T,R,N,b,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const z=e.update(T),X=T.material;if(Array.isArray(X)){const $=z.groups;for(let W=0,Q=$.length;W<Q;W++){const G=$[W],ue=X[G.materialIndex];if(ue&&ue.visible){const me=M(T,ue,b,x);T.onBeforeShadow(i,T,R,N,z,me,G),i.renderBufferDirect(N,null,z,me,T,G),T.onAfterShadow(i,T,R,N,z,me,G)}}}else if(X.visible){const $=M(T,X,b,x);T.onBeforeShadow(i,T,R,N,z,$,null),i.renderBufferDirect(N,null,z,$,T,null),T.onAfterShadow(i,T,R,N,z,$,null)}}const k=T.children;for(let z=0,X=k.length;z<X;z++)S(k[z],R,N,b,x)}function F(T){T.target.removeEventListener("dispose",F);for(const N in u){const b=u[N],x=T.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Ym={[co]:uo,[ho]:mo,[fo]:go,[Oi]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:Oi};function $m(i,e){function t(){let O=!1;const de=new it;let H=null;const K=new it(0,0,0,0);return{setMask:function(ge){H!==ge&&!O&&(i.colorMask(ge,ge,ge,ge),H=ge)},setLocked:function(ge){O=ge},setClear:function(ge,pe,Ue,qe,ut){ut===!0&&(ge*=qe,pe*=qe,Ue*=qe),de.set(ge,pe,Ue,qe),K.equals(de)===!1&&(i.clearColor(ge,pe,Ue,qe),K.copy(de))},reset:function(){O=!1,H=null,K.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,H=null,K=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Ue=e.get("EXT_clip_control");de?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const qe=ge;ge=null,this.setClear(qe)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?oe(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(pe){H!==pe&&!O&&(i.depthMask(pe),H=pe)},setFunc:function(pe){if(de&&(pe=Ym[pe]),K!==pe){switch(pe){case co:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pe}},setLocked:function(pe){O=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),i.clearDepth(pe),ge=pe)},reset:function(){O=!1,H=null,K=null,ge=null,de=!1}}}function s(){let O=!1,de=null,H=null,K=null,ge=null,pe=null,Ue=null,qe=null,ut=null;return{setTest:function(Ze){O||(Ze?oe(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!O&&(i.stencilMask(Ze),de=Ze)},setFunc:function(Ze,Et,gt){(H!==Ze||K!==Et||ge!==gt)&&(i.stencilFunc(Ze,Et,gt),H=Ze,K=Et,ge=gt)},setOp:function(Ze,Et,gt){(pe!==Ze||Ue!==Et||qe!==gt)&&(i.stencilOp(Ze,Et,gt),pe=Ze,Ue=Et,qe=gt)},setLocked:function(Ze){O=Ze},setClear:function(Ze){ut!==Ze&&(i.clearStencil(Ze),ut=Ze)},reset:function(){O=!1,de=null,H=null,K=null,ge=null,pe=null,Ue=null,qe=null,ut=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],_=null,v=!1,g=null,h=null,E=null,M=null,S=null,F=null,T=null,R=new He(0,0,0),N=0,b=!1,x=null,P=null,k=null,z=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let ue=null,me={};const Ee=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Xe=new it().fromArray(Ee),Z=new it().fromArray(Pe);function re(O,de,H,K){const ge=new Uint8Array(4),pe=i.createTexture();i.bindTexture(O,pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<H;Ue++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(de+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return pe}const be={};be[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Oi),ie(!1),Se(ya),oe(i.CULL_FACE),C(Dn);function oe(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function Re(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Oe(O,de){return f[O]!==de?(i.bindFramebuffer(O,de),f[O]=de,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(O,de){let H=p,K=!1;if(O){H=d.get(de),H===void 0&&(H=[],d.set(de,H));const ge=O.textures;if(H.length!==ge.length||H[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ue=ge.length;pe<Ue;pe++)H[pe]=i.COLOR_ATTACHMENT0+pe;H.length=ge.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function Ge(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const j={[qn]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};j[Kc]=i.MIN,j[Jc]=i.MAX;const te={[Qc]:i.ZERO,[eu]:i.ONE,[tu]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[au]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[ou]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[uu]:i.CONSTANT_ALPHA,[hu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(O,de,H,K,ge,pe,Ue,qe,ut,Ze){if(O===Dn){v===!0&&(Re(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),O!==$c){if(O!==g||Ze!==b){if((h!==qn||S!==qn)&&(i.blendEquation(i.FUNC_ADD),h=qn,S=qn),Ze)switch(O){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,M=null,F=null,T=null,R.set(0,0,0),N=0,g=O,b=Ze}return}ge=ge||de,pe=pe||H,Ue=Ue||K,(de!==h||ge!==S)&&(i.blendEquationSeparate(j[de],j[ge]),h=de,S=ge),(H!==E||K!==M||pe!==F||Ue!==T)&&(i.blendFuncSeparate(te[H],te[K],te[pe],te[Ue]),E=H,M=K,F=pe,T=Ue),(qe.equals(R)===!1||ut!==N)&&(i.blendColor(qe.r,qe.g,qe.b,ut),R.copy(qe),N=ut),g=O,b=!1}function we(O,de){O.side===kt?Re(i.CULL_FACE):oe(i.CULL_FACE);let H=O.side===Lt;de&&(H=!H),ie(H),O.blending===Di&&O.transparent===!1?C(Dn):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const K=O.stencilWrite;a.setTest(K),K&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function Se(O){O!==qc?(oe(i.CULL_FACE),O!==P&&(O===ya?i.cullFace(i.BACK):O===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),P=O}function le(O){O!==k&&(W&&i.lineWidth(O),k=O)}function Le(O,de,H){O?(oe(i.POLYGON_OFFSET_FILL),(z!==de||X!==H)&&(i.polygonOffset(de,H),z=de,X=H)):Re(i.POLYGON_OFFSET_FILL)}function ve(O){O?oe(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+$-1),ue!==O&&(i.activeTexture(O),ue=O)}function y(O,de,H){H===void 0&&(ue===null?H=i.TEXTURE0+$-1:H=ue);let K=me[H];K===void 0&&(K={type:void 0,texture:void 0},me[H]=K),(K.type!==O||K.texture!==de)&&(ue!==H&&(i.activeTexture(H),ue=H),i.bindTexture(O,de||be[O]),K.type=O,K.texture=de)}function B(){const O=me[ue];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xe.copy(O))}function xe(O){Z.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function We(O,de){let H=u.get(de);H===void 0&&(H=new WeakMap,u.set(de,H));let K=H.get(O);K===void 0&&(K=i.getUniformBlockIndex(de,O.name),H.set(O,K))}function Fe(O,de){const K=u.get(de).get(O);l.get(de)!==K&&(i.uniformBlockBinding(de,K,O.__bindingPointIndex),l.set(de,K))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ue=null,me={},f={},d=new WeakMap,p=[],_=null,v=!1,g=null,h=null,E=null,M=null,S=null,F=null,T=null,R=new He(0,0,0),N=0,b=!1,x=null,P=null,k=null,z=null,X=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ge,setBlending:C,setMaterial:we,setFlipSided:ie,setCullFace:Se,setLineWidth:le,setPolygonOffset:Le,setScissorTest:ve,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:Me,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Ve,texStorage3D:se,texSubImage2D:Y,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ne,viewport:xe,reset:je}}function vl(i,e,t,n){const s=Zm(n);switch(t){case nc:return i*e;case sc:return i*e;case rc:return i*e*2;case ia:return i*e/s.components*s.byteLength;case sa:return i*e/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case ra:return i*e*2/s.components*s.byteLength;case ic:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case oa:return i*e*4/s.components*s.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(e,8)/4;case So:case Eo:return Math.max(i,8)*Math.max(e,8)/2;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sr:case Go:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ac:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zm(i){switch(i){case vn:case Ql:return{byteLength:1,components:1};case ds:case ec:case _s:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Kn:case ea:case tn:return{byteLength:4,components:1};case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jm(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ae,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return p?new OffscreenCanvas(A,y):ar("canvas")}function v(A,y,B){let q=1;const J=ve(A);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*J.width),Ae=Math.floor(q*J.height);f===void 0&&(f=_(Y,Ae));const he=y?_(Y,Ae):f;return he.width=Y,he.height=Ae,he.getContext("2d").drawImage(A,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Ae+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,y,B,q,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=y;if(y===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),y===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const Ae=J?dr:$e.getTransfer(q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Ae===tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(A,y){let B;return A?y===null||y===Kn||y===zi?B=i.DEPTH24_STENCIL8:y===tn?B=i.DEPTH32F_STENCIL8:y===ds&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===zi?B=i.DEPTH_COMPONENT24:y===tn?B=i.DEPTH_COMPONENT32F:y===ds&&(B=i.DEPTH_COMPONENT16),B}function F(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),N(y),y.isVideoTexture&&c.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),x(y)}function N(A){const y=n.get(A);if(y.__webglInit===void 0)return;const B=A.source,q=d.get(B);if(q){const J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(q).length===0&&d.delete(B)}n.remove(A)}function b(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const B=A.source,q=d.get(B);delete q[y.__cacheKey],o.memory.textures--}function x(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[q][J]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let q=0,J=B.length;q<J;q++){const Y=n.get(B[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(A)}let P=0;function k(){P=0}function z(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function X(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const B=n.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,y);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function W(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Q(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function G(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){re(B,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const ue={[xo]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},me={[Ot]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ee={[bu]:i.NEVER,[Pu]:i.ALWAYS,[Tu]:i.LESS,[cc]:i.LEQUAL,[Au]:i.EQUAL,[Ru]:i.GEQUAL,[wu]:i.GREATER,[Cu]:i.NOTEQUAL};function Pe(A,y){if(y.type===tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===yr||y.magFilter===ys||y.magFilter===Zn||y.minFilter===en||y.minFilter===yr||y.minFilter===ys||y.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ue[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ue[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ue[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,me[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==ys&&y.minFilter!==Zn||y.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const q=y.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=X(y);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Y].usedTimes++;const Ae=J[A.__cacheKey];Ae!==void 0&&(J[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return B}function Z(A,y,B){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const J=Xe(A,y),Y=y.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+B);const Ae=n.get(Y);if(Y.version!==Ae.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const he=$e.getPrimaries($e.workingColorSpace),_e=y.colorSpace===Pn?null:$e.getPrimaries(y.colorSpace),Ve=y.colorSpace===Pn||he===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let se=v(y.image,!1,s.maxTextureSize);se=Le(y,se);const Me=r.convert(y.format,y.colorSpace),De=r.convert(y.type);let Ne=M(y.internalFormat,Me,De,y.colorSpace,y.isVideoTexture);Pe(q,y);let xe;const We=y.mipmaps,Fe=y.isVideoTexture!==!0,je=Ae.__version===void 0||J===!0,O=Y.dataReady,de=F(y,se);if(y.isDepthTexture)Ne=S(y.format===ki,y.type),je&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,De,null));else if(y.isDataTexture)if(We.length>0){Fe&&je&&t.texStorage2D(i.TEXTURE_2D,de,Ne,We[0].width,We[0].height);for(let H=0,K=We.length;H<K;H++)xe=We[H],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,xe.width,xe.height,Me,De,xe.data):t.texImage2D(i.TEXTURE_2D,H,Ne,xe.width,xe.height,0,Me,De,xe.data);y.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(i.TEXTURE_2D,de,Ne,se.width,se.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,Me,De,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,De,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ne,We[0].width,We[0].height,se.depth);for(let H=0,K=We.length;H<K;H++)if(xe=We[H],y.format!==Kt)if(Me!==null)if(Fe){if(O)if(y.layerUpdates.size>0){const ge=vl(xe.width,xe.height,y.format,y.type);for(const pe of y.layerUpdates){const Ue=xe.data.subarray(pe*ge/xe.data.BYTES_PER_ELEMENT,(pe+1)*ge/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,pe,xe.width,xe.height,1,Me,Ue)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,xe.width,xe.height,se.depth,Me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Ne,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,xe.width,xe.height,se.depth,Me,De,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Ne,xe.width,xe.height,se.depth,0,Me,De,xe.data)}else{Fe&&je&&t.texStorage2D(i.TEXTURE_2D,de,Ne,We[0].width,We[0].height);for(let H=0,K=We.length;H<K;H++)xe=We[H],y.format!==Kt?Me!==null?Fe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,xe.width,xe.height,Me,De,xe.data):t.texImage2D(i.TEXTURE_2D,H,Ne,xe.width,xe.height,0,Me,De,xe.data)}else if(y.isDataArrayTexture)if(Fe){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ne,se.width,se.height,se.depth),O)if(y.layerUpdates.size>0){const H=vl(se.width,se.height,y.format,y.type);for(const K of y.layerUpdates){const ge=se.data.subarray(K*H/se.data.BYTES_PER_ELEMENT,(K+1)*H/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,Me,De,ge)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,De,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Me,De,se.data);else if(y.isData3DTexture)Fe?(je&&t.texStorage3D(i.TEXTURE_3D,de,Ne,se.width,se.height,se.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,De,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Me,De,se.data);else if(y.isFramebufferTexture){if(je)if(Fe)t.texStorage2D(i.TEXTURE_2D,de,Ne,se.width,se.height);else{let H=se.width,K=se.height;for(let ge=0;ge<de;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ne,H,K,0,Me,De,null),H>>=1,K>>=1}}else if(We.length>0){if(Fe&&je){const H=ve(We[0]);t.texStorage2D(i.TEXTURE_2D,de,Ne,H.width,H.height)}for(let H=0,K=We.length;H<K;H++)xe=We[H],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Me,De,xe):t.texImage2D(i.TEXTURE_2D,H,Ne,Me,De,xe);y.generateMipmaps=!1}else if(Fe){if(je){const H=ve(se);t.texStorage2D(i.TEXTURE_2D,de,Ne,H.width,H.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,De,se)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Me,De,se);g(y)&&h(q),Ae.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function re(A,y,B){if(y.image.length!==6)return;const q=Xe(A,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const Y=n.get(J);if(J.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const Ae=$e.getPrimaries($e.workingColorSpace),he=y.colorSpace===Pn?null:$e.getPrimaries(y.colorSpace),_e=y.colorSpace===Pn||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!Ve&&!se?Me[K]=v(y.image[K],!0,s.maxCubemapSize):Me[K]=se?y.image[K].image:y.image[K],Me[K]=Le(y,Me[K]);const De=Me[0],Ne=r.convert(y.format,y.colorSpace),xe=r.convert(y.type),We=M(y.internalFormat,Ne,xe,y.colorSpace),Fe=y.isVideoTexture!==!0,je=Y.__version===void 0||q===!0,O=J.dataReady;let de=F(y,De);Pe(i.TEXTURE_CUBE_MAP,y);let H;if(Ve){Fe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,De.width,De.height);for(let K=0;K<6;K++){H=Me[K].mipmaps;for(let ge=0;ge<H.length;ge++){const pe=H[ge];y.format!==Kt?Ne!==null?Fe?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,We,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,pe.width,pe.height,Ne,xe,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,We,pe.width,pe.height,0,Ne,xe,pe.data)}}}else{if(H=y.mipmaps,Fe&&je){H.length>0&&de++;const K=ve(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,K.width,K.height)}for(let K=0;K<6;K++)if(se){Fe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,Ne,xe,Me[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Me[K].width,Me[K].height,0,Ne,xe,Me[K].data);for(let ge=0;ge<H.length;ge++){const Ue=H[ge].image[K].image;Fe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ue.width,Ue.height,Ne,xe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,We,Ue.width,Ue.height,0,Ne,xe,Ue.data)}}else{Fe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,xe,Me[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Ne,xe,Me[K]);for(let ge=0;ge<H.length;ge++){const pe=H[ge];Fe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ne,xe,pe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,We,Ne,xe,pe.image[K])}}}g(y)&&h(i.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function be(A,y,B,q,J,Y){const Ae=r.convert(B.format,B.colorSpace),he=r.convert(B.type),_e=M(B.internalFormat,Ae,he,B.colorSpace),Ve=n.get(y),se=n.get(B);if(se.__renderTarget=y,!Ve.__hasExternalTextures){const Me=Math.max(1,y.width>>Y),De=Math.max(1,y.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,_e,Me,De,y.depth,0,Ae,he,null):t.texImage2D(J,Y,_e,Me,De,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,se.__webglTexture,0,ie(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=S(y.stencilBuffer,J),Ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ie(y);Se(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,A)}else{const q=y.textures;for(let J=0;J<q.length;J++){const Y=q[J],Ae=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),_e=M(Y.internalFormat,Ae,he,Y.colorSpace),Ve=ie(y);B&&Se(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,_e,y.width,y.height):Se(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const J=q.__webglTexture,Y=ie(y);if(y.depthTexture.format===Ii)Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===ki)Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),oe(y.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),oe(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,y,B){const q=n.get(A);y!==void 0&&be(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Oe(A)}function Ge(A){const y=A.texture,B=n.get(A),q=n.get(y);A.addEventListener("dispose",R);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ae=J.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let _e=0;_e<y.mipmaps.length;_e++)B.__webglFramebuffer[he][_e]=i.createFramebuffer()}else B.__webglFramebuffer[he]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[he]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,_e=J.length;he<_e;he++){const Ve=n.get(J[he]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Se(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const _e=J[he];B.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ve=r.convert(_e.format,_e.colorSpace),se=r.convert(_e.type),Me=M(_e.internalFormat,Ve,se,_e.colorSpace,A.isXRRenderTarget===!0),De=ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,B.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)be(B.__webglFramebuffer[he][_e],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else be(B.__webglFramebuffer[he],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(y)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,_e=J.length;he<_e;he++){const Ve=J[he],se=n.get(Ve);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Pe(i.TEXTURE_2D,Ve),be(B.__webglFramebuffer,A,Ve,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),g(Ve)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Pe(he,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)be(B.__webglFramebuffer[_e],A,y,i.COLOR_ATTACHMENT0,he,_e);else be(B.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,he,0);g(y)&&h(he),t.unbindTexture()}A.depthBuffer&&Oe(A)}function j(A){const y=A.textures;for(let B=0,q=y.length;B<q;B++){const J=y[B];if(g(J)){const Y=E(A),Ae=n.get(J).__webglTexture;t.bindTexture(Y,Ae),h(Y),t.unbindTexture()}}}const te=[],C=[];function we(A){if(A.samples>0){if(Se(A)===!1){const y=A.textures,B=A.width,q=A.height;let J=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),he=y.length>1;if(he)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const Ve=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,J,i.NEAREST),l===!0&&(te.length=0,C.length=0,te.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(te.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const Ve=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ie(A){return Math.min(s.maxSamples,A.samples)}function Se(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(A){const y=o.render.frame;c.get(A)!==y&&(c.set(A,y),A.update())}function Le(A,y){const B=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Vi&&B!==Pn&&($e.getTransfer(B)===tt?(q!==Kt||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Se}function Km(i,e){function t(n,s=Pn){let r;const o=$e.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.BYTE;if(n===ec)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===Kt)return i.RGBA;if(n===sc)return i.LUMINANCE;if(n===rc)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===ia)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===oa)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===Mo||n===Eo||n===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Oo||n===Fo||n===Bo||n===zo||n===ko||n===Ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===Go||n===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Jm extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zt extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),h=this._getHandJoint(u,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new St,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:eg,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends ni{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const v=new ng,g=t.getContextAttributes();let h=null,E=null;const M=[],S=[],F=new ae;let T=null;const R=new Rt;R.viewport=new it;const N=new Rt;N.viewport=new it;const b=[R,N],x=new Jm;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=M[Z];return re===void 0&&(re=new Yr,M[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=M[Z];return re===void 0&&(re=new Yr,M[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=M[Z];return re===void 0&&(re=new Yr,M[Z]=re),re.getHandSpace()};function z(Z){const re=S.indexOf(Z.inputSource);if(re===-1)return;const be=M[re];be!==void 0&&(be.update(Z.inputSource,Z.frame,u||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<M.length;Z++){const re=S[Z];re!==null&&(S[Z]=null,M[Z].disconnect(re))}P=null,k=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,be=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?ki:Ii,be=g.stencil?zi:Kn);const Re={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Jn(d.textureWidth,d.textureHeight,{format:Kt,type:vn,depthTexture:new Sc(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Z){for(let re=0;re<Z.removed.length;re++){const be=Z.removed[re],oe=S.indexOf(be);oe>=0&&(S[oe]=null,M[oe].disconnect(be))}for(let re=0;re<Z.added.length;re++){const be=Z.added[re];let oe=S.indexOf(be);if(oe===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=S.length){S.push(be),oe=Oe;break}else if(S[Oe]===null){S[Oe]=be,oe=Oe;break}if(oe===-1)break}const Re=M[oe];Re&&Re.connect(be)}}const W=new U,Q=new U;function G(Z,re,be){W.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const oe=W.distanceTo(Q),Re=re.projectionMatrix.elements,Oe=be.projectionMatrix.elements,Ie=Re[14]/(Re[10]-1),Ge=Re[14]/(Re[10]+1),j=(Re[9]+1)/Re[5],te=(Re[9]-1)/Re[5],C=(Re[8]-1)/Re[0],we=(Oe[8]+1)/Oe[0],ie=Ie*C,Se=Ie*we,le=oe/(-C+we),Le=le*-C;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ve=Ie+le,A=Ge+le,y=ie-Le,B=Se+(oe-Le),q=j*Ge/A*ve,J=te*Ge/A*ve;Z.projectionMatrix.makePerspective(y,B,q,J,ve,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,be=Z.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(be=v.depthFar)),x.near=N.near=R.near=re,x.far=N.far=R.far=be,(P!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,k=x.far),R.layers.mask=Z.layers.mask|2,N.layers.mask=Z.layers.mask|4,x.layers.mask=R.layers.mask|N.layers.mask;const oe=Z.parent,Re=x.cameras;ue(x,oe);for(let Oe=0;Oe<Re.length;Oe++)ue(Re[Oe],oe);Re.length===2?G(x,R,N):x.projectionMatrix.copy(R.projectionMatrix),me(Z,x,oe)};function me(Z,re,be){be===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Ee=null;function Pe(Z,re){if(c=re.getViewerPose(u||o),_=re,c!==null){const be=c.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;be.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Oe=0;Oe<be.length;Oe++){const Ie=be[Oe];let Ge=null;if(p!==null)Ge=p.getViewport(Ie);else{const te=f.getViewSubImage(d,Ie);Ge=te.viewport,Oe===0&&(e.setRenderTargetTextures(E,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(E))}let j=b[Oe];j===void 0&&(j=new Rt,j.layers.enable(Oe),j.viewport=new it,b[Oe]=j),j.matrix.fromArray(Ie.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ie.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Oe===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(j)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Oe=f.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let be=0;be<M.length;be++){const oe=S[be],Re=M[be];oe!==null&&Re!==void 0&&Re.update(oe,re,u||o)}Ee&&Ee(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const Xe=new xc;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}}const Vn=new nn,sg=new Qe;function rg(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,gc(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,E,M,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),c(g,h)):h.isMeshStandardMaterial?(r(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),_(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),v(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,E,M):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Lt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Lt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const E=e.get(h),M=E.envMap,S=E.envMapRotation;M&&(g.envMap.value=M,Vn.copy(S),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),g.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Vn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,E,M){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*E,g.scale.value=M*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,E){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const E=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function og(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const S=M.program;n.uniformBlockBinding(E,S)}function u(E,M){let S=s[E.id];S===void 0&&(_(E),S=c(E),s[E.id]=S,E.addEventListener("dispose",g));const F=M.program;n.updateUBOMapping(E,F);const T=e.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function c(E){const M=f();E.__bindingPointIndex=M;const S=i.createBuffer(),F=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],S=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,R=S.length;T<R;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,x=N.length;b<x;b++){const P=N[b];if(p(P,T,b,F)===!0){const k=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<z.length;$++){const W=z[$],Q=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,S,F){const T=E.value,R=M+"_"+S;if(F[R]===void 0)return typeof T=="number"||typeof T=="boolean"?F[R]=T:F[R]=T.clone(),!0;{const N=F[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return F[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function _(E){const M=E.uniforms;let S=0;const F=16;for(let R=0,N=M.length;R<N;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,P=b.length;x<P;x++){const k=b[x],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,$=z.length;X<$;X++){const W=z[X],Q=v(W),G=S%F,ue=G%Q.boundary,me=G+ue;S+=ue,me!==0&&F-me<Q.storage&&(S+=F-me),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const T=S%F;return T>0&&(S+=F-T),E.__size=S,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){const M=E.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:u,dispose:h}}class ag{constructor(e={}){const{canvas:t=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,h=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=In,this.toneMappingExposure=1;const S=this;let F=!1,T=0,R=0,N=null,b=-1,x=null;const P=new it,k=new it;let z=null;const X=new He(0);let $=0,W=t.width,Q=t.height,G=1,ue=null,me=null;const Ee=new it(0,0,W,Q),Pe=new it(0,0,W,Q);let Xe=!1;const Z=new ca;let re=!1,be=!1;const oe=new Qe,Re=new Qe,Oe=new U,Ie=new it,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function te(){return N===null?G:1}let C=n;function we(m,w){return t.getContext(m,w)}try{const m={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),C===null){const w="webgl2";if(C=we(w,m),C===null)throw we(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let ie,Se,le,Le,ve,A,y,B,q,J,Y,Ae,he,_e,Ve,se,Me,De,Ne,xe,We,Fe,je,O;function de(){ie=new dp(C),ie.init(),Fe=new Km(C,ie),Se=new op(C,ie,e,Fe),le=new $m(C,ie),Se.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Le=new mp(C),ve=new Im,A=new jm(C,ie,le,ve,Se,Fe,Le),y=new lp(S),B=new hp(S),q=new Sh(C),je=new sp(C,q),J=new fp(C,q,Le,je),Y=new _p(C,J,q,Le),Ne=new gp(C,Se,A),se=new ap(ve),Ae=new Dm(S,y,B,ie,Se,je,se),he=new rg(S,ve),_e=new Nm,Ve=new Hm(ie),De=new ip(S,y,B,le,Y,p,l),Me=new qm(S,Y,Se),O=new og(C,Le,Se,le),xe=new rp(C,ie,Le),We=new pp(C,ie,Le),Le.programs=Ae.programs,S.capabilities=Se,S.extensions=ie,S.properties=ve,S.renderLists=_e,S.shadowMap=Me,S.state=le,S.info=Le}de();const H=new ig(S,C);this.xr=H,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const m=ie.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=ie.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(m){m!==void 0&&(G=m,this.setSize(W,Q,!1))},this.getSize=function(m){return m.set(W,Q)},this.setSize=function(m,w,L=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=m,Q=w,t.width=Math.floor(m*G),t.height=Math.floor(w*G),L===!0&&(t.style.width=m+"px",t.style.height=w+"px"),this.setViewport(0,0,m,w)},this.getDrawingBufferSize=function(m){return m.set(W*G,Q*G).floor()},this.setDrawingBufferSize=function(m,w,L){W=m,Q=w,G=L,t.width=Math.floor(m*L),t.height=Math.floor(w*L),this.setViewport(0,0,m,w)},this.getCurrentViewport=function(m){return m.copy(P)},this.getViewport=function(m){return m.copy(Ee)},this.setViewport=function(m,w,L,I){m.isVector4?Ee.set(m.x,m.y,m.z,m.w):Ee.set(m,w,L,I),le.viewport(P.copy(Ee).multiplyScalar(G).round())},this.getScissor=function(m){return m.copy(Pe)},this.setScissor=function(m,w,L,I){m.isVector4?Pe.set(m.x,m.y,m.z,m.w):Pe.set(m,w,L,I),le.scissor(k.copy(Pe).multiplyScalar(G).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(m){le.setScissorTest(Xe=m)},this.setOpaqueSort=function(m){ue=m},this.setTransparentSort=function(m){me=m},this.getClearColor=function(m){return m.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(m=!0,w=!0,L=!0){let I=0;if(m){let D=!1;if(N!==null){const V=N.texture.format;D=V===oa||V===ra||V===sa}if(D){const V=N.texture.type,ne=V===vn||V===Kn||V===ds||V===zi||V===ta||V===na,ce=De.getClearColor(),ee=De.getClearAlpha(),ye=ce.r,Be=ce.g,Te=ce.b;ne?(_[0]=ye,_[1]=Be,_[2]=Te,_[3]=ee,C.clearBufferuiv(C.COLOR,0,_)):(v[0]=ye,v[1]=Be,v[2]=Te,v[3]=ee,C.clearBufferiv(C.COLOR,0,v))}else I|=C.COLOR_BUFFER_BIT}w&&(I|=C.DEPTH_BUFFER_BIT),L&&(I|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Ve.dispose(),ve.dispose(),y.dispose(),B.dispose(),Y.dispose(),je.dispose(),O.dispose(),Ae.dispose(),H.dispose(),H.removeEventListener("sessionstart",xn),H.removeEventListener("sessionend",Vt),_t.stop()};function K(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const m=Le.autoReset,w=Me.enabled,L=Me.autoUpdate,I=Me.needsUpdate,D=Me.type;de(),Le.autoReset=m,Me.enabled=w,Me.autoUpdate=L,Me.needsUpdate=I,Me.type=D}function pe(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function Ue(m){const w=m.target;w.removeEventListener("dispose",Ue),qe(w)}function qe(m){ut(m),ve.remove(m)}function ut(m){const w=ve.get(m).programs;w!==void 0&&(w.forEach(function(L){Ae.releaseProgram(L)}),m.isShaderMaterial&&Ae.releaseShaderCache(m))}this.renderBufferDirect=function(m,w,L,I,D,V){w===null&&(w=Ge);const ne=D.isMesh&&D.matrixWorld.determinant()<0,ce=_r(m,w,L,I,D);le.setMaterial(I,ne);let ee=L.index,ye=1;if(I.wireframe===!0){if(ee=J.getWireframeAttribute(L),ee===void 0)return;ye=2}const Be=L.drawRange,Te=L.attributes.position;let Ye=Be.start*ye,et=(Be.start+Be.count)*ye;V!==null&&(Ye=Math.max(Ye,V.start*ye),et=Math.min(et,(V.start+V.count)*ye)),ee!==null?(Ye=Math.max(Ye,0),et=Math.min(et,ee.count)):Te!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,Te.count));const st=et-Ye;if(st<0||st===1/0)return;je.setup(D,I,ce,L,ee);let wt,Ke=xe;if(ee!==null&&(wt=q.get(ee),Ke=We,Ke.setIndex(wt)),D.isMesh)I.wireframe===!0?(le.setLineWidth(I.wireframeLinewidth*te()),Ke.setMode(C.LINES)):Ke.setMode(C.TRIANGLES);else if(D.isLine){let Ce=I.linewidth;Ce===void 0&&(Ce=1),le.setLineWidth(Ce*te()),D.isLineSegments?Ke.setMode(C.LINES):D.isLineLoop?Ke.setMode(C.LINE_LOOP):Ke.setMode(C.LINE_STRIP)}else D.isPoints?Ke.setMode(C.POINTS):D.isSprite&&Ke.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ke.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Ke.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ce=D._multiDrawStarts,on=D._multiDrawCounts,Je=D._multiDrawCount,Xt=ee?q.get(ee).bytesPerElement:1,li=ve.get(I).currentProgram.getUniforms();for(let Dt=0;Dt<Je;Dt++)li.setValue(C,"_gl_DrawID",Dt),Ke.render(Ce[Dt]/Xt,on[Dt])}else if(D.isInstancedMesh)Ke.renderInstances(Ye,st,D.count);else if(L.isInstancedBufferGeometry){const Ce=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,on=Math.min(L.instanceCount,Ce);Ke.renderInstances(Ye,st,on)}else Ke.render(Ye,st)};function Ze(m,w,L){m.transparent===!0&&m.side===kt&&m.forceSinglePass===!1?(m.side=Lt,m.needsUpdate=!0,Fn(m,w,L),m.side=Un,m.needsUpdate=!0,Fn(m,w,L),m.side=kt):Fn(m,w,L)}this.compile=function(m,w,L=null){L===null&&(L=m),h=Ve.get(L),h.init(w),M.push(h),L.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),m!==L&&m.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const I=new Set;return m.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const V=D.material;if(V)if(Array.isArray(V))for(let ne=0;ne<V.length;ne++){const ce=V[ne];Ze(ce,L,D),I.add(ce)}else Ze(V,L,D),I.add(V)}),M.pop(),h=null,I},this.compileAsync=function(m,w,L=null){const I=this.compile(m,w,L);return new Promise(D=>{function V(){if(I.forEach(function(ne){ve.get(ne).currentProgram.isReady()&&I.delete(ne)}),I.size===0){D(m);return}setTimeout(V,10)}ie.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let Et=null;function gt(m){Et&&Et(m)}function xn(){_t.stop()}function Vt(){_t.start()}const _t=new xc;_t.setAnimationLoop(gt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(m){Et=m,H.setAnimationLoop(m),m===null?_t.stop():_t.start()},H.addEventListener("sessionstart",xn),H.addEventListener("sessionend",Vt),this.render=function(m,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(w),w=H.getCamera()),m.isScene===!0&&m.onBeforeRender(S,m,w,N),h=Ve.get(m,M.length),h.init(w),M.push(h),Re.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),Z.setFromProjectionMatrix(Re),be=this.localClippingEnabled,re=se.init(this.clippingPlanes,be),g=_e.get(m,E.length),g.init(),E.push(g),H.enabled===!0&&H.isPresenting===!0){const V=S.xr.getDepthSensingMesh();V!==null&&ai(V,w,-1/0,S.sortObjects)}ai(m,w,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ue,me),j=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,j&&De.addToRenderList(g,m),this.info.render.frame++,re===!0&&se.beginShadows();const L=h.state.shadowsArray;Me.render(L,m,w),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=g.opaque,D=g.transmissive;if(h.setupLights(),w.isArrayCamera){const V=w.cameras;if(D.length>0)for(let ne=0,ce=V.length;ne<ce;ne++){const ee=V[ne];Wt(I,D,m,ee)}j&&De.render(m);for(let ne=0,ce=V.length;ne<ce;ne++){const ee=V[ne];Xi(g,m,ee,ee.viewport)}}else D.length>0&&Wt(I,D,m,w),j&&De.render(m),Xi(g,m,w);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),m.isScene===!0&&m.onAfterRender(S,m,w),je.resetDefaultState(),b=-1,x=null,M.pop(),M.length>0?(h=M[M.length-1],re===!0&&se.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function ai(m,w,L,I){if(m.visible===!1)return;if(m.layers.test(w.layers)){if(m.isGroup)L=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(w);else if(m.isLight)h.pushLight(m),m.castShadow&&h.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||Z.intersectsSprite(m)){I&&Ie.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Re);const ne=Y.update(m),ce=m.material;ce.visible&&g.push(m,ne,ce,L,Ie.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||Z.intersectsObject(m))){const ne=Y.update(m),ce=m.material;if(I&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),Ie.copy(m.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ie.copy(ne.boundingSphere.center)),Ie.applyMatrix4(m.matrixWorld).applyMatrix4(Re)),Array.isArray(ce)){const ee=ne.groups;for(let ye=0,Be=ee.length;ye<Be;ye++){const Te=ee[ye],Ye=ce[Te.materialIndex];Ye&&Ye.visible&&g.push(m,ne,Ye,L,Ie.z,Te)}}else ce.visible&&g.push(m,ne,ce,L,Ie.z,null)}}const V=m.children;for(let ne=0,ce=V.length;ne<ce;ne++)ai(V[ne],w,L,I)}function Xi(m,w,L,I){const D=m.opaque,V=m.transmissive,ne=m.transparent;h.setupLightsView(L),re===!0&&se.setGlobalState(S.clippingPlanes,L),I&&le.viewport(P.copy(I)),D.length>0&&rn(D,w,L),V.length>0&&rn(V,w,L),ne.length>0&&rn(ne,w,L),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Wt(m,w,L,I){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[I.id]===void 0&&(h.state.transmissionRenderTarget[I.id]=new Jn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?_s:vn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const V=h.state.transmissionRenderTarget[I.id],ne=I.viewport||P;V.setSize(ne.z,ne.w);const ce=S.getRenderTarget();S.setRenderTarget(V),S.getClearColor(X),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),j&&De.render(L);const ee=S.toneMapping;S.toneMapping=In;const ye=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),h.setupLightsView(I),re===!0&&se.setGlobalState(S.clippingPlanes,I),rn(m,L,I),A.updateMultisampleRenderTarget(V),A.updateRenderTargetMipmap(V),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Te=0,Ye=w.length;Te<Ye;Te++){const et=w[Te],st=et.object,wt=et.geometry,Ke=et.material,Ce=et.group;if(Ke.side===kt&&st.layers.test(I.layers)){const on=Ke.side;Ke.side=Lt,Ke.needsUpdate=!0,On(st,L,I,wt,Ke,Ce),Ke.side=on,Ke.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(V),A.updateRenderTargetMipmap(V))}S.setRenderTarget(ce),S.setClearColor(X,$),ye!==void 0&&(I.viewport=ye),S.toneMapping=ee}function rn(m,w,L){const I=w.isScene===!0?w.overrideMaterial:null;for(let D=0,V=m.length;D<V;D++){const ne=m[D],ce=ne.object,ee=ne.geometry,ye=I===null?ne.material:I,Be=ne.group;ce.layers.test(L.layers)&&On(ce,w,L,ee,ye,Be)}}function On(m,w,L,I,D,V){m.onBeforeRender(S,w,L,I,D,V),m.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),D.onBeforeRender(S,w,L,I,m,V),D.transparent===!0&&D.side===kt&&D.forceSinglePass===!1?(D.side=Lt,D.needsUpdate=!0,S.renderBufferDirect(L,w,I,D,m,V),D.side=Un,D.needsUpdate=!0,S.renderBufferDirect(L,w,I,D,m,V),D.side=kt):S.renderBufferDirect(L,w,I,D,m,V),m.onAfterRender(S,w,L,I,D,V)}function Fn(m,w,L){w.isScene!==!0&&(w=Ge);const I=ve.get(m),D=h.state.lights,V=h.state.shadowsArray,ne=D.state.version,ce=Ae.getParameters(m,D.state,V,w,L),ee=Ae.getProgramCacheKey(ce);let ye=I.programs;I.environment=m.isMeshStandardMaterial?w.environment:null,I.fog=w.fog,I.envMap=(m.isMeshStandardMaterial?B:y).get(m.envMap||I.environment),I.envMapRotation=I.environment!==null&&m.envMap===null?w.environmentRotation:m.envMapRotation,ye===void 0&&(m.addEventListener("dispose",Ue),ye=new Map,I.programs=ye);let Be=ye.get(ee);if(Be!==void 0){if(I.currentProgram===Be&&I.lightsStateVersion===ne)return Yi(m,ce),Be}else ce.uniforms=Ae.getUniforms(m),m.onBeforeCompile(ce,S),Be=Ae.acquireProgram(ce,ee),ye.set(ee,Be),I.uniforms=ce.uniforms;const Te=I.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Te.clippingPlanes=se.uniform),Yi(m,ce),I.needsLights=vr(m),I.lightsStateVersion=ne,I.needsLights&&(Te.ambientLightColor.value=D.state.ambient,Te.lightProbe.value=D.state.probe,Te.directionalLights.value=D.state.directional,Te.directionalLightShadows.value=D.state.directionalShadow,Te.spotLights.value=D.state.spot,Te.spotLightShadows.value=D.state.spotShadow,Te.rectAreaLights.value=D.state.rectArea,Te.ltc_1.value=D.state.rectAreaLTC1,Te.ltc_2.value=D.state.rectAreaLTC2,Te.pointLights.value=D.state.point,Te.pointLightShadows.value=D.state.pointShadow,Te.hemisphereLights.value=D.state.hemi,Te.directionalShadowMap.value=D.state.directionalShadowMap,Te.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Te.spotShadowMap.value=D.state.spotShadowMap,Te.spotLightMatrix.value=D.state.spotLightMatrix,Te.spotLightMap.value=D.state.spotLightMap,Te.pointShadowMap.value=D.state.pointShadowMap,Te.pointShadowMatrix.value=D.state.pointShadowMatrix),I.currentProgram=Be,I.uniformsList=null,Be}function qi(m){if(m.uniformsList===null){const w=m.currentProgram.getUniforms();m.uniformsList=rr.seqWithValue(w.seq,m.uniforms)}return m.uniformsList}function Yi(m,w){const L=ve.get(m);L.outputColorSpace=w.outputColorSpace,L.batching=w.batching,L.batchingColor=w.batchingColor,L.instancing=w.instancing,L.instancingColor=w.instancingColor,L.instancingMorph=w.instancingMorph,L.skinning=w.skinning,L.morphTargets=w.morphTargets,L.morphNormals=w.morphNormals,L.morphColors=w.morphColors,L.morphTargetsCount=w.morphTargetsCount,L.numClippingPlanes=w.numClippingPlanes,L.numIntersection=w.numClipIntersection,L.vertexAlphas=w.vertexAlphas,L.vertexTangents=w.vertexTangents,L.toneMapping=w.toneMapping}function _r(m,w,L,I,D){w.isScene!==!0&&(w=Ge),A.resetTextureUnits();const V=w.fog,ne=I.isMeshStandardMaterial?w.environment:null,ce=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vi,ee=(I.isMeshStandardMaterial?B:y).get(I.envMap||ne),ye=I.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Be=!!L.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Te=!!L.morphAttributes.position,Ye=!!L.morphAttributes.normal,et=!!L.morphAttributes.color;let st=In;I.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(st=S.toneMapping);const wt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ke=wt!==void 0?wt.length:0,Ce=ve.get(I),on=h.state.lights;if(re===!0&&(be===!0||m!==x)){const Bt=m===x&&I.id===b;se.setState(I,m,Bt)}let Je=!1;I.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==on.state.version||Ce.outputColorSpace!==ce||D.isBatchedMesh&&Ce.batching===!1||!D.isBatchedMesh&&Ce.batching===!0||D.isBatchedMesh&&Ce.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ce.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ce.instancing===!1||!D.isInstancedMesh&&Ce.instancing===!0||D.isSkinnedMesh&&Ce.skinning===!1||!D.isSkinnedMesh&&Ce.skinning===!0||D.isInstancedMesh&&Ce.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ce.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ce.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ce.instancingMorph===!1&&D.morphTexture!==null||Ce.envMap!==ee||I.fog===!0&&Ce.fog!==V||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==ye||Ce.vertexTangents!==Be||Ce.morphTargets!==Te||Ce.morphNormals!==Ye||Ce.morphColors!==et||Ce.toneMapping!==st||Ce.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Ce.__version=I.version);let Xt=Ce.currentProgram;Je===!0&&(Xt=Fn(I,w,D));let li=!1,Dt=!1,$i=!1;const rt=Xt.getUniforms(),Jt=Ce.uniforms;if(le.useProgram(Xt.program)&&(li=!0,Dt=!0,$i=!0),I.id!==b&&(b=I.id,Dt=!0),li||x!==m){le.buffers.depth.getReversed()?(oe.copy(m.projectionMatrix),ju(oe),Ku(oe),rt.setValue(C,"projectionMatrix",oe)):rt.setValue(C,"projectionMatrix",m.projectionMatrix),rt.setValue(C,"viewMatrix",m.matrixWorldInverse);const yn=rt.map.cameraPosition;yn!==void 0&&yn.setValue(C,Oe.setFromMatrixPosition(m.matrixWorld)),Se.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&rt.setValue(C,"isOrthographic",m.isOrthographicCamera===!0),x!==m&&(x=m,Dt=!0,$i=!0)}if(D.isSkinnedMesh){rt.setOptional(C,D,"bindMatrix"),rt.setOptional(C,D,"bindMatrixInverse");const Bt=D.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),rt.setValue(C,"boneTexture",Bt.boneTexture,A))}D.isBatchedMesh&&(rt.setOptional(C,D,"batchingTexture"),rt.setValue(C,"batchingTexture",D._matricesTexture,A),rt.setOptional(C,D,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",D._indirectTexture,A),rt.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",D._colorsTexture,A));const Zi=L.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Ne.update(D,L,Xt),(Dt||Ce.receiveShadow!==D.receiveShadow)&&(Ce.receiveShadow=D.receiveShadow,rt.setValue(C,"receiveShadow",D.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Jt.envMap.value=ee,Jt.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&w.environment!==null&&(Jt.envMapIntensity.value=w.environmentIntensity),Dt&&(rt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&xs(Jt,$i),V&&I.fog===!0&&he.refreshFogUniforms(Jt,V),he.refreshMaterialUniforms(Jt,I,G,Q,h.state.transmissionRenderTarget[m.id]),rr.upload(C,qi(Ce),Jt,A)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(rr.upload(C,qi(Ce),Jt,A),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&rt.setValue(C,"center",D.center),rt.setValue(C,"modelViewMatrix",D.modelViewMatrix),rt.setValue(C,"normalMatrix",D.normalMatrix),rt.setValue(C,"modelMatrix",D.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Bt=I.uniformsGroups;for(let yn=0,Sn=Bt.length;yn<Sn;yn++){const va=Bt[yn];O.update(va,Xt),O.bind(va,Xt)}}return Xt}function xs(m,w){m.ambientLightColor.needsUpdate=w,m.lightProbe.needsUpdate=w,m.directionalLights.needsUpdate=w,m.directionalLightShadows.needsUpdate=w,m.pointLights.needsUpdate=w,m.pointLightShadows.needsUpdate=w,m.spotLights.needsUpdate=w,m.spotLightShadows.needsUpdate=w,m.rectAreaLights.needsUpdate=w,m.hemisphereLights.needsUpdate=w}function vr(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(m,w,L){ve.get(m.texture).__webglTexture=w,ve.get(m.depthTexture).__webglTexture=L;const I=ve.get(m);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=L===void 0,I.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(m,w){const L=ve.get(m);L.__webglFramebuffer=w,L.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(m,w=0,L=0){N=m,T=w,R=L;let I=!0,D=null,V=!1,ne=!1;if(m){const ee=ve.get(m);if(ee.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(C.FRAMEBUFFER,null),I=!1;else if(ee.__webglFramebuffer===void 0)A.setupRenderTarget(m);else if(ee.__hasExternalTextures)A.rebindTextures(m,ve.get(m.texture).__webglTexture,ve.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){const Te=m.depthTexture;if(ee.__boundDepthTexture!==Te){if(Te!==null&&ve.has(Te)&&(m.width!==Te.image.width||m.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(m)}}const ye=m.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ne=!0);const Be=ve.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Be[w])?D=Be[w][L]:D=Be[w],V=!0):m.samples>0&&A.useMultisampledRTT(m)===!1?D=ve.get(m).__webglMultisampledFramebuffer:Array.isArray(Be)?D=Be[L]:D=Be,P.copy(m.viewport),k.copy(m.scissor),z=m.scissorTest}else P.copy(Ee).multiplyScalar(G).floor(),k.copy(Pe).multiplyScalar(G).floor(),z=Xe;if(le.bindFramebuffer(C.FRAMEBUFFER,D)&&I&&le.drawBuffers(m,D),le.viewport(P),le.scissor(k),le.setScissorTest(z),V){const ee=ve.get(m.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+w,ee.__webglTexture,L)}else if(ne){const ee=ve.get(m.texture),ye=w||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ee.__webglTexture,L||0,ye)}b=-1},this.readRenderTargetPixels=function(m,w,L,I,D,V,ne){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ve.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce){le.bindFramebuffer(C.FRAMEBUFFER,ce);try{const ee=m.texture,ye=ee.format,Be=ee.type;if(!Se.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=m.width-I&&L>=0&&L<=m.height-D&&C.readPixels(w,L,I,D,Fe.convert(ye),Fe.convert(Be),V)}finally{const ee=N!==null?ve.get(N).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(m,w,L,I,D,V,ne){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ve.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce){const ee=m.texture,ye=ee.format,Be=ee.type;if(!Se.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=m.width-I&&L>=0&&L<=m.height-D){le.bindFramebuffer(C.FRAMEBUFFER,ce);const Te=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.bufferData(C.PIXEL_PACK_BUFFER,V.byteLength,C.STREAM_READ),C.readPixels(w,L,I,D,Fe.convert(ye),Fe.convert(Be),0);const Ye=N!==null?ve.get(N).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Ye);const et=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Zu(C,et,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,V),C.deleteBuffer(Te),C.deleteSync(et),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(m,w=null,L=0){m.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,m=arguments[1]);const I=Math.pow(2,-L),D=Math.floor(m.image.width*I),V=Math.floor(m.image.height*I),ne=w!==null?w.x:0,ce=w!==null?w.y:0;A.setTexture2D(m,0),C.copyTexSubImage2D(C.TEXTURE_2D,L,0,0,ne,ce,D,V),le.unbindTexture()},this.copyTextureToTexture=function(m,w,L=null,I=null,D=0){m.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,m=arguments[1],w=arguments[2],D=arguments[3]||0,L=null);let V,ne,ce,ee,ye,Be,Te,Ye,et;const st=m.isCompressedTexture?m.mipmaps[D]:m.image;L!==null?(V=L.max.x-L.min.x,ne=L.max.y-L.min.y,ce=L.isBox3?L.max.z-L.min.z:1,ee=L.min.x,ye=L.min.y,Be=L.isBox3?L.min.z:0):(V=st.width,ne=st.height,ce=st.depth||1,ee=0,ye=0,Be=0),I!==null?(Te=I.x,Ye=I.y,et=I.z):(Te=0,Ye=0,et=0);const wt=Fe.convert(w.format),Ke=Fe.convert(w.type);let Ce;w.isData3DTexture?(A.setTexture3D(w,0),Ce=C.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(A.setTexture2DArray(w,0),Ce=C.TEXTURE_2D_ARRAY):(A.setTexture2D(w,0),Ce=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,w.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,w.unpackAlignment);const on=C.getParameter(C.UNPACK_ROW_LENGTH),Je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xt=C.getParameter(C.UNPACK_SKIP_PIXELS),li=C.getParameter(C.UNPACK_SKIP_ROWS),Dt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,ye),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);const $i=m.isDataArrayTexture||m.isData3DTexture,rt=w.isDataArrayTexture||w.isData3DTexture;if(m.isRenderTargetTexture||m.isDepthTexture){const Jt=ve.get(m),Zi=ve.get(w),Bt=ve.get(Jt.__renderTarget),yn=ve.get(Zi.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,Bt.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Sn=0;Sn<ce;Sn++)$i&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(m).__webglTexture,D,Be+Sn),m.isDepthTexture?(rt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,D,et+Sn),C.blitFramebuffer(ee,ye,V,ne,Te,Ye,V,ne,C.DEPTH_BUFFER_BIT,C.NEAREST)):rt?C.copyTexSubImage3D(Ce,D,Te,Ye,et+Sn,ee,ye,V,ne):C.copyTexSubImage2D(Ce,D,Te,Ye,et+Sn,ee,ye,V,ne);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else rt?m.isDataTexture||m.isData3DTexture?C.texSubImage3D(Ce,D,Te,Ye,et,V,ne,ce,wt,Ke,st.data):w.isCompressedArrayTexture?C.compressedTexSubImage3D(Ce,D,Te,Ye,et,V,ne,ce,wt,st.data):C.texSubImage3D(Ce,D,Te,Ye,et,V,ne,ce,wt,Ke,st):m.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Te,Ye,V,ne,wt,Ke,st.data):m.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Te,Ye,st.width,st.height,wt,st.data):C.texSubImage2D(C.TEXTURE_2D,D,Te,Ye,V,ne,wt,Ke,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,on),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,li),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dt),D===0&&w.generateMipmaps&&C.generateMipmap(Ce),le.unbindTexture()},this.copyTextureToTexture3D=function(m,w,L=null,I=null,D=0){return m.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,I=arguments[1]||null,m=arguments[2],w=arguments[3],D=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(m,w,L,I,D)},this.initRenderTarget=function(m){ve.get(m).__webglFramebuffer===void 0&&A.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?A.setTextureCube(m,0):m.isData3DTexture?A.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?A.setTexture2DArray(m,0):A.setTexture2D(m,0),le.unbindTexture()},this.resetState=function(){T=0,R=0,N=null,le.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lg extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cg extends St{constructor(e=null,t=1,n=1,s,r,o,a,l,u=Ot,c=Ot,f,d){super(null,o,a,l,u,c,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new Qe,yl=new Qe,Hs=[],Sl=new si,ug=new Qe,es=new Pt,ts=new ri;class hg extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Sl.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(Sl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),ts.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ei),yl.multiplyMatrices(n,Ei),es.matrixWorld=yl,es.raycast(e,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=r,l.object=this,t.push(l)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cg(new Float32Array(s*this.count),s,this.count,ia,tn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class da extends oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lr=new U,cr=new U,Ml=new Qe,ns=new vs,Gs=new ri,$r=new U,El=new U;class Ac extends at{constructor(e=new Mt,t=new da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lr.fromBufferAttribute(t,s-1),cr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;Ml.copy(s).invert(),ns.copy(e.ray).applyMatrix4(Ml);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const h=c.getX(v),E=c.getX(v+1),M=Vs(this,e,ns,l,h,E);M&&t.push(M)}if(this.isLineLoop){const v=c.getX(_-1),g=c.getX(p),h=Vs(this,e,ns,l,v,g);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const h=Vs(this,e,ns,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Vs(this,e,ns,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vs(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,r),t.distanceSqToSegment(lr,cr,$r,El)>n)return;$r.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($r);if(!(l<e.near||l>e.far))return{distance:l,point:El.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bl=new U,Tl=new U;class dg extends Ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bl.fromBufferAttribute(t,s),Tl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bl.distanceTo(Tl);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wc extends oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Al=new Qe,$o=new vs,Ws=new ri,Xs=new U;class fg extends at{constructor(e=new Mt,t=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,e.ray.intersectsSphere(Ws)===!1)return;Al.copy(s).invert(),$o.copy(e.ray).applyMatrix4(Al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,v=p;_<v;_++){const g=u.getX(_);Xs.fromBufferAttribute(f,g),wl(Xs,g,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,v=p;_<v;_++)Xs.fromBufferAttribute(f,_),wl(Xs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wl(i,e,t,n,s,r,o){const a=$o.distanceSqToPoint(i);if(a<t){const l=new U;$o.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pg extends St{constructor(e,t,n,s,r,o,a,l,u){super(e,t,n,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,p=(o-c)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,s=[],r=[],o=[],a=new U,l=new Qe;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fa extends sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*f+this.aX,u=d*f+p*c+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mg extends fa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pa(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,f){let d=(o-r)/u-(a-r)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,p*=c,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const qs=new U,Zr=new pa,jr=new pa,Kr=new pa;class gg extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),u=qs);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Zr.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,_,v,g),jr.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,_,v,g),Kr.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,_,v,g)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),jr.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Kr.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return n.set(Zr.calc(l),jr.calc(l),Kr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function _g(i,e){const t=1-i;return t*t*e}function vg(i,e){return 2*(1-i)*i*e}function xg(i,e){return i*i*e}function ls(i,e,t,n){return _g(i,e)+vg(i,t)+xg(i,n)}function yg(i,e){const t=1-i;return t*t*t*e}function Sg(i,e){const t=1-i;return 3*t*t*i*e}function Mg(i,e){return 3*(1-i)*i*i*e}function Eg(i,e){return i*i*i*e}function cs(i,e,t,n,s){return yg(i,e)+Sg(i,t)+Mg(i,n)+Eg(i,s)}class Cc extends sn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(e,s.x,r.x,o.x,a.x),cs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bg extends sn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(e,s.x,r.x,o.x,a.x),cs(e,s.y,r.y,o.y,a.y),cs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rc extends sn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tg extends sn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends sn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(e,s.x,r.x,o.x),ls(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ag extends sn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(e,s.x,r.x,o.x),ls(e,s.y,r.y,o.y),ls(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lc extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Cl(a,l.x,u.x,c.x,f.x),Cl(a,l.y,u.y,c.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Cc,CubicBezierCurve3:bg,EllipseCurve:fa,LineCurve:Rc,LineCurve3:Tg,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:Ag,SplineCurve:Lc});class wg extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class Rl extends wg{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rc(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pc(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Cc(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const u=new fa(e,t,n,s,r,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pr extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],f=[],d=[],p=[];let _=0;const v=[],g=n/2;let h=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function E(){const S=new U,F=new U;let T=0;const R=(t-e)/n;for(let N=0;N<=r;N++){const b=[],x=N/r,P=x*(t-e)+e;for(let k=0;k<=s;k++){const z=k/s,X=z*l+a,$=Math.sin(X),W=Math.cos(X);F.x=P*$,F.y=-x*n+g,F.z=P*W,f.push(F.x,F.y,F.z),S.set($,R,W).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-x),b.push(_++)}v.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){const x=v[b][N],P=v[b+1][N],k=v[b+1][N+1],z=v[b][N+1];(e>0||b!==0)&&(c.push(x,P,z),T+=3),(t>0||b!==r-1)&&(c.push(P,k,z),T+=3)}u.addGroup(h,T,0),h+=T}function M(S){const F=_,T=new ae,R=new U;let N=0;const b=S===!0?e:t,x=S===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*x,0),d.push(0,x,0),p.push(.5,.5),_++;const P=_;for(let k=0;k<=s;k++){const X=k/s*l+a,$=Math.cos(X),W=Math.sin(X);R.x=b*W,R.y=g*x,R.z=b*$,f.push(R.x,R.y,R.z),d.push(0,x,0),T.x=$*.5+.5,T.y=W*.5*x+.5,p.push(T.x,T.y),_++}for(let k=0;k<s;k++){const z=F+k,X=P+k;S===!0?c.push(X,X+1,z):c.push(X+1,X,z),N+=3}u.addGroup(h,N,S===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ys=new U,$s=new U,Jr=new U,Zs=new Ht;class Cg extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ui*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){o?(u[0]=o.getX(_),u[1]=o.getX(_+1),u[2]=o.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:v,b:g,c:h}=Zs;if(v.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),h.fromBufferAttribute(a,u[2]),Zs.getNormal(Jr),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const M=(E+1)%3,S=f[E],F=f[M],T=Zs[c[E]],R=Zs[c[M]],N=`${S}_${F}`,b=`${F}_${S}`;b in d&&d[b]?(Jr.dot(d[b].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),d[b]=null):N in d||(d[N]={index0:u[E],index1:u[M],normal:Jr.clone()})}}for(const _ in d)if(d[_]){const{index0:v,index1:g}=d[_];Ys.fromBufferAttribute(a,v),$s.fromBufferAttribute(a,g),p.push(Ys.x,Ys.y,Ys.z),p.push($s.x,$s.y,$s.z)}this.setAttribute("position",new ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dc extends Rl{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Rl().fromJSON(s))}return this}}const Rg={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ic(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u,c,f,d,p;if(n&&(r=Ug(i,e,r,t)),i.length>80*t){a=u=i[0],l=c=i[1];for(let _=t;_<s;_+=t)f=i[_],d=i[_+1],f<a&&(a=f),d<l&&(l=d),f>u&&(u=f),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ps(r,o,t,a,l,p,0),o}};function Ic(i,e,t,n,s){let r,o;if(s===Xg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Pl(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pl(r,i[r],i[r+1],o);return o&&mr(o,o.next)&&(gs(o),o=o.next),o}function ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mr(t,t.next)||ot(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ps(i,e,t,n,s,r,o){if(!i)return;!o&&r&&zg(i,n,s,r);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,r?Lg(i,n,s,r):Pg(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),gs(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Dg(ti(i),e,t),ps(i,e,t,n,s,r,2)):o===2&&Ig(i,e,t,n,s,r):ps(ti(i),e,t,n,s,r,1);break}}}function Pg(i){const e=i.prev,t=i,n=i.next;if(ot(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,c=s<r?s<o?s:o:r<o?r:o,f=a<l?a<u?a:u:l<u?l:u,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>u?a:u:l>u?l:u;let _=n.next;for(;_!==e;){if(_.x>=c&&_.x<=d&&_.y>=f&&_.y<=p&&wi(s,a,r,l,o,u,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Lg(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ot(s,r,o)>=0)return!1;const a=s.x,l=r.x,u=o.x,c=s.y,f=r.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,_=c<f?c<d?c:d:f<d?f:d,v=a>l?a>u?a:u:l>u?l:u,g=c>f?c>d?c:d:f>d?f:d,h=jo(p,_,e,t,n),E=jo(v,g,e,t,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=h&&S&&S.z<=E;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&wi(a,c,l,f,u,d,M.x,M.y)&&ot(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&wi(a,c,l,f,u,d,S.x,S.y)&&ot(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=h;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&wi(a,c,l,f,u,d,M.x,M.y)&&ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=E;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&wi(a,c,l,f,u,d,S.x,S.y)&&ot(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Dg(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!mr(s,r)&&Uc(s,n,n.next,r)&&ms(s,r)&&ms(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gs(n),gs(n.next),n=i=r),n=n.next}while(n!==i);return ti(n)}function Ig(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gg(o,a)){let l=Nc(o,a);o=ti(o,o.next),l=ti(l,l.next),ps(o,e,t,n,s,r,0),ps(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ug(i,e,t,n){const s=[];let r,o,a,l,u;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,u=Ic(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(Hg(u));for(s.sort(Ng),r=0;r<s.length;r++)t=Og(s[r],t);return t}function Ng(i,e){return i.x-e.x}function Og(i,e){const t=Fg(i,e);if(!t)return e;const n=Nc(t,i);return ti(n,n.next),ti(t,t.next)}function Fg(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&wi(o<u?r:n,o,l,u,o<u?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),ms(t,i)&&(f<c||f===c&&(t.x>s.x||t.x===s.x&&Bg(s,t)))&&(s=t,c=f)),t=t.next;while(t!==a);return s}function Bg(i,e){return ot(i.prev,i,e.prev)<0&&ot(e.next,i,i.next)<0}function zg(i,e,t,n){let s=i;do s.z===0&&(s.z=jo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kg(s)}function kg(i){let e,t,n,s,r,o,a,l,u=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<u&&(a++,n=n.nextZ,!!n);e++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,u*=2}while(o>1);return i}function jo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wi(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vg(i,e)&&(ms(i,e)&&ms(e,i)&&Wg(i,e)&&(ot(i.prev,i,e.prev)||ot(i,e.prev,e))||mr(i,e)&&ot(i.prev,i,i.next)>0&&ot(e.prev,e,e.next)>0)}function ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mr(i,e){return i.x===e.x&&i.y===e.y}function Uc(i,e,t,n){const s=Ks(ot(i,e,t)),r=Ks(ot(i,e,n)),o=Ks(ot(t,n,i)),a=Ks(ot(t,n,e));return!!(s!==r&&o!==a||s===0&&js(i,t,e)||r===0&&js(i,n,e)||o===0&&js(t,i,n)||a===0&&js(t,e,n))}function js(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ks(i){return i>0?1:i<0?-1:0}function Vg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ms(i,e){return ot(i.prev,i,i.next)<0?ot(i,e,i.next)>=0&&ot(i,i.prev,e)>=0:ot(i,e,i.prev)<0||ot(i,i.next,e)<0}function Wg(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nc(i,e){const t=new Ko(i.i,i.x,i.y),n=new Ko(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pl(i,e,t,n){const s=new Ko(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ko(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class us{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ll(e),Dl(n,e);let o=e.length;t.forEach(Ll);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Dl(n,t[l]);const a=Rg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ll(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ma extends Mt{constructor(e=new Dc([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:qg;let M,S=!1,F,T,R,N;h&&(M=h.getSpacedPoints(c),S=!0,d=!1,F=h.computeFrenetFrames(c,!1),T=new U,R=new U,N=new U),d||(g=0,p=0,_=0,v=0);const b=a.extractPoints(u);let x=b.shape;const P=b.holes;if(!us.isClockWise(x)){x=x.reverse();for(let j=0,te=P.length;j<te;j++){const C=P[j];us.isClockWise(C)&&(P[j]=C.reverse())}}const z=us.triangulateShape(x,P),X=x;for(let j=0,te=P.length;j<te;j++){const C=P[j];x=x.concat(C)}function $(j,te,C){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(te,C)}const W=x.length,Q=z.length;function G(j,te,C){let we,ie,Se;const le=j.x-te.x,Le=j.y-te.y,ve=C.x-j.x,A=C.y-j.y,y=le*le+Le*Le,B=le*A-Le*ve;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(y),J=Math.sqrt(ve*ve+A*A),Y=te.x-Le/q,Ae=te.y+le/q,he=C.x-A/J,_e=C.y+ve/J,Ve=((he-Y)*A-(_e-Ae)*ve)/(le*A-Le*ve);we=Y+le*Ve-j.x,ie=Ae+Le*Ve-j.y;const se=we*we+ie*ie;if(se<=2)return new ae(we,ie);Se=Math.sqrt(se/2)}else{let q=!1;le>Number.EPSILON?ve>Number.EPSILON&&(q=!0):le<-Number.EPSILON?ve<-Number.EPSILON&&(q=!0):Math.sign(Le)===Math.sign(A)&&(q=!0),q?(we=-Le,ie=le,Se=Math.sqrt(y)):(we=le,ie=Le,Se=Math.sqrt(y/2))}return new ae(we/Se,ie/Se)}const ue=[];for(let j=0,te=X.length,C=te-1,we=j+1;j<te;j++,C++,we++)C===te&&(C=0),we===te&&(we=0),ue[j]=G(X[j],X[C],X[we]);const me=[];let Ee,Pe=ue.concat();for(let j=0,te=P.length;j<te;j++){const C=P[j];Ee=[];for(let we=0,ie=C.length,Se=ie-1,le=we+1;we<ie;we++,Se++,le++)Se===ie&&(Se=0),le===ie&&(le=0),Ee[we]=G(C[we],C[Se],C[le]);me.push(Ee),Pe=Pe.concat(Ee)}for(let j=0;j<g;j++){const te=j/g,C=p*Math.cos(te*Math.PI/2),we=_*Math.sin(te*Math.PI/2)+v;for(let ie=0,Se=X.length;ie<Se;ie++){const le=$(X[ie],ue[ie],we);oe(le.x,le.y,-C)}for(let ie=0,Se=P.length;ie<Se;ie++){const le=P[ie];Ee=me[ie];for(let Le=0,ve=le.length;Le<ve;Le++){const A=$(le[Le],Ee[Le],we);oe(A.x,A.y,-C)}}}const Xe=_+v;for(let j=0;j<W;j++){const te=d?$(x[j],Pe[j],Xe):x[j];S?(R.copy(F.normals[0]).multiplyScalar(te.x),T.copy(F.binormals[0]).multiplyScalar(te.y),N.copy(M[0]).add(R).add(T),oe(N.x,N.y,N.z)):oe(te.x,te.y,0)}for(let j=1;j<=c;j++)for(let te=0;te<W;te++){const C=d?$(x[te],Pe[te],Xe):x[te];S?(R.copy(F.normals[j]).multiplyScalar(C.x),T.copy(F.binormals[j]).multiplyScalar(C.y),N.copy(M[j]).add(R).add(T),oe(N.x,N.y,N.z)):oe(C.x,C.y,f/c*j)}for(let j=g-1;j>=0;j--){const te=j/g,C=p*Math.cos(te*Math.PI/2),we=_*Math.sin(te*Math.PI/2)+v;for(let ie=0,Se=X.length;ie<Se;ie++){const le=$(X[ie],ue[ie],we);oe(le.x,le.y,f+C)}for(let ie=0,Se=P.length;ie<Se;ie++){const le=P[ie];Ee=me[ie];for(let Le=0,ve=le.length;Le<ve;Le++){const A=$(le[Le],Ee[Le],we);S?oe(A.x,A.y+M[c-1].y,M[c-1].x+C):oe(A.x,A.y,f+C)}}}Z(),re();function Z(){const j=s.length/3;if(d){let te=0,C=W*te;for(let we=0;we<Q;we++){const ie=z[we];Re(ie[2]+C,ie[1]+C,ie[0]+C)}te=c+g*2,C=W*te;for(let we=0;we<Q;we++){const ie=z[we];Re(ie[0]+C,ie[1]+C,ie[2]+C)}}else{for(let te=0;te<Q;te++){const C=z[te];Re(C[2],C[1],C[0])}for(let te=0;te<Q;te++){const C=z[te];Re(C[0]+W*c,C[1]+W*c,C[2]+W*c)}}n.addGroup(j,s.length/3-j,0)}function re(){const j=s.length/3;let te=0;be(X,te),te+=X.length;for(let C=0,we=P.length;C<we;C++){const ie=P[C];be(ie,te),te+=ie.length}n.addGroup(j,s.length/3-j,1)}function be(j,te){let C=j.length;for(;--C>=0;){const we=C;let ie=C-1;ie<0&&(ie=j.length-1);for(let Se=0,le=c+g*2;Se<le;Se++){const Le=W*Se,ve=W*(Se+1),A=te+we+Le,y=te+ie+Le,B=te+ie+ve,q=te+we+ve;Oe(A,y,B,q)}}}function oe(j,te,C){l.push(j),l.push(te),l.push(C)}function Re(j,te,C){Ie(j),Ie(te),Ie(C);const we=s.length/3,ie=E.generateTopUV(n,s,we-3,we-2,we-1);Ge(ie[0]),Ge(ie[1]),Ge(ie[2])}function Oe(j,te,C,we){Ie(j),Ie(te),Ie(we),Ie(te),Ie(C),Ie(we);const ie=s.length/3,Se=E.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);Ge(Se[0]),Ge(Se[1]),Ge(Se[3]),Ge(Se[1]),Ge(Se[2]),Ge(Se[3])}function Ie(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ge(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zo[s.type]().fromJSON(s)),new ma(n,e.options)}}const qg={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[s*3],c=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(u,c)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],c=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],_=e[s*3+2],v=e[r*3],g=e[r*3+1],h=e[r*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ae(o,1-l),new ae(u,1-f),new ae(d,1-_),new ae(v,1-h)]:[new ae(a,1-l),new ae(c,1-f),new ae(p,1-_),new ae(g,1-h)]}};function Yg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ur extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new U,d=new U,p=[],_=[],v=[],g=[];for(let h=0;h<=n;h++){const E=[],M=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&l===Math.PI&&(S=-.5/t);for(let F=0;F<=t;F++){const T=F/t;f.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(T+S,1-M),E.push(u++)}c.push(E)}for(let h=0;h<n;h++)for(let E=0;E<t;E++){const M=c[h][E+1],S=c[h][E],F=c[h+1][E],T=c[h+1][E+1];(h!==0||o>0)&&p.push(M,S,T),(h!==n-1||l<Math.PI)&&p.push(S,F,T)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $g extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gr extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Il extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qr=new Qe,Ul=new U,Nl=new U;class ga{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ul),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zg extends ga{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ol extends gr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fl=new Qe,is=new U,eo=new U;class jg extends ga{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl)}}class Kg extends gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jg extends ga{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qg extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bl=new Qe;class e_{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(zl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jo(e[s],this,n,t);return n.sort(zl),n}}function zl(i,e){return i.distance-e.distance}function Jo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Jo(r[o],e,t,!0)}}class kl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hl=new U;let Js,to;class t_ extends at{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Js===void 0&&(Js=new Mt,Js.setAttribute("position",new ct([0,0,0,0,1,0],3)),to=new pr(0,.5,1,5,1),to.translate(0,-.5,0)),this.position.copy(t),this.line=new Ac(Js,new da({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(to,new fs({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Hl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Hl,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class n_ extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const os=i=>new U(...i),no=i=>i*i*(3-2*i);function i_(i,e){const t=[os(i)];return i[2]<4.3&&t.push(os([i[0],i[1],4.3])),t.push(os([e[0],e[1],Math.max(4.3,e[2])])),t.push(os(e)),t.filter((n,s)=>!s||n.distanceTo(t[s-1])>.001)}class s_{constructor(e,t){this.camera=e,this.controls=t,this.transition=null,this.name="overview"}move(e,t=!1){const n=ql[e];if(!n)return;this.cancel(),this.name=e;const s=this.controls.enableDamping;if(this.controls.enableDamping=!1,this.controls.update(),this.controls.enableDamping=s,t){this.camera.position.fromArray(n.position),this.controls.target.fromArray(n.target),this.camera.lookAt(this.controls.target);return}const r=i_(this.camera.position.toArray(),n.position),o=r.slice(1).map((a,l)=>a.distanceTo(r[l]));this.transition={points:r,lengths:o,length:o.reduce((a,l)=>a+l,0),fromTarget:this.controls.target.clone(),toTarget:os(n.target),elapsed:0,duration:1.9}}cancel(){this.transition=null}update(e,t=!1){const n=this.transition;if(!n)return!1;n.elapsed+=e;const s=t?1:Math.min(1,n.elapsed/n.duration);let r=no(s)*n.length;for(let o=0;o<n.lengths.length;o++){if(r<=n.lengths[o]||o===n.lengths.length-1){this.camera.position.lerpVectors(n.points[o],n.points[o+1],no(Math.min(1,r/n.lengths[o])));break}r-=n.lengths[o]}return this.controls.target.lerpVectors(n.fromTarget,n.toTarget,no(s)),this.camera.lookAt(this.controls.target),s===1&&(this.camera.position.copy(n.points.at(-1)),this.transition=null),!0}constrain(){const e=this.camera.position;e.z=Math.max(.35,e.z),e.y=Math.max(1.8,e.y),e.z<4.3&&(e.x=Math.max(-5.55,Math.min(5.55,e.x)),this.name==="sensors"?e.y=Math.max(3.85,e.y):e.y=Math.min(2.45,e.y)),this.camera.lookAt(this.controls.target)}}function r_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Mt;let u=0;for(let c=0;c<i.length;++c){const f=i[c];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(t){let c=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+c);c+=i[d].attributes.position.count}l.setIndex(f)}for(const c in r){const f=Gl(r[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const p=[];for(let v=0;v<o[c].length;++v)p.push(o[c][v][d]);const _=Gl(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function Gl(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const o=new e(r),a=new Gt(o,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=c.count;d<p;d++)for(let _=0;_<t;_++){const v=c.getComponent(d,_);a.setComponent(d+f,_,v)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}const Vl={type:"change"},_a={type:"start"},Oc={type:"end"},Qs=new vs,Wl=new Rn,o_=Math.cos(70*Tt.DEG2RAD),ht=new U,Ct=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},io=1e-6;class a_ extends n_{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Qn,this._lastTargetPosition=new U,this._quat=new Qn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kl,this._sphericalDelta=new kl,this._scale=1,this._panOffset=new U,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new U,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=u_.bind(this),this._onContextMenu=__.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=d_.bind(this),this._interceptControlDown=v_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vl),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;ht.copy(t).sub(this.target),ht.applyQuaternion(this._quat),this._spherical.setFromVector3(ht),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),s<-Math.PI?s+=Ct:s>Math.PI&&(s-=Ct),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ht.setFromSpherical(this._spherical),ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new U(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qs.origin.copy(this.object.position),Qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qs.direction))<o_?this.object.lookAt(this.target):(Wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qs.intersectPlane(Wl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>io||this._lastTargetPosition.distanceToSquared(this.target)>io?(this.dispatchEvent(Vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ht.setFromMatrixColumn(t,0),ht.multiplyScalar(-e),this._panOffset.add(ht)}_panUp(e,t){this.screenSpacePanning===!0?ht.setFromMatrixColumn(t,1):(ht.setFromMatrixColumn(t,0),ht.crossVectors(this.object.up,ht)),ht.multiplyScalar(e),this._panOffset.add(ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ht.copy(s).sub(this.target);let r=ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function u_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Oc),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function h_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(_a)}function d_(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(_a),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Oc))}function p_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function m_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(_a)}function g_(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function __(i){this.enabled!==!1&&i.preventDefault()}function v_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ci=27,Fc=2.2,so=.004,y_=Fc/(Ci-1);function ro(i,e){const n=(Fc-(Ci-1)*so)*(1-Math.max(0,Math.min(100,e))/100);return i*so+Math.max(0,i*(y_-so)-n)}const Xl={sunrise:{sky:"#d9b5a8",sun:[-9,4,-14],color:"#ffd0a0",direct:1.9,diffuse:.65,clouds:.28},morning:{sky:"#b6d9e8",sun:[-3,12,-12],color:"#fff4dc",direct:2.7,diffuse:1.1,clouds:.14},strongSun:{sky:"#9fcee5",sun:[8,14,-10],color:"#fff1d1",direct:4.6,diffuse:1.25,clouds:.06},cloudy:{sky:"#bac7cd",sun:[0,9,-15],color:"#e5edf3",direct:.22,diffuse:.85,clouds:.9},sunset:{sky:"#b38c9c",sun:[10,3.5,-14],color:"#ffb782",direct:1.6,diffuse:.38,clouds:.3},night:{sky:"#14263e",sun:[-7,11,-22],color:"#b8d6ff",direct:.035,diffuse:.07,clouds:.15}};function S_(i,e,t,n){const s=new ag({antialias:!0,alpha:!1,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=Zl,s.toneMapping=Kl,s.toneMappingExposure=1.05,s.autoClear=!1,s.info.autoReset=!1,i.prepend(s.domElement),s.domElement.setAttribute("tabindex","0");const r=new lg;r.background=new He(Xl[e.scenario].sky),r.fog=new ha(r.background,32,100);const o=new Rt(46,1,.1,150);o.layers.enable(1);const a=new a_(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.enablePan=!1,a.minDistance=2.8,a.maxDistance=18,a.minPolarAngle=.52,a.maxPolarAngle=Math.PI/2-.025,a.minAzimuthAngle=-.95,a.maxAzimuthAngle=.95;const l=new s_(o,a),u=(m,w=!1)=>{a.maxPolarAngle=m==="lighting"?Math.PI*.65:Math.PI/2-.025,l.move(m,w)};a.addEventListener("start",()=>{l.cancel(),t==null||t()}),u("overview",!0);const c=new Set,f=new Set,d=new Set,p=(m,w={})=>{const L=new $g({color:m,roughness:.78,...w});return c.add(L),L},_=m=>(f.add(m),m),v=_(new ei(1,1,1)),g=_(new ur(1,16,10)),h=_(new pr(1,1,1,12));function E(m,w,L,I,D,V,ne,ce,ee=r){const ye=new Pt(m,w);return ye.position.set(L,I,D),ye.scale.set(V,ne,ce),ye.castShadow=!0,ye.receiveShadow=!0,ee.add(ye),ye}const M=(m,w,L,I,D,V,ne,ce)=>E(v,m,w,L,I,D,V,ne,ce),S=p("#eeeae3"),F=p("#37454a",{metalness:.55,roughness:.4}),T=p("#c5a578"),R=p("#e4e7e5"),N=p("#28373e"),b=p("#365b65"),x=p("#c6c7c2"),P=document.createElement("canvas");P.width=256,P.height=256;const k=P.getContext("2d");k.fillStyle="#c7ad86",k.fillRect(0,0,256,256);for(let m=0;m<220;m++)k.strokeStyle=`rgba(87,60,30,${.025+m%7*.007})`,k.beginPath(),k.moveTo(0,m*1.2),k.bezierCurveTo(80,m*1.2+Math.sin(m)*4,170,m*1.2-3,256,m*1.2),k.stroke();const z=new pg(P);z.colorSpace=Nt,d.add(z),T.map=z,T.color.set("#ffffff"),M(p("#a7aaa5"),0,-.15,0,12.4,.3,7.4);const X=["#b9b9b2","#b5b6b0","#bdbdb6"].map(m=>p(m));for(let m=0;m<12;m++)for(let w=0;w<7;w++)M(X[(m*7+w*3)%3],m-5.5,.015,w-3,.99,.025,.99);M(S,0,.39,-3.55,12,.78,.22),M(S,0,3.27,-3.55,12,.3,.25),M(x,0,1.7,-3.45,.45,3.4,.5),M(R,0,1.5,-3.16,.17,.23,.045),M(N,0,1.54,-3.13,.1,.055,.01);for(const m of[-5.95,5.95])M(S,m,1.7,-3.42,.3,3.4,.42);M(R,0,3.43,-2.95,12,.14,1.15);const $=[M(S,-6.08,1.7,0,.18,3.4,7),M(S,6.08,1.7,0,.18,3.4,7),M(R,0,3.45,.55,12.2,.12,5.9)],W=p("#e8ebe7",{transparent:!0,opacity:.13,depthWrite:!1,side:kt});$.forEach(m=>{m.material=W,m.castShadow=!1});const Q=E(_(new jn(7.8,2.7)),R,0,3.37,-.3,1,1,1);Q.rotation.x=Math.PI/2,Q.castShadow=!1,M(F,0,.78,-3.32,11.8,.07,.42);const G=[];for(let m=0;m<4;m++){const w=-5.12+m*1.39;for(let L=0;L<3;L++){const I=p("#7398ac",{transparent:!0,opacity:.035,roughness:.15,metalness:.05,depthWrite:!1,side:kt}),D=E(_(new jn(1.3,.735)),I,w,2.72-L*.76,-3.47,1,1,1);D.castShadow=!1,D.renderOrder=2,D.userData={bay:m,row:L},G.push(D)}for(const L of[-.68,.68])M(F,w+L,1.95,-3.4,.065,2.38,.13);for(const L of[.79,1.58,2.34,3.1])M(F,w,L,-3.4,1.39,.045,.13)}const ue=p("#bbc5ca",{metalness:.25,roughness:.48}),me=[],Ee=_(new ei(2.61,.008,.082));for(const m of[1.58,4.33]){for(const ne of[-1.36,1.36])M(F,m+ne,1.95,-3.4,.075,2.38,.15);for(const ne of[.79,3.1])M(F,m,ne,-3.4,2.75,.065,.15);const w=p("#9fc9d7",{transparent:!0,opacity:.045,depthWrite:!1,side:kt}),L=E(_(new jn(2.63,2.25)),w,m,1.95,-3.48,1,1,1);L.castShadow=!1,M(F,m,3.08,-3.28,2.65,.105,.17);const I=new hg(Ee,ue,Ci);I.castShadow=!0,I.receiveShadow=!1,I.instanceMatrix.setUsage(Lu),I.frustumCulled=!1,r.add(I);const D=M(ue,m,2.9,-3.28,2.64,.045,.12),V=[-.85,.85].map(ne=>M(F,m+ne,2,-3.26,.008,2.2,.008));me.push({x:m,slats:I,rail:D,cords:V})}const Pe=new Dc;Pe.moveTo(-.96,-1.25),Pe.lineTo(.96,-1.25),Pe.quadraticCurveTo(1.25,-1.25,1.045,-1.045),Pe.lineTo(.14,-.14),Pe.quadraticCurveTo(0,0,-.14,-.14),Pe.lineTo(-1.045,-1.045),Pe.quadraticCurveTo(-1.25,-1.25,-.96,-1.25);const Xe=_(new ma(Pe,{depth:.055,bevelEnabled:!0,bevelSize:.012,bevelThickness:.008,bevelSegments:2,steps:1,curveSegments:10}));Xe.rotateX(-Math.PI/2),Xe.setIndex(Array.from({length:Xe.attributes.position.count},(m,w)=>w));const Z=p("#46616c",{emissive:"#223540",emissiveIntensity:.16}),re=p("#34414c"),be=p("#252c31"),oe=[{skin:p("#c98e68"),shirt:p("#9c6246"),hair:p("#382b28"),bun:!0},{skin:p("#e0b597"),shirt:p("#456e83"),hair:p("#72503b")},{skin:p("#875c43"),shirt:p("#d1b77c"),hair:p("#292727")},{skin:p("#cba080"),shirt:p("#67877c"),hair:p("#44362e"),bun:!0}];function Re(m,w){const L=(V,ne,ce,ee)=>{const ye=new U(...ne),Be=new U(...ce),Te=ye.clone().add(Be).multiplyScalar(.5);E(h,V,Te.x,Te.y,Te.z,ee,ye.distanceTo(Be),ee,m).quaternion.setFromUnitVectors(new U(0,1,0),Be.sub(ye).normalize());for(const et of[ne,ce])E(g,V,...et,ee,ee,ee,m)};E(g,re,0,.59,.015,.2,.1,.18,m);const I=E(g,w.shirt,0,.91,-.015,.225,.31,.135,m);I.rotation.x=-.08,E(h,w.skin,0,1.2,-.035,.055,.12,.055,m),E(g,w.skin,0,1.35,-.05,.105,.14,.105,m),E(g,w.skin,0,1.34,-.155,.025,.033,.028,m);const D=_(new ur(1,16,10,0,Math.PI*2,0,1.75));E(D,w.hair,0,1.37,-.04,.111,.13,.109,m),w.bun&&E(g,w.hair,0,1.39,.075,.065,.065,.06,m);for(const V of[-1,1]){const ne=V*.12,ce=V*.2;L(re,[ne,.58,-.04],[ne,.53,-.35],.085),L(re,[ne,.53,-.35],[ne,.14,-.39],.061),E(g,be,ne,.095,-.46,.075,.06,.15,m),L(w.shirt,[ce,1.08,-.015],[V*.25,.84,-.22],.067),L(w.skin,[V*.25,.84,-.22],[V*.16,.84,-.57],.043),E(g,w.skin,V*.16,.839,-.62,.05,.025,.075,m)}}function Oe(m,w,L){const I=new Zt;I.rotation.y=w,m.add(I),E(Xe,T,0,.742,.04,1,1,1,I);for(const[ce,ee]of[[-.98,1.12],[.98,1.12],[0,.23]])E(h,R,ce,.38,ee,.035,.72,.035,I),E(h,F,ce,.035,ee,.055,.035,.055,I);M(N,0,1.13,.64,.66,.41,.045,I),M(Z,0,1.13,.666,.6,.35,.008,I),M(F,0,.89,.64,.035,.18,.035,I),M(F,0,.813,.64,.28,.025,.17,I),M(N,0,.819,1.07,.48,.025,.16,I),E(g,N,.34,.827,1.07,.035,.022,.055,I);const D=M(R,-.64,.814,1.02,.25,.014,.3,I);D.rotation.y=-.12,E(h,R,.66,.866,1.03,.055,.13,.055,I);const V=new Zt;V.position.set(0,0,1.75),I.add(V),M(b,0,.48,0,.54,.09,.52,V);const ne=M(b,0,.84,.23,.53,.65,.065,V);ne.rotation.x=-.09,E(h,F,0,.25,0,.035,.4,.035,V);for(let ce=0;ce<5;ce++){const ee=new Zt;ee.rotation.y=ce*Math.PI*2/5,V.add(ee),M(F,0,.075,.14,.035,.035,.28,ee),E(g,N,0,.055,.28,.045,.035,.035,ee)}for(const ce of[-.32,.32])M(F,ce,.65,0,.05,.035,.3,V);L&&Re(V,L)}for(const[m,w]of[[-2.9,[oe[0],null,null,oe[1]]],[2.9,[null,oe[2],oe[3],null]]]){const L=new Zt;L.position.set(m,0,-.4),L.rotation.y=Math.PI/4,r.add(L);for(let I=0;I<4;I++)Oe(L,I*Math.PI/2,w[I])}M(R,-5.35,.57,1.72,1.05,1.12,1.85);for(const m of[1.13,1.72,2.31])M(x,-4.81,.57,m,.015,1.04,.56),M(F,-4.79,.69,m,.02,.035,.16);for(let m=0;m<6;m++)M(m%2?b:T,-5.35+m*.11,1.27,1.3,.075,.3+m%3*.04,.25);function Ie(m,w){E(h,p("#c9c2b3"),m,.22,w,.23,.44,.23),M(p("#68715b"),m,.75,w,.035,1.1,.035);const L=p("#466447");for(let I=0;I<9;I++){const D=I*2.4,V=E(g,L,m+Math.sin(D)*.24,.6+I*.09,w+Math.cos(D)*.21,.12,.27,.06);V.rotation.z=Math.sin(D)*.7}}Ie(5.25,2.1),Ie(-5.25,-2.65);const Ge=[];for(const m of[-3.3,0,3.3]){M(F,m,2.78,-.65,2.2,.095,.22);for(const ce of[-.8,.8])M(F,m+ce,3.08,-.65,.008,.54,.008);const L=p("#f5edce",{emissive:"#ffcf8b",emissiveIntensity:1}),I=L.clone();c.add(I),M(L,m,2.727,-.65,2.08,.012,.17),M(I,m,2.837,-.65,2.08,.012,.17);const D=new Ol("#ffdbad",0,10,1.12,.65,1.4);D.position.set(m,2.7,-.65),D.target.position.set(m,0,-.65),r.add(D,D.target);const V=new Ol("#ffdbad",0,4,1.25,.7,1.3);V.position.set(m,2.9,-.65),V.target.position.set(m,3.4,-.65),r.add(V,V.target);const ne=new Kg("#ffdbad",0,10,1.4);ne.position.set(m,2.95,-.65+.3),r.add(ne),Ge.push({down:D,up:V,bounce:ne,downMat:L,upMat:I})}const j=new Il("#dcebf5","#8b877a",1);r.add(j);const te=new Qg("#fff2da",2);te.position.set(-4,10,-10),te.castShadow=!0,te.shadow.mapSize.set(2048,2048),Object.assign(te.shadow.camera,{left:-9,right:9,top:8,bottom:-8,near:.5,far:50}),te.shadow.bias=-3e-4,te.shadow.normalBias=.025,te.target.position.set(0,0,0),r.add(te,te.target);const C=new Zt;r.add(C),M(p("#8a9c78"),0,-.3,-34,160,.15,65,C),M(p("#aab5b4"),0,-.36,21,160,.1,45,C),M(p("#bcc1b6"),0,-.2,-9,70,.04,2,C);const we=p("#776b58"),ie=["#5c7659","#718463","#4e6d58"].map(m=>p(m));for(let m=0;m<23;m++){const w=(m-11)*3.8,L=-15-m%4*5;M(we,w,1,L,.18,2,.18,C);for(let I=0;I<3;I++)E(g,ie[m%3],w+(I-1)*.6,2.1+I%2*.8,L,1.25,1.6,1.15,C)}const Se=p("#c2c9c5");for(let m=0;m<7;m++){const w=-30+m*10,L=3+m%3;M(Se,w,L/2,-43,7,L,5,C);for(let I=0;I<4;I++)M(F,w-2.5+I*1.6,L-1.2,-40.45,.9,.8,.02,C)}const le=p("#ffffff",{transparent:!0,opacity:.5,depthWrite:!1,roughness:1}),Le=[];for(let m=0;m<7;m++){const w=new Zt;w.position.set(-27+m*9,9+m%3*1.4,-30-m%2*7),C.add(w);for(let L=0;L<5;L++)E(g,le,(L-2)*1.3,Math.sin(L*2)*.3,0,1.8,.48+L%2*.28,.85,w);Le.push(w)}const ve=new fs({color:"#ffe6b3"});c.add(ve);const A=E(g,ve,-9,4,-28,.65,.65,.65,C);A.castShadow=!1,C.traverse(m=>{m.layers.set(1),m.castShadow=!1});const y=new Il("#e8f3ff","#60704c",2);y.layers.set(1),r.add(y);const B=_(new Mt),q=[];for(let m=0;m<160;m++)q.push(Math.sin(m*78.23)*70,10+m*17%50,-40-m%20);B.setAttribute("position",new ct(q,3));const J=new wc({color:"#e0eaff",size:.08,transparent:!0,opacity:0});c.add(J);const Y=new fg(B,J);r.add(Y),r.updateMatrixWorld(!0);const Ae=new Set([...G,...$,A,...me.flatMap(m=>[m.slats,m.rail,...m.cords])]),he=new Set(Ge.flatMap(m=>[m.downMat,m.upMat])),_e=new Map;r.traverse(m=>{if(!m.isMesh||m.isInstancedMesh||Ae.has(m)||he.has(m.material)||m.material===le)return;const w=`${m.material.uuid}:${m.layers.mask}:${m.castShadow}`;_e.has(w)||_e.set(w,[]),_e.get(w).push(m)}),_e.forEach(m=>{if(m.length<2)return;const w=m.map(D=>D.geometry.clone().applyMatrix4(D.matrixWorld)),L=r_(w);if(w.forEach(D=>D.dispose()),!L)return;f.add(L);const I=new Pt(L,m[0].material);I.castShadow=m[0].castShadow,I.receiveShadow=!0,I.layers.mask=m[0].layers.mask,m.forEach(D=>D.removeFromParent()),r.add(I)});const Ve=p("#dce9ed",{emissive:"#527c8c",emissiveIntensity:.25}),se=E(g,Ve,.3,3.85,-3.4,.13,.13,.13);se.castShadow=!1;const Me=new fs({transparent:!0,opacity:0,depthWrite:!1});c.add(Me);const De=new da({color:"#528b9e",transparent:!0,opacity:.9,depthTest:!1});c.add(De);const Ne=_(new Cg(v)),xe=new t_(new U(0,-1,0),new U(-5,4.35,-2.2),1.1,"#b8874e",.18,.1);r.add(xe);for(const m of[xe.line,xe.cone])c.add(m.material),f.add(m.geometry);const We=[],Fe=new Map;function je(m,w,L){const I=E(v,Me,...w,...L);if(I.castShadow=!1,I.userData.component=m,We.push(I),!Fe.has(m)){const V=new Zt;V.visible=!1,r.add(V),Fe.set(m,V)}const D=new dg(Ne,De);D.position.fromArray(w),D.scale.fromArray(L),D.renderOrder=8,Fe.get(m).add(D)}je("glass",[-3.04,1.95,-3.39],[5.6,2.38,.16]),je("blinds",[2.96,1.95,-3.24],[5.5,2.38,.22]);for(const m of[-3.3,0,3.3])je("lighting",[m,2.78,-.65],[2.24,.16,.28]);je("sensors",[.3,3.85,-3.4],[.4,.4,.4]);const O=new e_,de=new ae;let H=null;const K=m=>{if(!m.isPrimary){H=null;return}m.button===0&&(H=[m.clientX,m.clientY])},ge=()=>{H=null},pe=m=>{if(!H||Math.hypot(m.clientX-H[0],m.clientY-H[1])>6){H=null;return}H=null;const w=s.domElement.getBoundingClientRect();de.set((m.clientX-w.left)/w.width*2-1,-(m.clientY-w.top)/w.height*2+1),O.setFromCamera(de,o);const L=O.intersectObjects(We,!1)[0];L&&(n==null||n(L.object.userData.component))};s.domElement.addEventListener("pointerdown",K),s.domElement.addEventListener("pointerup",pe),s.domElement.addEventListener("pointercancel",ge);let Ue=e,qe=hs(Ue),ut=!0,Ze=performance.now(),Et,gt=qe.blindPosition,xn=qe.slatAngle,Vt=qe.lampBrightness/100,_t=qe.lampDirection==="direct"?1:0;const ai=new He,Xi=new He,Wt=new He,rn=new at,On=matchMedia("(prefers-reduced-motion: reduce)");function Fn(m,w={}){Ue=m,qe=hs(m),["camera","reset","inspect","reveal","architecture-node","tour-start","tour-step","tour-exit"].includes(w.type)&&u(m.camera,On.matches),Fe.forEach((L,I)=>{L.visible=I===oo(m.component)}),$.forEach(L=>{L.visible=!m.cutaway}),s.domElement.tabIndex=m.view==="automation"?-1:0,s.domElement.setAttribute("aria-hidden",String(m.view==="automation"))}Fn(e);const qi=new ResizeObserver(()=>{const{width:m,height:w}=i.getBoundingClientRect();!m||!w||(s.setSize(m,w),o.aspect=m/w,o.fov=Tt.radToDeg(2*Math.atan(Math.tan(Tt.degToRad(23))*Math.max(1,1.5/o.aspect))),o.updateProjectionMatrix())});qi.observe(i);function Yi(){const m=r.background;s.info.reset(),s.clear(),o.layers.set(1),s.render(r,o),r.background=null,o.layers.set(0),s.render(r,o),r.background=m,o.layers.enable(1)}function _r(){Yi();const m=s.getContext(),w=new Uint8Array(4),L=I=>{const D=new U(...I).project(o),V=Math.round((D.x*.5+.5)*m.drawingBufferWidth),ne=Math.round((D.y*.5+.5)*m.drawingBufferHeight);return m.readPixels(V,ne,1,1,m.RGBA,m.UNSIGNED_BYTE,w),[...w.slice(0,3)]};return{floor:[-3,-1.5,0,1.5,3].flatMap(I=>[1.5,2.3].map(D=>L([I,.03,D]))),ceiling:L([0,3.36,-.3])}}function xs(m){if(!ut)return;Et=requestAnimationFrame(xs);const w=Math.min((m-Ze)/1e3,.15);if(Ze=m,document.hidden)return;const L=On.matches?1:1-Math.exp(-w*3.3),I=Xl[Ue.scenario];l.update(w,On.matches)||(a.update(),l.constrain());let D=0;G.forEach(ee=>{const ye=Yl[qe.tints[ee.userData.row]];ee.material.opacity=Tt.lerp(ee.material.opacity,ye,L),ai.set(qe.tints[ee.userData.row]==="high"?"#204c78":"#7b9daa"),ee.material.color.lerp(ai,L),D+=1-ee.material.opacity}),D/=G.length,gt=Tt.lerp(gt,qe.blindPosition,L),xn=Tt.lerp(xn,qe.slatAngle,L);const V=ro(Ci-1,gt);for(const ee of me){for(let ye=0;ye<Ci;ye++)rn.position.set(ee.x,3-ro(ye,gt),-3.27),rn.rotation.set(Tt.degToRad(xn),0,0),rn.updateMatrix(),ee.slats.setMatrixAt(ye,rn.matrix);ee.slats.instanceMatrix.needsUpdate=!0,ee.rail.position.y=2.97-V,ee.cords.forEach(ye=>{ye.scale.y=V,ye.position.y=3-V/2})}const ne=1-gt/100*(.12+.85*Math.sin(Tt.degToRad(xn))),ce=(D+ne)/2;Xi.set(I.sky),r.background.lerp(Xi,L),r.fog.color.copy(r.background),xe.visible=Ue.scenario!=="night"&&Ue.view==="office",xe.setDirection(new U(...I.sun).negate().normalize()),te.position.lerp(new U(...I.sun),L),Wt.set(I.color),te.color.lerp(Wt,L),te.intensity=Tt.lerp(te.intensity,I.direct*ce,L),j.color.lerp(Wt,L),j.intensity=Tt.lerp(j.intensity,.035+I.diffuse*(.12+.48*ce),L),y.intensity=Tt.lerp(y.intensity,.06+I.diffuse*1.8,L),A.position.lerp(new U(I.sun[0]*2,I.sun[1],-29),L),ve.color.lerp(Wt,L),le.opacity=Tt.lerp(le.opacity,I.clouds,L),J.opacity=Tt.lerp(J.opacity,Ue.scenario==="night"?.85:0,L),On.matches||Le.forEach((ee,ye)=>{ee.position.x+=w*(.1+ye*.005),ee.position.x>38&&(ee.position.x=-38)}),Vt=Tt.lerp(Vt,qe.lampBrightness/100,L),_t=Tt.lerp(_t,qe.lampDirection==="direct"?1:0,L),Wt.set(qe.lampTemperature==="warm"?"#ffd19b":"#e4efff");for(const ee of Ge){for(const ye of[ee.down,ee.up,ee.bounce])ye.color.lerp(Wt,L);ee.down.intensity=Vt*_t*26,ee.up.intensity=Vt*(1-_t)*10,ee.bounce.intensity=Vt*(1-_t)*10,ee.downMat.emissive.lerp(Wt,L),ee.upMat.emissive.lerp(Wt,L),ee.downMat.emissiveIntensity=Vt*(_t*5+.12),ee.upMat.emissiveIntensity=Vt*((1-_t)*5+.12)}Yi()}Et=requestAnimationFrame(xs);const vr=m=>{m.preventDefault(),i.dispatchEvent(new Event("scene-lost"))};return s.domElement.addEventListener("webglcontextlost",vr),{update:Fn,setCamera:u,captureIllumination:_r,diagnostics:()=>({panes:G.map(m=>({...m.userData,opacity:m.material.opacity})),blindPosition:gt,slatAngle:xn,slatDrops:Array.from({length:Ci},(m,w)=>ro(w,gt)),brightness:Vt,direction:_t,sun:te.intensity,sky:r.background.getHexString(),camera:o.position.toArray(),lights:Ge.map(m=>({down:m.down.intensity,up:m.up.intensity,color:m.down.color.getHexString()})),calls:s.info.render.calls,transitioning:!!l.transition,cameraTarget:a.target.toArray(),selectedComponent:Ue.component,highlightedComponents:[...Fe].filter(([,m])=>m.visible).map(([m])=>m),pickTargets:We.map(m=>{const w=m.position.clone().project(o);return{component:m.userData.component,x:(w.x+1)/2,y:(1-w.y)/2}})}),dispose(){ut=!1,cancelAnimationFrame(Et),qi.disconnect(),s.domElement.removeEventListener("pointerdown",K),s.domElement.removeEventListener("pointerup",pe),s.domElement.removeEventListener("pointercancel",ge),a.dispose(),f.forEach(m=>m.dispose()),c.forEach(m=>m.dispose()),d.forEach(m=>m.dispose()),s.dispose(),s.domElement.remove()}}}const Ri=Hc(),Pi=Xc(Ri);let jt;try{jt=S_(Pi.host,Ri.getState(),Pi.clearCameraSelection,i=>Ri.dispatch({type:"inspect",value:i})),Ri.subscribe((i,e)=>jt.update(i,e)),Pi.render(Ri.getState())}catch(i){console.warn("3D renderer unavailable:",i.message),Pi.showFailure()}Pi.host.addEventListener("scene-lost",()=>Pi.showFailure("contextLost"));window.addEventListener("pagehide",()=>jt==null?void 0:jt.dispose(),{once:!0});new URLSearchParams(location.search).has("inspect")&&(window.livingLab=Object.freeze({state:()=>Ri.getState(),scene:()=>jt==null?void 0:jt.diagnostics(),capture:()=>jt==null?void 0:jt.captureIllumination()}));
