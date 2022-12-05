var gProj = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "Minesweeper",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "touchnum",
    name: "Touch the Num",
    title: "Touch the Num",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "ballboard",
    name: "Ball Board",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "pacman",
    name: "Pacman",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "inpicture",
    name: "In Picture",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "simon",
    name: "Simon",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "movietickets",
    name: "Movie Tickets",
    title: "Minesweeper",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "videoplayer",
    name: "Video Player",
    title: "Minesweeper",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "drumkit",
    name: "Drum Kit",
    title: "Minesweeper",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
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
