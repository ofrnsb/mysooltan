"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/controller/Fetch.js":
/*!***********************************!*\
  !*** ./pages/controller/Fetch.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nvar Fetch = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), repoList = ref[0], setRepoList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), username = ref1[0], setusername = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    var getRepos = function() {\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(username, \"/repos\")).then(function(res) {\n            setRepoList(res.data);\n            setLoading(false);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    };\n    return {\n        repoList: repoList,\n        getRepos: getRepos,\n        username: username,\n        setusername: setusername,\n        loading: loading\n    };\n};\n_s(Fetch, \"N0FFqn33P6D3Jv6HNL1G3Td1F+w=\");\n_c = Fetch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fetch);\nvar _c;\n$RefreshReg$(_c, \"Fetch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUU1QyxJQUFNRyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBZ0NELEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFuQ0UsUUFBUSxHQUFpQkYsR0FBVSxHQUEzQixFQUFFRyxXQUFXLEdBQUlILEdBQVUsR0FBZDtJQUM1QixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixJQUFVLEdBQTNCLEVBQUVLLFdBQVcsR0FBSUwsSUFBVSxHQUFkO0lBQzVCLElBQThCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBakNNLE9BQU8sR0FBZ0JOLElBQVUsR0FBMUIsRUFBRU8sVUFBVSxHQUFJUCxJQUFVLEdBQWQ7SUFFMUIsSUFBTVEsUUFBUSxHQUFHLFdBQU07UUFDckJELFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQlQsaURBQ00sQ0FBQywrQkFBOEIsQ0FBVyxNQUFNLENBQWZNLFFBQVEsRUFBQyxRQUFNLENBQUMsQ0FBQyxDQUNyRE0sSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNiUixXQUFXLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDdEJMLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDRE0sS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUJBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU87UUFDTFosUUFBUSxFQUFSQSxRQUFRO1FBQ1JNLFFBQVEsRUFBUkEsUUFBUTtRQUNSSixRQUFRLEVBQVJBLFFBQVE7UUFDUkMsV0FBVyxFQUFYQSxXQUFXO1FBQ1hDLE9BQU8sRUFBUEEsT0FBTztLQUNSLENBQUM7QUFDSixDQUFDO0dBdkJLTCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF5QlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzP2JiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZldGNoID0gKCkgPT4ge1xuICBjb25zdCBbcmVwb0xpc3QsIHNldFJlcG9MaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0dXNlcm5hbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBnZXRSZXBvcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9L3JlcG9zYClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0UmVwb0xpc3QocmVzLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXBvTGlzdCxcbiAgICBnZXRSZXBvcyxcbiAgICB1c2VybmFtZSxcbiAgICBzZXR1c2VybmFtZSxcbiAgICBsb2FkaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2g7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZldGNoIiwicmVwb0xpc3QiLCJzZXRSZXBvTGlzdCIsInVzZXJuYW1lIiwic2V0dXNlcm5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFJlcG9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controller/Fetch.js\n"));

/***/ })

});