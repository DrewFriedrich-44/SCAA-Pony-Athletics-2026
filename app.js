(() => {
  const initials = (name) =>
    name.trim().split(/\s+/).map(part => part[0] || "").join("").slice(0, 2).toUpperCase();

  const rosterGrid = document.getElementById("roster-grid");
  if (rosterGrid && window.TEAM_DATA) {
    rosterGrid.innerHTML = window.TEAM_DATA.roster.map(player => {
      const isTbd = String(player.number).toUpperCase() === "TBD";
      return `
        <article class="roster-card">
          <div class="player-photo-placeholder" aria-label="Photo placeholder for ${player.name}">${initials(player.name)}</div>
          <div class="roster-number${isTbd ? " tbd" : ""}">${player.number}</div>
          <div>
            <h3>${player.name}</h3>
            <span>${isTbd ? "Uniform Number" : "A's Baseball"}</span>
          </div>
        </article>`;
    }).join("");
  }

  const schedule = window.TEAM_DATA?.schedule || [];
  const desktop = document.getElementById("schedule-desktop");
  const mobile = document.getElementById("schedule-mobile");

  if (desktop) {
    desktop.innerHTML = schedule.map(event => {
      const isGame = event.type.toLowerCase() === "game";
      return `
        <div class="schedule-row ${isGame ? "game" : "practice"}">
          <strong class="schedule-date">${event.date}</strong>
          <span><b class="activity-pill">${event.type}</b></span>
          <span>${event.time}</span>
          <span>${event.field}</span>
          <span>${event.opponent || "—"}</span>
        </div>`;
    }).join("");
  }

  if (mobile) {
    mobile.innerHTML = schedule.map(event => {
      const isGame = event.type.toLowerCase() === "game";
      return `
        <article class="schedule-event-card ${isGame ? "game" : "practice"}">
          <div class="schedule-event-top">
            <strong>${event.date}</strong>
            <span class="activity-pill">${event.type}</span>
          </div>
          <div class="schedule-event-grid">
            <div><span>TIME</span><strong>${event.time}</strong></div>
            <div><span>FIELD</span><strong>${event.field}</strong></div>
          </div>
          ${isGame ? `<div class="schedule-opponent"><span>OPPONENT</span><strong>${event.opponent || "TBD"}</strong></div>` : ""}
        </article>`;
    }).join("");
  }
})();
