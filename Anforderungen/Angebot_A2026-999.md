BEISPIEL DIGITAL   GmbH
ANGEBOT A2026-999
Workload Monitoring (WLM)
zwischen
Muster Automobil AG
Werkstraße 1
12345 Musterstadt
(im Folgenden „Kunde“)
und
Beispiel Digital GmbH
Innovationsallee 7
12345 Musterstadt
(im Folgenden „Anbieter“)
Ansprechpartner
Kunde	[personenbezogene Angaben entfernt]
Anbieter
kaufmännisch	[Kontaktangaben entfernt]
Telefon: [entfernt]
E-Mail: [entfernt]
Anbieter
fachlich	[Kontaktangaben entfernt]
Telefon: [entfernt]
E-Mail: [entfernt]
Bezug Kundenanforderung	KA-4102 Auslastungsüberwachung
Beauftragungszeitraum	17.08.2026 – 31.12.2026
Angebotswert	EUR 249.504,00
Die Bindefrist endet am	21.08.2026
Rahmenvertrag	4000099999 vom 01.07.2020
Lieferantennummer	99999999

 1 Vorstellung Beispiel Digital
Die Beispiel Digital GmbH ist ein Joint Venture, das 2020 von der Muster Automobil AG und der Muster Consulting Gruppe gegründet wurde, um die digitale Transformation in der Automobilindustrie zu unterstützen.
Das Unternehmen mit Sitz in Musterstadt konzentriert sich auf digitale Technologie- und Beratungsdienstleistungen, insbesondere in den Bereichen SAP S/4HANA und Cloud-Services.
Ziel ist es, End-to-End-Digitalisierungsprozesse zu ermöglichen, die zentrale Bereiche wie Produktionsplanung, Logistik, Finanzen, Instandhaltung, Qualität und Materialmanagement abdecken.
2 Leistung des Anbieters
2.1 Ausgangssituation und Zielsetzung
Im Produktionsumfeld des Kunden besteht die Anforderung, die Auslastung von Mitarbeitern transparenter darzustellen, um Überlastsituationen frühzeitig zu erkennen. Hintergrund ist die Zielsetzung, die Wirtschaftlichkeit der Standorte zu verbessern und gleichzeitig eine nachhaltige Belastungssteuerung der Mitarbeiter sicherzustellen.
Die bestehende Lösung weist funktionale und technische Schwächen auf. Insbesondere werden Stundenfenster in bestimmten Konstellationen nicht korrekt berechnet und Arbeitsplätze teilweise fehlerhaft dargestellt. Darüber hinaus entspricht die aktuelle Visualisierung nicht den Anforderungen an eine moderne, benutzerfreundliche Anwendung.
Ziel dieses Projekts ist eine transparente, datenbasierte Sicht auf die Auslastung von Arbeitsplätzen bzw. Arbeitsbereichen in der Fahrzeugmontage. Hierzu werden geplante Prozesszeiten mit realen Produktionsdaten wie Aufträgen, Sequenzen, Bandgeschwindigkeit und Pausen kombiniert, um Überlastsituationen frühzeitig zu erkennen, visuell hervorzuheben und Mitarbeitende sowie Planer bei der Entscheidungsfindung zu unterstützen.
2.2 Allgemeine Projektbeschreibung
Der Anbieter unterstützt das Produkt „Auftragsspezifischer Prozessplan (ASPP)“ bereits seit 2023 mit Beratungsumfängen. ASPP bildet eintreffende, fahrzeugspezifische Aufträge und Konfigurationen auf vorhandene Prozesspläne ab. Die Prozesspläne beinhalten alle Informationen, wie ein Fahrzeug zu bauen ist – in Relation zu jeder Produktionslinie und jedem Werk. Das Altsystem läuft auf einer On-Premise-Installation im Werk und wurde von einem Drittanbieter entwickelt.
Im aktuellen Angebot umfasst die Leistung die Entwicklung des Sondermoduls „Workload Monitoring“, die Bereitstellung auf der Integrationsumgebung eines Werks sowie die Erstellung der zugehörigen Dokumentation.
Bis Ende 2026 soll für den Bandabschnitt 7 im Werk Musterstadt ein funktionsfähiger MVP bereitgestellt werden, der die aktuelle Auslastung live visualisiert und demonstrierbar macht. Der MVP läuft im ersten Schritt im Office-Netz des Kunden.
Bestandteile des MVP
•	Live-Anzeige von Stundenfenstern und Auslastungsinformationen
•	Berücksichtigung von:
o	Montagelinien
o	Schichtkalendern
o	Pausen
o	Arbeitszeitmodellen
•	Stammdatenverwaltung als Grundlage der Berechnungen
•	Verbesserte Berechnung der Stundenfenster
•	Moderne und anwenderfreundliche Visualisierung
•	Automatische Aktualisierung der Anzeigen an den Linien
•	Nutzung über Browser/URL ohne zusätzliche Client-Installation
•	Konnektivität zu definierten Schnittstellen
Die nachfolgenden Arbeitspakete basieren auf der Kundendokumentation in Confluence und dienen als Grundlage für die Aufwandsschätzung.
2.3 Leistungsumfang
a  Leistungsbeschreibung
Im Rahmen des beschriebenen Projekts erbringt der Anbieter die folgenden Leistungen als Dienstleistungen gem. §§ 611 ff. BGB. Die Arbeitspakete beschreiben die Umfänge einer einmaligen Durchführung des jeweiligen Arbeitspakets.
Arbeitspaket 1: Fachliches und technisches Lösungsdesign
Zielsetzung	Analyse der fachlichen Anforderungen sowie Ausarbeitung des Zielbilds für das Workload Monitoring. Die Architektur wird als eigenständiges Modul innerhalb der FSS-/ASPP-Landschaft konzipiert und berücksichtigt die erforderlichen Datenquellen, Schnittstellen, Berechnungslogiken und Visualisierungsanforderungen.
Besonderer Fokus liegt auf einer klaren Entkopplung des ASPP-Kernprodukts und der Definition einer zukunftssicheren Integrationsarchitektur.
Inhalt	Projektinitialisierung, Projektsteuerung und Teamleitung
Entwicklungsleistungen:
•	Solution Design
•	Infrastruktur- und Frontend-Setup, Anbindung an den Cloud-Account des Kunden. Die statische Website wird als NGINX-Task in einem bestehenden Container-Cluster bereitgestellt
•	Einrichtung der FE-/BE-Verbindung über API Gateway oder Application Load Balancer
•	Authentifizierung und Autorisierung; rollenbasierte Autorisierung über das zentrale Rollenverwaltungssystem des Kunden
•	Erstellung von Pipelines unter Berücksichtigung der Compliance-Vorgaben der Konzern-Cloud-Plattform
•	Setup für Testautomatisierung
Akzeptanzkriterien (Scope)	•	Initiales Backlog mit User Stories ist erstellt
•	Projekt-Governance aufgesetzt
•	DoR / DoD / Jira-Workflow definiert
•	Kickoff für das Entwicklungsteam stattgefunden
•	Accounts für das Team eingerichtet
•	Planning für den ersten Sprint stattgefunden
•	Grundlegende Architektur und Container-Cluster aufgesetzt
•	Entwicklungs- und Testumgebung aufgesetzt
Prämissen	Entwicklung findet auf Kundenumgebungen statt. Seitens des Kunden besteht keine verbindliche Vorgabe hinsichtlich des technischen Stacks. Der Anbieter präferiert folgende Frameworks:
•	Cloud-Plattform des Kunden (AWS)
•	Container-basiertes Backend
•	Frontend: Angular
•	Design System des Kunden
•	Event Driven Architecture
•	Schnittstellen für Stammdaten sowie ASPP-MongoDB außerhalb des Workload Service vorhanden
Das Entwicklungsteam nimmt nicht an PI-Plannings teil. Der Kunde führt eine UI-Analyse des Altsystems selbst durch und gibt die Anforderungen an die UI vor.
Arbeitspaket 2: Eintragung von Maintenance-Zeiten mit Stammdaten
Zielsetzung	Für den Betrieb der Anwendung sind belastbare Stammdaten aufzubauen und pflegbar zu machen: Eintragung und Pflege der Schicht-, Pausen- und Wartungszeiten.
Beschreibung: Änderungen der Maintenance-Zeiten werden manuell und linienabhängig gepflegt. Die Daten gehen erst für den nächsten Tag in die Berechnungen ein.
Akteure: Produktionsmitarbeiter, Gruppenleiter
Trigger: Bei Änderungen durch Nutzer
Relevante Stammdaten:
•	Montagelinien
•	Teamstrukturen
•	Arbeitsplätze
•	Schichtkalender
•	Pausenregelungen
•	Stundenfenster-Vorlagen
•	Globale Parameter
Inhalt	•	Implementierung der manuellen Pflege und Anpassung von Stammdaten
Akzeptanzkriterien (Scope)	•	Änderungen der Daten werden in der Datenbank gespeichert
•	Die Daten werden bei Änderungen jeweils archiviert/historisiert
Prämissen	•	Historisierung wurde vom Kunden nicht spezifiziert.
•	Für die Stammdaten sind keine sonstigen externen Systeme anzubinden.
Arbeitspaket 3: Entwicklung und Integration Live Monitoring (Stundenfenster)
Zielsetzung	Implementierung und Visualisierung des Workload-Monitorings einschließlich Datenintegration und Workload-Berechnungslogik. Die Lösung wird als eigenständiger Service entwickelt und über definierte Schnittstellen in die bestehende Systemlandschaft integriert.
Beschreibung: Anzeige der Arbeitsbelastung pro Stunde für jeden Arbeitsplatz einer Gruppe (Team-ID) auf einer Montagelinie inkl. farblicher Markierung. Angezeigt werden die Werte aus der Vergangenheit und die aktuellen Werte der laufenden Schicht. Das Monitoring wird alle 3 Minuten aktualisiert.
Inhalt	•	Kalkulation und Berechnungen: Implementierung von Überschreitungs- und Auslastungskennzahlen
•	Bereitstellung von Queries sowie aller CRUD-Methoden
•	Live-Monitoring-Ansicht: Ergänzung einer Ansicht für das Live-Monitoring
•	MongoDB-Anbindung: Anbindung an eine bestehende MongoDB-Instanz
Akzeptanzkriterien (Scope)	•	Website zeigt für die ausgewählte Gruppe und deren Schicht die Belastungswerte an.
•	Textfarbe grün oder rot, abhängig davon, ob am einzelnen Arbeitsplatz Überbelastung vorliegt; farbliche Umrandung (gelb oder rot) bei Überbelastung über die Arbeitsplätze hinweg.
•	Anzeige der Stundenwerte für eine selektierte Gruppe und die zugehörigen Workstations.
•	Darstellung sämtlicher Stunden der laufenden Schicht inkl. Vorschau, soweit valide Daten vorliegen.
•	Die Umrandungen der Stundenfenster werden abhängig von Anzahl und Ausprägung der Überlastungen gelb bzw. rot markiert (Beispiel: 20 % Stundenfenster mit Überschreitung 101,5 % → Gruppensprecher unterstützt, gelb; 60 % Stundenfenster mit Überschreitung 102,3 % → Springer unterstützt, rot).
Prämissen	•	Die Website ist nur aus dem Intranet erreichbar und gegebenenfalls ohne Authentifizierung und Autorisierung. Falls doch eine Authentifizierung benötigt wird, muss eine Logik für lange Sessions eines technischen Nutzers entwickelt werden.
•	Keine Anbindung an Legacy-Leitsysteme, MES und Betriebsdatenerfassung (BDE).
Beispielansicht Stundenfenster (Musterwerte)
	6:00–7:00
60 min	7:00–8:00
60 min	8:15–9:15
60 min	9:15–10:15
60 min
AP 1	95,2 %	104,0 %	95,2 %	104,0 %
AP 2	92,3 %	101,0 %	92,3 %	92,3 %
AP 3	101,0 %	103,0 %	92,3 %	101,0 %
AP 4	92,2 %	91,5 %	92,2 %	91,5 %
AP 5	93,0 %	103,0 %	93,0 %	103,0 %
AP 6	90,5 %	89,0 %	90,5 %	89,0 %
AP 7	83,0 %	83,0 %	83,0 %	83,0 %
AP 8	77,2 %	77,2 %	77,2 %	77,2 %
AP 9	102,0 %	102,0 %	99,0 %	99,0 %
AP 10	98,0 %	101,0 %	98,0 %	98,0 %
Grün: Arbeitsplatz ≤ 100 %, Rot: Arbeitsplatz > 100 %. Umrandung gelb/rot: Überlastung über mehrere Arbeitsplätze im Stundenfenster.
b  Architektur
Die Lösung wird als eigenständige, FSS-konforme Applikation umgesetzt und bewusst vom ASPP-Kernprodukt entkoppelt. Durch die klare Trennung entsteht eine unabhängig deploybare Architektur. Die Lösung kann so autonom weiterentwickelt werden, ohne Abhängigkeiten zum ASPP-Kernprodukt zu erzeugen. Zukünftige Erweiterungen und Skalierungsanforderungen werden flexibel unterstützt.
Komponente	Aufgabe
Workload Monitor Frontend	Statische Angular-Website, Anzeige an Arbeitsplatz-Monitoren und im Büro
Workload Monitor Backend	Berechnung der Stundenfenster, Bereitstellung der APIs
Load Balancer	Verteilt Anfragen von Frontend und Clients an das Backend
Authentifizierung	Cloud-Identitätsdienst des Kunden (optional, siehe AP 3)
Line Image (MQTT)	Liefert Live-Daten der Montagelinie an das Backend
Event-Queue	Nimmt Ereignisse aus der Fertigung entgegen und leitet sie an das Backend
ASPP-MongoDB	Bestehende Datenbank mit Prozessplänen und Prozesszeiten
Werks-Intranet	Arbeitsplatz-Monitore und Büro-Clients greifen per Browser zu
2.4 Leistungsabgrenzung und Ausschlüsse
Anforderungen an den Stand der Technik, die Informationssicherheit und die IT-Sicherheit sind im technischen Teil des Angebots abschließend beschrieben oder über TISAX abgedeckt.
Free and Open Source Software kommt nach aktuellem Planungsstand zum Einsatz und wird durch geeignetes Tooling auf Kundenseite automatisch geprüft. Tools, Skripte und andere Betriebsmittel des Anbieters, die nicht ausdrücklich als Vertragsleistung vereinbart sind, verbleiben beim Anbieter.
Weitere als die ausdrücklich beschriebenen Leistungen sind nicht vorgesehen. Insbesondere umfasst das Angebot nicht:
•	Produktiver Rollout
•	Standortübergreifender Einsatz
•	Betrieb und Hypercare
•	IT-Projektentstehungsprozess (IT-PEP)
•	BDE-basiertes Reporting
•	Markenübergreifende Vermarktung
•	Vollständige Produktreife
Darüber hinaus umfasst das Angebot nicht die folgenden Funktionalitäten:
•	Automatische Änderung von Prozessplänen
•	Direkter Eingriff in die Produktionssteuerung (z. B. Stoppen der Linie)
•	Personaleinsatzplanung (Schichtplanung, Besetzung)
•	Detaillierte MTM-Neubewertung von Arbeitsschritten
2.5 Leistungsabnahme und Abrechnung
Die Leistungsabnahme erfolgt jeweils zum Sprintabschluss auf Basis der im Sprint tatsächlich umgesetzten und abgenommenen Backlog-Einträge (Epic/Feature). Die Abrechnung erfolgt zu den Sprintabschlüssen auf Grundlage der dokumentierten Leistungsabnahmen.
Zum Abschluss jedes Planning Intervalls (PI) erstellt der Anbieter eine Abgrenzungsliste, welche die geplanten, jedoch nicht umgesetzten oder verschobenen Inhalte dokumentiert. Diese Liste bildet die verbindliche Grundlage zur revisionssicheren Abgrenzung der erbrachten Leistungen.
2.6 Projektzeitplan
Die Lieferzeitpunkte richten sich nach den folgenden verbindlichen Meilensteinen:
Meilenstein	Betrag
31.08.2026	27.000,00 €
30.09.2026	65.168,00 €
30.10.2026	65.168,00 €
30.11.2026	65.168,00 €
31.12.2026	27.000,00 €
Summe	249.504,00 €
2.7 Projektdurchführung
Die Leistungen werden nach den technischen und organisatorischen Vorgaben des Kunden unter Aufsicht und alleiniger Weisungsbefugnis der vom Anbieter benannten Mitarbeiter als selbständige Leistung erbracht. Der Kunde ist nicht berechtigt, Weisungen hinsichtlich Art und Weise der Durchführung zu erteilen, und darf die Mitarbeiter des Anbieters nicht in seinen Betrieb eingliedern.
2.8 Subunternehmer
Der Anbieter setzt zur administrativen Betreuung Unternehmen der Muster Consulting Gruppe ein (verbundene Unternehmen im Sinne der §§ 15 ff. AktG). Der Einsatz dieser Unternehmen gilt mit Vertragsabschluss als genehmigt.
3 Kalkulation
Dieses Angebot umfasst sämtliche vom Anbieter zu erbringenden Leistungen gemäß dem beschriebenen Projektumfang. Basierend auf Erfahrungen aus vergleichbaren Projekten schätzt der Anbieter den Beratungs- und Unterstützungsaufwand wie folgt:
Funktion/Level	Beratertage	Tagessatz (EUR)	Summe (EUR)
Managing Consultant (Onshore)	15	1.380	20.700
Senior Consultant (Onshore)	80	1.100	88.000
Consultant (Onshore)	79	860	67.940
Senior Consultant (Offshore)	276	264	72.864
Summe	450		249.504
Die voraussichtliche Laufzeit ist vom 17.08.2026 bis 31.12.2026, frühestens ab Beauftragung. Ein Personentag entspricht 8 Stunden (onshore) bzw. 9 Stunden (offshore).
Die Preise enthalten Reisekosten zu den Projektstandorten. Weitere projektbedingte Reisen werden nach vorheriger Freigabe durch den Projektleiter des Kunden nach tatsächlichen Kosten abgerechnet.
Rechnungen sind binnen 30 Tagen nach Zugang ohne Abzug zur Zahlung fällig. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer. Kalkulationsgrundlage sind die Tagessätze aus dem Rahmenvertrag 4000099999 vom 01.07.2020.
4 Mitwirkungspflichten des Kunden
Der Kunde stellt unentgeltlich und zeitgerecht alle zur Leistungserbringung erforderlichen Mittel, Informationen und Unterlagen zur Verfügung. Darüber hinaus:
•	Benennung eines Projektleiters als Hauptansprechpartner mit operativer Entscheidungsbefugnis.
•	Bereitstellung der Zugänge: GitHub Enterprise, Jira/Confluence, Microsoft 365 (Gastzugang), Token für Fernzugriff, Cloud-Account, SAP.
•	Bereitstellung der Templates für technische Dokumentationen.
•	Bereitstellung und Betrieb der notwendigen Plattform; Prüfung der Lizenzkonformität des Entwicklungsscopes.
•	Termineinhaltung: Verzögern sich Zulieferungen des Kunden, erfolgt eine abgestimmte Terminverschiebung. Daraus entstehende Mehrkosten werden über Change Request oder Scope-Reduktion ausgeglichen.
5 Konditionen
5.1 Projektorganisation
•	Beide Parteien benennen Verantwortliche, die verbindliche Entscheidungen treffen, insbesondere zu Konkretisierungen und Priorisierungen.
•	Die Auswahl des Personals trifft allein der Anbieter.
•	Die Leistungserbringung erfolgt primär in den Räumen des Anbieters; maximal 20 % der Leistung sind vor Ort beim Kunden vorgesehen. Der Systemzugriff erfolgt remote.
•	Die Leistungserbringung beginnt frühestens mit Beauftragung.
•	Änderungswünsche teilt der Kunde schriftlich mit; eine Änderung der Leistungen („Change Request“) bedarf einer schriftlichen Vereinbarung.
5.2 Rechtliche Grundlage
•	Es gelten die im Rahmenvertrag 4000099999 vom 01.07.2020 vereinbarten Konditionen und Vertragsbedingungen.
•	Dieses Angebot enthält vertrauliche Informationen und darf ohne schriftliche Zustimmung des Anbieters Dritten nicht zugänglich gemacht werden.
•	Der Anbieter gewährleistet die Erbringung durch qualifiziertes Personal mit angemessener Sorgfalt. Weitere Gewährleistung ist ausgeschlossen.
•	Schadensersatzansprüche verjähren, soweit nicht vorsätzlich verursacht, binnen eines Jahres ab Erbringung des letzten Beratungstages. Dies gilt nicht für Schäden aus der Verletzung von Leben, Körper und Gesundheit.
•	Die Einsteuerung von Funktionalitäten zur DSGVO-Konformität erfolgt durch den Kunden als Verantwortlichen im Sinne der DSGVO.
Musterstadt, 10.07.2026
Beispiel Digital GmbH
[Unterschriften entfernt]

