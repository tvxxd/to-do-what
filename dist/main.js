/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load());\r\n\n\n//# sourceURL=webpack://todowhat/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.taskList = [];\r\n  }\r\n\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  getName() {\r\n    return this.name;\r\n  }\r\n\r\n  getTask(taskName) {\r\n    return this.taskList.find((task) => task.name === taskName);\r\n  }\r\n\r\n  getTasks() {\r\n    return this.taskList;\r\n  }\r\n\r\n  addTask(task) {\r\n    return this.taskList.push(task);\r\n  }\r\n\r\n  removeTask(task) {\r\n    return this.taskList.splice(this.taskList.indexOf(task));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoWhat.js */ \"./src/toDoWhat.js\");\n\r\nclass Storage {\r\n  static saveData(data) {\r\n    localStorage.setItem(\"todoWhat\", JSON.stringify(data));\r\n  }\r\n  static getData() {\r\n    return Object.assign(\r\n      new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n      JSON.parse(localStorage.getItem(\"todoWhat\"))\r\n    );\r\n  }\r\n  static addProject(project) {\r\n    let todoWhat = new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    if (!Storage.getData()) {\r\n      todoWhat = Object.assign(new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), Storage.getData());\r\n    }\r\n    todoWhat.addProject(project);\r\n    Storage.saveData(todoWhat);\r\n  }\r\n\r\n  static removeProject(project) {\r\n    let todoWhat = Object.assign(new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), Storage.getData());\r\n    todoWhat.removeProject(project);\r\n    Storage.saveData(todoWhat);\r\n  }\r\n  static addTask(projectName, task) {\r\n    let todoWhat = Object.assign(new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), Storage.getData());\r\n    todoWhat.getProject(projectName).addTask(task);\r\n    Storage.saveData(todoWhat);\r\n  }\r\n  static removeTask(projectName, task) {\r\n    let todoWhat = Object.assign(new _toDoWhat_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), Storage.getData());\r\n    todoWhat.getProject(projectName).removeTask(task);\r\n    Storage.saveData(todoWhat);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(name, date = \"Date not Specified\") {\r\n    this.name = name;\r\n    this.date = date;\r\n  }\r\n\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n  getName() {\r\n    return this.name;\r\n  }\r\n  setDate(date) {\r\n    this.date = date;\r\n  }\r\n  getDate() {\r\n    return this.date;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/task.js?");

/***/ }),

/***/ "./src/toDoWhat.js":
/*!*************************!*\
  !*** ./src/toDoWhat.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoWhat)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nclass ToDoWhat {\r\n  constructor() {\r\n    this.projects = [];\r\n  }\r\n\r\n  addProject(project) {\r\n    if (!project) return;\r\n    // check if project alr exists\r\n    if (this.projects.includes(project)) return;\r\n    this.projects.push(project);\r\n    return true;\r\n  }\r\n\r\n  getProject(projectName) {\r\n    return Object.assign(\r\n      new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n      this.projects.find((project) => project.name === projectName)\r\n    );\r\n  }\r\n\r\n  has(projectName) {\r\n    return this.projects.some((project) => project.name === projectName);\r\n  }\r\n\r\n  getProjects() {\r\n    return this.projects;\r\n  }\r\n\r\n  removeProject(projectName) {\r\n    if (!projectName) return;\r\n    // find the project in the array, if name matches, remove it\r\n    const returnedProject = this.projects.find(\r\n      (project) => project.name === projectName\r\n    );\r\n    const index = this.projects.indexOf(returnedProject);\r\n    this.projects.splice(index, 1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/toDoWhat.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _toDoWhat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoWhat.js */ \"./src/toDoWhat.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\n\r\nconst MIN_SCREEN_WIDTH = 881;\r\nclass UI {\r\n  static load() {\r\n    UI.loadProjects();\r\n    UI.initialButtons();\r\n  }\r\n\r\n  static loadProjects() {\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData()\r\n      .getProjects()\r\n      .forEach((project) => this.createProject(project.name));\r\n  }\r\n\r\n  static initialButtons() {\r\n    // add projects popup - close\r\n    const closePopUpButton = document.querySelector(\".close-popup-button\");\r\n    closePopUpButton.addEventListener(\"click\", UI.closeAddProjectPopUp);\r\n\r\n    // add projects popup - open\r\n    const addProjectButton = document.getElementById(\"add-project-button\");\r\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopUp);\r\n\r\n    // add task popup open\r\n    const taskOpenPopUpButton = document.querySelector(\".add-task-button\");\r\n    taskOpenPopUpButton.addEventListener(\"click\", UI.openAddTaskPopUp);\r\n\r\n    // add task popup close\r\n    const taskClosePopUpButton = document.querySelector(\r\n      \".close-task-popup-button\"\r\n    );\r\n    taskClosePopUpButton.addEventListener(\"click\", UI.closeAddTaskPopUp);\r\n\r\n    //hamburger menu toggle\r\n    const hamburgerMenu = document.querySelector(\".hamburger-menu\");\r\n    hamburgerMenu.addEventListener(\"click\", UI.controlNavbarMenu);\r\n\r\n    // add project\r\n    const addProjectPopUpButton = document.querySelector(\r\n      \".add-project-popup-button\"\r\n    );\r\n    addProjectPopUpButton.addEventListener(\"click\", UI.addProject);\r\n  }\r\n\r\n  static openAddProjectPopUp() {\r\n    const addProjectPopUp = document.querySelector(\".add-project-popup\");\r\n    addProjectPopUp.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddProjectPopUp() {\r\n    const addProjectPopUp = document.querySelector(\".add-project-popup\");\r\n    addProjectPopUp.classList.remove(\"active\");\r\n\r\n    const addProjectInput = document.querySelector(\".add-project-popup-input\");\r\n    addProjectInput.value = \"\";\r\n  }\r\n\r\n  static closeAddTaskPopUp() {\r\n    const addTaskPopUp = document.querySelector(\".add-task-popup\");\r\n    addTaskPopUp.classList.remove(\"active\");\r\n\r\n    const addTaskInput = document.querySelector(\".add-task-popup-input\");\r\n    addTaskInput.value = \"\";\r\n  }\r\n\r\n  static openAddTaskPopUp() {\r\n    const addTaskPopUp = document.querySelector(\".add-task-popup\");\r\n    addTaskPopUp.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static controlNavbarMenu() {\r\n    const navbar = document.querySelector(\".navbar-custom\");\r\n    if (navbar.style.display === \"block\") {\r\n      navbar.style.display = \"none\";\r\n    } else {\r\n      navbar.style.display = \"block\";\r\n    }\r\n    window.addEventListener(\"resize\", UI.checksScreenSize);\r\n  }\r\n  static checksScreenSize() {\r\n    const navbar = document.querySelector(\".navbar-custom\");\r\n    if (window.innerWidth > MIN_SCREEN_WIDTH) {\r\n      navbar.style.display = \"block\";\r\n    } else {\r\n      navbar.style.display = \"none\";\r\n    }\r\n  }\r\n\r\n  static addProject() {\r\n    const addProjectPopUpInput = document.querySelector(\r\n      \".add-project-popup-input\"\r\n    );\r\n    const projectName = addProjectPopUpInput.value;\r\n    if (projectName !== \"\" && !_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData().has(projectName)) {\r\n      UI.createProject(projectName);\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName));\r\n    }\r\n    UI.closeAddProjectPopUp();\r\n  }\r\n\r\n  static createProject(name) {\r\n    const userProjects = document.querySelector(\".projects\");\r\n    const div = document.createElement(\"div\");\r\n    let classes = [\"my-1\", \"project-childs\", \"mx-auto\", \"user-project\"];\r\n    div.classList.add(...classes);\r\n    userProjects.appendChild(div);\r\n    const html = `\r\n    <button\r\n      class=\"px-3 project-button d-flex align-items-center column-gap-5\"\r\n      data-project-button>\r\n      <div class=\"left-side\">\r\n        <i class=\"bi bi-list-task\"></i>\r\n        <p class=\"m-0 d-inline-block text-break\">${name}</p>\r\n      </div>\r\n      <div class=\"right-side\">\r\n        <i class=\"bi bi-x-square-fill\"></i>\r\n      </div>\r\n    </button>\r\n    `;\r\n    div.insertAdjacentHTML(\"beforeend\", html);\r\n  }\r\n\r\n  clear() {\r\n    const userProjects = document.querySelector(\".user-project\");\r\n    userProjects.textContent = \"\";\r\n  }\r\n\r\n  removeProject(projectName) {\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeProject(projectName);\r\n    UI.loadProjects();\r\n    UI.clear();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;