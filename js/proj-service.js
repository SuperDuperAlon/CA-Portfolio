var gProj = [
    {
    id: "anyplace",
    name: "Anyplace",
    title: "An AirBNB inspired clone",
    desc: "Final project at Coding Academy bootcamp",
    url: "Minesweeper",
    publishedAt: getTimestamp(),
    labels: ["React", "SCSS", 'Express', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    id: "memegen",
    name: "MemeGen",
    title: "My very own Meme Generator",
    desc: "Sprint #2 Project at Coding Academy Bootcamp",
    url: "Minesweeper",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "The Classic Minesweeper Game",
    desc: "Sprint #1 Project at Coding Academy Bootcamp",
    url: "Minesweeper",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
  },
  // {
  //   id: "minesweeper",
  //   name: "Minesweeper",
  //   title: "Sprint #1 at Coding Academy Bootcamp",
  //   desc: "lorem ipsum lorem ipsum lorem ipsum",
  //   url: "Minesweeper",
  //   publishedAt: getTimestamp(),
  //   labels: ["Matrixes", "keyboard events"],
  // },
  // {
  //   id: "touchnum",
  //   name: "Touch the Num",
  //   title: "Daily Exercise at Coding Academy Bootcamp",
  //   desc: "lorem ipsum lorem ipsum lorem ipsum",
  //   url: "Touch-the-Num",
  //   publishedAt: getTimestamp(),
  //   labels: ["Matrixes", "keyboard events"],
  // },
  // {
  //   id: "ballboard",
  //   name: "Ball Board",
  //   title: "Daily Exercise at Coding Academy Bootcamp",
  //   desc: "lorem ipsum lorem ipsum lorem ipsum",
  //   url: "Ball-Baord",
  //   publishedAt: getTimestamp(),
  //   labels: ["Matrixes", "keyboard events"],
  // },
  // {
  //   id: "pacman",
  //   name: "Pacman",
  //   title: "Daily Exercise at Coding Academy Bootcamp",
  //   desc: "lorem ipsum lorem ipsum lorem ipsum",
  //   url: "Pacman",
  //   publishedAt: getTimestamp(),
  //   labels: ["Matrixes", "keyboard events"],
  // },
  // {
  //   id: "inpicture",
  //   name: "In Picture",
  //   title: "Daily Exercise at Coding Academy Bootcamp",
  //   desc: "lorem ipsum lorem ipsum lorem ipsum",
  //   url: "In-Pictrue",
  //   publishedAt: getTimestamp(),
  //   labels: ["Matrixes", "keyboard events"],
  // },
  {
    id: "simon",
    name: "Simon",
    title: "Can you remember which sounds were playing?",
    desc: "Angela Yu's Udemy Web Development Course",
    url: "Simon",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
  },
  {
    id: "movietickets",
    name: "Movie Tickets",
    title: "Find empty seats for your favourite movies",
    desc: "Brad Travesty's Web Development Udemy Course",
    url: "Movie-Tickets",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
  },
  {
    id: "videoplayer",
    name: "Video Player",
    title: "My own video player",
    desc: "Brad Travesty's Web Development Udemy Course",
    url: "Video-Player",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
  },
  {
    id: "drumkit",
    name: "Drumkit",
    title: "For the drummer at heart",
    desc: "Angela Yu's Udemy Web Development Course",
    url: "Drum-Kit",
    publishedAt: getTimestamp(),
    labels: ["VanillaJS", "CSS"],
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
