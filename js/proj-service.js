var gProj = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "Sprint #1 at Coding Academy Bootcamp",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Minesweeper",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "touchnum",
    name: "Touch the Num",
    title: "Daily Exercise at Coding Academy Bootcamp",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Touch-the-Num",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "ballboard",
    name: "Ball Board",
    title: "Daily Exercise at Coding Academy Bootcamp",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Ball-Baord",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "pacman",
    name: "Pacman",
    title: "Daily Exercise at Coding Academy Bootcamp",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Pacman",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "inpicture",
    name: "In Picture",
    title: "Daily Exercise at Coding Academy Bootcamp",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "In-Pictrue",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "simon",
    name: "Simon",
    title: "Angela Yu's Udemy Web Development Course",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Simon",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "movietickets",
    name: "Movie Tickets",
    title: "Brad Travesty's Web Development Udemy Course",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Movie-Tickets",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "videoplayer",
    name: "Video Player",
    title: "Brad Travesty's Web Development Udemy Course",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Video-Player",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "drumkit",
    name: "Drumkit",
    title: "Angela Yu's Udemy Web Development Course",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "Drum-Kit",
    publishedAt: getTimestamp(),
    labels: ["Matrixes", "keyboard events"],
  },
];

function getProjects() {
  console.log(gProj);
  return gProj;
}

function getProjectById(id) {
  var selectedProject = gProj.find((project) => id === project.id);
  return selectedProject;
}

function getTimestamp() {
  var timestamp = new Date().getTime();
  return timestamp;
}

function convertTimestampToDate(timestamp) {
  var date = new Date(timestamp);
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var publishedAt = month + "/" + year;
  return publishedAt;
}
