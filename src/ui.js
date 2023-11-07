import Storage from "./storage.js";
const MIN_SCREEN_WIDTH = 881;
export default class UI {
  static load() {
    // UI.renderContent(Storage.loadData());
    UI.initialButtons();
  }

  static initialButtons() {
    // add projects popup - close
    const closePopUpButton = document.querySelector(".close-popup-button");
    closePopUpButton.addEventListener("click", UI.closeAddProjectPopUp);

    // add projects popup - open
    const addProjectButton = document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", UI.openAddProjectPopUp);

    // add task popup open
    const taskOpenPopUpButton = document.querySelector(".add-task-button");
    taskOpenPopUpButton.addEventListener("click", UI.openAddTaskPopUp);

    // add task popup close
    const taskClosePopUpButton = document.querySelector(
      ".close-task-popup-button"
    );
    taskClosePopUpButton.addEventListener("click", UI.closeAddTaskPopUp);

    //hamburger menu toggle
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.addEventListener("click", UI.controlNavbarMenu);

    // add project
    const addProjectPopUpButton = document.querySelector(
      ".add-project-popup-button"
    );
    addProjectPopUpButton.addEventListener("click", UI.addProject);
  }

  static openAddProjectPopUp() {
    console.log("openning");
    const addProjectPopUp = document.querySelector(".add-project-popup");
    console.log(addProjectPopUp);
    addProjectPopUp.classList.add("active");
    this.classList.add("active");
  }

  static closeAddProjectPopUp() {
    const addProjectPopUp = document.querySelector(".add-project-popup");
    addProjectPopUp.classList.remove("active");

    const addProjectInput = document.querySelector(".add-project-popup-input");
    addProjectInput.value = "";

    // const addProjectButton = document.querySelector(".add-project-button");
    // addProjectButton.classList.remove("active");
  }

  static closeAddTaskPopUp() {
    const addTaskPopUp = document.querySelector(".add-task-popup");
    addTaskPopUp.classList.remove("active");

    const addTaskInput = document.querySelector(".add-task-popup-input");
    addTaskInput.value = "";

    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.classList.remove("active");
  }

  static openAddTaskPopUp() {
    const addTaskPopUp = document.querySelector(".add-task-popup");
    addTaskPopUp.classList.add("active");
    this.classList.add("active");
  }

  static controlNavbarMenu() {
    const navbar = document.querySelector(".navbar-custom");
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
    window.addEventListener("resize", UI.checksScreenSize);
  }
  static checksScreenSize() {
    const navbar = document.querySelector(".navbar-custom");
    if (window.innerWidth > MIN_SCREEN_WIDTH) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }

  static addProject() {
    const addProjectPopUpInput = document.querySelector(
      ".add-project-popup-input"
    );
    if (addProjectPopUpInput.value == "") {
      alert(`Can't be empty`);
    } else if (addProjectPopUpInput.value.length >= 15) {
      alert("Name must be less than 15");
      addProjectPopUpInput.value = "";
    } else {
      UI.createProject(addProjectPopUpInput.value);
      UI.closeAddProjectPopUp();
    }
  }

  static createProject(name) {
    const userProjects = document.querySelector(".projects");
    const html = `
    <div class="my-1 project-childs mx-auto">
    <button
      class="px-3 project-button d-flex align-items-center column-gap-5"
    >
      <div class="left-side">
        <i class="bi bi-list-task"></i>
        <p class="m-0 d-inline-block text-break">${name}</p>
      </div>
      <div class="right-side">
        <i class="bi bi-x-square-fill"></i>
      </div>
    </button>
  </div>
    `;
    userProjects.insertAdjacentHTML("beforeend", html);
  }
}
