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

  const nextUp = document.getElementById("next-up-grid");
  if (nextUp) {
    const months = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const parseDate = (label) => {
      const m = label.match(/(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat),\s+([A-Z][a-z]{2})\s+(\d{1,2})/);
      if (!m) return null;
      return new Date(2026, months[m[1]], Number(m[2]), 23, 59, 59);
    };
    const now = new Date();
    const upcoming = schedule.filter(e => {
      const d = parseDate(e.date);
      return d && d >= now;
    });
    const nextPractice = upcoming.find(e => e.type.toLowerCase() === "practice");
    const nextGame = upcoming.find(e => e.type.toLowerCase() === "game");

    const card = (label, e, typeClass) => {
      if (!e) return `<article class="next-card ${typeClass}"><span class="next-label">${label}</span><h3>Nothing scheduled</h3></article>`;
      return `<article class="next-card ${typeClass}">
        <span class="next-label">${label}</span>
        <h3>${e.date}</h3>
        <div class="next-meta">
          <span><small>TIME</small><strong>${e.time}</strong></span>
          <span><small>FIELD</small><strong>${e.field}</strong></span>
        </div>
        ${typeClass === "game" ? `<div class="next-opponent">Opponent: <strong>${e.opponent || "TBD"}</strong></div>` : ""}
      </article>`;
    };

    nextUp.innerHTML = card("NEXT PRACTICE", nextPractice, "practice") + card("NEXT GAME", nextGame, "game");
  }
})();
