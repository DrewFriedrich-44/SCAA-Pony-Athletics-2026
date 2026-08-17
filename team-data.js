/* =========================================================
   SCAA PONY A'S WEBSITE CONTROL CENTER
   Edit this file for routine website updates.
   After changes, Commit to main in GitHub.
   ========================================================= */

window.TEAM_DATA = {

  team: {
    name: "SCAA Pony A's",
    season: "Fall 2026",
    association: "Southern Chesapeake Athletic Association",
    division: "Pony Division"
  },

  links: {
    gameChanger: "https://web.gc.com/teams/1GJiFe1bEylE/live?pid=Copy&c=team_share_link"
  },

  /* Detailed positions are kept here.
     The public site automatically converts LF / CF / RF into one OF pill.
     skill and canPitch are stored but are not displayed publicly. */
  roster: [
    { id: "rkjwx8", number: "44", name: "Drew Friedrich", positions: ["P","1B","3B","LF","RF"], canPitch: true,  skill: 2, bats: "L", photo: "" },
    { id: "bk892v", number: "2",  name: "Nate Terray", positions: ["P","3B","LF","RF"], canPitch: true,  skill: 1, bats: "R", photo: "" },
    { id: "04rpv3", number: "18", name: "Lucas Strem", positions: ["P","C","2B","3B","SS"], canPitch: true, skill: 1, bats: "R", photo: "" },
    { id: "clyssm", number: "32", name: "Luke Dudash", positions: ["P","2B","LF","CF","RF"], canPitch: true, skill: 2, bats: "R", photo: "" },
    { id: "khphfw", number: "21", name: "Reese Settar", positions: ["P","2B","SS","LF","CF","RF"], canPitch: true, skill: 2, bats: "R", photo: "" },
    { id: "m6jlsc", number: "0",  name: "Jay Stanko", positions: ["C","1B","3B","LF","RF"], canPitch: false, skill: 1, bats: "R", photo: "" },
    { id: "hbkqiw", number: "15", name: "Pete Barnes", positions: ["C","1B","LF","CF","RF"], canPitch: false, skill: 2, bats: "R", photo: "" },
    { id: "5cnwt8", number: "17", name: "Stefan Nazzaro", positions: ["1B","2B","3B","SS","LF","CF","RF"], canPitch: false, skill: 3, bats: "R", photo: "" },
    { id: "1kyq5s", number: "12", name: "Ryan Bowen", positions: ["P","2B","3B","SS","LF","CF","RF"], canPitch: true, skill: 2, bats: "R", photo: "" },
    { id: "hh1g2x", number: "25", name: "Jaxon Harris", positions: ["P","1B","2B","3B","LF","RF"], canPitch: true, skill: 2, bats: "R", photo: "" },
    { id: "rc3fck", number: "0",  name: "Kellen Moran", positions: ["2B","LF","CF","RF"], canPitch: false, skill: 2, bats: "R", photo: "" }
  ],

  /* Next Up is calculated automatically from this schedule.
     After a game: result: "W", score: "8-5"
     Before a game: result: "", score: "" */
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

  spotlight: {
    active: false,
    player: "",
    number: "",
    award: "Great Teammate",
    text: "",
    photo: ""
  },

  gallery: [
    // { image: "gallery/practice-01.jpg", caption: "Getting to work." },
    // { image: "gallery/game-01.jpg", caption: "Game day." }
  ]
};
