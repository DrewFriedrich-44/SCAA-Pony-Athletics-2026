(() => {
  const data = window.TEAM_DATA || {};
  const initials = (name) =>
    name.trim().split(/\s+/).map(part => part[0] || "").join("").slice(0, 2).toUpperCase();

  /* ROSTER */
  const rosterGrid = document.getElementById("roster-grid");
  if (rosterGrid && Array.isArray(data.roster)) {
    rosterGrid.innerHTML = data.roster.map(player => {
      const isTbd = String(player.number).toUpperCase() === "TBD";

      const media = player.photo
        ? `<img class="player-photo" src="${player.photo}" alt="${player.name}"/>`
        : `<div class="player-photo-placeholder" aria-label="Photo placeholder for ${player.name}">${initials(player.name)}</div>`;

      const rawPositions = Array.isArray(player.positions) ? player.positions : [];
      const outfield = ["LF", "CF", "RF"];
      const displayPositions = rawPositions.filter(position => !outfield.includes(position));

      if (rawPositions.some(position => outfield.includes(position))) {
        displayPositions.push("OF");
      }

      const positionPills = displayPositions
        .map(position => `<span>${position}</span>`)
        .join("");

      return `
        <article class="roster-card">
          ${media}
          <div class="roster-number${isTbd ? " tbd" : ""}">${player.number}</div>
          <div>
            <h3>${player.name}</h3>
            <div class="position-pills">${positionPills}</div>
            <div class="player-bats">Bats: ${player.bats || "R"}</div>
          </div>
        </article>`;
    }).join("");
  }

  /* SCHEDULE */
  const schedule = Array.isArray(data.schedule) ? data.schedule : [];
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
          <span class="opponent-result">
            <span>${event.opponent || "—"}</span>
            ${isGame && event.result && event.score ? `<b class="game-result ${event.result.toLowerCase()}">${event.result} ${event.score}</b>` : ""}
          </span>
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
          ${isGame ? `<div class="schedule-opponent">
            <span>OPPONENT</span>
            <strong>${event.opponent || "TBD"}</strong>
            ${event.result && event.score ? `<b class="game-result ${event.result.toLowerCase()}">${event.result} ${event.score}</b>` : ""}
          </div>` : ""}
        </article>`;
    }).join("");
  }

  /* NEXT UP */
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
      if (!e) return `
        <article class="next-card ${typeClass}">
          <span class="next-label">${label}</span>
          <h3>Nothing scheduled</h3>
        </article>`;

      return `
        <article class="next-card ${typeClass}">
          <span class="next-label">${label}</span>
          <h3>${e.date}</h3>
          <div class="next-meta">
            <span><small>TIME</small><strong>${e.time}</strong></span>
            <span><small>FIELD</small><strong>${e.field}</strong></span>
          </div>
          ${typeClass === "game" ? `<div class="next-opponent">Opponent: <strong>${e.opponent || "TBD"}</strong></div>` : ""}
        </article>`;
    };

    nextUp.innerHTML =
      card("NEXT PRACTICE", nextPractice, "practice") +
      card("NEXT GAME", nextGame, "game");
  }

  /* SPOTLIGHT */
  const spotlightSection = document.getElementById("spotlight");
  const spotlight = data.spotlight || {};
  if (spotlightSection) {
    if (!spotlight.active) {
      spotlightSection.style.display = "none";
    } else {
      spotlightSection.style.display = "";
      const image = spotlight.photo
        ? `<img class="spotlight-photo" src="${spotlight.photo}" alt="${spotlight.player}"/>`
        : `<div class="spotlight-initials">${initials(spotlight.player)}</div>`;

      spotlightSection.querySelector(".spotlight-card").innerHTML = `
        <div class="spotlight-media">${image}</div>
        <div class="spotlight-copy">
          <div class="eyebrow">${spotlight.award || "A's Spotlight"}</div>
          <h2>${spotlight.player}${spotlight.number ? ` <span>#${spotlight.number}</span>` : ""}</h2>
          <p>${spotlight.text || ""}</p>
        </div>`;
    }
  }

  /* PHOTO GALLERY */
  const gallerySection = document.getElementById("gallery");
  const galleryGrid = document.getElementById("gallery-grid");
  if (gallerySection && galleryGrid) {
    if (!Array.isArray(data.gallery) || data.gallery.length === 0) {
      gallerySection.style.display = "none";
    } else {
      gallerySection.style.display = "";
      galleryGrid.innerHTML = data.gallery.map(item => `
        <figure class="gallery-item">
          <img src="${item.image}" alt="${item.caption || "A's baseball"}"/>
          ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
        </figure>
      `).join("");
    }
  }
})();
