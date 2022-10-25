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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nvar Fetch = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), repoList = ref[0], setRepoList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), username = ref1[0], setusername = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    var getRepos = function() {\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(username, \"/repos\")).then(function(res) {\n            setRepoList(res.data);\n            setLoading(false);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    };\n    return {\n        repoList: repoList,\n        getRepos: getRepos,\n        setusername: setusername,\n        loading: loading\n    };\n};\n_s(Fetch, \"N0FFqn33P6D3Jv6HNL1G3Td1F+w=\");\n_c = Fetch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fetch);\nvar _c;\n$RefreshReg$(_c, \"Fetch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUU1QyxJQUFNRyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBZ0NELEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFuQ0UsUUFBUSxHQUFpQkYsR0FBVSxHQUEzQixFQUFFRyxXQUFXLEdBQUlILEdBQVUsR0FBZDtJQUM1QixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixJQUFVLEdBQTNCLEVBQUVLLFdBQVcsR0FBSUwsSUFBVSxHQUFkO0lBQzVCLElBQThCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBakNNLE9BQU8sR0FBZ0JOLElBQVUsR0FBMUIsRUFBRU8sVUFBVSxHQUFJUCxJQUFVLEdBQWQ7SUFFMUIsSUFBTVEsUUFBUSxHQUFHLFdBQU07UUFDckJELFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQlQsaURBQ00sQ0FBQywrQkFBOEIsQ0FBVyxNQUFNLENBQWZNLFFBQVEsRUFBQyxRQUFNLENBQUMsQ0FBQyxDQUNyRE0sSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNiUixXQUFXLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDdEJMLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDRE0sS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUJBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU87UUFDTFosUUFBUSxFQUFSQSxRQUFRO1FBQ1JNLFFBQVEsRUFBUkEsUUFBUTtRQUNSSCxXQUFXLEVBQVhBLFdBQVc7UUFDWEMsT0FBTyxFQUFQQSxPQUFPO0tBQ1IsQ0FBQztBQUNKLENBQUM7R0F0QktMLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQXdCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyb2xsZXIvRmV0Y2guanM/YmIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmV0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXBvTGlzdCwgc2V0UmVwb0xpc3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXR1c2VybmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGdldFJlcG9zID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX0vcmVwb3NgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRSZXBvTGlzdChyZXMuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlcG9MaXN0LFxuICAgIGdldFJlcG9zLFxuICAgIHNldHVzZXJuYW1lLFxuICAgIGxvYWRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZXRjaDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmV0Y2giLCJyZXBvTGlzdCIsInNldFJlcG9MaXN0IiwidXNlcm5hbWUiLCJzZXR1c2VybmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0UmVwb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/controller/Fetch.js\n"));

/***/ })

});