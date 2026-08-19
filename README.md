# SCAA Pony A's Website Control Center

## Routine updates
Edit only `team-data.js` for most website changes.

### Roster
Change names, numbers, or add `photo`.

### Schedule
Update any date, time, field, opponent, or activity.
The `Next Up` section updates automatically.

### Spotlight
Set `active: true` and fill in the player information.
Set `active: false` to hide the section.

### Photo Gallery
Upload images into a `gallery/` folder and add them to the `gallery` array.

### Files
- `team-data.js` = routine content updates
- `app.js` = rendering logic
- `index.html` = page structure
- `styles.css` = design


## Game results
Every Game in `team-data.js` now includes `result` and `score`.
Example: `result: "W", score: "8-5"`.
Leave both blank before the game. Results render automatically on desktop and mobile schedules.
