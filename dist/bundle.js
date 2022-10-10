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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/App.scss */ \"./src/scss/App.scss\");\n//libs\n\nvar Scene = three__WEBPACK_IMPORTED_MODULE_0__.Scene,\n    PerspectiveCamera = three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera,\n    WebGLRenderer = three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer,\n    BoxGeometry = three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry,\n    MeshPhongMaterial = three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial,\n    Mesh = three__WEBPACK_IMPORTED_MODULE_0__.Mesh,\n    DirectionalLight = three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight; //style\n\n //dom elements\n\nvar canvas = document.querySelector('#canvas'); //instantiate a renderer\n\nvar renderer = new WebGLRenderer({\n  canvas: canvas\n}); //camera args: \n\nvar fieldOfView = 75;\nvar aspectRatio = 2;\nvar near = 0.1;\nvar far = 5; //instantiate a perspective camera\n\nvar camera = new PerspectiveCamera(fieldOfView, aspectRatio, near, far); //set camera position\n\ncamera.position.z = 2; //instantiate a scene\n\nvar scene = new Scene(); //geometry args: \n\nvar width = 1;\nvar height = 1;\nvar depth = 1; //instantiate a geometry\n\nvar geometry = new BoxGeometry(width, height, depth); //instantiate a material\n\nvar material = new MeshPhongMaterial({\n  color: 0x44aa88\n}); //light args: \n\nvar color = 0xFFFFFF;\nvar intensity = 1; //instantiate a directional light\n\nvar light = new DirectionalLight(color, intensity); //set light position\n\nlight.position.set(-1, 2, 4); //add light to scene\n\nscene.add(light); //add new cube\n\nvar newCube = function newCube(geometry, color, x) {\n  //instantiate a material\n  var material = new MeshPhongMaterial({\n    color: color\n  }); //instantiate a new mesh \n\n  var cube = new Mesh(geometry, material); //add cube to scene\n\n  scene.add(cube); //set cube's position along x axis to 'x' parameter\n\n  cube.position.x = x;\n  return cube;\n}; //create an array of cubes\n\n\nvar cubeArr = [//center cube\nnewCube(geometry, 0x44aa88, 0), //left cube\nnewCube(geometry, 0x8844aa, -2), //right cube\nnewCube(geometry, 0xaa8844, 2)]; //render the scene\n\nrenderer.render(scene, camera); //create an animation loop\n\nvar render = function render(t) {\n  //convert time to milliseconds\n  t *= 0.001; //loop through cubes and set a different rotation speed for each\n\n  cubeArr.forEach(function (cube, i) {\n    var speed = 1 + i * 0.1;\n    var rot = t * speed;\n    cube.rotation.x = rot;\n    cube.rotation.y = rot;\n  }); //render scene\n\n  renderer.render(scene, camera);\n  requestAnimationFrame(render);\n}; //initial animation frame request (runs once)\n//- automatically passes in a time value to our render loop\n\n\nrequestAnimationFrame(render);\n\n//# sourceURL=webpack://test_alpha_phong/./src/index.js?");

/***/ }),

/***/ "./src/scss/App.scss":
/*!***************************!*\
  !*** ./src/scss/App.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_alpha_phong/./src/scss/App.scss?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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