console.log("Starting up");

function onInit() {
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  var elPortfolioCaption = document.querySelector(".row.portfolio-cards");
var elModalBody = document.querySelector(".modal-body");

  var captionHTML = projects
    .map(
      (project) => `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid portfolio-img" src="img/portfolio/01-thumbnail.jpg" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${project.title}</h4>
        <p class="text-muted">${project.desc}</p>
      </div>
      </div>`
    )
    .join("");

// var modalHTML = projects
// .map(
//   (project) => `<h2>${project.title}</h2>
//   <p class="item-intro text-muted">
//     Lorem ipsum dolor sit amet consectetur.
//   </p>
//   <img
//     class="img-fluid d-block mx-auto"
//     src="img/portfolio/01-full.jpg"
//     alt=""
//   />
//   <p>
//   ${project.desc}
//   </p>
//   <ul class="list-inline">
//     <li>${project.publishedAt}</li>
//     <li>Client: Threads</li>
//     <li>Category: Illustration</li>
//   </ul>`
// )
// .join("");

  elPortfolioCaption.innerHTML = captionHTML;
  // elModalBody.innerHTML = modalHTML
}


{/* <h2>Project Name</h2>
<p class="item-intro text-muted">
  Lorem ipsum dolor sit amet consectetur.
</p>
<img
  class="img-fluid d-block mx-auto"
  src="img/portfolio/01-full.jpg"
  alt=""
/>
<p>
  Use this area to describe your project. Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Est blanditiis
  dolorem culpa incidunt minus dignissimos deserunt repellat
  aperiam quasi sunt officia expedita beatae cupiditate,
  maiores repudiandae, nostrum, reiciendis facere nemo!
</p>
<ul class="list-inline">
  <li>Date: January 2017</li>
  <li>Client: Threads</li>
  <li>Category: Illustration</li>
</ul> */}