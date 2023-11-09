import Project from "./project.js";
import Storage from "./storage.js";
import ToDoWhat from "./toDoWhat.js";
import Task from "./task.js";
const MIN_SCREEN_WIDTH = 881;
export default class UI {
  static load() {
    UI.loadProjects();
    UI.initialButtons();
  }

  static loadTasks() {}

  static loadProjects() {
    Storage.getData()
      .getProjects()
      .forEach((project) => UI.createProject(project.name));
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

    // delete project
    const projectButtons = document.querySelectorAll("[data-project-button]");
    projectButtons.forEach((btn) => {
      btn.addEventListener("click", UI.handleProjectDeleteButton);
    });
  }

  static openAddProjectPopUp() {
    const addProjectPopUp = document.querySelector(".add-project-popup");
    addProjectPopUp.classList.add("active");
    this.classList.add("active");
  }

  static closeAddProjectPopUp() {
    const addProjectPopUp = document.querySelector(".add-project-popup");
    addProjectPopUp.classList.remove("active");

    const addProjectInput = document.querySelector(".add-project-popup-input");
    addProjectInput.value = "";
  }

  static closeAddTaskPopUp() {
    const addTaskPopUp = document.querySelector(".add-task-popup");
    addTaskPopUp.classList.remove("active");

    const addTaskInput = document.querySelector(".add-task-popup-input");
    addTaskInput.value = "";
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
    const projectName = addProjectPopUpInput.value;
    if (projectName !== "" && !Storage.getData().has(projectName)) {
      UI.createProject(projectName);
      Storage.addProject(new Project(projectName));
    }
    UI.closeAddProjectPopUp();
  }

  static createProject(name) {
    const projects = document.querySelector(".projects");
    const div = document.createElement("div");
    let classes = ["my-1", "project-childs", "mx-auto", "user-project"];
    div.classList.add(...classes);
    projects.appendChild(div);
    div.innerHTML += `
    <button
      class="px-3 project-button d-flex align-items-center column-gap-5"
      data-project-button>
      <div class="left-side">
        <i class="bi bi-list-task"></i>
        <p class="m-0 d-inline-block text-break">${name}</p>
      </div>
      <div class="right-side">
        <i class="bi bi-x-square-fill"></i>
      </div>
    </button>
    `;
    UI.initialButtons();
  }
  static clear() {
    UI.clearProjects();
    UI.clearTasks();
  }

  static clearTasks() {}
  static clearProjects() {
    const userProjects = document.querySelector(".user-project");
    userProjects.remove();
  }

  static removeProject(projectName) {
    Storage.removeProject(projectName);
    UI.clear();
    UI.loadProjects();
  }
  static handleProjectDeleteButton(event) {
    const projectName = this.children[0].children[1].textContent;
    if (event.target.classList.contains("bi")) {
      UI.removeProject(projectName);
      return;
    }
  }
}
