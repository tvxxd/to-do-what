import Project from "./project.js";
import Storage from "./storage.js";
import ToDoWhat from "./toDoWhat.js";
import Task from "./task.js";
const MIN_SCREEN_WIDTH = 881;
export default class UI {
  static load() {
    UI.loadProjects();
    UI.loadTasks();
    UI.initialButtons();
  }

  static loadTasks() {
    Storage.getData()
      .getProjects()
      .forEach((project) => {
        project.taskList.forEach((task) =>
          UI.createTask(task.name, task.details, task.date)
        );
      });
  }

  static loadProjects(projectName) {
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
    const taskOpenPopUpButton = document.getElementById("add-task-button");
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

    // add Task
    const addTaskPopUpButton = document.querySelector(".add-task-popup-button");
    addTaskPopUpButton.addEventListener("click", UI.addTask);

    //delete task
    const deleteTaskButtons = document.querySelectorAll("[data-task-button]");
    deleteTaskButtons.forEach((btn) => {
      btn.addEventListener("click", UI.removeTask);
    });

    //add date
    // const dueDateButton = document.querySelector("due-date-button");
    // dueDateButton.addEventListener("click", UI.setTaskDate);
    const dueDateInputs = document.querySelectorAll("[data-input-due-date");
    dueDateInputs.forEach((input) => {
      input.addEventListener("change", UI.setTaskDate);
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

    const detailsInput = document.querySelector(
      ".add-task-popup-input-details"
    );
    detailsInput.value = "";
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
      Storage.addProject(new Project(projectName));
      UI.createProject(projectName);
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
        <p class="m-0 d-inline-block text-break project-name">${name}</p>
      </div>
      <div class="right-side">
        <i class="bi bi-x-square-fill"></i>
      </div>
    </button>
    `;
    UI.initialButtons();
  }

  static createTask(name, details, date) {
    const tasks = document.querySelector(".task-section");
    tasks.innerHTML += `<div class="w-25 p-3 border task-container">
    <button class="bg-pink float-end" data-task-button><i class="bi bi-x-square-fill"></i></i></button>
    <p class="m-0 my-3 text-center text-break task-name">${name}</p>
    <p id="due-date" class="m-0 my-1">Due Date: ${date}</p>
    <div class="due-date-popup" id="due-date-popup">
        <input data-input-due-date type="date" class="input-due-date my-auto" id="input-due-date" value="2023-11-16">
      </div>
    <p class="m-0 text-break">
      Details: ${details}
    </p>
  </div>
  `;

    UI.initialButtons();
  }
  static addTask() {
    const addTaskInput = document.getElementById("add-task-popup-input");
    const inputValue = addTaskInput.value;

    const details = document.querySelector(".add-task-popup-input-details");
    const detailsValue = details.value;

    const projects = Storage.getData().getProjects();
    if (projects.length === 0) {
      alert("first add a project");
      UI.closeAddTaskPopUp();
      return;
    }

    const projectName = document.querySelector(".project-name").textContent;

    if (
      detailsValue !== "" &&
      inputValue !== "" &&
      !Storage.getData().getProject(projectName).has(inputValue)
    ) {
      Storage.addTask(projectName, new Task(inputValue, detailsValue));
      UI.createTask(inputValue, detailsValue, "Not specified");
    }
    UI.closeAddTaskPopUp();
  }
  static clear() {
    UI.clearProjects();
    UI.clearTasks();
  }

  static removeTask() {
    const projectName = document.querySelector(".project-name").textContent;
    const taskName = document.querySelector(".task-name").textContent;

    Storage.removeTask(projectName, taskName);
    UI.clearTasks();
    UI.loadTasks();
  }
  static clearTasks() {
    const userTasks = document.querySelector(".task-section");
    userTasks.textContent = "";
  }

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

  static closeSetDateInput() {}

  static setTaskDate() {
    const projectName = document.querySelector(".project-name").textContent;
    const taskName = document.querySelector(".task-name").textContent;
    const newDate = this.value;
    Storage.setTaskDate(projectName, taskName, newDate);
    UI.clearTasks();
    UI.loadTasks();
  }
}
