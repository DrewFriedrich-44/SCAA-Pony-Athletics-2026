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
})();
