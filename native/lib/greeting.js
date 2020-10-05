/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/greeting/greeting.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/greeting/greeting.ts":
/*!*********************************************!*\
  !*** ./src/components/greeting/greeting.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nclass Greeting extends HTMLElement {\r\n    // Definition for attributes supported on our custom element\r\n    static get observedAttributes() {\r\n        return [\"type\", \"size\"];\r\n    }\r\n    get type() {\r\n        return this.getAttribute(\"type\") || this.type;\r\n    }\r\n    set type(value) {\r\n        this.setAttribute(\"type\", value);\r\n    }\r\n    get size() {\r\n        return this.getAttribute(\"size\") || this.size;\r\n    }\r\n    set size(value) {\r\n        this.setAttribute(\"size\", value);\r\n    }\r\n    // Initialization of Class\r\n    constructor() {\r\n        super();\r\n        // Default secondary button\r\n        if (!this.type) {\r\n            this.type = \"secondary\";\r\n        }\r\n        // Default size button\r\n        if (!this.size) {\r\n            this.size = \"large\";\r\n        }\r\n    }\r\n    // Triggered when native element added to the DOM\r\n    connectedCallback() {\r\n        // Add the remaining template after native element is added!\r\n        this.render();\r\n    }\r\n    // Triggered when change of attribute\r\n    attributeChangedCallback(name, oldVal, newVal) {\r\n        if (oldVal !== newVal) {\r\n            console.log(`${name} changed from ${oldVal} to ${newVal}`);\r\n        }\r\n    }\r\n    // custom method to add the final template\r\n    render() {\r\n        const template = document.createElement(\"template\");\r\n        template.innerHTML = `\r\n      <style>\r\n        :host {\r\n          color: #2b3e4b;\r\n          font-size: 20px;\r\n          border: 1px solid #d4d6d7;\r\n          padding: 12px;\r\n          background-color: #f2f1f1;\r\n        }\r\n        :host-context(.dark) {\r\n          color: #ffffff;\r\n          background-color: #000000;\r\n        }\r\n      </style>\r\n      <span class=\"greeting\">You are setting type of ${this.type}</span>\r\n    `;\r\n        const shadowRoot = this.attachShadow({ mode: \"closed\" });\r\n        shadowRoot.appendChild(template.content.cloneNode(true));\r\n    }\r\n    // Triggered when removed from the DOM\r\n    disconnectedCallback() {\r\n        console.log(\"DisConnected!\");\r\n    }\r\n}\r\nwindow.customElements.define(\"simple-greeting\", Greeting);\r\n\n\n//# sourceURL=webpack:///./src/components/greeting/greeting.ts?");

/***/ })

/******/ });