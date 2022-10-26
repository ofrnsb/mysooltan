"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/controller/reducer.js":
/*!*************************************!*\
  !*** ./pages/controller/reducer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Reducer\": function() { return /* binding */ Reducer; },\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _modals_reducerModals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/reducerModals */ \"./pages/modals/reducerModals.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\nvar Reducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _modals_reducerModals__WEBPACK_IMPORTED_MODULE_0__.appData, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"setUserName\":\n            {\n                console.log(state);\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                    username: action.payload\n                });\n            }\n        default:\n            return state;\n    }\n};\n_c = Reducer;\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(Reducer);\nvar _c;\n$RefreshReg$(_c, \"Reducer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVyL3JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWtEO0FBQ2Q7QUFFN0IsSUFBTUUsT0FBTyxHQUFHLFdBQTZCO1FBQTVCQyxLQUFLLG9FQUFHSCwwREFBTyxFQUFFSSxNQUFNO0lBQzdDLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLLGFBQWE7WUFBRTtnQkFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyx3S0FBS0EsS0FBSztvQkFBRUssUUFBUSxFQUFFSixNQUFNLENBQUNLLE9BQU87a0JBQUUsQ0FBQztZQUNoRCxDQUFDO1FBQ0Q7WUFDRSxPQUFPTixLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUM7QUFUV0QsS0FBQUEsT0FBTztBQVdiLElBQU1RLEtBQUssR0FBR1Qsa0RBQVcsQ0FBQ0MsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbGxlci9yZWR1Y2VyLmpzPzAwNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwRGF0YSB9IGZyb20gJy4uL21vZGFscy9yZWR1Y2VyTW9kYWxzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgY29uc3QgUmVkdWNlciA9IChzdGF0ZSA9IGFwcERhdGEsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnc2V0VXNlck5hbWUnOiB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcm5hbWU6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXIpO1xuIl0sIm5hbWVzIjpbImFwcERhdGEiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJwYXlsb2FkIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controller/reducer.js\n"));

/***/ })

});