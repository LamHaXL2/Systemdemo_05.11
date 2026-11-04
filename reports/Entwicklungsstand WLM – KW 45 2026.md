# Entwicklungsstand WLM – KW 45/2026


## Kurzfazit

Gesamtstatus **Gelb**: Das Projekt liegt bei 62 % des Roadmap-Umfangs statt geplanter 68 %. Ursache ist die verzögerte Freigabe des MongoDB-Zugriffs (ASPP) in Sprint 5.

| Kennzahl | Wert |
| --- | --- |
| Aktueller Sprint | Sprint 6 (26.10. – 06.11.2026) |
| Umgesetzte Story Points gesamt | 186 von 300 |
| Meilenstein 30.10.2026 | Abgenommen, 65.168 € abgerechnet |
| Nächster Meilenstein | 30.11.2026 – Live-Ansicht Stundenfenster BA 7 |
| Offene Blocker | 1 (Testdaten Schichtkalender) |

## Abgleich Arbeitspakete gegen Roadmap

AP 1 ist abgeschlossen, AP 2 liegt im Plan, AP 3 hängt eine Woche zurück.

| Arbeitspaket | Roadmap-Soll bis KW 45 | Ist-Stand | Status |
| --- | --- | --- | --- |
| AP 1 – Lösungsdesign, Infrastruktur, Pipelines | 100 % | 100 % – ECS-Cluster, ALB, CloudIDP-Login, Vanguard-Pipeline live | Grün |
| AP 2 – Stammdaten und Maintenance-Zeiten | 80 % | 80 % – Montagelinien, Schichtkalender, Pausen pflegbar; Historisierung offen | Grün |
| AP 3 – Live-Monitoring Stundenfenster | 45 % | 30 % – Berechnungslogik fertig, Live-Ansicht und 3-Minuten-Aktualisierung in Arbeit | Gelb |
| Dokumentation | 50 % | 40 % – Architektur dokumentiert, Betriebshandbuch fehlt | Gelb |

## GitHub-Aktivität Sprint 6

In der ersten Sprintwoche gab es 47 Commits und 9 Pull Requests, davon 6 gemergt.

| Repository | Commits | PRs gemergt | PRs offen | Wichtigste Änderung |
| --- | --- | --- | --- | --- |
| wlm-backend | 26 | 4 | 2 | Berechnung Überlastung pro Stundenfenster, inkl. Pausenabzug |
| wlm-frontend | 15 | 1 | 1 | GroupUI-Tabelle mit gelber/roter Umrandung je Stundenfenster |
| wlm-infrastructure | 6 | 1 | 0 | Auto-Refresh-Job alle 3 Minuten im CDK angelegt |

Offene Pull Requests: *feat/live-view-polling* (wartet auf Review), *fix/shift-boundary-calc* (Testfehler an Schichtgrenze 14:30), *feat/team-filter* (in Arbeit).

## Abweichungen und Risiken

Das größte Risiko für den Meilenstein 30.11. sind fehlende Testdaten aus dem Schichtkalender.

| Risiko | Auswirkung | Maßnahme | Verantwortlich |
| --- | --- | --- | --- |
| Testdaten Schichtkalender BA 7 fehlen | Live-Ansicht nicht realistisch testbar | Anfrage an Fachbereich, Frist 06.11. | Kunde (Mitwirkung) |
| Historisierung Stammdaten nicht spezifiziert | AP 2 kann nicht vollständig abgenommen werden | Klärung im nächsten Refinement | Product Owner |
| Schichtgrenze 14:30 falsch berechnet | Falsche Werte im letzten Stundenfenster | Bugfix in PR *fix/shift-boundary-calc* | Entwicklung |
| 1 Woche Verzug AP 3 | Meilenstein 30.11. knapp | Teamfilter in Sprint 8 verschieben | Projektleitung |

## Nächste Schritte

- [ ] Testdaten Schichtkalender beim Fachbereich anfordern (bis 06.11.)
- [ ] Review PR *feat/live-view-polling* abschließen
- [ ] Bugfix Schichtgrenze 14:30 mergen
- [ ] Historisierung im Refinement klären
- [ ] Sprint-Review Sprint 6 am 06.11. mit Abnahme der Stammdatenpflege
