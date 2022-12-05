var gProj = [
  {
    id: "proj1",
    name: "Minesweeper",
    title: "Minesweeper",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "proj2",
    name: "Touch the Num",
    title: "Touch the Num",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "touchnum",
    name: "Touch the Num",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "proj5",
    name: "proj3",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "projs/sokoban",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "proj6",
    name: "proj3",
    title: "Better push those boxes",
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
