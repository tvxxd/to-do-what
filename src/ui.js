import Storage from "./storage.js";
export default class UI {
  static render() {
    // UI.renderContent(Storage.loadData());
  }

  static initialButtons() {
    const closePopUpButton = document.querySelector(".close-popup-button");
    closePopUpButton.addEventListener("click", UI.closeAddProjectPopUp);

    const addProjectButton = document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", UI.openAddProjectPopUp);
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

    const addProjectButton = document.getElementById("add-project-button");
    addProjectButton.classList.remove("active");
  }
}

UI.initialButtons();
