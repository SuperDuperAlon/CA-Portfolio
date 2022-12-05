console.log("Starting up");

function onInit() {
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  var elPortfolioCaption = document.querySelector(".row.portfolio-cards");
  var elModalBody = document.querySelector(".modal-section");

  var captionHTML = projects
    .map(
      (project) => `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}" onclick="openModal('${project.id}')">
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

  console.log(projects.id);
  elPortfolioCaption.innerHTML = captionHTML;
  // elModalBody.innerHTML = modalHTML
}

// function getId(ev) {
//   console.log(ev);
// }

function openModal(id) {
  var projects = getProjects();
  console.log(projects);
  var filtered = projects.filter((project) => id === project.id);
  console.log(filtered[0].id);

  renderModal(filtered)
}

function renderModal(obj){
  console.log(obj);
  var elModalSection = document.querySelector('.modal-section')
  var modalHTML = `<div
  class="portfolio-modal modal fade"
  id="portfolioModal${obj[0].id}"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${obj[0].title}</h2>
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
              </ul>
              <button
                class="btn btn-primary"
                data-dismiss="modal"
                type="button"
              >
                <i class="fa fa-times"></i>
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
elModalSection.innerHTML = modalHTML

}


