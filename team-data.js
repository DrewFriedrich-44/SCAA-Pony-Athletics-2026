/* =========================================================
   SCAA PONY A'S WEBSITE CONTROL CENTER
   Edit this file for routine website updates.
   After changes, Commit to main in GitHub.
   ========================================================= */

window.TEAM_DATA = {

  /* ---------------- TEAM INFORMATION ---------------- */
  team: {
    name: "SCAA Pony A's",
    season: "Fall 2026",
    association: "Southern Chesapeake Athletic Association",
    division: "Pony Division"
  },

  /* ---------------- LINKS ---------------- */
  links: {
    gameChanger: "https://web.gc.com/teams/1GJiFe1bEylE/live?pid=Copy&c=team_share_link"
  },

  /* ---------------- ROSTER ----------------
     Add a player photo later by setting photo to a filename,
     for example: "players/drew-friedrich.jpg"
     Leave photo blank to show initials instead.
  ----------------------------------------------------- */
  roster: [
    { number: "44", name: "Drew Friedrich", photo: "" },
    { number: "2",  name: "Nate Terray", photo: "" },
    { number: "18", name: "Lucas Strem", photo: "" },
    { number: "32", name: "Luke Dudash", photo: "" },
    { number: "15", name: "Pete Barnes", photo: "" },
    { number: "12", name: "Ryan Bowen", photo: "" },
    { number: "3",  name: "Reese Settar", photo: "" },
    { number: "TBD", name: "Kellen Moran", photo: "" },
    { number: "TBD", name: "Stefan Nazzaro", photo: "" },
    { number: "TBD", name: "Jaxon Harris", photo: "" },
    { number: "TBD", name: "Jay Stanko", photo: "" }
  ],

  /* ---------------- SCHEDULE ----------------
     Next Up is calculated automatically from this list.
     For games, update time, field, and opponent when assigned.

     AFTER A GAME:
     result: "W", score: "8-5"
     result: "L", score: "4-7"

     Before the game, leave both fields blank:
     result: "", score: ""
  ----------------------------------------------------- */
  schedule: [
    { date: "Sat, Aug 22", type: "Practice", time: "9:00 AM - 11:00 AM", field: "C11", opponent: "" },
    { date: "Mon, Aug 24", type: "Practice", time: "6:30 PM - 8:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Aug 27", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Sat, Aug 29", type: "Practice", time: "9:00 AM - 11:00 AM", field: "C11", opponent: "" },
    { date: "Mon, Aug 31", type: "Practice", time: "6:30 PM - 8:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Sep 3", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Sep 10", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },

    { date: "Sat, Sep 12", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Sep 15", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Sep 17", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C12", opponent: "" },
    { date: "Sat, Sep 19", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Sep 22", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Sep 24", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Sat, Sep 26", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Sep 29", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Oct 1", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Sat, Oct 3", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Oct 6", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Oct 8", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C12", opponent: "" },
    { date: "Sat, Oct 10", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Oct 13", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Oct 15", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C12", opponent: "" },
    { date: "Sat, Oct 17", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Oct 20", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Oct 22", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C12", opponent: "" },
    { date: "Sat, Oct 24", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" },
    { date: "Tue, Oct 27", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C11", opponent: "" },
    { date: "Thu, Oct 29", type: "Practice", time: "5:30 PM - 7:00 PM", field: "C12", opponent: "" },
    { date: "Sat, Oct 31", type: "Game", time: "TBD", field: "TBD", opponent: "TBD", result: "", score: "" }
  ],

  /* ---------------- A'S SPOTLIGHT ----------------
     Set active to false to hide the section.
     Set active to true once you want to feature a player.
  ----------------------------------------------------- */
  spotlight: {
    active: false,
    player: "",
    number: "",
    award: "Great Teammate",
    text: "",
    photo: ""
  },

  /* ---------------- PHOTO GALLERY ----------------
     Upload photos into a folder named "gallery".
     Then add entries here.
     Example:
     { image: "gallery/opening-day.jpg", caption: "Opening Day" }
  ----------------------------------------------------- */
  gallery: [
    // { image: "gallery/practice-01.jpg", caption: "Getting to work." },
    // { image: "gallery/game-01.jpg", caption: "Game day." }
  ]
};
