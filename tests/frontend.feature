# language: de
Funktionalität: Schichtmonitor
  Der Schichtmonitor zeigt die Auslastung für das gewählte Team
  anhand der bereitgestellten Beispieldaten.

  Szenario: Beispieldaten anzeigen, Team wechseln und Daten aktualisieren
    Angenommen ich öffne den Schichtmonitor
    Dann ist die Team-Auswahl auf "7A" gesetzt
    Und es werden 10 Arbeitsplätze angezeigt
    Und 2 von 10 Arbeitsplätzen sind aktuell überlastet
    Und die durchschnittliche aktuelle Auslastung beträgt "93,0 %"
    Und es werden 2 Vorschaufenster angezeigt
    Und das aktuelle Stundenfenster "09:15-10:15" zeigt "104,0 %" für AP1
    Wenn ich das Team "7B" auswähle
    Dann werden 4 Arbeitsplätze angezeigt
    Und kein Arbeitsplatz ist aktuell überlastet
    Und die durchschnittliche aktuelle Auslastung beträgt "89,0 %"
    Und das aktuelle Stundenfenster zeigt "96,0 %" für AP1
    Wenn ich die Daten jetzt aktualisiere
    Dann wird ein Aktualisierungszeitpunkt angezeigt
    Und es wird kein Datenfehler angezeigt
