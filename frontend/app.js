const teamFiles = {
  "7A": "../testdaten/Monitorwerte.json",
  "7B": "../testdaten/Monitorwerte_Team7B.json",
};

const refreshIntervalMs = 3 * 60 * 1000;
const teamSelect = document.querySelector("#team-select");
const refreshButton = document.querySelector("#refresh-button");
const loadError = document.querySelector("#load-error");
const tableHead = document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
let currentTeam = teamSelect.value;
let requestSequence = 0;

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatPercent(value) {
  return `${Number(value).toFixed(1).replace(".", ",")} %`;
}

function formatUpdatedTime(date) {
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function getCurrentWindow(data) {
  return data.stundenfenster.find((window) => window.status === "aktuell");
}

function getValues(window) {
  if (!window?.werte) {
    return [];
  }

  return Object.values(window.werte).filter((value) => Number.isFinite(value));
}

function getOverloadCount(window) {
  return getValues(window).filter((value) => value > 100).length;
}

function validateData(data, team) {
  if (
    !data ||
    data.team !== team ||
    !Array.isArray(data.arbeitsplaetze) ||
    !Array.isArray(data.stundenfenster) ||
    !data.stundenfenster.some((window) => window.status === "aktuell")
  ) {
    throw new Error(`Die Beispieldaten für Team ${team} haben ein ungültiges Format.`);
  }
}

function updateSummary(data) {
  const currentWindow = getCurrentWindow(data);
  const values = getValues(currentWindow);
  const average = values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : null;

  document.querySelector("#header-date").textContent = formatDate(data.datum);
  document.querySelector("#shift-name").textContent = `${data.schicht}schicht`;
  document.querySelector("#shift-date").textContent = formatDate(data.datum);
  document.querySelector("#live-team").textContent = data.team;
  document.querySelector("#workstation-count").textContent = data.arbeitsplaetze.length;
  document.querySelector("#workstation-description").textContent = `in Team ${data.team}`;
  document.querySelector("#overload-count").textContent = getOverloadCount(currentWindow);
  document.querySelector("#overload-total").textContent = data.arbeitsplaetze.length;
  document.querySelector("#average-load").textContent =
    average === null ? "–" : average.toFixed(1).replace(".", ",");
  document.querySelector("#preview-count").textContent = data.stundenfenster.filter(
    (window) => window.status === "vorschau",
  ).length;
}

function renderTable(data) {
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headerRow = document.createElement("tr");
  const timeHeader = document.createElement("th");
  timeHeader.scope = "col";
  timeHeader.textContent = "ZEITFENSTER";
  headerRow.append(timeHeader);

  for (const workstation of data.arbeitsplaetze) {
    const header = document.createElement("th");
    header.scope = "col";
    header.textContent = workstation.toUpperCase();
    headerRow.append(header);
  }

  tableHead.append(headerRow);

  for (const window of data.stundenfenster) {
    const row = document.createElement("tr");
    const overloadCount = getOverloadCount(window);

    if (window.status === "aktuell") {
      row.classList.add("is-current");
    }
    if (overloadCount >= 1 && overloadCount <= 2) {
      row.classList.add("overload-low");
    } else if (overloadCount >= 3) {
      row.classList.add("overload-high");
    }

    const windowCell = document.createElement("td");
    windowCell.className = "window-cell";
    windowCell.append(createWindowLabel(window, overloadCount));
    row.append(windowCell);

    for (const workstation of data.arbeitsplaetze) {
      row.append(createValueCell(window.werte?.[workstation]));
    }

    tableBody.append(row);
  }
}

function createWindowLabel(window, overloadCount) {
  const label = document.createElement("div");
  const topLine = document.createElement("div");
  topLine.className = "window-topline";

  const time = document.createElement("span");
  time.className = "window-time";
  time.textContent = window.uhrzeit;
  topLine.append(time);

  if (overloadCount > 0) {
    const overload = document.createElement("span");
    overload.className = "window-overload-count";
    overload.textContent = `${overloadCount}× ÜBERLAST`;
    topLine.append(overload);
  }

  const status = document.createElement("span");
  status.className = "window-status";
  if (window.status === "aktuell") {
    status.classList.add("window-status--current");
    status.textContent = "JETZT";
  } else if (window.status === "vorschau") {
    status.classList.add("window-status--preview");
    status.textContent = "VORSCHAU";
  } else {
    status.textContent = "VORBEI";
  }

  label.append(topLine, status);
  return label;
}

function createValueCell(value) {
  const cell = document.createElement("td");
  const isEmpty = !Number.isFinite(value);
  const isOverloaded = !isEmpty && value > 100;
  cell.className = "value-cell";

  if (isOverloaded) {
    cell.classList.add("value-cell--overloaded");
  }
  if (isEmpty) {
    cell.classList.add("value-cell--empty");
  }

  const label = document.createElement("span");
  label.className = "cell-value";
  label.textContent = isEmpty ? "–" : formatPercent(value);

  const track = document.createElement("span");
  track.className = "load-track";
  const fill = document.createElement("span");
  fill.className = "load-fill";
  fill.style.width = isEmpty ? "12%" : `${Math.min(Math.max(value, 0), 120) / 1.2}%`;
  track.append(fill);

  cell.append(label, track);
  return cell;
}

async function loadData() {
  const team = teamSelect.value;
  const requestId = ++requestSequence;
  refreshButton.classList.add("is-loading");
  refreshButton.disabled = true;
  loadError.hidden = true;
  loadError.textContent = "";

  try {
    const response = await fetch(teamFiles[team], { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Datenabruf fehlgeschlagen (HTTP ${response.status}).`);
    }

    const data = await response.json();
    validateData(data, team);
    if (requestId !== requestSequence) {
      return;
    }

    currentTeam = team;
    updateSummary(data);
    renderTable(data);
    document.querySelector("#updated-at").textContent = `Aktualisiert ${formatUpdatedTime(
      new Date(),
    )}`;
  } catch (error) {
    if (requestId === requestSequence) {
      loadError.textContent = `Daten für Team ${team} konnten nicht geladen werden: ${error.message}`;
      loadError.hidden = false;
    }
    console.error("Fehler beim Laden der Monitorwerte:", error);
  } finally {
    if (requestId === requestSequence) {
      refreshButton.classList.remove("is-loading");
      refreshButton.disabled = false;
    }
  }
}

teamSelect.addEventListener("change", () => {
  currentTeam = teamSelect.value;
  void loadData();
});

refreshButton.addEventListener("click", () => {
  void loadData();
});

window.setInterval(() => {
  if (teamSelect.value === currentTeam) {
    void loadData();
  }
}, refreshIntervalMs);

void loadData();
