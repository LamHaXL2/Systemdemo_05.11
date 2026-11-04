const teamFiles = {
  "7A": "../testdaten/Monitorwerte.json",
  "7B": "../testdaten/Monitorwerte_Team7B.json",
};

const elements = {
  teamSelect: document.querySelector("#team-select"),
  refreshButton: document.querySelector("#refresh-button"),
  headerDate: document.querySelector("#header-date"),
  shiftName: document.querySelector("#shift-name"),
  shiftDate: document.querySelector("#shift-date"),
  updatedAt: document.querySelector("#updated-at"),
  workstationCount: document.querySelector("#workstation-count"),
  workstationCaption: document.querySelector("#workstation-caption"),
  overloadCount: document.querySelector("#overload-count"),
  overloadTotal: document.querySelector("#overload-total"),
  averageLoad: document.querySelector("#average-load"),
  previewCount: document.querySelector("#preview-count"),
  tableTeam: document.querySelector("#table-team"),
  tableHead: document.querySelector("#table-head"),
  tableBody: document.querySelector("#table-body"),
  loadError: document.querySelector("#load-error"),
};

let activeTeam = "7A";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function formatPercent(value) {
  return `${value.toFixed(1).replace(".", ",")} %`;
}

function getCurrentWindow(data) {
  return data.stundenfenster.find((window) => window.status === "aktuell");
}

function updateSummary(data) {
  const workstations = data.arbeitsplaetze;
  const currentValues = getCurrentWindow(data)?.werte;
  const values = currentValues
    ? workstations.map((workstation) => currentValues[workstation]).filter(Number.isFinite)
    : [];
  const overloads = values.filter((value) => value > 100).length;
  const average = values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : null;

  elements.workstationCount.textContent = String(workstations.length);
  elements.workstationCaption.textContent = `in Team ${data.team}`;
  elements.overloadCount.textContent = String(overloads);
  elements.overloadTotal.textContent = String(workstations.length);
  elements.averageLoad.textContent = average === null ? "–" : average.toFixed(1).replace(".", ",");
  elements.previewCount.textContent = String(
    data.stundenfenster.filter((window) => window.status === "vorschau").length,
  );
}

function renderTable(data) {
  elements.tableTeam.textContent = data.team;
  elements.tableHead.replaceChildren();
  elements.tableBody.replaceChildren();

  const headerRow = document.createElement("tr");
  const timeHeading = document.createElement("th");
  timeHeading.scope = "col";
  timeHeading.textContent = "ZEITFENSTER";
  headerRow.append(timeHeading);

  for (const workstation of data.arbeitsplaetze) {
    const heading = document.createElement("th");
    heading.scope = "col";
    heading.textContent = workstation;
    headerRow.append(heading);
  }

  elements.tableHead.append(headerRow);

  for (const window of data.stundenfenster) {
    const row = document.createElement("tr");
    const values = window.werte
      ? data.arbeitsplaetze.map((workstation) => window.werte[workstation]).filter(Number.isFinite)
      : [];
    const overloadCount = values.filter((value) => value > 100).length;

    if (overloadCount > 0) {
      row.classList.add(overloadCount >= 3 ? "overload-red" : "overload-yellow");
    }
    if (window.status === "aktuell") {
      row.classList.add("current-row");
    }

    const timeCell = document.createElement("th");
    timeCell.scope = "row";
    const time = document.createElement("div");
    time.className = "window-time";
    const timeText = document.createElement("strong");
    timeText.textContent = window.uhrzeit;
    time.append(timeText);

    if (overloadCount > 0) {
      const count = document.createElement("span");
      count.className = "overload-count";
      count.textContent = `${overloadCount}× ÜBERLAST`;
      time.append(count);
    }

    const status = document.createElement("span");
    status.className = "window-status";
    if (window.status === "aktuell") {
      status.classList.add("window-status-current");
      status.textContent = "JETZT";
    } else if (window.status === "vorschau") {
      status.classList.add("window-status-preview");
      status.textContent = "VORSCHAU";
    } else {
      status.textContent = "VORBEI";
    }

    timeCell.append(time, status);
    row.append(timeCell);

    for (const workstation of data.arbeitsplaetze) {
      const value = window.werte?.[workstation];
      const cell = document.createElement("td");
      const bar = document.createElement("div");
      const fill = document.createElement("span");
      bar.className = "load-bar";

      if (Number.isFinite(value)) {
        const overloaded = value > 100;
        cell.className = overloaded ? "load-cell overloaded" : "load-cell";
        const label = document.createElement("span");
        label.className = "load-value";
        label.textContent = formatPercent(value);
        fill.style.width = `${Math.min(value, 100)}%`;
        cell.setAttribute(
          "aria-label",
          `${workstation}: ${formatPercent(value)}${overloaded ? ", überlastet" : ""}`,
        );
        cell.append(label);
      } else {
        cell.className = "load-cell empty";
        const label = document.createElement("span");
        label.className = "load-value empty";
        label.textContent = "–";
        fill.style.width = "12%";
        cell.setAttribute("aria-label", `${workstation}: keine Daten`);
        cell.append(label);
      }

      bar.append(fill);
      cell.append(bar);
      row.append(cell);
    }

    elements.tableBody.append(row);
  }
}

function validateData(data, team) {
  if (
    !data
    || data.team !== team
    || !Array.isArray(data.arbeitsplaetze)
    || !Array.isArray(data.stundenfenster)
    || !data.datum
  ) {
    throw new Error(`Die Daten für Team ${team} haben ein ungültiges Format.`);
  }
}

async function loadTeam(team = activeTeam) {
  elements.refreshButton.disabled = true;
  elements.updatedAt.textContent = "Daten werden geladen …";

  try {
    const response = await fetch(teamFiles[team], { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Die Daten für Team ${team} konnten nicht geladen werden (HTTP ${response.status}).`);
    }

    const data = await response.json();
    validateData(data, team);
    activeTeam = team;
    elements.shiftDate.textContent = formatDate(data.datum);
    elements.headerDate.textContent = formatDate(data.datum);
    elements.shiftName.textContent = `${data.schicht}schicht`;
    updateSummary(data);
    renderTable(data);
    elements.updatedAt.textContent = `Aktualisiert ${new Intl.DateTimeFormat("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date())}`;
    elements.loadError.hidden = true;
    elements.loadError.textContent = "";
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler beim Laden der Daten.";
    elements.updatedAt.textContent = "Aktualisierung fehlgeschlagen";
    elements.loadError.textContent = `${message} Prüfen Sie die Verbindung und versuchen Sie es erneut.`;
    elements.loadError.hidden = false;
  } finally {
    elements.refreshButton.disabled = false;
  }
}

elements.teamSelect.addEventListener("change", (event) => {
  loadTeam(event.currentTarget.value);
});
elements.refreshButton.addEventListener("click", () => loadTeam());
window.setInterval(() => loadTeam(), 180_000);

loadTeam();
