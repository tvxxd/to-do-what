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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render());\r\n\n\n//# sourceURL=webpack://todowhat/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\r\n  static loadData() {}\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\nconst MIN_SCREEN_WIDTH = 881;\r\nclass UI {\r\n  static render() {\r\n    // UI.renderContent(Storage.loadData());\r\n    UI.initialButtons();\r\n  }\r\n\r\n  static initialButtons() {\r\n    // add projects popup - close\r\n    const closePopUpButton = document.querySelector(\".close-popup-button\");\r\n    closePopUpButton.addEventListener(\"click\", UI.closeAddProjectPopUp);\r\n\r\n    // add projects popup - open\r\n    const addProjectButton = document.getElementById(\"add-project-button\");\r\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopUp);\r\n\r\n    // add task popup open\r\n    const taskOpenPopUpButton = document.querySelector(\".add-task-button\");\r\n    taskOpenPopUpButton.addEventListener(\"click\", UI.openAddTaskPopUp);\r\n\r\n    // add task popup close\r\n    const taskClosePopUpButton = document.querySelector(\r\n      \".close-task-popup-button\"\r\n    );\r\n    taskClosePopUpButton.addEventListener(\"click\", UI.closeAddTaskPopUp);\r\n\r\n    //hamburger menu toggle\r\n    const hamburgerMenu = document.querySelector(\".hamburger-menu\");\r\n    hamburgerMenu.addEventListener(\"click\", UI.controlNavbarMenu);\r\n  }\r\n\r\n  static openAddProjectPopUp() {\r\n    const addProjectPopUp = document.querySelector(\".add-project-popup\");\r\n    addProjectPopUp.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddProjectPopUp() {\r\n    const addProjectPopUp = document.querySelector(\".add-project-popup\");\r\n    addProjectPopUp.classList.remove(\"active\");\r\n\r\n    const addProjectInput = document.querySelector(\".add-project-popup-input\");\r\n    addProjectInput.value = \"\";\r\n\r\n    const addProjectButton = document.getElementById(\"add-project-button\");\r\n    addProjectButton.classList.remove(\"active\");\r\n  }\r\n\r\n  static closeAddTaskPopUp() {\r\n    const addTaskPopUp = document.querySelector(\".add-task-popup\");\r\n    addTaskPopUp.classList.remove(\"active\");\r\n\r\n    const addTaskInput = document.querySelector(\".add-task-popup-input\");\r\n    addTaskInput.value = \"\";\r\n\r\n    const addTaskButton = document.querySelector(\".add-task-button\");\r\n    addTaskButton.classList.remove(\"active\");\r\n  }\r\n\r\n  static openAddTaskPopUp() {\r\n    const addTaskPopUp = document.querySelector(\".add-task-popup\");\r\n    addTaskPopUp.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static controlNavbarMenu() {\r\n    const navbar = document.querySelector(\".navbar-custom\");\r\n    if (navbar.style.display === \"block\") {\r\n      navbar.style.display = \"none\";\r\n    } else {\r\n      navbar.style.display = \"block\";\r\n    }\r\n    window.addEventListener(\"resize\", UI.checksScreenSize);\r\n  }\r\n  static checksScreenSize() {\r\n    if (window.innerWidth > MIN_SCREEN_WIDTH) {\r\n      navbar.style.display = \"block\";\r\n    } else {\r\n      navbar.style.display = \"none\";\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todowhat/./src/ui.js?");

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