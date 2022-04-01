/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/tiny-slider/dist/tiny-slider.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap v5.0.1 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25;\n}\n\nhr:not([size]) {\n  height: 1px;\n}\n\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\n\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\n\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\n\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-bs-original-title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall, .small {\n  font-size: 0.875em;\n}\n\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\na:hover {\n  color: #0a58ca;\n}\n\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.875em;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n  font-weight: 700;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\nlabel {\n  display: inline-block;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n}\n\n::file-selector-button {\n  font: inherit;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\niframe {\n  border: 0;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: calc(var(--bs-gutter-y) * -1);\n  margin-right: calc(var(--bs-gutter-x) / -2);\n  margin-left: calc(var(--bs-gutter-x) / -2);\n}\n.row > * {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) / 2);\n  padding-left: calc(var(--bs-gutter-x) / 2);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 0%;\n      -ms-flex: 1 0 0%;\n          flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 8.3333333333%;\n}\n\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 41.6666666667%;\n}\n\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 58.3333333333%;\n}\n\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 66.6666666667%;\n}\n\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 83.3333333333%;\n}\n\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 91.6666666667%;\n}\n\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.3333333333%;\n}\n\n.offset-2 {\n  margin-left: 16.6666666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.3333333333%;\n}\n\n.offset-5 {\n  margin-left: 41.6666666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.3333333333%;\n}\n\n.offset-8 {\n  margin-left: 66.6666666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.3333333333%;\n}\n\n.offset-11 {\n  margin-left: 91.6666666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n  }\n\n  .row-cols-sm-auto > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-sm-1 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-sm-0,\n.gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-sm-0,\n.gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-sm-1,\n.gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-sm-1,\n.gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-sm-2,\n.gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-sm-2,\n.gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-sm-3,\n.gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-sm-3,\n.gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-sm-4,\n.gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-sm-4,\n.gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-sm-5,\n.gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-sm-5,\n.gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n  }\n\n  .row-cols-md-auto > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-md-1 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-md-0,\n.gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-md-0,\n.gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-md-1,\n.gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-md-1,\n.gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-md-2,\n.gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-md-2,\n.gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-md-3,\n.gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-md-3,\n.gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-md-4,\n.gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-md-4,\n.gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-md-5,\n.gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-md-5,\n.gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n  }\n\n  .row-cols-lg-auto > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-lg-1 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-lg-0,\n.gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-lg-0,\n.gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-lg-1,\n.gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-lg-1,\n.gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-lg-2,\n.gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-lg-2,\n.gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-lg-3,\n.gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-lg-3,\n.gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-lg-4,\n.gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-lg-4,\n.gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-lg-5,\n.gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-lg-5,\n.gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n  }\n\n  .row-cols-xl-auto > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xl-1 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-xl-0,\n.gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xl-0,\n.gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xl-1,\n.gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xl-1,\n.gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xl-2,\n.gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xl-2,\n.gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xl-3,\n.gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xl-3,\n.gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xl-4,\n.gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xl-4,\n.gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xl-5,\n.gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xl-5,\n.gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n  }\n\n  .row-cols-xxl-auto > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xxl-1 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xxl-2 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xxl-3 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xxl-4 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xxl-5 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xxl-6 > * {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xxl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xxl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 8.3333333333%;\n  }\n\n  .col-xxl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xxl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xxl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .col-xxl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 41.6666666667%;\n  }\n\n  .col-xxl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xxl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 58.3333333333%;\n  }\n\n  .col-xxl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 66.6666666667%;\n  }\n\n  .col-xxl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xxl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 83.3333333333%;\n  }\n\n  .col-xxl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 91.6666666667%;\n  }\n\n  .col-xxl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xxl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xxl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xxl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xxl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xxl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xxl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xxl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xxl-11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-xxl-0,\n.gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xxl-0,\n.gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xxl-1,\n.gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xxl-1,\n.gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xxl-2,\n.gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xxl-2,\n.gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xxl-3,\n.gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xxl-3,\n.gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xxl-4,\n.gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xxl-4,\n.gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xxl-5,\n.gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xxl-5,\n.gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.table {\n  --bs-table-bg: transparent;\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: #212529;\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: #212529;\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: #212529;\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  vertical-align: top;\n  border-color: #dee2e6;\n}\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  background-color: var(--bs-table-bg);\n  border-bottom-width: 1px;\n  -webkit-box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n          box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n}\n.table > tbody {\n  vertical-align: inherit;\n}\n.table > thead {\n  vertical-align: bottom;\n}\n.table > :not(:last-child) > :last-child > * {\n  border-bottom-color: currentColor;\n}\n\n.caption-top {\n  caption-side: top;\n}\n\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem;\n}\n\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0;\n}\n.table-bordered > :not(caption) > * > * {\n  border-width: 0 1px;\n}\n\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color);\n}\n\n.table-hover > tbody > tr:hover {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color);\n}\n\n.table-primary {\n  --bs-table-bg: #cfe2ff;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bacbe6;\n}\n\n.table-secondary {\n  --bs-table-bg: #e2e3e5;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #cbccce;\n}\n\n.table-success {\n  --bs-table-bg: #d1e7dd;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bcd0c7;\n}\n\n.table-info {\n  --bs-table-bg: #cff4fc;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #badce3;\n}\n\n.table-warning {\n  --bs-table-bg: #fff3cd;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #e6dbb9;\n}\n\n.table-danger {\n  --bs-table-bg: #f8d7da;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfc2c4;\n}\n\n.table-light {\n  --bs-table-bg: #f8f9fa;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfe0e1;\n}\n\n.table-dark {\n  --bs-table-bg: #212529;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: #fff;\n  border-color: #373b3e;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.form-label {\n  margin-bottom: 0.5rem;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #86b7fe;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n  .form-control::file-selector-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #dde0e3;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\n\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n\n.form-control-color {\n  max-width: 3rem;\n  height: auto;\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n.form-control-color::-webkit-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: #e9ecef;\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #212529;\n}\n\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  -webkit-filter: none;\n          filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  opacity: 0.5;\n}\n\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 2em;\n  -webkit-transition: background-position 0.15s ease-in-out;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  -webkit-filter: none;\n          filter: none;\n  opacity: 0.65;\n}\n\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-select {\n  height: calc(3.5rem + 2px);\n  padding: 1rem 0.75rem;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  pointer-events: none;\n  border: 1px solid transparent;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-floating > .form-control::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:-ms-input-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::-ms-input-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-ms-input-placeholder) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:not(:-ms-input-placeholder) ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-select ~ label {\n  opacity: 0.65;\n  -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  opacity: 0.65;\n  -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus {\n  z-index: 3;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 3;\n}\n\n.input-group-text {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #198754;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: #198754;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: #198754;\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #198754;\n}\n\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,\n.was-validated .input-group .form-select:valid,\n.input-group .form-select.is-valid {\n  z-index: 1;\n}\n.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,\n.was-validated .input-group .form-select:valid:focus,\n.input-group .form-select.is-valid:focus {\n  z-index: 3;\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,\n.was-validated .input-group .form-select:invalid,\n.input-group .form-select.is-invalid {\n  z-index: 2;\n}\n.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,\n.was-validated .input-group .form-select:invalid:focus,\n.input-group .form-select.is-invalid:focus {\n  z-index: 3;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n}\n.btn-check:focus + .btn, .btn:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.btn-check:focus + .btn-primary, .btn-primary:focus {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0a58ca;\n  border-color: #0a53be;\n}\n.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-primary:disabled, .btn-primary.disabled {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.btn-check:focus + .btn-secondary, .btn-secondary:focus {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #565e64;\n  border-color: #51585e;\n}\n.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary:disabled, .btn-secondary.disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-check:focus + .btn-success, .btn-success:focus {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #146c43;\n  border-color: #13653f;\n}\n.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-success:disabled, .btn-success.disabled {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n\n.btn-info {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-info:hover {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n}\n.btn-check:focus + .btn-info, .btn-info:focus {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {\n  color: #000;\n  background-color: #3dd5f3;\n  border-color: #25cff2;\n}\n.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-info:disabled, .btn-info.disabled {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n\n.btn-warning {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n.btn-check:focus + .btn-warning, .btn-warning:focus {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {\n  color: #000;\n  background-color: #ffcd39;\n  border-color: #ffc720;\n}\n.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-warning:disabled, .btn-warning.disabled {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n.btn-check:focus + .btn-danger, .btn-danger:focus {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #b02a37;\n  border-color: #a52834;\n}\n.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger:disabled, .btn-danger.disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-light {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:focus + .btn-light, .btn-light:focus {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-light:disabled, .btn-light.disabled {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n}\n.btn-check:focus + .btn-dark, .btn-dark:focus {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1a1e21;\n  border-color: #191c1f;\n}\n.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-dark:disabled, .btn-dark.disabled {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-outline-primary:disabled, .btn-outline-primary.disabled {\n  color: #0d6efd;\n  background-color: transparent;\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-success {\n  color: #198754;\n  border-color: #198754;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-outline-success:disabled, .btn-outline-success.disabled {\n  color: #198754;\n  background-color: transparent;\n}\n\n.btn-outline-info {\n  color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-outline-info:hover {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-outline-info:disabled, .btn-outline-info.disabled {\n  color: #0dcaf0;\n  background-color: transparent;\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning:disabled, .btn-outline-warning.disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger:disabled, .btn-outline-danger.disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light:disabled, .btn-outline-light.disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-dark {\n  color: #212529;\n  border-color: #212529;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n          box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-outline-dark:disabled, .btn-outline-dark.disabled {\n  color: #212529;\n  background-color: transparent;\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: #0a58ca;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.fade {\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: 0.125rem;\n}\n\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto /* rtl:ignore */;\n  left: 0 /* rtl:ignore */;\n}\n\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0 /* rtl:ignore */;\n  left: auto /* rtl:ignore */;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */;\n  }\n\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */;\n  }\n\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */;\n  }\n\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */;\n  }\n\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */;\n  }\n}\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */;\n  }\n\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle::after {\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #1e2125;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0d6efd;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529;\n}\n\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n  color: #fff;\n  background-color: #0d6efd;\n}\n.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n  color: #adb5bd;\n}\n.dropdown-menu-dark .dropdown-divider {\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item-text {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-header {\n  color: #adb5bd;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn,\n.btn-group > .btn-check:focus + .btn,\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn-check:checked + .btn,\n.btn-group-vertical > .btn-check:focus + .btn,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn,\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #0d6efd;\n  text-decoration: none;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: #0a58ca;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background: none;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n  isolation: isolate;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center;\n}\n\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar > .container,\n.navbar > .container-fluid,\n.navbar > .container-sm,\n.navbar > .container-md,\n.navbar > .container-lg,\n.navbar > .container-xl,\n.navbar > .container-xxl {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: inherit;\n      -ms-flex-wrap: inherit;\n          flex-wrap: inherit;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-nav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  -webkit-flex-basis: 100%;\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  -webkit-transition: -webkit-box-shadow 0.15s ease-in-out;\n  transition: -webkit-box-shadow 0.15s ease-in-out;\n  transition: box-shadow 0.15s ease-in-out;\n  transition: box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .navbar-toggler {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:focus {\n  text-decoration: none;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem;\n          box-shadow: 0 0 0 0.25rem;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    -webkit-flex-wrap: nowrap;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-xxl .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-expand-xxl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xxl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xxl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xxl .navbar-collapse {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n  }\n  .navbar-expand-xxl .navbar-toggler {\n    display: none;\n  }\n}\n.navbar-expand {\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.navbar-expand .navbar-nav {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-flex-basis: auto;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-text a,\n.navbar-light .navbar-text a:hover,\n.navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.55);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-text a,\n.navbar-dark .navbar-text a:hover,\n.navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem 1rem;\n}\n\n.card-title {\n  margin-bottom: 0.5rem;\n}\n\n.card-subtitle {\n  margin-top: -0.25rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1rem;\n}\n\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-footer {\n  padding: 0.5rem 1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-group > .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0%;\n        -ms-flex: 1 0 0%;\n            flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.accordion-button {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, border-radius 0.15s ease, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, border-radius 0.15s ease, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.accordion-button:not(.collapsed) {\n  color: #0c63e4;\n  background-color: #e7f1ff;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);\n}\n.accordion-button:not(.collapsed)::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.accordion-button::after {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: auto;\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: 1.25rem;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out;\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button::after {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.accordion-button:hover {\n  z-index: 2;\n}\n.accordion-button:focus {\n  z-index: 3;\n  border-color: #86b7fe;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.accordion-item:first-of-type {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.accordion-item:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item:last-of-type {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.accordion-body {\n  padding: 1rem 1.25rem;\n}\n\n.accordion-flush .accordion-collapse {\n  border-width: 0;\n}\n.accordion-flush .accordion-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush .accordion-item:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item:last-child {\n  border-bottom: 0;\n}\n.accordion-flush .accordion-item .accordion-button {\n  border-radius: 0;\n}\n\n.breadcrumb {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 0 0;\n  margin-bottom: 1rem;\n  list-style: none;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  color: #0d6efd;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-link {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.page-link:hover {\n  z-index: 2;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.page-link {\n  padding: 0.375rem 0.75rem;\n}\n\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.alert {\n  position: relative;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n\n.alert-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n  border-color: #b6d4fe;\n}\n.alert-primary .alert-link {\n  color: #06357a;\n}\n\n.alert-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n  border-color: #d3d6d8;\n}\n.alert-secondary .alert-link {\n  color: #34383c;\n}\n\n.alert-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n  border-color: #badbcc;\n}\n.alert-success .alert-link {\n  color: #0c4128;\n}\n\n.alert-info {\n  color: #055160;\n  background-color: #cff4fc;\n  border-color: #b6effb;\n}\n.alert-info .alert-link {\n  color: #04414d;\n}\n\n.alert-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n  border-color: #ffecb5;\n}\n.alert-warning .alert-link {\n  color: #523e02;\n}\n\n.alert-danger {\n  color: #842029;\n  background-color: #f8d7da;\n  border-color: #f5c2c7;\n}\n.alert-danger .alert-link {\n  color: #6a1a21;\n}\n\n.alert-light {\n  color: #636464;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light .alert-link {\n  color: #4f5050;\n}\n\n.alert-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n  border-color: #bcbebf;\n}\n.alert-dark .alert-link {\n  color: #101214;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n.progress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0d6efd;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n          animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n\n.list-group {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > li::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #212529;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .list-group-horizontal-xxl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #084298;\n  background-color: #bacbe6;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #084298;\n  border-color: #084298;\n}\n\n.list-group-item-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #41464b;\n  background-color: #cbccce;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #41464b;\n  border-color: #41464b;\n}\n\n.list-group-item-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #0f5132;\n  background-color: #bcd0c7;\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #0f5132;\n  border-color: #0f5132;\n}\n\n.list-group-item-info {\n  color: #055160;\n  background-color: #cff4fc;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #055160;\n  background-color: #badce3;\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #055160;\n  border-color: #055160;\n}\n\n.list-group-item-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #664d03;\n  background-color: #e6dbb9;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #664d03;\n  border-color: #664d03;\n}\n\n.list-group-item-danger {\n  color: #842029;\n  background-color: #f8d7da;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #842029;\n  background-color: #dfc2c4;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #842029;\n  border-color: #842029;\n}\n\n.list-group-item-light {\n  color: #636464;\n  background-color: #fefefe;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #636464;\n  background-color: #e5e5e5;\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #636464;\n  border-color: #636464;\n}\n\n.list-group-item-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #141619;\n  background-color: #bebebf;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #141619;\n  border-color: #141619;\n}\n\n.btn-close {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n.btn-close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  opacity: 1;\n}\n.btn-close:disabled, .btn-close.disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0.25;\n}\n\n.btn-close-white {\n  -webkit-filter: invert(1) grayscale(100%) brightness(200%);\n          filter: invert(1) grayscale(100%) brightness(200%);\n}\n\n.toast {\n  width: 350px;\n  max-width: 100%;\n  font-size: 0.875rem;\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.toast:not(.showing):not(.show) {\n  opacity: 0;\n}\n.toast.hide {\n  display: none;\n}\n\n.toast-container {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container > :not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.toast-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.toast-header .btn-close {\n  margin-right: -0.375rem;\n  margin-left: 0.75rem;\n}\n\n.toast-body {\n  padding: 0.75rem;\n  word-wrap: break-word;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -50px);\n          transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  -webkit-transform: none;\n          transform: none;\n}\n.modal.modal-static .modal-dialog {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1080;\n  display: block;\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .tooltip-arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .tooltip-arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  top: -1px;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\n  right: -1px;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  bottom: -1px;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\n  left: -1px;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  z-index: 1070;\n  display: block;\n  max-width: 276px;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .popover-arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n}\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #d8d8d8;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 1rem 1rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transform: none;\n          transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  -webkit-transition: opacity 0s 0.6s;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.15s ease;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target] {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.6s ease;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  -webkit-filter: invert(1) grayscale(100);\n          filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg) /* rtl:ignore */;\n            transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg) /* rtl:ignore */;\n            transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: 0.75s linear infinite spinner-border;\n          animation: 0.75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: 0.75s linear infinite spinner-grow;\n          animation: 0.75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n.spinner-grow {\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n  }\n}\n.offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: 1050;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 100%;\n  visibility: hidden;\n  background-color: #fff;\n  background-clip: padding-box;\n  outline: 0;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .offcanvas {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.offcanvas-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1rem;\n}\n.offcanvas-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.offcanvas-body {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 1rem 1rem;\n  overflow-y: auto;\n}\n\n.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: 400px;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n\n.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: 400px;\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n\n.offcanvas.show {\n  -webkit-transform: none;\n          transform: none;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.link-primary {\n  color: #0d6efd;\n}\n.link-primary:hover, .link-primary:focus {\n  color: #0a58ca;\n}\n\n.link-secondary {\n  color: #6c757d;\n}\n.link-secondary:hover, .link-secondary:focus {\n  color: #565e64;\n}\n\n.link-success {\n  color: #198754;\n}\n.link-success:hover, .link-success:focus {\n  color: #146c43;\n}\n\n.link-info {\n  color: #0dcaf0;\n}\n.link-info:hover, .link-info:focus {\n  color: #3dd5f3;\n}\n\n.link-warning {\n  color: #ffc107;\n}\n.link-warning:hover, .link-warning:focus {\n  color: #ffcd39;\n}\n\n.link-danger {\n  color: #dc3545;\n}\n.link-danger:hover, .link-danger:focus {\n  color: #b02a37;\n}\n\n.link-light {\n  color: #f8f9fa;\n}\n.link-light:hover, .link-light:focus {\n  color: #f9fafb;\n}\n\n.link-dark {\n  color: #212529;\n}\n.link-dark:hover, .link-dark:focus {\n  color: #1a1e21;\n}\n\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.float-start {\n  float: left !important;\n}\n\n.float-end {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-visible {\n  overflow: visible !important;\n}\n\n.overflow-scroll {\n  overflow: scroll !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.shadow {\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-sm {\n  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow-lg {\n  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.top-0 {\n  top: 0 !important;\n}\n\n.top-50 {\n  top: 50% !important;\n}\n\n.top-100 {\n  top: 100% !important;\n}\n\n.bottom-0 {\n  bottom: 0 !important;\n}\n\n.bottom-50 {\n  bottom: 50% !important;\n}\n\n.bottom-100 {\n  bottom: 100% !important;\n}\n\n.start-0 {\n  left: 0 !important;\n}\n\n.start-50 {\n  left: 50% !important;\n}\n\n.start-100 {\n  left: 100% !important;\n}\n\n.end-0 {\n  right: 0 !important;\n}\n\n.end-50 {\n  right: 50% !important;\n}\n\n.end-100 {\n  right: 100% !important;\n}\n\n.translate-middle {\n  -webkit-transform: translate(-50%, -50%) !important;\n          transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x {\n  -webkit-transform: translateX(-50%) !important;\n          transform: translateX(-50%) !important;\n}\n\n.translate-middle-y {\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-end {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-end-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-start {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-start-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #0d6efd !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #198754 !important;\n}\n\n.border-info {\n  border-color: #0dcaf0 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #212529 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.border-1 {\n  border-width: 1px !important;\n}\n\n.border-2 {\n  border-width: 2px !important;\n}\n\n.border-3 {\n  border-width: 3px !important;\n}\n\n.border-4 {\n  border-width: 4px !important;\n}\n\n.border-5 {\n  border-width: 5px !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important;\n}\n\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n}\n\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important;\n}\n\n.gap-0 {\n  gap: 0 !important;\n}\n\n.gap-1 {\n  gap: 0.25rem !important;\n}\n\n.gap-2 {\n  gap: 0.5rem !important;\n}\n\n.gap-3 {\n  gap: 1rem !important;\n}\n\n.gap-4 {\n  gap: 1.5rem !important;\n}\n\n.gap-5 {\n  gap: 3rem !important;\n}\n\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  -webkit-box-pack: space-evenly !important;\n  -webkit-justify-content: space-evenly !important;\n      -ms-flex-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important;\n}\n\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important;\n}\n\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n}\n\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important;\n}\n\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important;\n}\n\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important;\n}\n\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important;\n}\n\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important;\n}\n\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important;\n}\n\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n          align-self: auto !important;\n}\n\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important;\n}\n\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important;\n}\n\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n          align-self: center !important;\n}\n\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n          align-self: stretch !important;\n}\n\n.order-first {\n  -webkit-box-ordinal-group: 0 !important;\n  -webkit-order: -1 !important;\n      -ms-flex-order: -1 !important;\n          order: -1 !important;\n}\n\n.order-0 {\n  -webkit-box-ordinal-group: 1 !important;\n  -webkit-order: 0 !important;\n      -ms-flex-order: 0 !important;\n          order: 0 !important;\n}\n\n.order-1 {\n  -webkit-box-ordinal-group: 2 !important;\n  -webkit-order: 1 !important;\n      -ms-flex-order: 1 !important;\n          order: 1 !important;\n}\n\n.order-2 {\n  -webkit-box-ordinal-group: 3 !important;\n  -webkit-order: 2 !important;\n      -ms-flex-order: 2 !important;\n          order: 2 !important;\n}\n\n.order-3 {\n  -webkit-box-ordinal-group: 4 !important;\n  -webkit-order: 3 !important;\n      -ms-flex-order: 3 !important;\n          order: 3 !important;\n}\n\n.order-4 {\n  -webkit-box-ordinal-group: 5 !important;\n  -webkit-order: 4 !important;\n      -ms-flex-order: 4 !important;\n          order: 4 !important;\n}\n\n.order-5 {\n  -webkit-box-ordinal-group: 6 !important;\n  -webkit-order: 5 !important;\n      -ms-flex-order: 5 !important;\n          order: 5 !important;\n}\n\n.order-last {\n  -webkit-box-ordinal-group: 7 !important;\n  -webkit-order: 6 !important;\n      -ms-flex-order: 6 !important;\n          order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n\n.fs-6 {\n  font-size: 1rem !important;\n}\n\n.fst-italic {\n  font-style: italic !important;\n}\n\n.fst-normal {\n  font-style: normal !important;\n}\n\n.fw-light {\n  font-weight: 300 !important;\n}\n\n.fw-lighter {\n  font-weight: lighter !important;\n}\n\n.fw-normal {\n  font-weight: 400 !important;\n}\n\n.fw-bold {\n  font-weight: 700 !important;\n}\n\n.fw-bolder {\n  font-weight: bolder !important;\n}\n\n.lh-1 {\n  line-height: 1 !important;\n}\n\n.lh-sm {\n  line-height: 1.25 !important;\n}\n\n.lh-base {\n  line-height: 1.5 !important;\n}\n\n.lh-lg {\n  line-height: 2 !important;\n}\n\n.text-start {\n  text-align: left !important;\n}\n\n.text-end {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary {\n  color: #0d6efd !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\n.text-success {\n  color: #198754 !important;\n}\n\n.text-info {\n  color: #0dcaf0 !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\n.text-dark {\n  color: #212529 !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.bg-primary {\n  background-color: #0d6efd !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\n.bg-success {\n  background-color: #198754 !important;\n}\n\n.bg-info {\n  background-color: #0dcaf0 !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\n.bg-dark {\n  background-color: #212529 !important;\n}\n\n.bg-body {\n  background-color: #fff !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.pe-none {\n  pointer-events: none !important;\n}\n\n.pe-auto {\n  pointer-events: auto !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.rounded-1 {\n  border-radius: 0.2rem !important;\n}\n\n.rounded-2 {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-3 {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-end {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-start {\n  border-bottom-left-radius: 0.25rem !important;\n  border-top-left-radius: 0.25rem !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n\n  .float-sm-end {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-grid {\n    display: grid !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important;\n  }\n\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important;\n  }\n\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important;\n  }\n\n  .justify-content-sm-evenly {\n    -webkit-box-pack: space-evenly !important;\n    -webkit-justify-content: space-evenly !important;\n        -ms-flex-pack: space-evenly !important;\n            justify-content: space-evenly !important;\n  }\n\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n            align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n            align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n            align-self: stretch !important;\n  }\n\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0 !important;\n    -webkit-order: -1 !important;\n        -ms-flex-order: -1 !important;\n            order: -1 !important;\n  }\n\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1 !important;\n    -webkit-order: 0 !important;\n        -ms-flex-order: 0 !important;\n            order: 0 !important;\n  }\n\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2 !important;\n    -webkit-order: 1 !important;\n        -ms-flex-order: 1 !important;\n            order: 1 !important;\n  }\n\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3 !important;\n    -webkit-order: 2 !important;\n        -ms-flex-order: 2 !important;\n            order: 2 !important;\n  }\n\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4 !important;\n    -webkit-order: 3 !important;\n        -ms-flex-order: 3 !important;\n            order: 3 !important;\n  }\n\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5 !important;\n    -webkit-order: 4 !important;\n        -ms-flex-order: 4 !important;\n            order: 4 !important;\n  }\n\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6 !important;\n    -webkit-order: 5 !important;\n        -ms-flex-order: 5 !important;\n            order: 5 !important;\n  }\n\n  .order-sm-last {\n    -webkit-box-ordinal-group: 7 !important;\n    -webkit-order: 6 !important;\n        -ms-flex-order: 6 !important;\n            order: 6 !important;\n  }\n\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-sm-start {\n    text-align: left !important;\n  }\n\n  .text-sm-end {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n\n  .float-md-end {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-grid {\n    display: grid !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-md-none {\n    display: none !important;\n  }\n\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important;\n  }\n\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n  }\n\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important;\n  }\n\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important;\n  }\n\n  .justify-content-md-evenly {\n    -webkit-box-pack: space-evenly !important;\n    -webkit-justify-content: space-evenly !important;\n        -ms-flex-pack: space-evenly !important;\n            justify-content: space-evenly !important;\n  }\n\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important;\n  }\n\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n            align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n            align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n            align-self: stretch !important;\n  }\n\n  .order-md-first {\n    -webkit-box-ordinal-group: 0 !important;\n    -webkit-order: -1 !important;\n        -ms-flex-order: -1 !important;\n            order: -1 !important;\n  }\n\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1 !important;\n    -webkit-order: 0 !important;\n        -ms-flex-order: 0 !important;\n            order: 0 !important;\n  }\n\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2 !important;\n    -webkit-order: 1 !important;\n        -ms-flex-order: 1 !important;\n            order: 1 !important;\n  }\n\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3 !important;\n    -webkit-order: 2 !important;\n        -ms-flex-order: 2 !important;\n            order: 2 !important;\n  }\n\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4 !important;\n    -webkit-order: 3 !important;\n        -ms-flex-order: 3 !important;\n            order: 3 !important;\n  }\n\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5 !important;\n    -webkit-order: 4 !important;\n        -ms-flex-order: 4 !important;\n            order: 4 !important;\n  }\n\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6 !important;\n    -webkit-order: 5 !important;\n        -ms-flex-order: 5 !important;\n            order: 5 !important;\n  }\n\n  .order-md-last {\n    -webkit-box-ordinal-group: 7 !important;\n    -webkit-order: 6 !important;\n        -ms-flex-order: 6 !important;\n            order: 6 !important;\n  }\n\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-md-start {\n    text-align: left !important;\n  }\n\n  .text-md-end {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n\n  .float-lg-end {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-grid {\n    display: grid !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important;\n  }\n\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important;\n  }\n\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important;\n  }\n\n  .justify-content-lg-evenly {\n    -webkit-box-pack: space-evenly !important;\n    -webkit-justify-content: space-evenly !important;\n        -ms-flex-pack: space-evenly !important;\n            justify-content: space-evenly !important;\n  }\n\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n            align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n            align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n            align-self: stretch !important;\n  }\n\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0 !important;\n    -webkit-order: -1 !important;\n        -ms-flex-order: -1 !important;\n            order: -1 !important;\n  }\n\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1 !important;\n    -webkit-order: 0 !important;\n        -ms-flex-order: 0 !important;\n            order: 0 !important;\n  }\n\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2 !important;\n    -webkit-order: 1 !important;\n        -ms-flex-order: 1 !important;\n            order: 1 !important;\n  }\n\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3 !important;\n    -webkit-order: 2 !important;\n        -ms-flex-order: 2 !important;\n            order: 2 !important;\n  }\n\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4 !important;\n    -webkit-order: 3 !important;\n        -ms-flex-order: 3 !important;\n            order: 3 !important;\n  }\n\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5 !important;\n    -webkit-order: 4 !important;\n        -ms-flex-order: 4 !important;\n            order: 4 !important;\n  }\n\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6 !important;\n    -webkit-order: 5 !important;\n        -ms-flex-order: 5 !important;\n            order: 5 !important;\n  }\n\n  .order-lg-last {\n    -webkit-box-ordinal-group: 7 !important;\n    -webkit-order: 6 !important;\n        -ms-flex-order: 6 !important;\n            order: 6 !important;\n  }\n\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-lg-start {\n    text-align: left !important;\n  }\n\n  .text-lg-end {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n\n  .float-xl-end {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-grid {\n    display: grid !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important;\n  }\n\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important;\n  }\n\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important;\n  }\n\n  .justify-content-xl-evenly {\n    -webkit-box-pack: space-evenly !important;\n    -webkit-justify-content: space-evenly !important;\n        -ms-flex-pack: space-evenly !important;\n            justify-content: space-evenly !important;\n  }\n\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n            align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n            align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n            align-self: stretch !important;\n  }\n\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0 !important;\n    -webkit-order: -1 !important;\n        -ms-flex-order: -1 !important;\n            order: -1 !important;\n  }\n\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1 !important;\n    -webkit-order: 0 !important;\n        -ms-flex-order: 0 !important;\n            order: 0 !important;\n  }\n\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2 !important;\n    -webkit-order: 1 !important;\n        -ms-flex-order: 1 !important;\n            order: 1 !important;\n  }\n\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3 !important;\n    -webkit-order: 2 !important;\n        -ms-flex-order: 2 !important;\n            order: 2 !important;\n  }\n\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4 !important;\n    -webkit-order: 3 !important;\n        -ms-flex-order: 3 !important;\n            order: 3 !important;\n  }\n\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5 !important;\n    -webkit-order: 4 !important;\n        -ms-flex-order: 4 !important;\n            order: 4 !important;\n  }\n\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6 !important;\n    -webkit-order: 5 !important;\n        -ms-flex-order: 5 !important;\n            order: 5 !important;\n  }\n\n  .order-xl-last {\n    -webkit-box-ordinal-group: 7 !important;\n    -webkit-order: 6 !important;\n        -ms-flex-order: 6 !important;\n            order: 6 !important;\n  }\n\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xl-start {\n    text-align: left !important;\n  }\n\n  .text-xl-end {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n\n  .float-xxl-end {\n    float: right !important;\n  }\n\n  .float-xxl-none {\n    float: none !important;\n  }\n\n  .d-xxl-inline {\n    display: inline !important;\n  }\n\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xxl-block {\n    display: block !important;\n  }\n\n  .d-xxl-grid {\n    display: grid !important;\n  }\n\n  .d-xxl-table {\n    display: table !important;\n  }\n\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xxl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-xxl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-xxl-none {\n    display: none !important;\n  }\n\n  .flex-xxl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important;\n  }\n\n  .flex-xxl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n  }\n\n  .flex-xxl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n\n  .flex-xxl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n  }\n\n  .flex-xxl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n  }\n\n  .flex-xxl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important;\n  }\n\n  .flex-xxl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n  }\n\n  .flex-xxl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important;\n  }\n\n  .flex-xxl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important;\n  }\n\n  .flex-xxl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important;\n  }\n\n  .flex-xxl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important;\n  }\n\n  .flex-xxl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xxl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n  }\n\n  .justify-content-xxl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n  }\n\n  .justify-content-xxl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n  }\n\n  .justify-content-xxl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n  }\n\n  .justify-content-xxl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important;\n  }\n\n  .justify-content-xxl-evenly {\n    -webkit-box-pack: space-evenly !important;\n    -webkit-justify-content: space-evenly !important;\n        -ms-flex-pack: space-evenly !important;\n            justify-content: space-evenly !important;\n  }\n\n  .align-items-xxl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n  }\n\n  .align-items-xxl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n  }\n\n  .align-items-xxl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n  }\n\n  .align-items-xxl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n  }\n\n  .align-items-xxl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n  }\n\n  .align-content-xxl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important;\n  }\n\n  .align-content-xxl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important;\n  }\n\n  .align-content-xxl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important;\n  }\n\n  .align-content-xxl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important;\n  }\n\n  .align-content-xxl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important;\n  }\n\n  .align-content-xxl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important;\n  }\n\n  .align-self-xxl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n            align-self: auto !important;\n  }\n\n  .align-self-xxl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important;\n  }\n\n  .align-self-xxl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important;\n  }\n\n  .align-self-xxl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n            align-self: center !important;\n  }\n\n  .align-self-xxl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important;\n  }\n\n  .align-self-xxl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n            align-self: stretch !important;\n  }\n\n  .order-xxl-first {\n    -webkit-box-ordinal-group: 0 !important;\n    -webkit-order: -1 !important;\n        -ms-flex-order: -1 !important;\n            order: -1 !important;\n  }\n\n  .order-xxl-0 {\n    -webkit-box-ordinal-group: 1 !important;\n    -webkit-order: 0 !important;\n        -ms-flex-order: 0 !important;\n            order: 0 !important;\n  }\n\n  .order-xxl-1 {\n    -webkit-box-ordinal-group: 2 !important;\n    -webkit-order: 1 !important;\n        -ms-flex-order: 1 !important;\n            order: 1 !important;\n  }\n\n  .order-xxl-2 {\n    -webkit-box-ordinal-group: 3 !important;\n    -webkit-order: 2 !important;\n        -ms-flex-order: 2 !important;\n            order: 2 !important;\n  }\n\n  .order-xxl-3 {\n    -webkit-box-ordinal-group: 4 !important;\n    -webkit-order: 3 !important;\n        -ms-flex-order: 3 !important;\n            order: 3 !important;\n  }\n\n  .order-xxl-4 {\n    -webkit-box-ordinal-group: 5 !important;\n    -webkit-order: 4 !important;\n        -ms-flex-order: 4 !important;\n            order: 4 !important;\n  }\n\n  .order-xxl-5 {\n    -webkit-box-ordinal-group: 6 !important;\n    -webkit-order: 5 !important;\n        -ms-flex-order: 5 !important;\n            order: 5 !important;\n  }\n\n  .order-xxl-last {\n    -webkit-box-ordinal-group: 7 !important;\n    -webkit-order: 6 !important;\n        -ms-flex-order: 6 !important;\n            order: 6 !important;\n  }\n\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xxl-start {\n    text-align: left !important;\n  }\n\n  .text-xxl-end {\n    text-align: right !important;\n  }\n\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-grid {\n    display: grid !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n\n  .d-print-none {\n    display: none !important;\n  }\n}\n.dmm-hero-section .tns-outer {\n  position: relative;\n}\n.dmm-hero-section .tns-outer .tns-nav {\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  bottom: 26px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n@media (min-width: 768px) {\n  .dmm-hero-section .tns-outer .tns-nav {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.dmm-hero-section .tns-outer .tns-nav button {\n  padding: 7px;\n  border: none;\n  background-color: rgba(26, 29, 78, 0.5);\n  border-radius: 50%;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-left: 20px;\n}\n.dmm-hero-section .tns-outer .tns-nav button:first-child {\n  margin-left: 0;\n}\n.dmm-hero-section .tns-outer .tns-nav button.tns-nav-active {\n  background-color: #1a1d4e;\n}\n.dmm-hero-section .slides .slide {\n  background-size: cover;\n  background-position: right center;\n}\n@media (min-width: 768px) {\n  .dmm-hero-section .slides .slide {\n    background-position: top center;\n  }\n}\n.dmm-hero-section .slides .slide .slide-main {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  height: 60vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-size: cover;\n}\n\n.blog-section {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.blog-section .blog-heading-container {\n  text-align: center;\n  width: 100%;\n}\n.blog-section .blog-heading-container .blog-heading {\n  text-align: center;\n  color: #1a1d4e;\n  font-family: \"Heebo\", sans-serif;\n  font-size: calc(1.255rem + 0.06vw);\n  font-weight: 500;\n  background-color: #7ed0f9;\n  padding: 10px 35px;\n  display: inline-block;\n  border-radius: 50px;\n}\n@media (min-width: 1200px) {\n  .blog-section .blog-heading-container .blog-heading {\n    font-size: 1.3rem;\n  }\n}\n.blog-section .blog-heading-text {\n  font-family: \"Heebo\", sans-serif;\n  font-weight: 700;\n  font-size: calc(1.305rem + 0.66vw);\n  text-align: center;\n  color: #1a1d4e;\n}\n@media (min-width: 1200px) {\n  .blog-section .blog-heading-text {\n    font-size: 1.8rem;\n  }\n}\n.blog-section .blog-text {\n  text-decoration: none;\n}\n.blog-section .blog-text .card {\n  border: none;\n  -webkit-box-shadow: 0px 1px 14px 6px #e5e5e5;\n          box-shadow: 0px 1px 14px 6px #e5e5e5;\n}\n.blog-section .blog-text .card .img-container {\n  overflow: hidden;\n  position: relative;\n}\n.blog-section .blog-text .card .img-container .card-img-top {\n  -webkit-transition: -webkit-transform 0.4s ease-in-out;\n  transition: -webkit-transform 0.4s ease-in-out;\n  transition: transform 0.4s ease-in-out;\n  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;\n}\n.blog-section .blog-text .card .img-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -75%;\n  z-index: 2;\n  display: block;\n  width: 50%;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.3)));\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);\n  -webkit-transform: skewX(-25deg);\n          transform: skewX(-25deg);\n  -webkit-transition: none;\n  transition: none;\n}\n.blog-section .blog-text .card .img-container:hover .card-img-top {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.blog-section .blog-text .card .img-container:hover::before {\n  -webkit-transition: left 0.4s ease-in;\n  transition: left 0.4s ease-in;\n  left: 100%;\n}\n.blog-section .blog-text .card .card-body {\n  padding: 10px 30px 20px 30px;\n}\n.blog-section .blog-text .card .card-body .card-date {\n  text-align: left;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.9rem;\n  color: #1a1d4e;\n  margin: 0;\n}\n.blog-section .blog-text .card .card-body .card-heading-text {\n  text-align: left;\n  font-family: \"Heebo\", sans-serif;\n  font-weight: 500;\n  font-size: calc(1.285rem + 0.42vw);\n  color: #1a1d4e;\n  margin: 0;\n  padding-bottom: 5px;\n}\n@media (min-width: 1200px) {\n  .blog-section .blog-text .card .card-body .card-heading-text {\n    font-size: 1.6rem;\n  }\n}\n.blog-section .blog-text .card .card-body .card-text {\n  text-align: left;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 300;\n  font-size: 1.1rem;\n  color: #6b6b6e;\n  margin: 0;\n  margin-bottom: 10px;\n  line-height: 20px;\n}\n.blog-section .blog-text .card .card-body .readmore-btn {\n  text-decoration: none;\n  color: #1a1d4e;\n  font-size: 1rem;\n  font-weight: 500;\n  font-family: \"Inter\", sans-serif;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-column-gap: 5px;\n     -moz-column-gap: 5px;\n          column-gap: 5px;\n}\n.blog-section .blog-text .card .card-body .readmore-btn svg {\n  height: 15px;\n  width: 15px;\n  fill: #1a1d4e;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out;\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n.blog-section .blog-text .card .card-body .readmore-btn:hover svg {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n.blog-section .blog-btn-container {\n  text-align: center;\n  width: 100%;\n  margin-top: 44px;\n}\n.blog-section .blog-btn-container .blog-btn {\n  text-decoration: none;\n  text-align: center;\n  color: #ffffff;\n  background-color: #7ed0f9;\n  font-size: 0.9rem;\n  padding: 15px 45px;\n  display: inline-block;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  border: 1px solid #7ed0f9;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.blog-section .blog-btn-container .blog-btn:hover {\n  background-color: transparent;\n  color: #1a1d4e;\n}\n\n.dmm-header {\n  display: none;\n}\n.dmm-header .logo-side {\n  width: 188px;\n}\n.dmm-header .logo-side img {\n  display: none;\n}\n@media (min-width: 768px) {\n  .dmm-header .logo-side img {\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n.dmm-header .dmm-header-main {\n  display: none;\n}\n.dmm-header .dmm-header-main ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 38px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.dmm-header .dmm-header-main ul li {\n  list-style-type: none;\n  padding: 15px 0;\n  letter-spacing: 2.2px;\n}\n.dmm-header .dmm-header-main ul li a {\n  text-decoration: none;\n  color: #354f5c;\n  font-size: 1rem;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n}\n.dmm-header .dmm-header-main ul li a:hover {\n  color: #7ed0f9;\n}\n@media (min-width: 768px) {\n  .dmm-header .dmm-header-main {\n    display: block;\n  }\n}\n@media (min-width: 992px) {\n  .dmm-header {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/app.scss","webpack://./node_modules/bootstrap/scss/bootstrap.scss","webpack://./node_modules/bootstrap/scss/_root.scss","webpack://./node_modules/bootstrap/scss/_reboot.scss","webpack://./node_modules/bootstrap/scss/_variables.scss","webpack://./node_modules/bootstrap/scss/vendor/_rfs.scss","webpack://./node_modules/bootstrap/scss/mixins/_border-radius.scss","webpack://./node_modules/bootstrap/scss/_type.scss","webpack://./node_modules/bootstrap/scss/mixins/_lists.scss","webpack://./node_modules/bootstrap/scss/_images.scss","webpack://./node_modules/bootstrap/scss/mixins/_image.scss","webpack://./node_modules/bootstrap/scss/_containers.scss","webpack://./node_modules/bootstrap/scss/mixins/_container.scss","webpack://./node_modules/bootstrap/scss/mixins/_breakpoints.scss","webpack://./node_modules/bootstrap/scss/_grid.scss","webpack://./node_modules/bootstrap/scss/mixins/_grid.scss","webpack://./node_modules/bootstrap/scss/_tables.scss","webpack://./node_modules/bootstrap/scss/mixins/_table-variants.scss","webpack://./node_modules/bootstrap/scss/forms/_labels.scss","webpack://./node_modules/bootstrap/scss/forms/_form-text.scss","webpack://./node_modules/bootstrap/scss/forms/_form-control.scss","webpack://./node_modules/bootstrap/scss/mixins/_transition.scss","webpack://./node_modules/bootstrap/scss/mixins/_gradients.scss","webpack://./node_modules/bootstrap/scss/forms/_form-select.scss","webpack://./node_modules/bootstrap/scss/forms/_form-check.scss","webpack://./node_modules/bootstrap/scss/forms/_form-range.scss","webpack://./node_modules/bootstrap/scss/forms/_floating-labels.scss","webpack://./node_modules/bootstrap/scss/forms/_input-group.scss","webpack://./node_modules/bootstrap/scss/mixins/_forms.scss","webpack://./node_modules/bootstrap/scss/_buttons.scss","webpack://./node_modules/bootstrap/scss/mixins/_buttons.scss","webpack://./node_modules/bootstrap/scss/_transitions.scss","webpack://./node_modules/bootstrap/scss/_dropdown.scss","webpack://./node_modules/bootstrap/scss/mixins/_caret.scss","webpack://./node_modules/bootstrap/scss/_button-group.scss","webpack://./node_modules/bootstrap/scss/_nav.scss","webpack://./node_modules/bootstrap/scss/_navbar.scss","webpack://./node_modules/bootstrap/scss/_card.scss","webpack://./node_modules/bootstrap/scss/_accordion.scss","webpack://./node_modules/bootstrap/scss/_breadcrumb.scss","webpack://./node_modules/bootstrap/scss/_pagination.scss","webpack://./node_modules/bootstrap/scss/mixins/_pagination.scss","webpack://./node_modules/bootstrap/scss/_badge.scss","webpack://./node_modules/bootstrap/scss/_alert.scss","webpack://./node_modules/bootstrap/scss/mixins/_alert.scss","webpack://./node_modules/bootstrap/scss/_progress.scss","webpack://./node_modules/bootstrap/scss/_list-group.scss","webpack://./node_modules/bootstrap/scss/mixins/_list-group.scss","webpack://./node_modules/bootstrap/scss/_close.scss","webpack://./node_modules/bootstrap/scss/_toasts.scss","webpack://./node_modules/bootstrap/scss/_modal.scss","webpack://./node_modules/bootstrap/scss/_tooltip.scss","webpack://./node_modules/bootstrap/scss/mixins/_reset-text.scss","webpack://./node_modules/bootstrap/scss/_popover.scss","webpack://./node_modules/bootstrap/scss/_carousel.scss","webpack://./node_modules/bootstrap/scss/mixins/_clearfix.scss","webpack://./node_modules/bootstrap/scss/_spinners.scss","webpack://./node_modules/bootstrap/scss/_offcanvas.scss","webpack://./node_modules/bootstrap/scss/helpers/_colored-links.scss","webpack://./node_modules/bootstrap/scss/helpers/_ratio.scss","webpack://./node_modules/bootstrap/scss/helpers/_position.scss","webpack://./node_modules/bootstrap/scss/helpers/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/mixins/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/helpers/_stretched-link.scss","webpack://./node_modules/bootstrap/scss/helpers/_text-truncation.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-truncate.scss","webpack://./node_modules/bootstrap/scss/mixins/_utilities.scss","webpack://./node_modules/bootstrap/scss/utilities/_api.scss","webpack://./src/scss/_home.scss","webpack://./src/scss/_variable.scss","webpack://./node_modules/rfs/scss.scss","webpack://./src/scss/_header.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;;;EAAA;ACAA;EAGI,kBAAA;EAAA,oBAAA;EAAA,oBAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA,oBAAA;EAAA,oBAAA;EAAA,mBAAA;EAAA,kBAAA;EAAA,kBAAA;EAAA,gBAAA;EAAA,kBAAA;EAAA,uBAAA;EAIA,qBAAA;EAAA,uBAAA;EAAA,qBAAA;EAAA,kBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,mBAAA;EAAA,kBAAA;EAKF,qNAAA;EACA,yGAAA;EACA,yFAAA;AFmBF;;AGlBA;;;EAGE,8BAAA;UAAA,sBAAA;AHqBF;;AGRI;EAJJ;IAKM,uBAAA;EHYJ;AACF;;AGAA;EACE,SAAA;EACA,sCCsX4B;EC1KxB,eALI;EFrMR,gBCgY4B;ED/X5B,gBCqY4B;EDpY5B,cClCS;EDoCT,sBC7CS;ED8CT,8BAAA;EACA,6CAAA;AHEF;;AGOA;EACE,cAAA;EACA,cCqb4B;EDpb5B,8BAAA;EACA,SAAA;EACA,aCob4B;AJxb9B;;AGOA;EACE,WC+R4B;AJnS9B;;AGcA;EACE,aAAA;EACA,qBC0X4B;EDvX5B,gBC0X4B;EDzX5B,gBC0X4B;AJvY9B;;AGiBA;EEkKQ,iCAAA;AL/KR;AKaI;EFAJ;IEyKQ,iBAAA;ELlLN;AACF;;AGaA;EE6JQ,iCAAA;ALtKR;AKII;EFKJ;IEoKQ,eAAA;ELzKN;AACF;;AGSA;EEwJQ,+BAAA;AL7JR;AKLI;EFUJ;IE+JQ,kBAAA;ELhKN;AACF;;AGKA;EEmJQ,iCAAA;ALpJR;AKdI;EFeJ;IE0JQ,iBAAA;ELvJN;AACF;;AGCA;EE0IM,kBALI;ALlIV;;AGEA;EEqIM,eALI;AL9HV;;AGSA;EACE,aAAA;EACA,mBCyK0B;AJ/K5B;;AGiBA;;EAEE,yCAAA;UAAA,iCAAA;EACA,YAAA;EACA,sCAAA;UAAA,8BAAA;AHdF;;AGoBA;EACE,mBAAA;EACA,kBAAA;EACA,oBAAA;AHjBF;;AGuBA;;EAEE,kBAAA;AHpBF;;AGuBA;;;EAGE,aAAA;EACA,mBAAA;AHpBF;;AGuBA;;;;EAIE,gBAAA;AHpBF;;AGuBA;EACE,gBC6P4B;AJjR9B;;AGyBA;EACE,qBAAA;EACA,cAAA;AHtBF;;AG4BA;EACE,gBAAA;AHzBF;;AGiCA;;EAEE,mBCsO4B;AJpQ9B;;AGsCA;EEsCM,kBALI;ALnEV;;AGyCA;EACE,cCkS4B;EDjS5B,yBCyS4B;AJ/U9B;;AG+CA;;EAEE,kBAAA;EEkBI,iBALI;EFXR,cAAA;EACA,wBAAA;AH5CF;;AG+CA;EAAM,eAAA;AH3CN;;AG4CA;EAAM,WAAA;AHxCN;;AG6CA;EACE,cChNQ;EDiNR,0BCyCwC;AJnF1C;AG4CE;EACE,cCwCsC;AJlF1C;;AGqDE;EAEE,cAAA;EACA,qBAAA;AHnDJ;;AG0DA;;;;EAIE,qCCmJ4B;EC3KxB,cALI;EF+BR,+BAAA;EACA,2BAAA;AHvDF;;AG8DA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EEtCI,kBALI;ALfV;AG+DE;EE3CI,kBALI;EFkDN,cAAA;EACA,kBAAA;AH7DJ;;AGiEA;EElDM,kBALI;EFyDR,cCtQQ;EDuQR,qBAAA;AH9DF;AGiEE;EACE,cAAA;AH/DJ;;AGmEA;EACE,sBAAA;EE9DI,kBALI;EFqER,WCnTS;EDoTT,yBC3SS;EEEP,qBAAA;AN0OJ;AGkEE;EACE,UAAA;EErEE,cALI;EF4EN,gBCgH0B;AJhL9B;;AGyEA;EACE,gBAAA;AHtEF;;AG4EA;;EAEE,sBAAA;AHzEF;;AGiFA;EACE,oBAAA;EACA,yBAAA;AH9EF;;AGiFA;EACE,mBC8K4B;ED7K5B,sBC6K4B;ED5K5B,cCtVS;EDuVT,gBAAA;AH9EF;;AGqFA;EAEE,mBAAA;EACA,gCAAA;AHnFF;;AGsFA;;;;;;EAME,qBAAA;EACA,mBAAA;EACA,eAAA;AHnFF;;AG2FA;EACE,qBAAA;AHxFF;;AG8FA;EAEE,gBAAA;AH5FF;;AGoGA;EACE,UAAA;AHjGF;;AGsGA;;;;;EAKE,SAAA;EACA,oBAAA;EEpKI,kBALI;EF2KR,oBAAA;AHnGF;;AGuGA;;EAEE,oBAAA;AHpGF;;AGyGA;EACE,eAAA;AHtGF;;AGyGA;EAGE,iBAAA;AHxGF;AG2GE;EACE,UAAA;AHzGJ;;AGgHA;EACE,aAAA;AH7GF;;AGqHA;;;;EAIE,0BAAA;AHlHF;AGqHI;;;;EACE,eAAA;AHhHN;;AGuHA;EACE,UAAA;EACA,kBAAA;AHpHF;;AGyHA;EACE,gBAAA;AHtHF;;AGgIA;EACE,YAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;AH7HF;;AGqIA;EACE,WAAA;EACA,WAAA;EACA,UAAA;EACA,qBCG4B;EC5PtB,iCAAA;EF4PN,oBAAA;AHnIF;AK3RI;EFuZJ;IE9OQ,iBAAA;ELsHN;AACF;AGgIE;EACE,WAAA;AH9HJ;;AGqIA;;;;;;;EAOE,UAAA;AHlIF;;AGqIA;EACE,YAAA;AHlIF;;AG2IA;EACE,oBAAA;EACA,6BAAA;AHxIF;;AGgJA;;;;;;;CAAA;AAWA;EACE,wBAAA;AHhJF;;AGqJA;EACE,UAAA;AHlJF;;AGwJA;EACE,aAAA;AHrJF;;AGoJA;EACE,aAAA;AHrJF;;AG2JA;EACE,aAAA;EACA,0BAAA;AHxJF;;AG6JA;EACE,qBAAA;AH1JF;;AG+JA;EACE,SAAA;AH5JF;;AGmKA;EACE,kBAAA;EACA,eAAA;AHhKF;;AGwKA;EACE,wBAAA;AHrKF;;AG6KA;EACE,wBAAA;AH1KF;;AOraA;EF+NM,kBALI;EExNR,gBHyc4B;AJjC9B;;AOnaE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJP9B;AK/WI;EE1DF;IFmOM,eAAA;EL0MN;AACF;;AO9aE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJI9B;AK1XI;EE1DF;IFmOM,iBAAA;ELqNN;AACF;;AOzbE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJe9B;AKrYI;EE1DF;IFmOM,eAAA;ELgON;AACF;;AOpcE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJ0B9B;AKhZI;EE1DF;IFmOM,iBAAA;EL2ON;AACF;;AO/cE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJqC9B;AK3ZI;EE1DF;IFmOM,eAAA;ELsPN;AACF;;AO1dE;EF4NM,iCAAA;EE1NJ,gBH4bkB;EG3blB,gBH6a0B;AJgD9B;AK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BtlEA;EACE,mBfipBsC;EC3ZlC,kBALI;Ec7OR,cfKS;AJklEX;;AoB5lEA;EACE,cAAA;EACA,WAAA;EACA,yBAAA;EfoPI,eALI;Ee5OR,gBhBua4B;EgBta5B,gBhB4a4B;EgB3a5B,chBKS;EgBJT,sBhBLS;EgBMT,4BAAA;EACA,yBAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EdGE,sBAAA;EeHE,wFDMJ;ECNI,gFDMJ;ECNI,wEDMJ;ECNI,8GDMJ;ApB0lEF;AqB5lEM;EDhBN;ICiBQ,wBAAA;IAAA,gBAAA;ErB+lEN;AACF;AoB7lEE;EACE,gBAAA;ApB+lEJ;AoB7lEI;EACE,eAAA;ApB+lEN;AoB1lEE;EACE,chBjBO;EgBkBP,sBhB3BO;EgB4BP,qBhB+pBoC;EgB9pBpC,UAAA;EAKE,0DhBwiB0B;UgBxiB1B,kDhBwiB0B;AJgjDhC;AoBjlEE;EAEE,aAAA;ApBklEJ;AoB9kEE;EACE,chB1CO;EgB4CP,UAAA;ApB+kEJ;AoBllEE;EACE,chB1CO;EgB4CP,UAAA;ApB+kEJ;AoBllEE;EACE,chB1CO;EgB4CP,UAAA;ApB+kEJ;AoBllEE;EACE,chB1CO;EgB4CP,UAAA;ApB+kEJ;AoBllEE;EACE,chB1CO;EgB4CP,UAAA;ApB+kEJ;AoBvkEE;EAEE,yBhB1DO;EgB6DP,UAAA;ApBskEJ;AoBlkEE;EACE,yBAAA;EACA,0BAAA;EACA,2BhB2f0B;UgB3f1B,0BhB2f0B;EgB1f1B,chB9DO;EkBbT,yBlBMS;EgBuEP,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,4BhBmR0B;EgBlR1B,gBAAA;ECtEE,qJDuEF;ECvEE,6IDuEF;ECvEE,qIDuEF;ECvEE,2KDuEF;ApBokEJ;AoBhlEE;EACE,yBAAA;EACA,0BAAA;EACA,2BhB2f0B;UgB3f1B,0BhB2f0B;EgB1f1B,chB9DO;EkBbT,yBlBMS;EgBuEP,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,4BhBmR0B;EgBlR1B,gBAAA;ECtEE,qJDuEF;ECvEE,6IDuEF;ECvEE,qIDuEF;ECvEE,2KDuEF;ApBokEJ;AqBvoEM;EDuDJ;ICtDM,wBAAA;IAAA,gBAAA;ErB0oEN;EoBplEA;ICtDM,wBAAA;IAAA,gBAAA;ErB0oEN;AACF;AoBtkEE;EACE,yBhB0vB8B;AJ80ClC;AoBzkEE;EACE,yBhB0vB8B;AJ80ClC;AoBrkEE;EACE,yBAAA;EACA,0BAAA;EACA,2BhBwe0B;UgBxe1B,0BhBwe0B;EgBve1B,chBjFO;EkBbT,yBlBMS;EgB0FP,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,4BhBgQ0B;EgB/P1B,gBAAA;ECzFE,qJD0FF;EC1FE,6ID0FF;EC1FE,qID0FF;EC1FE,2KD0FF;ApBukEJ;AqB7pEM;ED0EJ;ICzEM,wBAAA;IAAA,gBAAA;ErBgqEN;AACF;AoBzkEE;EACE,yBhBuuB8B;AJo2ClC;;AoBlkEA;EACE,cAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBhB2T4B;EgB1T5B,chB5GS;EgB6GT,6BAAA;EACA,yBAAA;EACA,mBAAA;ApBqkEF;AoBnkEE;EAEE,gBAAA;EACA,eAAA;ApBokEJ;;AoBzjEA;EACE,sChBikBsC;EgBhkBtC,uBAAA;EfyGI,mBALI;ECnON,qBAAA;AN6rEJ;AoB1jEE;EACE,uBAAA;EACA,wBAAA;EACA,0BhB4b0B;UgB5b1B,yBhB4b0B;AJgoD9B;AoB/jEE;EACE,uBAAA;EACA,wBAAA;EACA,0BhB4b0B;UgB5b1B,yBhB4b0B;AJgoD9B;AoBzjEE;EACE,uBAAA;EACA,wBAAA;EACA,0BhBsb0B;UgBtb1B,yBhBsb0B;AJqoD9B;;AoBvjEA;EACE,oChB+iBsC;EgB9iBtC,oBAAA;EfsFI,kBALI;ECnON,qBAAA;AN8sEJ;AoBxjEE;EACE,oBAAA;EACA,qBAAA;EACA,wBhB6a0B;UgB7a1B,uBhB6a0B;AJ6oD9B;AoB7jEE;EACE,oBAAA;EACA,qBAAA;EACA,wBhB6a0B;UgB7a1B,uBhB6a0B;AJ6oD9B;AoBvjEE;EACE,oBAAA;EACA,qBAAA;EACA,wBhBua0B;UgBva1B,uBhBua0B;AJkpD9B;;AoBjjEE;EACE,uChBshBoC;AJ8hDxC;AoBjjEE;EACE,sChBmhBoC;AJgiDxC;AoBhjEE;EACE,oChBghBoC;AJkiDxC;;AoB7iEA;EACE,eAAA;EACA,YAAA;EACA,iBhB6X4B;AJmrD9B;AoB9iEE;EACE,eAAA;ApBgjEJ;AoB7iEE;EACE,aAAA;Ed/LA,sBAAA;AN+uEJ;AoB5iEE;EACE,aAAA;EdpMA,sBAAA;ANmvEJ;;AuBjwEA;EACE,cAAA;EACA,WAAA;EACA,0CAAA;ElBmPI,eALI;EkB3OR,gBnBsa4B;EmBra5B,gBnB2a4B;EmB1a5B,cnBIS;EmBHT,sBnBNS;EmBOT,iPAAA;EACA,4BAAA;EACA,yCnBixBkC;EmBhxBlC,0BnBixBkC;EmBhxBlC,yBAAA;EjBAE,sBAAA;EiBGF,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AvBkwEF;AuBhwEE;EACE,qBnB0qBoC;EmBzqBpC,UAAA;EAKE,0DnBmxB4B;UmBnxB5B,kDnBmxB4B;AJ2+ClC;AuB1vEE;EAEE,sBnBoiB0B;EmBniB1B,sBAAA;AvB2vEJ;AuBxvEE;EAEE,yBnBjCO;AJ0xEX;AuBpvEE;EACE,kBAAA;EACA,0BAAA;AvBsvEJ;;AuBlvEA;EACE,oBnB6hB4B;EmB5hB5B,uBnB4hB4B;EmB3hB5B,oBnB4hB4B;EC1VxB,mBALI;ALyjEV;;AuBlvEA;EACE,mBnB0hB4B;EmBzhB5B,sBnByhB4B;EmBxhB5B,kBnByhB4B;EC9VxB,kBALI;ALgkEV;;AwBlzEA;EACE,cAAA;EACA,kBpBotBwC;EoBntBxC,mBpBotBwC;EoBntBxC,uBpBotBwC;AJimD1C;AwBnzEE;EACE,WAAA;EACA,mBAAA;AxBqzEJ;;AwBjzEA;EACE,UpBwsBwC;EoBvsBxC,WpBusBwC;EoBtsBxC,kBAAA;EACA,mBAAA;EACA,sBpBbS;EoBcT,4BAAA;EACA,2BAAA;EACA,wBAAA;EACA,qCpB2sBwC;EoB1sBxC,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,iCAAA;UAAA,mBAAA;AxBozEF;AwBjzEE;ElBXE,qBAAA;AN+zEJ;AwBhzEE;EAEE,kBpBksBsC;AJ+mD1C;AwB9yEE;EACE,+BpByrBsC;UoBzrBtC,uBpByrBsC;AJunD1C;AwB7yEE;EACE,qBpBupBoC;EoBtpBpC,UAAA;EACA,0DpBoiB4B;UoBpiB5B,kDpBoiB4B;AJ2wDhC;AwB5yEE;EACE,yBpBZM;EoBaN,qBpBbM;AJ2zEV;AwB5yEI;EAII,+OAAA;AxB2yER;AwBvyEI;EAII,uJAAA;AxBsyER;AwBjyEE;EACE,yBpBjCM;EoBkCN,qBpBlCM;EoBuCJ,yOAAA;AxB+xEN;AwB3xEE;EACE,oBAAA;EACA,oBAAA;UAAA,YAAA;EACA,YpBiqBuC;AJ4nD3C;AwBtxEI;EACE,YpBypBqC;AJ+nD3C;;AwB1wEA;EACE,mBpBopBgC;AJynDlC;AwB3wEE;EACE,UpBgpB8B;EoB/oB9B,mBAAA;EACA,wKAAA;EACA,gCAAA;ElB9FA,kBAAA;EeHE,yDGmGF;EHnGE,iDGmGF;AxB6wEJ;AqB52EM;EGyFJ;IHxFM,wBAAA;IAAA,gBAAA;ErB+2EN;AACF;AwBhxEI;EACE,0JAAA;AxBkxEN;AwB/wEI;EACE,iCpB+oB4B;EoB1oB1B,uJAAA;AxB6wER;;AwBvwEA;EACE,qBAAA;EACA,kBpBknBgC;AJwpDlC;;AwBvwEA;EACE,kBAAA;EACA,sBAAA;EACA,oBAAA;AxB0wEF;AwBtwEI;EACE,oBAAA;EACA,oBAAA;UAAA,YAAA;EACA,apBsewB;AJkyD9B;;AyBt5EA;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,6BAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AzBy5EF;AyBv5EE;EACE,UAAA;AzBy5EJ;AyBr5EI;EAA0B,0ErByzBa;UqBzzBb,kErByzBa;AJ+lD3C;AyBv5EI;EAA0B,kErBwzBa;AJkmD3C;AyBv5EE;EACE,SAAA;AzBy5EJ;AyBt5EE;EACE,WrB0yBuC;EqBzyBvC,YrByyBuC;EqBxyBvC,oBAAA;EHzBF,yBlBkCQ;EqBPN,SrByyBuC;EErzBvC,mBAAA;EeHE,4HIkBF;EJlBE,oHIkBF;EJlBE,4GIkBF;EJlBE,kJIkBF;EACA,wBAAA;UAAA,gBAAA;AzBu5EJ;AqBt6EM;EIMJ;IJLM,wBAAA;IAAA,gBAAA;ErBy6EN;AACF;AyB15EI;EHjCF,yBlBy0ByC;AJqnD3C;AyBx5EE;EACE,WrBmxB8B;EqBlxB9B,crBmxB8B;EqBlxB9B,kBAAA;EACA,erBkxB8B;EqBjxB9B,yBrBpCO;EqBqCP,yBAAA;EnB7BA,mBAAA;ANw7EJ;AyBt5EE;EACE,WrB+wBuC;EqB9wBvC,YrB8wBuC;EkBj0BzC,yBlBkCQ;EqBmBN,SrB+wBuC;EErzBvC,mBAAA;EeHE,iHI4CF;EJ5CE,4GI4CF;EACA,qBAAA;OAAA,gBAAA;AzBu5EJ;AqBh8EM;EIiCJ;IJhCM,qBAAA;IAAA,gBAAA;ErBm8EN;AACF;AyB15EI;EH3DF,yBlBy0ByC;AJ+oD3C;AyBx5EE;EACE,WrByvB8B;EqBxvB9B,crByvB8B;EqBxvB9B,kBAAA;EACA,erBwvB8B;EqBvvB9B,yBrB9DO;EqB+DP,yBAAA;EnBvDA,mBAAA;ANk9EJ;AyBt5EE;EACE,oBAAA;AzBw5EJ;AyBt5EI;EACE,yBrBtEK;AJ89EX;AyBr5EI;EACE,yBrB1EK;AJi+EX;;A0B9+EA;EACE,kBAAA;A1Bi/EF;A0B/+EE;;EAEE,0BtBo1B8B;EsBn1B9B,qBAAA;A1Bi/EJ;A0B9+EE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,qBAAA;EACA,oBAAA;EACA,6BAAA;EACA,6BAAA;UAAA,qBAAA;ELDE,gFKEF;ELFE,wEKEF;ELFE,gEKEF;ELFE,oGKEF;A1Bg/EJ;AqB9+EM;EKXJ;ILYM,wBAAA;IAAA,gBAAA;ErBi/EN;AACF;A0Bh/EI;EACE,kBAAA;A1Bk/EN;A0Bn/EI;EACE,kBAAA;A1Bk/EN;A0Bn/EI;EACE,kBAAA;A1Bk/EN;A0Bn/EI;EACE,kBAAA;A1Bk/EN;A0Bn/EI;EACE,kBAAA;A1Bk/EN;A0B/+EI;EAEE,qBtB+zB4B;EsB9zB5B,wBtB+zB4B;AJirDlC;A0Bn/EI;EAEE,qBtB+zB4B;EsB9zB5B,wBtB+zB4B;AJirDlC;A0Bn/EI;EAEE,qBtB+zB4B;EsB9zB5B,wBtB+zB4B;AJirDlC;A0B7+EI;EACE,qBtB0zB4B;EsBzzB5B,wBtB0zB4B;AJqr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uFI;EAyEI,oCxB8nBgC;EwB7nBhC,kFAAA;A5BwqFR;;A4BlvFI;EAiFE,qBxB4xBmB;AJy4DzB;A4BlqFQ;EAEE,uBxB2sB8B;EwB1sB9B,6iBAAA;EACA,+DAAA;EACA,2EAAA;A5BmqFV;A4B/pFM;EACE,qBxB+wBiB;EwB9wBjB,yDA9Ea;UA8Eb,iDA9Ea;A5B+uFrB;;A4BhwFI;EAsGE,qBxBuwBmB;AJu5DzB;A4B5pFM;EACE,yBxBowBiB;AJ05DzB;A4B3pFM;EACE,yDA5Fa;UA4Fb,iDA5Fa;A5ByvFrB;A4B1pFM;EACE,cxB4vBiB;AJg6DzB;;A4BvpFI;EACE,kBAAA;A5B0pFN;;A4BjxFI;;;EAiII,UAAA;A5BspFR;A4BppFM;;;EACE,UAAA;A5BwpFR;;A6B9xFA;EACE,qBAAA;EAEA,gBzB0a4B;EyBza5B,gBzB+a4B;EyB9a5B,czBQS;EyBPT,kBAAA;EACA,qBAAA;EAEA,sBAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,6BAAA;EACA,6BAAA;EC8GA,yBAAA;EzB4HI,eALI;ECnON,sBAAA;EeHE,qJQGJ;ERHI,6IQGJ;ERHI,qIQGJ;ERHI,2KQGJ;A7BiyFF;AqBhyFM;EQhBN;IRiBQ,wBAAA;IAAA,gBAAA;ErBmyFN;AACF;A6BpyFE;EACE,czBLO;AJ2yFX;A6BlyFE;EAEE,UAAA;EACA,0DzBqjB4B;UyBrjB5B,kDzBqjB4B;AJ8uEhC;A6BrxFE;EAGE,oBAAA;EACA,azB2kB0B;AJ0sE9B;;A6BzwFE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJ0vFf;A8BjzFE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9Bo0FjB;A8BhzFE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,yDAAA;UAAA,iDAAA;A9B6yFN;A8BzyFE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9B40FlB;A8BnyFI;EAKI,yDAAA;UAAA,iDAAA;A9BiyFR;A8B5xFE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJkxFf;;A6BvyFE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJwxFf;A8B/0FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9Bk2FjB;A8B90FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,0DAAA;UAAA,kDAAA;A9B20FN;A8Bv0FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9B02FlB;A8Bj0FI;EAKI,0DAAA;UAAA,kDAAA;A9B+zFR;A8B1zFE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJgzFf;;A6Br0FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJszFf;A8B72FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9Bg4FjB;A8B52FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,yDAAA;UAAA,iDAAA;A9By2FN;A8Br2FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9Bw4FlB;A8B/1FI;EAKI,yDAAA;UAAA,iDAAA;A9B61FR;A8Bx1FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJ80Ff;;A6Bn2FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJo1Ff;A8B34FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9B85FjB;A8B14FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,yDAAA;UAAA,iDAAA;A9Bu4FN;A8Bn4FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9Bs6FlB;A8B73FI;EAKI,yDAAA;UAAA,iDAAA;A9B23FR;A8Bt3FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJ42Ff;;A6Bj4FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJk3Ff;A8Bz6FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9B47FjB;A8Bx6FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,wDAAA;UAAA,gDAAA;A9Bq6FN;A8Bj6FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9Bo8FlB;A8B35FI;EAKI,wDAAA;UAAA,gDAAA;A9By5FR;A8Bp5FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJ04Ff;;A6B/5FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJg5Ff;A8Bv8FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9B09FjB;A8Bt8FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,wDAAA;UAAA,gDAAA;A9Bm8FN;A8B/7FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9Bk+FlB;A8Bz7FI;EAKI,wDAAA;UAAA,gDAAA;A9Bu7FR;A8Bl7FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJw6Ff;;A6B77FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJ86Ff;A8Br+FE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9Bw/FjB;A8Bp+FE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,0DAAA;UAAA,kDAAA;A9Bi+FN;A8B79FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9BggGlB;A8Bv9FI;EAKI,0DAAA;UAAA,kDAAA;A9Bq9FR;A8Bh9FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJs8Ff;;A6B39FE;ECvCA,WAXQ;ERLR,yBlB4Ea;E0B1Db,qB1B0Da;AJ48Ff;A8BngGE;EACE,WAdY;ERRd,yBQMmB;EAkBjB,qBAjBa;A9BshGjB;A8BlgGE;EAEE,WArBY;ERRd,yBQMmB;EAyBjB,qBAxBa;EA6BX,uDAAA;UAAA,+CAAA;A9B+/FN;A8B3/FE;EAKE,WAlCa;EAmCb,yBArCkB;EAwClB,qBAvCc;A9B8hGlB;A8Br/FI;EAKI,uDAAA;UAAA,+CAAA;A9Bm/FR;A8B9+FE;EAEE,WAjDe;EAkDf,yB1BYW;E0BTX,qB1BSW;AJo+Ff;;A6Bn/FE;ECmBA,c1BJa;E0BKb,qB1BLa;AJy+Ff;A8Bl+FE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJ8+Ff;A8Bj+FE;EAEE,yDAAA;UAAA,iDAAA;A9Bk+FJ;A8B/9FE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJs/Ff;A8B39FI;EAKI,yDAAA;UAAA,iDAAA;A9By9FR;A8Bp9FE;EAEE,c1BvCW;E0BwCX,6BAAA;A9Bq9FJ;;A6B5gGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJkgGf;A8B3/FE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJugGf;A8B1/FE;EAEE,0DAAA;UAAA,kDAAA;A9B2/FJ;A8Bx/FE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJ+gGf;A8Bp/FI;EAKI,0DAAA;UAAA,kDAAA;A9Bk/FR;A8B7+FE;EAEE,c1BvCW;E0BwCX,6BAAA;A9B8+FJ;;A6BriGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJ2hGf;A8BphGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJgiGf;A8BnhGE;EAEE,wDAAA;UAAA,gDAAA;A9BohGJ;A8BjhGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJwiGf;A8B7gGI;EAKI,wDAAA;UAAA,gDAAA;A9B2gGR;A8BtgGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9BugGJ;;A6B9jGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJojGf;A8B7iGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJyjGf;A8B5iGE;EAEE,yDAAA;UAAA,iDAAA;A9B6iGJ;A8B1iGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJikGf;A8BtiGI;EAKI,yDAAA;UAAA,iDAAA;A9BoiGR;A8B/hGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9BgiGJ;;A6BvlGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJ6kGf;A8BtkGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJklGf;A8BrkGE;EAEE,wDAAA;UAAA,gDAAA;A9BskGJ;A8BnkGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJ0lGf;A8B/jGI;EAKI,wDAAA;UAAA,gDAAA;A9B6jGR;A8BxjGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9ByjGJ;;A6BhnGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJsmGf;A8B/lGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJ2mGf;A8B9lGE;EAEE,wDAAA;UAAA,gDAAA;A9B+lGJ;A8B5lGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJmnGf;A8BxlGI;EAKI,wDAAA;UAAA,gDAAA;A9BslGR;A8BjlGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9BklGJ;;A6BzoGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJ+nGf;A8BxnGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJooGf;A8BvnGE;EAEE,0DAAA;UAAA,kDAAA;A9BwnGJ;A8BrnGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJ4oGf;A8BjnGI;EAKI,0DAAA;UAAA,kDAAA;A9B+mGR;A8B1mGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9B2mGJ;;A6BlqGE;ECmBA,c1BJa;E0BKb,qB1BLa;AJwpGf;A8BjpGE;EACE,WATY;EAUZ,yB1BTW;E0BUX,qB1BVW;AJ6pGf;A8BhpGE;EAEE,uDAAA;UAAA,+CAAA;A9BipGJ;A8B9oGE;EAKE,WArBa;EAsBb,yB1BxBW;E0ByBX,qB1BzBW;AJqqGf;A8B1oGI;EAKI,uDAAA;UAAA,+CAAA;A9BwoGR;A8BnoGE;EAEE,c1BvCW;E0BwCX,6BAAA;A9BooGJ;;A6B/qGA;EACE,gBzBmW4B;EyBlW5B,czBzCQ;EyB0CR,0BzBgNwC;AJk+F1C;A6BhrGE;EACE,czB+MsC;AJm+F1C;A6B1qGE;EAEE,czB/EO;AJ0vGX;;A6BhqGA;ECuBE,oBAAA;EzB4HI,kBALI;ECnON,qBAAA;AN2vGJ;;A6BlqGA;ECmBE,uBAAA;EzB4HI,mBALI;ECnON,qBAAA;ANiwGJ;;A+BpxGA;EVgBM,wCUfJ;EVeI,gCUfJ;A/BuxGF;AqBpwGM;EUpBN;IVqBQ,wBAAA;IAAA,gBAAA;ErBuwGN;AACF;A+B1xGE;EACE,UAAA;A/B4xGJ;;A+BtxGE;EACE,aAAA;A/ByxGJ;;A+BrxGA;EACE,SAAA;EA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EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,WAAA;EACA,qBAAA;EjCkPI,eALI;EiC3OR,clCMS;EkCLT,gBAAA;EACA,sBlCLS;EkCMT,SAAA;EhCKE,gBAAA;EgCHF,qBAAA;EjBAI,+KiBCJ;EjBDI,uKiBCJ;EjBDI,+JiBCJ;EjBDI,qMiBCJ;AtC8vIF;AqB3vIM;EiBhBN;IjBiBQ,wBAAA;IAAA,gBAAA;ErB8vIN;AACF;AsCjwIE;EACE,clC0kCsC;EkCzkCtC,yBlCwkCsC;EkCvkCtC,uDAAA;UAAA,+CAAA;AtCmwIJ;AsCjwII;EACE,iSAAA;EACA,kClC6kCoC;UkC7kCpC,0BlC6kCoC;AJsrG1C;AsC9vIE;EACE,sBAAA;MAAA,oBAAA;UAAA,cAAA;EACA,clCkkCsC;EkCjkCtC,elCikCsC;EkChkCtC,iBAAA;EACA,WAAA;EACA,iSAAA;EACA,4BAAA;EACA,wBlC4jCsC;EiBnlCpC,sDiBwBF;EjBxBE,8CiBwBF;EjBxBE,sCiBwBF;EjBxBE,0EiBwBF;AtCgwIJ;AqBpxIM;EiBWJ;IjBVM,wBAAA;IAAA,gBAAA;ErBuxIN;AACF;AsClwIE;EACE,UAAA;AtCowIJ;AsCjwIE;EACE,UAAA;EACA,qBlCkpBoC;EkCjpBpC,UAAA;EACA,0DlC+hB4B;UkC/hB5B,kDlC+hB4B;AJouHhC;;AsC/vIA;EACE,gBAAA;AtCkwIF;;AsC/vIA;EACE,sBlCpDS;EkCqDT,sCAAA;AtCkwIF;AsChwIE;EhCnCE,+BAAA;EACA,gCAAA;ANsyIJ;AsCjwII;EhCtCA,2CAAA;EACA,4CAAA;AN0yIJ;AsChwIE;EACE,aAAA;AtCkwIJ;AsC9vIE;EhClCE,mCAAA;EACA,kCAAA;ANmyIJ;AsC9vIM;EhCtCF,+CAAA;EACA,8CAAA;ANuyIJ;AsC7vII;EhC3CA,mCAAA;EACA,kCAAA;AN2yIJ;;AsC3vIA;EACE,qBAAA;AtC8vIF;;AsCrvIE;EACE,eAAA;AtCwvIJ;AsCrvIE;EACE,eAAA;EACA,cAAA;EhCxFA,gBAAA;ANg1IJ;AsCrvII;EAAgB,aAAA;AtCwvIpB;AsCvvII;EAAe,gBAAA;AtC0vInB;AsCxvII;EhC9FA,gBAAA;ANy1IJ;;AuC52IA;EACE,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,uBAAA;MAAA,mBAAA;UAAA,eAAA;EACA,YAAA;EACA,mBnCy0CkC;EmCv0ClC,gBAAA;AvC82IF;;AuCv2IE;EACE,oBnC8zCgC;AJ4iGpC;AuCx2II;EACE,WAAA;EACA,qBnC0zC8B;EmCzzC9B,cnCLK;EmCML,uFAAA;AvC02IN;AuCt2IE;EACE,cnCXO;AJm3IX;;AwCj4IA;EACE,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EhCGA,eAAA;EACA,gBAAA;ARk4IF;;AwCl4IA;EACE,kBAAA;EACA,cAAA;EACA,cpC8BQ;EoC7BR,qBAAA;EACA,sBpCFS;EoCGT,yBAAA;EnBKI,qJmBJJ;EnBII,6ImBJJ;EnBII,qImBJJ;EnBII,2KmBJJ;AxCq4IF;AqB73IM;EmBfN;InBgBQ,wBAAA;IAAA,gBAAA;ErBg4IN;AACF;AwCx4IE;EACE,UAAA;EACA,cpCkRsC;EoChRtC,yBpCRO;EoCSP,qBpCRO;AJi5IX;AwCt4IE;EACE,UAAA;EACA,cpC0QsC;EoCzQtC,yBpCfO;EoCgBP,UpCqgCgC;EoCpgChC,0DpCujB4B;UoCvjB5B,kDpCujB4B;AJi1HhC;;AwCn4IE;EACE,iBpCw/BgC;AJ84GpC;AwCn4IE;EACE,UAAA;EACA,WpC9BO;EkBJT,yBlBkCQ;EoCEN,qBpCFM;AJu4IV;AwCl4IE;EACE,cpC9BO;EoC+BP,oBAAA;EACA,sBpCtCO;EoCuCP,qBpCpCO;AJw6IX;;AyC/6IE;EACE,yBAAA;AzCk7IJ;;AyC36IQ;EnCqCJ,+BAAA;EACA,kCAAA;AN04IJ;AyC16IQ;EnCiBJ,gCAAA;EACA,mCAAA;AN45IJ;;AyC57IE;EACE,uBAAA;EpCsPE,kBALI;AL+sIV;AyCz7IQ;EnCqCJ,8BAAA;EACA,iCAAA;ANu5IJ;AyCv7IQ;EnCiBJ,+BAAA;EACA,kCAAA;ANy6IJ;;AyCz8IE;EACE,uBAAA;EpCsPE,mBALI;AL4tIV;AyCt8IQ;EnCqCJ,8BAAA;EACA,iCAAA;ANo6IJ;AyCp8IQ;EnCiBJ,+BAAA;EACA,kCAAA;ANs7IJ;;A0Cr9IA;EACE,qBAAA;EACA,sBAAA;ErCoPI,iBALI;EqC7OR,gBtCya4B;EsCxa5B,cAAA;EACA,WtCHS;EsCIT,kBAAA;EACA,mBAAA;EACA,wBAAA;EpCKE,sBAAA;ANo9IJ;A0Cp9IE;EACE,aAAA;A1Cs9IJ;;A0Cj9IA;EACE,kBAAA;EACA,SAAA;A1Co9IF;;A2C3+IA;EACE,kBAAA;EACA,kBAAA;EACA,mBvCmvC8B;EuClvC9B,6BAAA;ErCWE,sBAAA;ANo+IJ;;A2C1+IA;EAEE,cAAA;A3C4+IF;;A2Cx+IA;EACE,gBvC8Z4B;AJ6kI9B;;A2Cn+IA;EACE,mBvCouC8B;AJkwGhC;A2Cn+IE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,UAAA;EACA,qBAAA;A3Cq+IJ;;A2Ct9IE;EClDA,cD8Cc;ErB5Cd,yBqB0CmB;EC1CnB,qBD2Ce;A3Ci+IjB;A4C1gJE;EACE,cAAA;A5C4gJJ;;A2C/9IE;EClDA,cD8Cc;ErB5Cd,yBqB0CmB;EC1CnB,qBD2Ce;A3C0+IjB;A4CnhJE;EACE,cAAA;A5CqhJJ;;A2Cx+IE;EClDA,cD8Cc;ErB5Cd,yBqB0CmB;EC1CnB,qBD2Ce;A3Cm/IjB;A4C5hJE;EACE,cAAA;A5C8hJJ;;A2Cj/IE;EClDA,cDgDgB;ErB9ChB,yBqB0CmB;EC1CnB,qBD2Ce;A3C4/IjB;A4CriJE;EACE,cAAA;A5CuiJJ;;A2C1/IE;EClDA,cDgDgB;ErB9ChB,yBqB0CmB;EC1CnB,qBD2Ce;A3CqgJjB;A4C9iJE;EACE,cAAA;A5CgjJJ;;A2CngJE;EClDA,cD8Cc;ErB5Cd,yBqB0CmB;EC1CnB,qBD2Ce;A3C8gJjB;A4CvjJE;EACE,cAAA;A5CyjJJ;;A2C5gJE;EClDA,cDgDgB;ErB9ChB,yBqB0CmB;EC1CnB,qBD2Ce;A3CuhJjB;A4ChkJE;EACE,cAAA;A5CkkJJ;;A2CrhJE;EClDA,cD8Cc;ErB5Cd,yBqB0CmB;EC1CnB,qBD2Ce;A3CgiJjB;A4CzkJ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0OoB;I0CzOpB,oBAAA;E9CgqJR;E8C9pJQ;IACE,iBAAA;IACA,sB1CqOkB;EJ27I5B;AACF;AaruJI;EiC4CA;IACE,8BAAA;IAAA,6BAAA;IAAA,2BAAA;QAAA,uBAAA;YAAA,mBAAA;E9C4rJJ;E8CzrJM;IxCrCJ,kCAAA;IAZA,0BAAA;EN8uJF;E8CxrJM;IxCtDJ,gCAAA;IAYA,4BAAA;ENsuJF;E8CvrJM;IACE,aAAA;E9CyrJR;E8CtrJM;IACE,qB1C0OoB;I0CzOpB,oBAAA;E9CwrJR;E8CtrJQ;IACE,iBAAA;IACA,sB1CqOkB;EJm9I5B;AACF;Aa7vJI;EiC4CA;IACE,8BAAA;IAAA,6BAAA;IAAA,2BAAA;QAAA,uBAAA;YAAA,mBAAA;E9CotJJ;E8CjtJM;IxCrCJ,kCAAA;IAZA,0BAAA;ENswJF;E8ChtJM;IxCtDJ,gCAAA;IAYA,4BAAA;EN8vJF;E8C/sJM;IACE,aAAA;E9CitJR;E8C9sJM;IACE,qB1C0OoB;I0CzOpB,oBAAA;E9CgtJR;E8C9sJQ;IACE,iBAAA;IACA,sB1CqOkB;EJ2+I5B;AACF;A8CnsJA;ExC9HI,gBAAA;ANo0JJ;A8CnsJE;EACE,qBAAA;A9CqsJJ;A8CnsJI;EACE,sBAAA;A9CqsJN;;A+Cz1JE;EACE,cDiKyB;EChKzB,yBD+JsB;A9C6rJ1B;A+Cz1JM;EAEE,cD2JqB;EC1JrB,yBAAA;A/C01JR;A+Cv1JM;EACE,W3CRG;E2CSH,yBDqJqB;ECpJrB,qBDoJqB;A9CqsJ7B;;A+Cv2JE;EACE,cDiKyB;EChKzB,yBD+JsB;A9C2sJ1B;A+Cv2JM;EAEE,cD2JqB;EC1JrB,yBAAA;A/Cw2JR;A+Cr2JM;EACE,W3CRG;E2CSH,yBDqJqB;ECpJrB,qBDoJqB;A9CmtJ7B;;A+Cr3JE;EACE,cDiKyB;EChKzB,yBD+JsB;A9CytJ1B;A+Cr3JM;EAEE,cD2JqB;EC1JrB,yBAAA;A/Cs3JR;A+Cn3JM;EACE,W3CRG;E2CSH,yBDqJqB;ECpJrB,qBDoJqB;A9CiuJ7B;;A+Cn4JE;EACE,cDmK2B;EClK3B,yBD+JsB;A9CuuJ1B;A+Cn4JM;EAEE,cD6JuB;EC5JvB,yBAAA;A/Co4JR;A+Cj4JM;EACE,W3CRG;E2CSH,yBDuJuB;ECtJvB,qBDsJuB;A9C6uJ/B;;A+Cj5JE;EACE,cDmK2B;EClK3B,yBD+JsB;A9CqvJ1B;A+Cj5JM;EAEE,cD6JuB;EC5JvB,yBAAA;A/Ck5JR;A+C/4JM;EACE,W3CRG;E2CSH,yBDuJuB;ECtJvB,qBDsJuB;A9C2vJ/B;;A+C/5JE;EACE,cDiKyB;EChKzB,yBD+JsB;A9CmwJ1B;A+C/5JM;EAEE,cD2JqB;EC1JrB,yBAAA;A/Cg6JR;A+C75JM;EACE,W3CRG;E2CSH,yBDqJqB;ECpJrB,qBDoJqB;A9C2wJ7B;;A+C76JE;EACE,cDmK2B;EClK3B,yBD+JsB;A9CixJ1B;A+C76JM;EAEE,cD6JuB;EC5JvB,yBAAA;A/C86JR;A+C36JM;EACE,W3CRG;E2CSH,yBDuJuB;ECtJvB,qBDsJuB;A9CuxJ/B;;A+C37JE;EACE,cDiKyB;EChKzB,yBD+JsB;A9C+xJ1B;A+C37JM;EAEE,cD2JqB;EC1JrB,yBAAA;A/C47JR;A+Cz7JM;EACE,W3CRG;E2CSH,yBDqJqB;ECpJrB,qBDoJqB;A9CuyJ7B;;AgDx8JA;EACE,+BAAA;UAAA,uBAAA;EACA,U5Cs4C2B;E4Cr4C3B,W5Cq4C2B;E4Cp4C3B,sBAAA;EACA,W5CQS;E4CPT,2WAAA;EACA,SAAA;E1COE,sBAAA;E0CLF,Y5Cs4C2B;AJqkH7B;AgDx8JE;EACE,WAAA;EACA,qBAAA;EACA,a5Ci4CyB;AJykH7B;AgDv8JE;EACE,UAAA;EACA,0D5CyjB4B;U4CzjB5B,kD5CyjB4B;E4CxjB5B,U5C43CyB;AJ6kH7B;AgDt8JE;EAEE,oBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,a5Cs3CyB;AJilH7B;;AgDn8JA;EACE,0D5Ck3C2B;U4Cl3C3B,kD5Ck3C2B;AJolH7B;;AiD5+JA;EACE,Y7CyqCkC;E6CxqClC,eAAA;E5CyPI,mBALI;E4CjPR,oBAAA;EACA,2C7CyqCkC;E6CxqClC,4BAAA;EACA,oCAAA;EACA,qD7CmX4B;U6CnX5B,6C7CmX4B;EEzW1B,sBAAA;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","sourcesContent":["@import '~bootstrap/scss/bootstrap.scss';\r\n@import '~tiny-slider/dist/tiny-slider.css';\r\n@import '~rfs/scss';\r\n\r\n\r\n@import './variable';\r\n@import './home';\r\n@import './header';\r\n@import './footer';","/*!\n * Bootstrap v5.0.1 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n// scss-docs-start import-stack\n// Configuration\n@import \"functions\";\n@import \"variables\";\n@import \"mixins\";\n@import \"utilities\";\n\n// Layout & components\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"containers\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"accordion\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"alert\";\n@import \"progress\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n@import \"offcanvas\";\n\n// Helpers\n@import \"helpers\";\n\n// Utilities\n@import \"utilities/api\";\n// scss-docs-end import-stack\n",":root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --#{$variable-prefix}font-sans-serif: #{inspect($font-family-sans-serif)};\n  --#{$variable-prefix}font-monospace: #{inspect($font-family-monospace)};\n  --#{$variable-prefix}gradient: #{$gradient};\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n\n// Root\n//\n// Ability to the value of the root font sizes, affecting the value of `rem`.\n// null by default, thus nothing is generated.\n\n:root {\n  font-size: $font-size-root;\n\n  @if $enable-smooth-scroll {\n    @media (prefers-reduced-motion: no-preference) {\n      scroll-behavior: smooth;\n    }\n  }\n}\n\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Prevent adjustments of font size after orientation changes in iOS.\n// 4. Change the default tap highlight to be completely transparent in iOS.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: $body-text-align;\n  background-color: $body-bg; // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}\n\n\n// Content grouping\n//\n// 1. Reset Firefox's gray color\n// 2. Set correct height and prevent the `size` attribute to make the `hr` look like an input field\n\nhr {\n  margin: $hr-margin-y 0;\n  color: $hr-color; // 1\n  background-color: currentColor;\n  border: 0;\n  opacity: $hr-opacity;\n}\n\nhr:not([size]) {\n  height: $hr-height; // 2\n}\n\n\n// Typography\n//\n// 1. Remove top margins from headings\n//    By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n//    margin for easier control within type scales as it avoids margin collapsing.\n\n%heading {\n  margin-top: 0; // 1\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-style: $headings-font-style;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1 {\n  @extend %heading;\n  @include font-size($h1-font-size);\n}\n\nh2 {\n  @extend %heading;\n  @include font-size($h2-font-size);\n}\n\nh3 {\n  @extend %heading;\n  @include font-size($h3-font-size);\n}\n\nh4 {\n  @extend %heading;\n  @include font-size($h4-font-size);\n}\n\nh5 {\n  @extend %heading;\n  @include font-size($h5-font-size);\n}\n\nh6 {\n  @extend %heading;\n  @include font-size($h6-font-size);\n}\n\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\n\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-bs-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-bs-original-title] { // 1\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  text-decoration-skip-ink: none; // 4\n}\n\n\n// Address\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\n\n// Lists\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\n// 1. Undo browser default\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // 1\n}\n\n\n// Blockquote\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\n\n// Strong\n//\n// Add the correct font weight in Chrome, Edge, and Safari\n\nb,\nstrong {\n  font-weight: $font-weight-bolder;\n}\n\n\n// Small\n//\n// Add the correct font size in all browsers\n\nsmall {\n  @include font-size($small-font-size);\n}\n\n\n// Mark\n\nmark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n// Sub and Sup\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n\nsub,\nsup {\n  position: relative;\n  @include font-size($sub-sup-font-size);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n// Links\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  &,\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n// Code\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-code;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n  direction: ltr #{\"/* rtl:ignore */\"};\n  unicode-bidi: bidi-override;\n}\n\n// 1. Remove browser default top margin\n// 2. Reset browser default of `1em` to use `rem`s\n// 3. Don't allow content to break outside\n\npre {\n  display: block;\n  margin-top: 0; // 1\n  margin-bottom: 1rem; // 2\n  overflow: auto; // 3\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n\n  kbd {\n    padding: 0;\n    @include font-size(1em);\n    font-weight: $nested-kbd-font-weight;\n  }\n}\n\n\n// Figures\n//\n// Apply a consistent margin strategy (matches our type styles).\n\nfigure {\n  margin: 0 0 1rem;\n}\n\n\n// Images and content\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\n\n// Tables\n//\n// Prevent double borders\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: $table-cell-padding-y;\n  padding-bottom: $table-cell-padding-y;\n  color: $table-caption-color;\n  text-align: left;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n\n// Forms\n//\n// 1. Allow labels to use `margin` for spacing.\n\nlabel {\n  display: inline-block; // 1\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n// See https://github.com/twbs/bootstrap/issues/24093\n\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn't be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\n// 1. Remove the margin in Firefox and Safari\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // 1\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\n// Remove the inheritance of text transform in Firefox\nbutton,\nselect {\n  text-transform: none;\n}\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nselect {\n  // Remove the inheritance of word-wrap in Safari.\n  // See https://github.com/twbs/bootstrap/issues/24990\n  word-wrap: normal;\n\n  // Undo the opacity change from Chrome\n  &:disabled {\n    opacity: 1;\n  }\n}\n\n// Remove the dropdown arrow in Chrome from inputs built with datalists.\n// See https://stackoverflow.com/a/54997118\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\n// 3. Opinionated: add \"hand\" cursor to non-disabled button elements.\n\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n\n  @if $enable-button-pointers {\n    &:not(:disabled) {\n      cursor: pointer; // 3\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n// 1. Textareas should really only resize vertically so they don't break their (horizontal) containers.\n\ntextarea {\n  resize: vertical; // 1\n}\n\n// 1. Browsers set a default `min-width: min-content;` on fieldsets,\n//    unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n//    So we reset that to ensure fieldsets behave more like a standard block element.\n//    See https://github.com/twbs/bootstrap/issues/12359\n//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n// 2. Reset the default outline behavior of fieldsets so they don't affect page layout.\n\nfieldset {\n  min-width: 0; // 1\n  padding: 0; // 2\n  margin: 0; // 2\n  border: 0; // 2\n}\n\n// 1. By using `float: left`, the legend will behave like a block element.\n//    This way the border of a fieldset wraps around the legend if present.\n// 2. Fix wrapping bug.\n//    See https://github.com/twbs/bootstrap/issues/29712\n\nlegend {\n  float: left; // 1\n  width: 100%;\n  padding: 0;\n  margin-bottom: $legend-margin-bottom;\n  @include font-size($legend-font-size);\n  font-weight: $legend-font-weight;\n  line-height: inherit;\n\n  + * {\n    clear: left; // 2\n  }\n}\n\n// Fix height of inputs with a type of datetime-local, date, month, week, or time\n// See https://github.com/twbs/bootstrap/issues/18842\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n// 1. Correct the outline style in Safari.\n// 2. This overrides the extra rounded corners on search inputs in iOS so that our\n//    `.form-control` class can properly style them. Note that this cannot simply\n//    be added to `.form-control` as it's not specific enough. For details, see\n//    https://github.com/twbs/bootstrap/issues/11586.\n\n[type=\"search\"] {\n  outline-offset: -2px; // 1\n  -webkit-appearance: textfield; // 2\n}\n\n// 1. A few input types should stay LTR\n// See https://rtlstyling.com/posts/rtl-styling#form-inputs\n// 2. RTL only output\n// See https://rtlcss.com/learn/usage-guide/control-directives/#raw\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n\n// Remove the inner padding in Chrome and Safari on macOS.\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n// Remove padding around color pickers in webkit browsers\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n\n// Inherit font family and line height for file input buttons\n\n::file-selector-button {\n  font: inherit;\n}\n\n// 1. Change font properties to `inherit`\n// 2. Correct the inability to style clickable types in iOS and Safari.\n\n::-webkit-file-upload-button {\n  font: inherit; // 1\n  -webkit-appearance: button; // 2\n}\n\n// Correct element displays\n\noutput {\n  display: inline-block;\n}\n\n// Remove border from iframe\n\niframe {\n  border: 0;\n}\n\n// Summary\n//\n// 1. Add the correct display in all browsers\n\nsummary {\n  display: list-item; // 1\n  cursor: pointer;\n}\n\n\n// Progress\n//\n// Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n// Hidden attribute\n//\n// Always hide an element with the `hidden` HTML attribute.\n\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n// scss-docs-start gray-color-variables\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n// scss-docs-end gray-color-variables\n\n// fusv-disable\n// scss-docs-start gray-colors-map\n$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;\n// scss-docs-end gray-colors-map\n// fusv-enable\n\n// scss-docs-start color-variables\n$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;\n// scss-docs-end color-variables\n\n// scss-docs-start colors-map\n$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;\n// scss-docs-end colors-map\n\n// scss-docs-start theme-color-variables\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;\n// scss-docs-end theme-color-variables\n\n// scss-docs-start theme-colors-map\n$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;\n// scss-docs-end theme-colors-map\n\n// The contrast ratio to reach against white, to determine if color changes from \"light\" to \"dark\". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.\n// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast\n$min-contrast-ratio:   4.5 !default;\n\n// Customize the light and dark text colors for use in our color contrast function.\n$color-contrast-dark:      $black !default;\n$color-contrast-light:     $white !default;\n\n// fusv-disable\n$blue-100: tint-color($blue, 80%) !default;\n$blue-200: tint-color($blue, 60%) !default;\n$blue-300: tint-color($blue, 40%) !default;\n$blue-400: tint-color($blue, 20%) !default;\n$blue-500: $blue !default;\n$blue-600: shade-color($blue, 20%) !default;\n$blue-700: shade-color($blue, 40%) !default;\n$blue-800: shade-color($blue, 60%) !default;\n$blue-900: shade-color($blue, 80%) !default;\n\n$indigo-100: tint-color($indigo, 80%) !default;\n$indigo-200: tint-color($indigo, 60%) !default;\n$indigo-300: tint-color($indigo, 40%) !default;\n$indigo-400: tint-color($indigo, 20%) !default;\n$indigo-500: $indigo !default;\n$indigo-600: shade-color($indigo, 20%) !default;\n$indigo-700: shade-color($indigo, 40%) !default;\n$indigo-800: shade-color($indigo, 60%) !default;\n$indigo-900: shade-color($indigo, 80%) !default;\n\n$purple-100: tint-color($purple, 80%) !default;\n$purple-200: tint-color($purple, 60%) !default;\n$purple-300: tint-color($purple, 40%) !default;\n$purple-400: tint-color($purple, 20%) !default;\n$purple-500: $purple !default;\n$purple-600: shade-color($purple, 20%) !default;\n$purple-700: shade-color($purple, 40%) !default;\n$purple-800: shade-color($purple, 60%) !default;\n$purple-900: shade-color($purple, 80%) !default;\n\n$pink-100: tint-color($pink, 80%) !default;\n$pink-200: tint-color($pink, 60%) !default;\n$pink-300: tint-color($pink, 40%) !default;\n$pink-400: tint-color($pink, 20%) !default;\n$pink-500: $pink !default;\n$pink-600: shade-color($pink, 20%) !default;\n$pink-700: shade-color($pink, 40%) !default;\n$pink-800: shade-color($pink, 60%) !default;\n$pink-900: shade-color($pink, 80%) !default;\n\n$red-100: tint-color($red, 80%) !default;\n$red-200: tint-color($red, 60%) !default;\n$red-300: tint-color($red, 40%) !default;\n$red-400: tint-color($red, 20%) !default;\n$red-500: $red !default;\n$red-600: shade-color($red, 20%) !default;\n$red-700: shade-color($red, 40%) !default;\n$red-800: shade-color($red, 60%) !default;\n$red-900: shade-color($red, 80%) !default;\n\n$orange-100: tint-color($orange, 80%) !default;\n$orange-200: tint-color($orange, 60%) !default;\n$orange-300: tint-color($orange, 40%) !default;\n$orange-400: tint-color($orange, 20%) !default;\n$orange-500: $orange !default;\n$orange-600: shade-color($orange, 20%) !default;\n$orange-700: shade-color($orange, 40%) !default;\n$orange-800: shade-color($orange, 60%) !default;\n$orange-900: shade-color($orange, 80%) !default;\n\n$yellow-100: tint-color($yellow, 80%) !default;\n$yellow-200: tint-color($yellow, 60%) !default;\n$yellow-300: tint-color($yellow, 40%) !default;\n$yellow-400: tint-color($yellow, 20%) !default;\n$yellow-500: $yellow !default;\n$yellow-600: shade-color($yellow, 20%) !default;\n$yellow-700: shade-color($yellow, 40%) !default;\n$yellow-800: shade-color($yellow, 60%) !default;\n$yellow-900: shade-color($yellow, 80%) !default;\n\n$green-100: tint-color($green, 80%) !default;\n$green-200: tint-color($green, 60%) !default;\n$green-300: tint-color($green, 40%) !default;\n$green-400: tint-color($green, 20%) !default;\n$green-500: $green !default;\n$green-600: shade-color($green, 20%) !default;\n$green-700: shade-color($green, 40%) !default;\n$green-800: shade-color($green, 60%) !default;\n$green-900: shade-color($green, 80%) !default;\n\n$teal-100: tint-color($teal, 80%) !default;\n$teal-200: tint-color($teal, 60%) !default;\n$teal-300: tint-color($teal, 40%) !default;\n$teal-400: tint-color($teal, 20%) !default;\n$teal-500: $teal !default;\n$teal-600: shade-color($teal, 20%) !default;\n$teal-700: shade-color($teal, 40%) !default;\n$teal-800: shade-color($teal, 60%) !default;\n$teal-900: shade-color($teal, 80%) !default;\n\n$cyan-100: tint-color($cyan, 80%) !default;\n$cyan-200: tint-color($cyan, 60%) !default;\n$cyan-300: tint-color($cyan, 40%) !default;\n$cyan-400: tint-color($cyan, 20%) !default;\n$cyan-500: $cyan !default;\n$cyan-600: shade-color($cyan, 20%) !default;\n$cyan-700: shade-color($cyan, 40%) !default;\n$cyan-800: shade-color($cyan, 60%) !default;\n$cyan-900: shade-color($cyan, 80%) !default;\n// fusv-enable\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                true !default;\n$enable-rounded:              true !default;\n$enable-shadows:              false !default;\n$enable-gradients:            false !default;\n$enable-transitions:          true !default;\n$enable-reduced-motion:       true !default;\n$enable-smooth-scroll:        true !default;\n$enable-grid-classes:         true !default;\n$enable-button-pointers:      true !default;\n$enable-rfs:                  true !default;\n$enable-validation-icons:     true !default;\n$enable-negative-margins:     false !default;\n$enable-deprecation-messages: true !default;\n$enable-important-utilities:  true !default;\n\n// Prefix for :root CSS variables\n\n$variable-prefix:             bs- !default;\n\n// Gradient\n//\n// The gradient which is added to components if `$enable-gradients` is `true`\n// This gradient is also added to elements with `.bg-gradient`\n// scss-docs-start variable-gradient\n$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;\n// scss-docs-end variable-gradient\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n// scss-docs-start spacer-variables-maps\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer / 4,\n  2: $spacer / 2,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;\n\n$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;\n// scss-docs-end spacer-variables-maps\n\n// Position\n//\n// Define the edge positioning anchors of the position utilities.\n\n// scss-docs-start position-map\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n// scss-docs-end position-map\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n$body-text-align:           null !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              $primary !default;\n$link-decoration:                         underline !default;\n$link-shade-percentage:                   20% !default;\n$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;\n$link-hover-decoration:                   null !default;\n\n$stretched-link-pseudo-element:           after !default;\n$stretched-link-z-index:                  1 !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n// scss-docs-start grid-breakpoints\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n// scss-docs-end grid-breakpoints\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n// scss-docs-start container-max-widths\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n// scss-docs-end container-max-widths\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           1.5rem !default;\n$grid-row-columns:            6 !default;\n\n$gutters: $spacers !default;\n\n// Container padding\n\n$container-padding-x: $grid-gutter-width / 2 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n// scss-docs-start border-variables\n$border-width:                1px !default;\n$border-widths: (\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n\n$border-color:                $gray-300 !default;\n// scss-docs-end border-variables\n\n// scss-docs-start border-radius-variables\n$border-radius:               .25rem !default;\n$border-radius-sm:            .2rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-pill:          50rem !default;\n// scss-docs-end border-radius-variables\n\n// scss-docs-start box-shadow-variables\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;\n// scss-docs-end box-shadow-variables\n\n$component-active-color:      $white !default;\n$component-active-bg:         $primary !default;\n\n// scss-docs-start caret-variables\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n// scss-docs-end caret-variables\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n// scss-docs-start collapse-transition\n$transition-collapse:         height .35s ease !default;\n// scss-docs-end collapse-transition\n\n// stylelint-disable function-disallowed-list\n// scss-docs-start aspect-ratios\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n// scss-docs-end aspect-ratios\n// stylelint-enable function-disallowed-list\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// scss-docs-start font-variables\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$variable-prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$variable-prefix}font-monospace) !default;\n\n// $font-size-root effects the value of `rem`, which is used for as well font sizes, paddings and margins\n// $font-size-base effects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n// scss-docs-end font-variables\n\n// scss-docs-start font-sizes\n$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;\n// scss-docs-end font-sizes\n\n// scss-docs-start headings-variables\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n// scss-docs-end headings-variables\n\n// scss-docs-start display-headings\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;\n// scss-docs-end display-headings\n\n// scss-docs-start type-variables\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n$text-muted:                  $gray-600 !default;\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n$hr-height:                   $border-width !default;\n$hr-opacity:                  .25 !default;\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n// scss-docs-end type-variables\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n// scss-docs-start table-variables\n$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba($black, $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba($black, $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba($black, $table-hover-bg-factor) !default;\n\n$table-border-factor:         .1 !default;\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-striped-order:         odd !default;\n\n$table-group-separator-color: currentColor !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-scale:              -80% !default;\n// scss-docs-end table-variables\n\n// scss-docs-start table-loop\n$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;\n// scss-docs-end table-loop\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n// scss-docs-start input-btn-variables\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         .25rem !default;\n$input-btn-focus-color-opacity: .25 !default;\n$input-btn-focus-color:         rgba($component-active-bg, $input-btn-focus-color-opacity) !default;\n$input-btn-focus-blur:          0 !default;\n$input-btn-focus-box-shadow:    0 0 $input-btn-focus-blur $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n// scss-docs-end input-btn-variables\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n// scss-docs-start btn-variables\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              $link-color !default;\n$btn-link-hover-color:        $link-hover-color !default;\n$btn-link-disabled-color:     $gray-600 !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$btn-hover-bg-shade-amount:       15% !default;\n$btn-hover-bg-tint-amount:        15% !default;\n$btn-hover-border-shade-amount:   20% !default;\n$btn-hover-border-tint-amount:    10% !default;\n$btn-active-bg-shade-amount:      20% !default;\n$btn-active-bg-tint-amount:       20% !default;\n$btn-active-border-shade-amount:  25% !default;\n$btn-active-border-tint-amount:   10% !default;\n// scss-docs-end btn-variables\n\n\n// Forms\n\n// scss-docs-start form-text-variables\n$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       $text-muted !default;\n// scss-docs-end form-text-variables\n\n// scss-docs-start form-label-variables\n$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;\n// scss-docs-end form-label-variables\n\n// scss-docs-start form-input-variables\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           $body-color !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      $box-shadow-inset !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-input-variables\n\n// scss-docs-start form-check-variables\n$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   null !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $input-bg !default;\n$form-check-input-border:                 1px solid rgba($black, .25) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-check-inline-margin-end:    1rem !default;\n// scss-docs-end form-check-variables\n\n// scss-docs-start form-switch-variables\n$form-switch-color:               rgba(0, 0, 0, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n$form-switch-transition:          background-position .15s ease-in-out !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;\n// scss-docs-end form-switch-variables\n\n// scss-docs-start input-group-variables\n$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n// scss-docs-end input-group-variables\n\n// scss-docs-start form-select-variables\n$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-color:        null !default;\n$form-select-disabled-bg:           $gray-200 !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;\n$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $border-radius !default;\n$form-select-box-shadow:          $box-shadow-inset !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n// scss-docs-end form-select-variables\n\n// scss-docs-start form-range-variables\n$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             $gray-300 !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     $box-shadow-inset !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             $gray-500 !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-range-variables\n\n// scss-docs-start form-file-variables\n$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             $input-group-addon-bg !default;\n$form-file-button-hover-bg:       shade-color($form-file-button-bg, 5%) !default;\n// scss-docs-end form-file-variables\n\n// scss-docs-start form-floating-variables\n$form-floating-height:            add(3.5rem, $input-height-border) !default;\n$form-floating-padding-x:         $input-padding-x !default;\n$form-floating-padding-y:         1rem !default;\n$form-floating-input-padding-t:   1.625rem !default;\n$form-floating-input-padding-b:   .625rem !default;\n$form-floating-label-opacity:     .65 !default;\n$form-floating-label-transform:   scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-transition:        opacity .1s ease-in-out, transform .1s ease-in-out !default;\n// scss-docs-end form-floating-variables\n\n// Form validation\n\n// scss-docs-start form-feedback-variables\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n// scss-docs-end form-feedback-variables\n\n// scss-docs-start form-validation-states\n$form-validation-states: (\n  \"valid\": (\n    \"color\": $form-feedback-valid-color,\n    \"icon\": $form-feedback-icon-valid\n  ),\n  \"invalid\": (\n    \"color\": $form-feedback-invalid-color,\n    \"icon\": $form-feedback-icon-invalid\n  )\n) !default;\n// scss-docs-end form-validation-states\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n// scss-docs-start zindex-stack\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-offcanvas:                  1050 !default;\n$zindex-modal:                      1060 !default;\n$zindex-popover:                    1070 !default;\n$zindex-tooltip:                    1080 !default;\n// scss-docs-end zindex-stack\n\n\n// Navs\n\n// scss-docs-start nav-variables\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    $link-color !default;\n$nav-link-hover-color:              $link-hover-color !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n// scss-docs-end nav-variables\n\n\n// Navbar\n\n// scss-docs-start navbar-variables\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n// scss-docs-end navbar-variables\n\n// scss-docs-start navbar-theme-variables\n$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .55) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n// scss-docs-end navbar-theme-variables\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n// scss-docs-start dropdown-variables\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer / 2 !default;\n$dropdown-box-shadow:               $box-shadow !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         shade-color($gray-900, 10%) !default;\n$dropdown-link-hover-bg:            $gray-200 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-500 !default;\n\n$dropdown-item-padding-y:           $spacer / 4 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding:           $dropdown-padding-y $dropdown-item-padding-x !default;\n// scss-docs-end dropdown-variables\n\n// scss-docs-start dropdown-dark-variables\n$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;\n// scss-docs-end dropdown-dark-variables\n\n\n// Pagination\n\n// scss-docs-start pagination-variables\n$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-radius:          $border-radius !default;\n$pagination-margin-start:           -$pagination-border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-color:            $link-hover-color !default;\n$pagination-focus-bg:               $gray-200 !default;\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$pagination-border-radius-sm:       $border-radius-sm !default;\n$pagination-border-radius-lg:       $border-radius-lg !default;\n// scss-docs-end pagination-variables\n\n\n// Cards\n\n// scss-docs-start card-variables\n$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer / 2 !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y / 2 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n$card-img-overlay-padding:          $spacer !default;\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n// scss-docs-end card-variables\n\n// Accordion\n\n// scss-docs-start accordion-variables\n$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         $body-color !default;\n$accordion-bg:                            $body-bg !default;\n$accordion-border-width:                  $border-width !default;\n$accordion-border-color:                  rgba($black, .125) !default;\n$accordion-border-radius:                 $border-radius !default;\n$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  $accordion-color !default;\n$accordion-button-bg:                     $accordion-bg !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              tint-color($component-active-bg, 90%) !default;\n$accordion-button-active-color:           shade-color($primary, 10%) !default;\n\n$accordion-button-focus-border-color:     $input-focus-border-color !default;\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $accordion-color !default;\n$accordion-icon-active-color:             $accordion-button-active-color !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(-180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n// scss-docs-end accordion-variables\n\n// Tooltips\n\n// scss-docs-start tooltip-variables\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer / 4 !default;\n$tooltip-padding-x:                 $spacer / 2 !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n// scss-docs-end tooltip-variables\n\n// Form tooltips must come after regular tooltips\n// scss-docs-start tooltip-feedback-variables\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   null !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n// scss-docs-start tooltip-feedback-variables\n\n\n// Popovers\n\n// scss-docs-start popover-variables\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                $box-shadow !default;\n\n$popover-header-bg:                 shade-color($popover-bg, 6%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n// scss-docs-end popover-variables\n\n\n// Toasts\n\n// scss-docs-start toast-variables\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               $border-radius !default;\n$toast-box-shadow:                  $box-shadow !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n// scss-docs-end toast-variables\n\n\n// Badges\n\n// scss-docs-start badge-variables\n$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               $border-radius !default;\n// scss-docs-end badge-variables\n\n\n// Modals\n\n// scss-docs-start modal-variables\n$modal-inner-padding:               $spacer !default;\n\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       $box-shadow-sm !default;\n$modal-content-box-shadow-sm-up:    $box-shadow !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n// scss-docs-end modal-variables\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n// scss-docs-start alert-variables\n$alert-padding-y:               $spacer !default;\n$alert-padding-x:               $spacer !default;\n$alert-margin-bottom:           1rem !default;\n$alert-border-radius:           $border-radius !default;\n$alert-link-font-weight:        $font-weight-bold !default;\n$alert-border-width:            $border-width !default;\n$alert-bg-scale:                -80% !default;\n$alert-border-scale:            -70% !default;\n$alert-color-scale:             40% !default;\n$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side\n// scss-docs-end alert-variables\n\n\n// Progress bars\n\n// scss-docs-start progress-variables\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               $box-shadow-inset !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n// scss-docs-end progress-variables\n\n\n// List group\n\n// scss-docs-start list-group-variables\n$list-group-color:                  $gray-900 !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         $spacer / 2 !default;\n$list-group-item-padding-x:         $spacer !default;\n$list-group-item-bg-scale:          -80% !default;\n$list-group-item-color-scale:       40% !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n// scss-docs-end list-group-variables\n\n\n// Image thumbnails\n\n// scss-docs-start thumbnail-variables\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              $box-shadow-sm !default;\n// scss-docs-end thumbnail-variables\n\n\n// Figures\n\n// scss-docs-start figure-variables\n$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              $gray-600 !default;\n// scss-docs-end figure-variables\n\n\n// Breadcrumbs\n\n// scss-docs-start breadcrumb-variables\n$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;\n// scss-docs-end breadcrumb-variables\n\n// Carousel\n\n// scss-docs-start carousel-variables\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n$carousel-dark-indicator-active-bg:  $black !default;\n$carousel-dark-caption-color:        $black !default;\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;\n// scss-docs-end carousel-variables\n\n\n// Spinners\n\n// scss-docs-start spinner-variables\n$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-vertical-align:  -.125em !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n// scss-docs-end spinner-variables\n\n\n// Close\n\n// scss-docs-start close-variables\n$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>\") !default;\n$btn-close-focus-shadow:     $input-btn-focus-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;\n// scss-docs-end close-variables\n\n\n// Offcanvas\n\n// scss-docs-start offcanvas-variables\n$offcanvas-padding-y:               $modal-inner-padding !default;\n$offcanvas-padding-x:               $modal-inner-padding !default;\n$offcanvas-horizontal-width:        400px !default;\n$offcanvas-vertical-height:         30vh !default;\n$offcanvas-transition-duration:     .3s !default;\n$offcanvas-border-color:            $modal-content-border-color !default;\n$offcanvas-border-width:            $modal-content-border-width !default;\n$offcanvas-title-line-height:       $modal-title-line-height !default;\n$offcanvas-bg-color:                $modal-content-bg !default;\n$offcanvas-color:                   $modal-content-color !default;\n$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;\n// scss-docs-end offcanvas-variables\n\n// Code\n\n$code-font-size:                    $small-font-size !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         null !default;\n","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/master/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error \"`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.\";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Mode. Possibilities: \"min-media-query\", \"max-media-query\"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: $rfs-base-value / ($rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: $rfs-base-value / ($rfs-base-value * 0 + 1 / $rfs-rem-value);\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  }\n  @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + ' ' + if($rfs-unit == rem, #{$value / ($value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + ' ' + if($rfs-unit == px, #{$value / ($value * 0 + 1) * $rfs-rem-value}px, $value);\n      }\n      @else {\n        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + ' ' + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + ' ' + $value;\n      }\n\n      @else {\n        // Remove unit from $value for calculations\n        $value: $value / ($value * 0 + if($unit == px, 1, 1 / $rfs-rem-value));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + ' ' +  if($rfs-unit == rem, #{$value / $rfs-rem-value}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + (abs($value) - $rfs-base-value) / $rfs-factor;\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{$value-min / $rfs-rem-value}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{$value-diff * 100 / $rfs-breakpoint}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + ' calc(' + $min-width + if($value < 0, ' - ', ' + ') + $variable-width + ')';\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluidVal: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluidVal {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluidVal);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule {\n        #{$property}: if($rfs-mode == max-media-query, $fluidVal, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n// scss-docs-start border-radius-mixins\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n// scss-docs-end border-radius-mixins\n","//\n// Headings\n//\n.h1 {\n  @extend h1;\n}\n\n.h2 {\n  @extend h2;\n}\n\n.h3 {\n  @extend h3;\n}\n\n.h4 {\n  @extend h4;\n}\n\n.h5 {\n  @extend h5;\n}\n\n.h6 {\n  @extend h6;\n}\n\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n@each $display, $font-size in $display-font-sizes {\n  .display-#{$display} {\n    @include font-size($font-size);\n    font-weight: $display-font-weight;\n    line-height: $display-line-height;\n  }\n}\n\n//\n// Emphasis\n//\n.small {\n  @extend small;\n}\n\n.mark {\n  @extend mark;\n}\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size($initialism-font-size);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-font-size);\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n}\n\n.blockquote-footer {\n  margin-top: -$blockquote-margin-y;\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-footer-font-size);\n  color: $blockquote-footer-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer / 2;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n","// Container mixins\n\n@mixin make-container($gutter: $container-padding-x) {\n  width: 100%;\n  padding-right: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  padding-left: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  margin-right: auto;\n  margin-left: auto;\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @if not $n {\n    @error \"breakpoint `#{$name}` not found in `#{$breakpoints}`\";\n  }\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width.\n// The maximum value is reduced by 0.02px to work around the limitations of\n// `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $max: map-get($breakpoints, $name);\n  @return if($max and $max > 0, $max - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min:  breakpoint-min($name, $breakpoints);\n  $next: breakpoint-next($name, $breakpoints);\n  $max:  breakpoint-max($next);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($next, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n\n    > * {\n      @include make-col-ready();\n    }\n  }\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  --#{$variable-prefix}gutter-x: #{$gutter};\n  --#{$variable-prefix}gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--#{$variable-prefix}gutter-y) * -1); // stylelint-disable-line function-disallowed-list\n  margin-right: calc(var(--#{$variable-prefix}gutter-x) / -2); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(var(--#{$variable-prefix}gutter-x) / -2); // stylelint-disable-line function-disallowed-list\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  // Add box sizing if only the grid is loaded\n  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we set the width\n  // later on to override this initial width.\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%; // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid\n  padding-right: calc(var(--#{$variable-prefix}gutter-x) / 2); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$variable-prefix}gutter-x) / 2); // stylelint-disable-line function-disallowed-list\n  margin-top: var(--#{$variable-prefix}gutter-y);\n}\n\n@mixin make-col($size: false, $columns: $grid-columns) {\n  @if $size {\n    flex: 0 0 auto;\n    width: percentage($size / $columns);\n  } @else {\n    flex: 1 1 0;\n    max-width: 100%;\n  }\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 auto;\n    width: 100% / $count;\n  }\n}\n\n// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      }\n\n      .row-cols#{$infix}-auto > * {\n        @include make-col-auto();\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n\n      // Gutters\n      //\n      // Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.\n      @each $key, $value in $gutters {\n        .g#{$infix}-#{$key},\n        .gx#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-x: #{$value};\n        }\n\n        .g#{$infix}-#{$key},\n        .gy#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-y: #{$value};\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  --#{$variable-prefix}table-bg: #{$table-bg};\n  --#{$variable-prefix}table-accent-bg: #{$table-bg};\n  --#{$variable-prefix}table-striped-color: #{$table-striped-color};\n  --#{$variable-prefix}table-striped-bg: #{$table-striped-bg};\n  --#{$variable-prefix}table-active-color: #{$table-active-color};\n  --#{$variable-prefix}table-active-bg: #{$table-active-bg};\n  --#{$variable-prefix}table-hover-color: #{$table-hover-color};\n  --#{$variable-prefix}table-hover-bg: #{$table-hover-bg};\n\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  vertical-align: $table-cell-vertical-align;\n  border-color: $table-border-color;\n\n  // Target th & td\n  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.\n  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).\n  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y $table-cell-padding-x;\n    background-color: var(--#{$variable-prefix}table-bg);\n    border-bottom-width: $table-border-width;\n    box-shadow: inset 0 0 0 9999px var(--#{$variable-prefix}table-accent-bg);\n  }\n\n  > tbody {\n    vertical-align: inherit;\n  }\n\n  > thead {\n    vertical-align: bottom;\n  }\n\n  // Highlight border color between thead, tbody and tfoot.\n  > :not(:last-child) > :last-child > * {\n    border-bottom-color: $table-group-separator-color;\n  }\n}\n\n\n//\n// Change placement of captions with a class\n//\n\n.caption-top {\n  caption-side: top;\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n//\n// When borders are added on all sides of the cells, the corners can render odd when\n// these borders do not have the same color or if they are semi-transparent.\n// Therefor we add top and border bottoms to the `tr`s and left and right borders\n// to the `td`s or `th`s\n\n.table-bordered {\n  > :not(caption) > * {\n    border-width: $table-border-width 0;\n\n    // stylelint-disable-next-line selector-max-universal\n    > * {\n      border-width: 0 $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    border-bottom-width: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(#{$table-striped-order}) {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-striped-bg);\n    color: var(--#{$variable-prefix}table-striped-color);\n  }\n}\n\n// Active table\n//\n// The `.table-active` class can be added to highlight rows or cells\n\n.table-active {\n  --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-active-bg);\n  color: var(--#{$variable-prefix}table-active-color);\n}\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-hover-bg);\n    color: var(--#{$variable-prefix}table-hover-color);\n  }\n}\n\n\n// Table variants\n//\n// Table variants set the table cell backgrounds, border colors\n// and the colors of the striped, hovered & active tables\n\n@each $color, $value in $table-variants {\n  @include table-variant($color, $value);\n}\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n  @include media-breakpoint-down($breakpoint) {\n    .table-responsive#{$infix} {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n}\n","// scss-docs-start table-variant\n@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n\n    --#{$variable-prefix}table-bg: #{$background};\n    --#{$variable-prefix}table-striped-bg: #{$striped-bg};\n    --#{$variable-prefix}table-striped-color: #{color-contrast($striped-bg)};\n    --#{$variable-prefix}table-active-bg: #{$active-bg};\n    --#{$variable-prefix}table-active-color: #{color-contrast($active-bg)};\n    --#{$variable-prefix}table-hover-bg: #{$hover-bg};\n    --#{$variable-prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: $color;\n    border-color: mix($color, $background, percentage($table-border-factor));\n  }\n}\n// scss-docs-end table-variant\n","//\n// Labels\n//\n\n.form-label {\n  margin-bottom: $form-label-margin-bottom;\n  @include font-size($form-label-font-size);\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  color: $form-label-color;\n}\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  line-height: $input-line-height;\n  color: $form-label-color;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n}\n","//\n// Form text\n//\n\n.form-text {\n  margin-top: $form-text-margin-top;\n  @include font-size($form-text-font-size);\n  font-style: $form-text-font-style;\n  font-weight: $form-text-font-weight;\n  color: $form-text-color;\n}\n","//\n// General form controls (plus a few specific high-level interventions)\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n  appearance: none; // Fix appearance for date inputs in Safari\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  &[type=\"file\"] {\n    overflow: hidden; // prevent pseudo element button overlap\n\n    &:not(:disabled):not([readonly]) {\n      cursor: pointer;\n    }\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n\n  // Add some height to date inputs on iOS\n  // https://github.com/twbs/bootstrap/issues/23307\n  // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved\n  &::-webkit-date-and-time-value {\n    // Multiply line-height by 1em if it has no unit\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n  }\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    border-color: $input-disabled-border-color;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n\n  // File input buttons theming\n  &::file-selector-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: $form-file-button-hover-bg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n    background-color: $form-file-button-hover-bg;\n  }\n}\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  min-height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n\n  &::file-selector-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n}\n\n.form-control-lg {\n  min-height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n\n  &::file-selector-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n}\n\n// Make sure textareas don't shrink too much when resized\n// https://github.com/twbs/bootstrap/pull/29124\n// stylelint-disable selector-no-qualifying-type\ntextarea {\n  &.form-control {\n    min-height: $input-height;\n  }\n\n  &.form-control-sm {\n    min-height: $input-height-sm;\n  }\n\n  &.form-control-lg {\n    min-height: $input-height-lg;\n  }\n}\n// stylelint-enable selector-no-qualifying-type\n\n.form-control-color {\n  max-width: 3rem;\n  height: auto; // Override fixed browser height\n  padding: $input-padding-y;\n\n  &:not(:disabled):not([readonly]) {\n    cursor: pointer;\n  }\n\n  &::-moz-color-swatch {\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n\n  &::-webkit-color-swatch {\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Gradients\n\n// scss-docs-start gradient-bg-mixin\n@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$variable-prefix}gradient);\n  }\n}\n// scss-docs-end gradient-bg-mixin\n\n// scss-docs-start gradient-mixins\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n// scss-docs-end gradient-mixins\n","// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x;\n  font-family: $form-select-font-family;\n  @include font-size($form-select-font-size);\n  font-weight: $form-select-font-weight;\n  line-height: $form-select-line-height;\n  color: $form-select-color;\n  background-color: $form-select-bg;\n  background-image: escape-svg($form-select-indicator);\n  background-repeat: no-repeat;\n  background-position: $form-select-bg-position;\n  background-size: $form-select-bg-size;\n  border: $form-select-border-width solid $form-select-border-color;\n  @include border-radius($form-select-border-radius, 0);\n  @include box-shadow($form-select-box-shadow);\n  appearance: none;\n\n  &:focus {\n    border-color: $form-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $form-select-focus-box-shadow;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    padding-right: $form-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $form-select-disabled-color;\n    background-color: $form-select-disabled-bg;\n    border-color: $form-select-disabled-border-color;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $form-select-color;\n  }\n}\n\n.form-select-sm {\n  padding-top: $form-select-padding-y-sm;\n  padding-bottom: $form-select-padding-y-sm;\n  padding-left: $form-select-padding-x-sm;\n  @include font-size($form-select-font-size-sm);\n}\n\n.form-select-lg {\n  padding-top: $form-select-padding-y-lg;\n  padding-bottom: $form-select-padding-y-lg;\n  padding-left: $form-select-padding-x-lg;\n  @include font-size($form-select-font-size-lg);\n}\n","//\n// Check/radio\n//\n\n.form-check {\n  display: block;\n  min-height: $form-check-min-height;\n  padding-left: $form-check-padding-start;\n  margin-bottom: $form-check-margin-bottom;\n\n  .form-check-input {\n    float: left;\n    margin-left: $form-check-padding-start * -1;\n  }\n}\n\n.form-check-input {\n  width: $form-check-input-width;\n  height: $form-check-input-width;\n  margin-top: ($line-height-base - $form-check-input-width) / 2; // line-height minus check height\n  vertical-align: top;\n  background-color: $form-check-input-bg;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: $form-check-input-border;\n  appearance: none;\n  color-adjust: exact; // Keep themed appearance for print\n  @include transition($form-check-transition);\n\n  &[type=\"checkbox\"] {\n    @include border-radius($form-check-input-border-radius);\n  }\n\n  &[type=\"radio\"] {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $form-check-radio-border-radius;\n  }\n\n  &:active {\n    filter: $form-check-input-active-filter;\n  }\n\n  &:focus {\n    border-color: $form-check-input-focus-border;\n    outline: 0;\n    box-shadow: $form-check-input-focus-box-shadow;\n  }\n\n  &:checked {\n    background-color: $form-check-input-checked-bg-color;\n    border-color: $form-check-input-checked-border-color;\n\n    &[type=\"checkbox\"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-input-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-input-checked-bg-image);\n      }\n    }\n\n    &[type=\"radio\"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-radio-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-radio-checked-bg-image);\n      }\n    }\n  }\n\n  &[type=\"checkbox\"]:indeterminate {\n    background-color: $form-check-input-indeterminate-bg-color;\n    border-color: $form-check-input-indeterminate-border-color;\n\n    @if $enable-gradients {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image), var(--#{$variable-prefix}gradient);\n    } @else {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image);\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: $form-check-input-disabled-opacity;\n  }\n\n  // Use disabled attribute in addition of :disabled pseudo-class\n  // See: https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .form-check-label {\n      opacity: $form-check-label-disabled-opacity;\n    }\n  }\n}\n\n.form-check-label {\n  color: $form-check-label-color;\n  cursor: $form-check-label-cursor;\n}\n\n//\n// Switch\n//\n\n.form-switch {\n  padding-left: $form-switch-padding-start;\n\n  .form-check-input {\n    width: $form-switch-width;\n    margin-left: $form-switch-padding-start * -1;\n    background-image: escape-svg($form-switch-bg-image);\n    background-position: left center;\n    @include border-radius($form-switch-border-radius);\n    @include transition($form-switch-transition);\n\n    &:focus {\n      background-image: escape-svg($form-switch-focus-bg-image);\n    }\n\n    &:checked {\n      background-position: $form-switch-checked-bg-position;\n\n      @if $enable-gradients {\n        background-image: escape-svg($form-switch-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-switch-checked-bg-image);\n      }\n    }\n  }\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: $form-check-inline-margin-end;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n\n  &[disabled],\n  &:disabled {\n    + .btn {\n      pointer-events: none;\n      filter: none;\n      opacity: $form-check-btn-check-disabled-opacity;\n    }\n  }\n}\n","// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.form-range {\n  width: 100%;\n  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    margin-top: ($form-range-track-height - $form-range-thumb-height) / 2; // Webkit specific\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent; // Why?\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent;\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent;\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    &::-webkit-slider-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n  }\n}\n",".form-floating {\n  position: relative;\n\n  > .form-control,\n  > .form-select {\n    height: $form-floating-height;\n    padding: $form-floating-padding-y $form-floating-padding-x;\n  }\n\n  > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; // allow textareas\n    padding: $form-floating-padding-y $form-floating-padding-x;\n    pointer-events: none;\n    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model\n    transform-origin: 0 0;\n    @include transition($form-floating-transition);\n  }\n\n  // stylelint-disable no-duplicate-selectors\n  > .form-control {\n    &::placeholder {\n      color: transparent;\n    }\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n    // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n    &:-webkit-autofill {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n  }\n\n  > .form-select {\n    padding-top: $form-floating-input-padding-t;\n    padding-bottom: $form-floating-input-padding-b;\n  }\n\n  > .form-control:focus,\n  > .form-control:not(:placeholder-shown),\n  > .form-select {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n  > .form-control:-webkit-autofill {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // stylelint-enable no-duplicate-selectors\n}\n","//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-select {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .form-select:focus {\n    z-index: 3;\n  }\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-group-addon-padding-y $input-group-addon-padding-x;\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $input-group-addon-font-weight;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: $form-select-padding-x + $form-select-indicator-padding;\n}\n\n\n// Rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.input-group {\n  &:not(.has-validation) {\n    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 3) {\n      @include border-end-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 4) {\n      @include border-end-radius(0);\n    }\n  }\n\n  $validation-messages: \"\";\n  @each $state in map-keys($form-validation-states) {\n    $validation-messages: $validation-messages + \":not(.\" + unquote($state) + \"-tooltip)\" + \":not(.\" + unquote($state) + \"-feedback)\";\n  }\n\n  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {\n    margin-left: -$input-border-width;\n    @include border-start-radius(0);\n  }\n}\n","// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n\n// scss-docs-start form-validation-mixins\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state(\n  $state,\n  $color,\n  $icon,\n  $tooltip-color: color-contrast($color),\n  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),\n  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity)\n) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: $tooltip-color;\n    background-color: $tooltip-bg-color;\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        &:not([multiple]):not([size]),\n        &:not([multiple])[size=\"1\"] {\n          padding-right: $form-select-feedback-icon-padding-end;\n          background-image: escape-svg($form-select-indicator), escape-svg($icon);\n          background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n          background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n        }\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: $focus-box-shadow;\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n\n  .input-group .form-control,\n  .input-group .form-select {\n    @include form-validation-state-selector($state) {\n      @if $state == \"valid\" {\n        z-index: 1;\n      } @else if $state == \"invalid\" {\n        z-index: 2;\n      }\n      &:focus {\n        z-index: 3;\n      }\n    }\n  }\n}\n// scss-docs-end form-validation-mixins\n","//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  line-height: $btn-line-height;\n  color: $body-color;\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-button-pointers, pointer, null);\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-border-radius);\n  @include transition($btn-transition);\n\n  &:hover {\n    color: $body-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active {\n    @include box-shadow($btn-active-box-shadow);\n\n    &:focus {\n      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n    }\n  }\n\n  &:disabled,\n  &.disabled,\n  fieldset:disabled & {\n    pointer-events: none;\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Alternate buttons\n//\n\n// scss-docs-start btn-variant-loops\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n// scss-docs-end btn-variant-loops\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $btn-link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $btn-link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n// scss-docs-start btn-variant-mixin\n@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background,$btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  &:hover {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    @if $enable-shadows {\n      @include box-shadow($btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n    }\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  .show > &.dropdown-toggle {\n    color: $active-color;\n    background-color: $active-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $disabled-color;\n    background-color: $disabled-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $disabled-border;\n  }\n}\n// scss-docs-end btn-variant-mixin\n\n// scss-docs-start btn-outline-variant-mixin\n@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n  color: $color;\n  border-color: $color;\n\n  &:hover {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  &.dropdown-toggle.show {\n    color: $active-color;\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $color;\n    background-color: transparent;\n  }\n}\n// scss-docs-end btn-outline-variant-mixin\n\n// scss-docs-start btn-size-mixin\n@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n// scss-docs-end btn-size-mixin\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n// scss-docs-start collapse-classes\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n// scss-docs-end collapse-classes\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y $dropdown-padding-x;\n  margin: 0; // Override default margin of ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n\n  &[data-bs-popper] {\n    top: 100%;\n    left: 0;\n    margin-top: $dropdown-spacer;\n  }\n}\n\n// scss-docs-start responsive-breakpoints\n// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n\n      &[data-bs-popper] {\n        right: auto #{\"/* rtl:ignore */\"};\n        left: 0 #{\"/* rtl:ignore */\"};\n      }\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n\n      &[data-bs-popper] {\n        right: 0 #{\"/* rtl:ignore */\"};\n        left: auto #{\"/* rtl:ignore */\"};\n      }\n    }\n  }\n}\n// scss-docs-end responsive-breakpoints\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu[data-bs-popper] {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropend {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(end);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropstart {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(start);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  height: 0;\n  margin: $dropdown-divider-margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $dropdown-divider-bg;\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  &:hover,\n  &:focus {\n    color: $dropdown-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-header-padding;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n\n// Dark dropdowns\n.dropdown-menu-dark {\n  color: $dropdown-dark-color;\n  background-color: $dropdown-dark-bg;\n  border-color: $dropdown-dark-border-color;\n  @include box-shadow($dropdown-dark-box-shadow);\n\n  .dropdown-item {\n    color: $dropdown-dark-link-color;\n\n    &:hover,\n    &:focus {\n      color: $dropdown-dark-link-hover-color;\n      @include gradient-bg($dropdown-dark-link-hover-bg);\n    }\n\n    &.active,\n    &:active {\n      color: $dropdown-dark-link-active-color;\n      @include gradient-bg($dropdown-dark-link-active-bg);\n    }\n\n    &.disabled,\n    &:disabled {\n      color: $dropdown-dark-link-disabled-color;\n    }\n  }\n\n  .dropdown-divider {\n    border-color: $dropdown-dark-divider-bg;\n  }\n\n  .dropdown-item-text {\n    color: $dropdown-dark-link-color;\n  }\n\n  .dropdown-header {\n    color: $dropdown-dark-header-color;\n  }\n}\n","// scss-docs-start caret-mixins\n@mixin caret-down {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-end {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-start {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == end {\n        @include caret-end();\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: \"\";\n        @include caret-start();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n// scss-docs-end caret-mixins\n","// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  // Bring the hover, focused, and \"active\" buttons to the front to overlay\n  // the borders properly\n  > .btn-check:checked + .btn,\n  > .btn-check:focus + .btn,\n  > .btn:hover,\n  > .btn:focus,\n  > .btn:active,\n  > .btn.active {\n    z-index: 1;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-end-radius(0);\n  }\n\n  // The left radius should be 0 if the button is:\n  // - the \"third or more\" child\n  // - the second child and the previous element isn't `.btn-check` (making it the first child visually)\n  // - part of a btn-group which isn't the first child\n  > .btn:nth-child(n + 3),\n  > :not(.btn-check) + .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-start-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropend &::after {\n    margin-left: 0;\n  }\n\n  .dropstart &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn ~ .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n  @include font-size($nav-link-font-size);\n  font-weight: $nav-link-font-weight;\n  color: $nav-link-color;\n  text-decoration: if($link-decoration == none, null, none);\n  @include transition($nav-link-transition);\n\n  &:hover,\n  &:focus {\n    color: $nav-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-link {\n    margin-bottom: -$nav-tabs-border-width;\n    background: none;\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    &:hover,\n    &:focus {\n      border-color: $nav-tabs-link-hover-border-color;\n      // Prevents active .nav-link tab overlapping focus outline of previous/next .nav-link\n      isolation: isolate;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    background: none;\n    border: 0;\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    @include gradient-bg($nav-pills-link-active-bg);\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n.nav-fill,\n.nav-justified {\n  .nav-item .nav-link {\n    width: 100%; // Make sure button will grow\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding-top: $navbar-padding-y;\n  padding-right: $navbar-padding-x; // default: null\n  padding-bottom: $navbar-padding-y;\n  padding-left: $navbar-padding-x; // default: null\n  @include gradient-bg();\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  // The `flex-wrap` property is inherited to simplify the expanded navbars\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > .container,\n  > .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-brand-margin-end;\n  @include font-size($navbar-brand-font-size);\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n  @include transition($navbar-toggler-transition);\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 $navbar-toggler-focus-width;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--#{$variable-prefix}scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n// scss-docs-start navbar-expand-loop\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n// scss-docs-end navbar-expand-loop\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n\n    a,\n    a:hover,\n    a:focus  {\n      color: $navbar-light-active-color;\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a,\n    a:hover,\n    a:focus {\n      color: $navbar-dark-active-color;\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius($card-inner-border-radius);\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius($card-inner-border-radius);\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  padding: $card-spacer-y $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-title-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-title-spacer-y / 2;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  &:hover {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x;\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n}\n\n.card-footer {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-cap-padding-x / 2;\n  margin-bottom: -$card-cap-padding-y;\n  margin-left: -$card-cap-padding-x / 2;\n  border-bottom: 0;\n\n  @if $nav-tabs-link-active-bg != $card-bg {\n    .nav-link.active {\n      background-color: $card-bg;\n      border-bottom-color: $card-bg;\n    }\n  }\n}\n\n.card-header-pills {\n  margin-right: -$card-cap-padding-x / 2;\n  margin-left: -$card-cap-padding-x / 2;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n  @include border-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-end-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-start-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: $accordion-button-padding-y $accordion-button-padding-x;\n  @include font-size($font-size-base);\n  color: $accordion-button-color;\n  text-align: left; // Reset button style\n  background-color: $accordion-button-bg;\n  border: 0;\n  @include border-radius(0);\n  overflow-anchor: none;\n  @include transition($accordion-transition);\n\n  &:not(.collapsed) {\n    color: $accordion-button-active-color;\n    background-color: $accordion-button-active-bg;\n    box-shadow: inset 0 ($accordion-border-width * -1) 0 $accordion-border-color;\n\n    &::after {\n      background-image: escape-svg($accordion-button-active-icon);\n      transform: $accordion-icon-transform;\n    }\n  }\n\n  // Accordion icon\n  &::after {\n    flex-shrink: 0;\n    width: $accordion-icon-width;\n    height: $accordion-icon-width;\n    margin-left: auto;\n    content: \"\";\n    background-image: escape-svg($accordion-button-icon);\n    background-repeat: no-repeat;\n    background-size: $accordion-icon-width;\n    @include transition($accordion-icon-transition);\n  }\n\n  &:hover {\n    z-index: 2;\n  }\n\n  &:focus {\n    z-index: 3;\n    border-color: $accordion-button-focus-border-color;\n    outline: 0;\n    box-shadow: $accordion-button-focus-box-shadow;\n  }\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  background-color: $accordion-bg;\n  border: $accordion-border-width solid $accordion-border-color;\n\n  &:first-of-type {\n    @include border-top-radius($accordion-border-radius);\n\n    .accordion-button {\n      @include border-top-radius($accordion-inner-border-radius);\n    }\n  }\n\n  &:not(:first-of-type) {\n    border-top: 0;\n  }\n\n  // Only set a border-radius on the last item if the accordion is collapsed\n  &:last-of-type {\n    @include border-bottom-radius($accordion-border-radius);\n\n    .accordion-button {\n      &.collapsed {\n        @include border-bottom-radius($accordion-inner-border-radius);\n      }\n    }\n\n    .accordion-collapse {\n      @include border-bottom-radius($accordion-border-radius);\n    }\n  }\n}\n\n.accordion-body {\n  padding: $accordion-body-padding-y $accordion-body-padding-x;\n}\n\n\n// Flush accordion items\n//\n// Remove borders and border-radius to keep accordion items edge-to-edge.\n\n.accordion-flush {\n  .accordion-collapse {\n    border-width: 0;\n  }\n\n  .accordion-item {\n    border-right: 0;\n    border-left: 0;\n    @include border-radius(0);\n\n    &:first-child { border-top: 0; }\n    &:last-child { border-bottom: 0; }\n\n    .accordion-button {\n      @include border-radius(0);\n    }\n  }\n}\n",".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding-x;\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: $breadcrumb-item-padding-x;\n      color: $breadcrumb-divider-color;\n      content: var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)) #{\"/* rtl:\"} var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider-flipped)) #{\"*/\"};\n    }\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n",".pagination {\n  display: flex;\n  @include list-unstyled();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  color: $pagination-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n  @include transition($pagination-transition);\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    color: $pagination-focus-color;\n    background-color: $pagination-focus-bg;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:not(:first-child) .page-link {\n    margin-left: $pagination-margin-start;\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    @include gradient-bg($pagination-active-bg);\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n@include pagination-size($pagination-padding-y, $pagination-padding-x, null, $pagination-border-radius);\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $pagination-border-radius-sm);\n}\n","// Pagination\n\n// scss-docs-start pagination-mixin\n@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n  }\n\n  .page-item {\n    @if $pagination-margin-start == (-$pagination-border-width) {\n      &:first-child {\n        .page-link {\n          @include border-start-radius($border-radius);\n        }\n      }\n\n      &:last-child {\n        .page-link {\n          @include border-end-radius($border-radius);\n        }\n      }\n    } @else {\n      //Add border-radius to all pageLinks in case they have left margin\n      .page-link {\n        @include border-radius($border-radius);\n      }\n    }\n  }\n}\n// scss-docs-end pagination-mixin\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  color: $badge-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include gradient-bg();\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n","//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $alert-dismissible-padding-r;\n\n  // Adjust close link position\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: $stretched-link-z-index + 1;\n    padding: $alert-padding-y * 1.25 $alert-padding-x;\n  }\n}\n\n\n// scss-docs-start alert-modifiers\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $state, $value in $theme-colors {\n  $alert-background: shift-color($value, $alert-bg-scale);\n  $alert-border: shift-color($value, $alert-border-scale);\n  $alert-color: shift-color($value, $alert-color-scale);\n  @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {\n    $alert-color: mix($value, color-contrast($alert-background), abs($alert-color-scale));\n  }\n  .alert-#{$state} {\n    @include alert-variant($alert-background, $alert-border, $alert-color);\n  }\n}\n// scss-docs-end alert-modifiers\n","// scss-docs-start alert-variant-mixin\n@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  .alert-link {\n    color: shade-color($color, 20%);\n  }\n}\n// scss-docs-end alert-variant-mixin\n","// Disable animation if transitions are disabled\n\n// scss-docs-start progress-keyframes\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: $progress-height; }\n  }\n}\n// scss-docs-end progress-keyframes\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-reduced-motion {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius($list-group-border-radius);\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n\n  > li::before {\n    // Increments only this instance of the section counter\n    content: counters(section, \".\") \". \";\n    counter-increment: section;\n  }\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  &:hover,\n  &:focus {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child {\n          @include border-bottom-start-radius($list-group-border-radius);\n          @include border-top-end-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-end-radius($list-group-border-radius);\n          @include border-bottom-start-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 $list-group-border-width;\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// scss-docs-start list-group-modifiers\n// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state, $value in $theme-colors {\n  $list-group-variant-bg: shift-color($value, $list-group-item-bg-scale);\n  $list-group-variant-color: shift-color($value, $list-group-item-color-scale);\n  @if (contrast-ratio($list-group-variant-bg, $list-group-variant-color) < $min-contrast-ratio) {\n    $list-group-variant-color: mix($value, color-contrast($list-group-variant-bg), abs($list-group-item-color-scale));\n  }\n\n  @include list-group-item-variant($state, $list-group-variant-bg, $list-group-variant-color);\n}\n// scss-docs-end list-group-modifiers\n","// List Groups\n\n// scss-docs-start list-group-mixin\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      &:hover,\n      &:focus {\n        color: $color;\n        background-color: shade-color($background, 10%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n// scss-docs-end list-group-mixin\n","// transparent background and border properties included for button version.\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n.btn-close {\n  box-sizing: content-box;\n  width: $btn-close-width;\n  height: $btn-close-height;\n  padding: $btn-close-padding-y $btn-close-padding-x;\n  color: $btn-close-color;\n  background: transparent escape-svg($btn-close-bg) center / $btn-close-width auto no-repeat; // include transparent for button elements\n  border: 0; // for button elements\n  @include border-radius();\n  opacity: $btn-close-opacity;\n\n  // Override <a>'s hover style\n  &:hover {\n    color: $btn-close-color;\n    text-decoration: none;\n    opacity: $btn-close-hover-opacity;\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: $btn-close-focus-shadow;\n    opacity: $btn-close-focus-opacity;\n  }\n\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: $btn-close-disabled-opacity;\n  }\n}\n\n.btn-close-white {\n  filter: $btn-close-white-filter;\n}\n",".toast {\n  width: $toast-max-width;\n  max-width: 100%;\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  pointer-events: auto;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  @include border-radius($toast-border-radius);\n\n  &:not(.showing):not(.show) {\n    opacity: 0;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-container {\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n\n  > :not(:last-child) {\n    margin-bottom: $toast-spacing;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n  @include border-top-radius(subtract($toast-border-radius, $toast-border-width));\n\n  .btn-close {\n    margin-right: $toast-padding-x / -2;\n    margin-left: $toast-padding-x;\n  }\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n  word-wrap: break-word;\n}\n","// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .btn-close {\n    padding: ($modal-header-padding-y / 2) ($modal-header-padding-x / 2);\n    margin: ($modal-header-padding-y / -2) ($modal-header-padding-x / -2) ($modal-header-padding-y / -2) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: $modal-footer-margin-between / 2;\n  }\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n\n// scss-docs-start modal-fullscreen-loop\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != \"\", $infix + \"-down\", \"\");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n\n      .modal-footer {\n        @include border-radius(0);\n      }\n    }\n  }\n}\n// scss-docs-end modal-fullscreen-loop\n","// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .tooltip-arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    bottom: 0;\n\n    &::before {\n      top: -1px;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-end {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: -1px;\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    top: 0;\n\n    &::before {\n      bottom: -1px;\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-start {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: -1px;\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-tooltip-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-tooltip-start;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n","@mixin reset-text {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n",".popover {\n  position: absolute;\n  top: 0;\n  left: 0 #{\"/* rtl:ignore */\"};\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .popover-arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  > .popover-arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-end {\n  > .popover-arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  > .popover-arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width / 2;\n    content: \"\";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-start {\n  > .popover-arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-popover-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-popover-start;\n  }\n}\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid shade-color($popover-header-bg, 10%);\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-start and .carousel-item-end is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-start and .active.carousel-item-end is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-start,\n  .carousel-item-prev.carousel-item-end {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-start,\n  .active.carousel-item-end {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  padding: 0;\n  color: $carousel-control-color;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);\n}\n.carousel-control-next {\n  right: 0;\n  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n// Optional indicator pips/controls\n//\n// Add a container (such as a list) with the following class and add an item (ideally a focusable control,\n// like a button) with data-bs-target for each slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-bottom: 1rem;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  [data-bs-target] {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    padding: 0;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    border: 0;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: $carousel-indicator-opacity;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: $carousel-indicator-active-opacity;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) / 2;\n  bottom: $carousel-caption-spacer;\n  left: (100% - $carousel-caption-width) / 2;\n  padding-top: $carousel-caption-padding-y;\n  padding-bottom: $carousel-caption-padding-y;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n\n// Dark mode carousel\n\n.carousel-dark {\n  .carousel-control-prev-icon,\n  .carousel-control-next-icon {\n    filter: $carousel-dark-control-icon-filter;\n  }\n\n  .carousel-indicators [data-bs-target] {\n    background-color: $carousel-dark-indicator-active-bg;\n  }\n\n  .carousel-caption {\n    color: $carousel-dark-caption-color;\n  }\n}\n","// scss-docs-start clearfix\n@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n// scss-docs-end clearfix\n","//\n// Rotating border\n//\n\n// scss-docs-start spinner-border-keyframes\n@keyframes spinner-border {\n  to { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\n}\n// scss-docs-end spinner-border-keyframes\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: $spinner-vertical-align;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: $spinner-animation-speed linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n// scss-docs-start spinner-grow-keyframes\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n// scss-docs-end spinner-grow-keyframes\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: $spinner-vertical-align;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  opacity: 0;\n  animation: $spinner-animation-speed linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n\n@if $enable-reduced-motion {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      animation-duration: $spinner-animation-speed * 2;\n    }\n  }\n}\n",".offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: $zindex-offcanvas;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: $offcanvas-color;\n  visibility: hidden;\n  background-color: $offcanvas-bg-color;\n  background-clip: padding-box;\n  outline: 0;\n  @include box-shadow($offcanvas-box-shadow);\n  @include transition(transform $offcanvas-transition-duration ease-in-out);\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: $offcanvas-padding-y $offcanvas-padding-x;\n\n  .btn-close {\n    padding: ($offcanvas-padding-y / 2) ($offcanvas-padding-x / 2);\n    margin: ($offcanvas-padding-y / -2) ($offcanvas-padding-x / -2) ($offcanvas-padding-y / -2) auto;\n  }\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: $offcanvas-title-line-height;\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: $offcanvas-padding-y $offcanvas-padding-x;\n  overflow-y: auto;\n}\n\n.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: $offcanvas-horizontal-width;\n  border-right: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateX(-100%);\n}\n\n.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: $offcanvas-horizontal-width;\n  border-left: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateX(100%);\n}\n\n.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: $offcanvas-vertical-height;\n  max-height: 100%;\n  border-bottom: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateY(-100%);\n}\n\n.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: $offcanvas-vertical-height;\n  max-height: 100%;\n  border-top: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateY(100%);\n}\n\n.offcanvas.show {\n  transform: none;\n}\n","@each $color, $value in $theme-colors {\n  .link-#{$color} {\n    color: $value;\n\n    @if $link-shade-percentage != 0 {\n      &:hover,\n      &:focus {\n        color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage));\n      }\n    }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.ratio {\n  position: relative;\n  width: 100%;\n\n  &::before {\n    display: block;\n    padding-top: var(--#{$variable-prefix}aspect-ratio);\n    content: \"\";\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@each $key, $ratio in $aspect-ratios {\n  .ratio-#{$key} {\n    --#{$variable-prefix}aspect-ratio: #{$ratio};\n  }\n}\n","// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n// Responsive sticky top\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .sticky#{$infix}-top {\n      position: sticky;\n      top: 0;\n      z-index: $zindex-sticky;\n    }\n  }\n}\n","//\n// Visually hidden\n//\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  @include visually-hidden();\n}\n","// stylelint-disable declaration-no-important\n\n// Hide content visually while keeping it accessible to assistive technologies\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin visually-hidden() {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n// Use to only display content when it's focused, or one of its child elements is focused\n// (i.e. when focus is within the element/container that the class was applied to)\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n\n@mixin visually-hidden-focusable() {\n  &:not(:focus):not(:focus-within) {\n    @include visually-hidden();\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::#{$stretched-link-pseudo-element} {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: $stretched-link-z-index;\n    content: \"\";\n  }\n}\n","//\n// Text truncation\n//\n\n.text-truncate {\n  @include text-truncate();\n}\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","// Utility generator\n// Used to generate utilities & print utilities\n@mixin generate-utility($utility, $infix, $is-rfs-media-query: false) {\n  $values: map-get($utility, values);\n\n  // If the values are a list or string, convert it into a map\n  @if type-of($values) == \"string\" or type-of(nth($values, 1)) != \"list\" {\n    $values: zip($values, $values);\n  }\n\n  @each $key, $value in $values {\n    $properties: map-get($utility, property);\n\n    // Multiple properties are possible, for example with vertical or horizontal margins or paddings\n    @if type-of($properties) == \"string\" {\n      $properties: append((), $properties);\n    }\n\n    // Use custom class if present\n    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));\n    $property-class: if($property-class == null, \"\", $property-class);\n\n    // State params to generate pseudo-classes\n    $state: if(map-has-key($utility, state), map-get($utility, state), ());\n\n    $infix: if($property-class == \"\" and str-slice($infix, 1, 1) == \"-\", str-slice($infix, 2), $infix);\n\n    // Don't prefix if value key is null (eg. with shadow class)\n    $property-class-modifier: if($key, if($property-class == \"\" and $infix == \"\", \"\", \"-\") + $key, \"\");\n\n    @if map-get($utility, rfs) {\n      // Inside the media query\n      @if $is-rfs-media-query {\n        $val: rfs-value($value);\n\n        // Do not render anything if fluid and non fluid values are the same\n        $value: if($val == rfs-fluid-value($value), null, $val);\n      }\n      @else {\n        $value: rfs-fluid-value($value);\n      }\n    }\n\n    $is-rtl: map-get($utility, rtl);\n\n    @if $value != null {\n      @if $is-rtl == false {\n        /* rtl:begin:remove */\n      }\n      .#{$property-class + $infix + $property-class-modifier} {\n        @each $property in $properties {\n          #{$property}: $value if($enable-important-utilities, !important, null);\n        }\n      }\n\n      @each $pseudo in $state {\n        .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n          @each $property in $properties {\n            #{$property}: $value if($enable-important-utilities, !important, null);\n          }\n        }\n      }\n      @if $is-rtl == false {\n        /* rtl:end:remove */\n      }\n    }\n  }\n}\n","// Loop over each breakpoint\n@each $breakpoint in map-keys($grid-breakpoints) {\n\n  // Generate media query if needed\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    // Loop over each utility property\n    @each $key, $utility in $utilities {\n      // The utility can be disabled with `false`, thus check if the utility is a map first\n      // Only proceed if responsive media queries are enabled or if it's the base media query\n      @if type-of($utility) == \"map\" and (map-get($utility, responsive) or $infix == \"\") {\n        @include generate-utility($utility, $infix);\n      }\n    }\n  }\n}\n\n// RFS rescaling\n@media (min-width: $rfs-mq-value) {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {\n      // Loop over each utility property\n      @each $key, $utility in $utilities {\n        // The utility can be disabled with `false`, thus check if the utility is a map first\n        // Only proceed if responsive media queries are enabled or if it's the base media query\n        @if type-of($utility) == \"map\" and map-get($utility, rfs) and (map-get($utility, responsive) or $infix == \"\") {\n          @include generate-utility($utility, $infix, true);\n        }\n      }\n    }\n  }\n}\n\n\n// Print utilities\n@media print {\n  @each $key, $utility in $utilities {\n    // The utility can be disabled with `false`, thus check if the utility is a map first\n    // Then check if the utility needs print styles\n    @if type-of($utility) == \"map\" and map-get($utility, print) == true {\n      @include generate-utility($utility, \"-print\");\n    }\n  }\n}\n","// hero section\r\n.dmm-hero-section{\r\n    .tns-outer {\r\n        position: relative;\r\n        .tns-nav {\r\n            display: none;\r\n            justify-content: center;\r\n            position: absolute;\r\n            bottom: 26px;\r\n            left: 0;\r\n            width: 100%;\r\n            z-index: 3;\r\n            @media (min-width: 768px) {\r\n                display: flex;\r\n            }\r\n            button {\r\n                padding: 7px;\r\n                border: none;\r\n                background-color: change-color($color: $primary-color, $alpha: 0.5);\r\n                border-radius: 50%;\r\n                box-shadow: none;\r\n                margin-left: 20px;\r\n                &:first-child {\r\n                    margin-left: 0;\r\n                }\r\n                &.tns-nav-active {\r\n                    background-color: $primary-color;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .slides{\r\n        .slide{\r\n            background-size: cover;\r\n            background-position: right center;\r\n            @media (min-width: 768px){\r\n                background-position: top center;\r\n            }\r\n            .slide-main{\r\n                align-items: flex-end; \r\n                height: 60vh;\r\n                display: flex;\r\n                background-size: cover;\r\n            }      \r\n        }   \r\n    }\r\n}\r\n\r\n// blog section\r\n.blog-section{\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    .blog-heading-container{\r\n        text-align: center;\r\n        width: 100%;\r\n        .blog-heading{\r\n            text-align: center;\r\n            color: $primary-color;\r\n            font-family: $primary-font;\r\n            @include font-size(1.3rem);\r\n            font-weight: 500;\r\n            background-color: $secondary-color;\r\n            padding: 10px 35px;\r\n            display: inline-block;\r\n            border-radius: 50px;\r\n        }\r\n    }\r\n    .blog-heading-text{\r\n        font-family: $primary-font;\r\n        font-weight: 700;\r\n        @include font-size(1.8rem);\r\n        text-align: center;\r\n        color: $primary-color;\r\n    }\r\n    .blog-text{\r\n        text-decoration: none;\r\n        .card{\r\n            border: none;\r\n            box-shadow: 0px 1px 14px 6px #e5e5e5;\r\n            .img-container{\r\n                overflow: hidden;\r\n                position: relative;\r\n                .card-img-top{\r\n                    transition: transform .4s ease-in-out;\r\n                }\r\n                &::before{\r\n                    content: '';\r\n                    position: absolute;\r\n                    top: 0;\r\n                    left: -75%;\r\n                    z-index: 2;\r\n                    display: block; \r\n                    width: 50%;\r\n                    height: 100%;\r\n                    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);\r\n                    transform: skewX(-25deg);\r\n                    transition: none;\r\n                }\r\n                &:hover{\r\n                    .card-img-top{\r\n                        transform: scale(1.2);\r\n                    }\r\n                    &::before{\r\n                        transition: left 0.4s ease-in;\r\n                        left: 100%;\r\n                    }    \r\n                }\r\n            }\r\n            \r\n            .card-body{\r\n                padding: 10px 30px 20px 30px ;\r\n                .card-date{\r\n                    text-align: left;\r\n                    font-family: $secondary-font;\r\n                    font-weight: 400;\r\n                     @include font-size(0.9rem); \r\n                    color: $primary-color;\r\n                    margin: 0;\r\n                }\r\n                .card-heading-text{\r\n                    text-align: left;\r\n                    font-family: $primary-font;\r\n                    font-weight: 500;\r\n                    @include font-size(1.6rem);\r\n                    color: $primary-color;\r\n                    margin: 0;\r\n                    padding-bottom: 5px;\r\n                    }\r\n                .card-text{\r\n                    text-align: left;\r\n                    font-family: $secondary-font;\r\n                    font-weight: 300;\r\n                    @include font-size(1.1rem); \r\n                    color: #6b6b6e;\r\n                    margin: 0;\r\n                    margin-bottom: 10px;\r\n                    line-height: 20px;\r\n                }\r\n                .readmore-btn{\r\n                    text-decoration: none;\r\n                    color: $primary-color;\r\n                    @include font-size(1rem);\r\n                    font-weight: 500;\r\n                    font-family: $secondary-font;\r\n                    display: inline-flex;\r\n                    align-items: center;\r\n                    column-gap: 5px;\r\n                    svg{\r\n                        height: 15px;\r\n                        width: 15px;\r\n                        fill: $primary-color;\r\n                        transition: transform 0.2s ease-in-out;\r\n                    }\r\n                    &:hover{\r\n                        svg{\r\n                            transform: translateX(5px);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .blog-btn-container{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-top: 44px;\r\n        .blog-btn{\r\n            text-decoration: none;\r\n            text-align: center;\r\n            color: #ffffff;\r\n            background-color: $secondary-color;\r\n            @include font-size(0.9rem);\r\n            padding: 15px 45px;\r\n            display: inline-block;\r\n            font-family: $secondary-font;\r\n            font-weight: 500;\r\n            border:1px solid $secondary-color;\r\n            transition: all 0.3s ease-in-out;\r\n            &:hover{\r\n                background-color: transparent;\r\n                color: $primary-color;\r\n            }\r\n        }\r\n    } \r\n}","$primary-font:'Heebo', sans-serif;\r\n$secondary-font:'Inter', sans-serif;\r\n$primary-color:#1a1d4e;\r\n$secondary-color:#7ed0f9;","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/main/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error \"`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.\";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Mode. Possibilities: \"min-media-query\", \"max-media-query\"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n@function divide($dividend, $divisor, $precision: 10) {\n  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);\n  $dividend: abs($dividend);\n  $divisor: abs($divisor);\n  @if $dividend == 0 {\n    @return 0;\n  }\n  @if $divisor == 0 {\n    @error \"Cannot divide by 0\";\n  }\n  $remainder: $dividend;\n  $result: 0;\n  $factor: 10;\n  @while ($remainder > 0 and $precision >= 0) {\n    $quotient: 0;\n    @while ($remainder >= $divisor) {\n      $remainder: $remainder - $divisor;\n      $quotient: $quotient + 1;\n    }\n    $result: $result * 10 + $quotient;\n    $factor: $factor * .1;\n    $remainder: $remainder * 10;\n    $precision: $precision - 1;\n    @if ($precision < 0 and $remainder >= $divisor * 5) {\n      $result: $result + 1;\n    }\n  }\n  $result: $result * $factor * $sign;\n  $dividend-unit: unit($dividend);\n  $divisor-unit: unit($divisor);\n  $unit-map: (\n    \"px\": 1px,\n    \"rem\": 1rem,\n    \"em\": 1em,\n    \"%\": 1%\n  );\n  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {\n    $result: $result * map-get($unit-map, $dividend-unit);\n  }\n  @return $result;\n}\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: divide($rfs-base-value, $rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: divide($rfs-base-value, divide($rfs-base-value * 0 + 1, $rfs-rem-value));\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: divide($rfs-breakpoint, $rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: divide($rfs-breakpoint, divide($rfs-breakpoint * 0 + 1, $rfs-rem-value));\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{divide($rfs-breakpoint, $rfs-rem-value)}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  }\n  @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + ' ' + if($rfs-unit == rem, #{divide($value, $value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + ' ' + if($rfs-unit == px, #{divide($value, $value * 0 + 1) * $rfs-rem-value}px, $value);\n      }\n      @else {\n        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + ' ' + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + ' ' + $value;\n      }\n\n      @else {\n        // Remove unit from $value for calculations\n        $value: divide($value, $value * 0 + if($unit == px, 1, divide(1, $rfs-rem-value)));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + ' ' +  if($rfs-unit == rem, #{divide($value, $rfs-rem-value)}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + divide(abs($value) - $rfs-base-value, $rfs-factor);\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{divide($value-min, $rfs-rem-value)}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{divide($value-diff * 100, $rfs-breakpoint)}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + ' calc(' + $min-width + if($value < 0, ' - ', ' + ') + $variable-width + ')';\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluidVal: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluidVal {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluidVal);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule {\n        #{$property}: if($rfs-mode == max-media-query, $fluidVal, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n","// header section\r\n.dmm-header {\r\n    display: none;\r\n    .logo-side {\r\n        width: 188px;\r\n        img {\r\n            display: none;\r\n            @media (min-width: 768px) {\r\n                display: block;\r\n                width: 100%;\r\n                margin:0 auto;\r\n            }\r\n        }\r\n    }\r\n    .dmm-header-main {\r\n        display: none;\r\n        // width: 100%;\r\n        ul {\r\n            display: flex;\r\n            justify-content: center;\r\n            gap: 38px;\r\n            width: 100%;\r\n            margin: 0;\r\n            padding: 0;\r\n            height: 100%;\r\n            align-items: center;\r\n            li {\r\n                list-style-type: none;\r\n                padding: 15px 0;\r\n                letter-spacing: 2.2px;\r\n                a {\r\n                    text-decoration: none;\r\n                    color: #354f5c;\r\n                    @include font-size(1rem);\r\n                    font-family: $secondary-font;\r\n                    font-weight: 400;\r\n                    transition: color 0.3s ease-in-out;\r\n                    &:hover {\r\n                        color:$secondary-color;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        @media (min-width: 768px) {\r\n            display: block;\r\n        }\r\n    }\r\n    @media (min-width: 992px) {\r\n        display: block;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/tiny-slider/dist/tiny-slider.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto !important}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}\n\n/*# sourceMappingURL=sourcemaps/tiny-slider.css.map */\n", "",{"version":3,"sources":["webpack://./node_modules/tiny-slider/dist/sourcemaps/tiny-slider.scss","webpack://./node_modules/tiny-slider/dist/tiny-slider.css"],"names":[],"mappings":"AAEA,WACE,oBAAqB,CADvB,oBAEa,uBAAwB,CAFrC,oDAGmC,cAAe,CAAI,YAGpD,yBAA0B,CAC1B,sBAAuB,CACvB,iBAAkB,CAHpB,sBAKI,6BAA8B,CAC9B,0BAA2B,CAC3B,qBAAsB,CACvB,6BAKC,kBAAmB,CAFvB,uCAIM,oBAAqB,CACrB,kBAAmB,CACnB,kBAAmB,CANzB,sCAWM,UAAW,CACX,aAAc,CACd,UAAW,CAbjB,0CAgBM,UAAW,CAhBjB,uDAsBQ,kBAAmB,CACpB,aAKL,iBAAkB,CAClB,MAAO,CACR,aAEC,iBAAkB,CAClB,MAAO,CACP,cAAe,CAHjB,uBAMI,iBAAkB,CAClB,UAAW,CACX,2CAA4C,CAC5C,wCAAyC,CACzC,mCAAoC,CAVxC,+BAaI,iBAAkB,CAClB,oBAAqB,CAdzB,yBAiBI,4BAA6B,CAC7B,yBAA0B,CAC1B,oBAAqB,CACtB,eAEc,oBAAqB,CAAI,cAExC,+BAAgC,CAChC,4BAA6B,CAC7B,uBAAwB,CACxB,WAAY,CAJd,2BAKmB,SAAU,CAAI,QAG/B,4BAA6B,CAC7B,yBAA0B,CAC1B,oBAAqB,CACtB,SACU,eAAgB,CAAI,qBACR,iBAAkB,CAAE,aAAc,CAAI,iBAC1C,SAAU,CAAE,iBAAkB,CAAI,YAGnD,SAAU,CACV,yBAA0B,CAC1B,SAAU,CACX,yBAEC,SAAU,CACV,uBAAwB,CACxB,UAAW,CACZ,WAKC,kBAAmB,CADrB,6BAGI,oBAAqB,CACtB,aAWC,aAAc,CACd,WARS,CAST,iBAAkB,CAClB,WATS,CAUT,eAAgB,CACjB,UAEC,mBAAiC,CACjC,iCAAmD,CACnD,8BAAgD,CAChD,yBAA2C,CAC3C,iBAAkB,CAClB,OAAQ,CANT,gBAQG,UAAW,CACX,aAAc,CACd,UAAW,CAVd,cAaG,gBAAsB,CACtB,6BAAqC,CACrC,0BAAkC,CAClC,qBAA6B,CAC7B,WA7BO,CA8BP,UAAW;;AC1IjB,qDAAqD","sourcesContent":["// Version: 2.9.3\n\n.tns-outer {\n  padding: 0 !important; // remove padding: clientWidth = width + padding (0) = width\n  [hidden] { display: none !important; }\n  [aria-controls], [data-action] { cursor: pointer; }\n}\n.tns-slider {\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  transition: all 0s;\n  > .tns-item {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n}\n\n.tns-horizontal {\n  &.tns-subpixel {\n    white-space: nowrap;\n    > .tns-item {\n      display: inline-block;\n      vertical-align: top;\n      white-space: normal;\n    }\n  }\n  &.tns-no-subpixel {\n    &:after {\n      content: '';\n      display: table;\n      clear: both;\n    }\n    > .tns-item {\n      float: left;\n    }\n  }\n  &.tns-carousel {\n    &.tns-no-subpixel {\n      > .tns-item {\n        margin-right: -100%;\n      }\n    }\n  }\n}\n.tns-no-calc {\n  position: relative;\n  left: 0;\n}\n.tns-gallery {\n  position: relative;\n  left: 0;\n  min-height: 1px; // make sure slider container is visible\n  // overflow: hidden;\n  > .tns-item {\n    position: absolute;\n    left: -100%;\n    -webkit-transition: transform 0s, opacity 0s;\n    -moz-transition: transform 0s, opacity 0s;\n    transition: transform 0s, opacity 0s;\n  }\n  > .tns-slide-active {\n    position: relative;\n    left: auto !important;\n  }\n  > .tns-moving {\n    -webkit-transition: all 0.25s;\n    -moz-transition: all 0.25s;\n    transition: all 0.25s;\n  }\n}\n.tns-autowidth { display: inline-block; }\n.tns-lazy-img {\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  opacity: 0.6;\n  &.tns-complete { opacity: 1; }\n}\n.tns-ah {\n  -webkit-transition: height 0s;\n  -moz-transition: height 0s;\n  transition: height 0s;\n}\n.tns-ovh { overflow: hidden; }\n.tns-visually-hidden { position: absolute; left: -10000em; }\n.tns-transparent { opacity: 0; visibility: hidden; }\n\n.tns-fadeIn {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 0;\n}\n.tns-normal, .tns-fadeOut {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n\n\n// *** Fix a viewport issue in initialization\n.tns-vpfix {\n  white-space: nowrap;\n  > div, > li {\n    display: inline-block;\n  }\n}\n\n// *** Detecting browser capability ***\n$width: 310px;\n$height: 10px;\n$count: 70;\n$perpage: 3;\n\n.tns-t {\n  &-subp2 {\n    margin: 0 auto;\n    width: $width;\n    position: relative;\n    height: $height;\n    overflow: hidden;\n  }\n  &-ct {\n    width: (100% * $count / $perpage);\n    width: -webkit-calc(100% * #{$count} / #{$perpage});\n    width: -moz-calc(100% * #{$count} / #{$perpage});\n    width: calc(100% * #{$count} / #{$perpage});\n    position: absolute;\n    right: 0;\n    &:after {\n      content: '';\n      display: table;\n      clear: both;\n    }\n    > div {\n      width: (100% / $count);\n      width: -webkit-calc(100% / #{$count});\n      width: -moz-calc(100% / #{$count});\n      width: calc(100% / #{$count});\n      height: $height;\n      float: left;\n    }\n  }\n}\n",".tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto !important}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}\n\n/*# sourceMappingURL=sourcemaps/tiny-slider.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/_homepage.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/tiny-slider.js");

if (document.querySelector(".dmm-hero-section")) {
    (0,tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__.tns)({
        container: ".dmm-hero-section .slides",
        items: 1,
        nav: true,
        autoplay: true,
        controls: false,
        autoplayTimeout: 5000,
        autoplayButtonOutput: false
    });
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCSSRule": function() { return /* binding */ addCSSRule; }
/* harmony export */ });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) {
      if (!(0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!(0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvents": function() { return /* binding */ addEvents; }
/* harmony export */ });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/passiveOption.js");


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__.passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayFromNodeList": function() { return /* binding */ arrayFromNodeList; }
/* harmony export */ });
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caf": function() { return /* binding */ caf; }
/* harmony export */ });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calc": function() { return /* binding */ calc; }
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : div.remove();

  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStorageValue": function() { return /* binding */ checkStorageValue; }
/* harmony export */ });
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classListSupport": function() { return /* binding */ classListSupport; }
/* harmony export */ });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStyleSheet": function() { return /* binding */ createStyleSheet; }
/* harmony export */ });
// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "docElement": function() { return /* binding */ docElement; }
/* harmony export */ });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": function() { return /* binding */ Events; }
/* harmony export */ });
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; }
/* harmony export */ });
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": function() { return /* binding */ forEach; }
/* harmony export */ });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttr": function() { return /* binding */ getAttr; }
/* harmony export */ });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBody": function() { return /* binding */ getBody; }
/* harmony export */ });
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCssRulesLength": function() { return /* binding */ getCssRulesLength; }
/* harmony export */ });
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndProperty": function() { return /* binding */ getEndProperty; }
/* harmony export */ });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSlideId": function() { return /* binding */ getSlideId; }
/* harmony export */ });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTouchDirection": function() { return /* binding */ getTouchDirection; }
/* harmony export */ });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "has3DTransforms": function() { return /* binding */ has3DTransforms; }
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasAttr": function() { return /* binding */ hasAttr; }
/* harmony export */ });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classListSupport": function() { return /* reexport safe */ _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; }
/* harmony export */ });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/classListSupport.js");


var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideElement": function() { return /* binding */ hideElement; }
/* harmony export */ });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeList": function() { return /* binding */ isNodeList; }
/* harmony export */ });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVisible": function() { return /* binding */ isVisible; }
/* harmony export */ });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsTransform": function() { return /* binding */ jsTransform; }
/* harmony export */ });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediaquerySupport": function() { return /* binding */ mediaquerySupport; }
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : div.remove();

  return position === "absolute";
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passiveOption": function() { return /* binding */ passiveOption; }
/* harmony export */ });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "percentageLayout": function() { return /* binding */ percentageLayout; }
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raf": function() { return /* binding */ raf; }
/* harmony export */ });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAttrs": function() { return /* binding */ removeAttrs; }
/* harmony export */ });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/isNodeList.js");


function removeAttrs(els, attrs) {
  els = ((0,_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__.isNodeList)(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeCSSRule": function() { return /* binding */ removeCSSRule; }
/* harmony export */ });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": function() { return /* binding */ removeClass; }
/* harmony export */ });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) {
      if ((0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if ((0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeEvents": function() { return /* binding */ removeEvents; }
/* harmony export */ });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/passiveOption.js");


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__.passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetFakeBody": function() { return /* binding */ resetFakeBody; }
/* harmony export */ });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/docElement.js");


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttrs": function() { return /* binding */ setAttrs; }
/* harmony export */ });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/isNodeList.js");


function setAttrs(els, attrs) {
  els = ((0,_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__.isNodeList)(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFakeBody": function() { return /* binding */ setFakeBody; }
/* harmony export */ });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/docElement.js");


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": function() { return /* binding */ setLocalStorage; }
/* harmony export */ });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showElement": function() { return /* binding */ showElement; }
/* harmony export */ });
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDegree": function() { return /* binding */ toDegree; }
/* harmony export */ });
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whichProperty": function() { return /* binding */ whichProperty; }
/* harmony export */ });
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tns": function() { return /* binding */ tns; }
/* harmony export */ });
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./node_modules/tiny-slider/src/helpers/jsTransform.js");
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tC']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tC', (0,_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__.calc)(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tPL']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tPL', (0,_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__.percentageLayout)(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tMQ']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tMQ', (0,_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__.mediaquerySupport)(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTf']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTf', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['t3D']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 't3D', (0,_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__.has3DTransforms)(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tAE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tAE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = (0,_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__.createStyleSheet)(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__.Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || (0,_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__.getSlideId)(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal); }
      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneFirst, slideClonedClass);
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneLast, slideClonedClass);
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);
            (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, 'font-size:0;', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      } else if (carousel) {
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-mw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-iw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents); }
        if (autoplayResetOnVisibility) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(navItems, function(item, i) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '[aria-controls^=' + slideId + '-item]', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navItems[navCurrentIndex], 'tabindex');
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navItems[navCurrentIndex], navActiveClass);

      // add events
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(prevButton, {'data-controls' : 'prev'});
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(controlsContainer, controlsEvents);
      } else {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(prevButton, controlsEvents);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, eve);
    }

    if (touch) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents); }
    if (arrowKeys) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent); }
    if (controlsContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(controlsContainer, controlsEvents); }
    if (navContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(navContainer, navEvents); }

    // autoplay
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, visibilityEvent);
    if (autoplayButton) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, eve);
    }
    if (touch) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents); }
    if (mouseDrag) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
          if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
        }
      } else {
        if (controlsContainer) {
          (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
          if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer);
        updateNavVisibility();
      } else {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, visibilityEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          (0,_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__.removeCSSRule)(sheet, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet) - 1);
          (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
    if (!nav && navContainer) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
        if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
    if (nav && navContainer) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer); }
    if (controls) {
      if (controlsContainer) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
        if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[i], str); }
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[i], str); }
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[j]); }
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['style']);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[j]); }
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!(0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, eve);

          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);

          // update src
          img.src = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-src');

          // update srcset
          var srcset = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, imgCompleteClass);
    (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(img, 'loading');
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if ((0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['aria-hidden', 'tabindex']);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
      }

      // remove outlet animation
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(el) {
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(navPrev, navActiveClass);

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navCurrent, 'tabindex');
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, classOut);
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          (0,_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(slideItems[indexCached], eve);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) { target = target.parentNode; }
    if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) {
      var navIndex = navClicked = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return (0,_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__.getTouchDirection)((0,_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__.toDegree)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
    if (panStart) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.4',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns((0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, optionsElements));
    }
  };
};


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
__webpack_require__("./src/js/_homepage.js");

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

}();
/******/ })()
;
//# sourceMappingURL=app.js.map