console.log("Starting up");

function onInit() {
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  var elPortfolioCaption = document.querySelector(".row.portfolio-cards");

  var captionHTML = projects
    .map(
      (project) => `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}" onclick="renderModal('${project.id}')">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-portfolio portfolio-img" src="img/portfolio/${project.id}.jpg" alt="">

      </a>
      <div class="portfolio-caption">
      <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
      </div>
      </div>`
    )
    .join("");

  elPortfolioCaption.innerHTML = captionHTML;
}

function renderModal(id) {
  var project = getProjectById(id);

  var elModalSection = document.querySelector(".modal-section");

  var modalHTML = `<div
  class="portfolio-modal modal fade"
  id="portfolioModal${project.id}"
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
              <h2>${project.name}</h2>
              <p class="item-intro text-muted">
                ${project.title}
              </p>
              <a href="https://superduperalon.github.io/${
                project.url
              }/" rel="noopener noreferrer" target="_blank">
              <img
                class="img-fluid d-block mx-auto"
                src="img/portfolio/${project.id}.jpg"
                
              />
              </a>
              <p>
                ${project.desc}
              </p>
              <ul class="list-inline">
                <li>Date: ${convertTimestampToDate(project.publishedAt)}</li>
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
</div>`;
  elModalSection.innerHTML = modalHTML;
}
