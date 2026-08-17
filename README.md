# SCAA Pony A's Team Site

## Routine updates
For roster **and schedule** changes, edit `team-data.js` in GitHub.

Examples:

```js
{ number: "27", name: "Kellen Moran" }
```

```js
{ date: "Sat, Sep 12", type: "Game", time: "10:00 AM", field: "C11", opponent: "Yankees" }
```

The schedule is HTML in both desktop and mobile layouts. Both versions are generated automatically from the same schedule list, so you only edit the information once.

## Files
- `index.html` - page structure
- `styles.css` - site design and responsive layout
- `team-data.js` - easy roster and schedule edits
- `app.js` - renders roster and schedule


## Asset location
The current GitHub repository stores `as-logo.png`, `gamechanger-qr.png`, and `fall-2026-schedule.png` at the repository root. `index.html` is configured to use those root-level paths.
