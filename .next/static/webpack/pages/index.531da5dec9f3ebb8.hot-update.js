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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modals_reducerModals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/reducerModals */ \"./pages/modals/reducerModals.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ \"./pages/controller/action.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Fetch = function() {\n    _s();\n    // const [repoList, setRepoList] = useState();\n    var uname = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.username;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var setRepo = function(res) {\n        dispatch((0,_action__WEBPACK_IMPORTED_MODULE_4__.setRepoList)(res));\n        dispatch;\n    };\n    var getRepos = function() {\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(uname, \"/repos\")).then(function(res) {\n            console.log(res);\n            setusername(\"\");\n            setRepo(res.data);\n            setLoading(false);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    };\n    return {\n        getRepos: getRepos,\n        loading: loading\n    };\n};\n_s(Fetch, \"oLegHlhjLQv9ZRDSa33hTZ+wEKo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Fetch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fetch);\nvar _c;\n$RefreshReg$(_c, \"Fetch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUNNO0FBQ0s7QUFDaEI7QUFFdkMsSUFBTU8sS0FBSyxHQUFHLFdBQU07O0lBQ2xCLDhDQUE4QztJQUM5QyxJQUFNQyxLQUFLLEdBQUdILHdEQUFXLENBQUMsU0FBQ0ksS0FBSztlQUFLQSxLQUFLLENBQUNDLFFBQVE7S0FBQSxDQUFDO0lBRXBELElBQU1DLFFBQVEsR0FBR1Asd0RBQVcsRUFBRTtJQUU5QixJQUFNUSxPQUFPLEdBQUcsU0FBQ0MsR0FBRyxFQUFLO1FBQ3ZCRixRQUFRLENBQUNMLG9EQUFXLENBQUNPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0JGLFFBQVEsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFNRyxRQUFRLEdBQUcsV0FBTTtRQUNyQkMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCZixpREFDTSxDQUFDLCtCQUE4QixDQUFRLE1BQU0sQ0FBWlEsS0FBSyxFQUFDLFFBQU0sQ0FBQyxDQUFDLENBQ2xEUyxJQUFJLENBQUMsU0FBQ0osR0FBRyxFQUFLO1lBQ2JLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixHQUFHLENBQUMsQ0FBQztZQUNqQk8sV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7WUFDbEJOLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDRE8sS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUJBQUtMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU87UUFDTFQsUUFBUSxFQUFSQSxRQUFRO1FBRVJVLE9BQU8sRUFBUEEsT0FBTztLQUNSLENBQUM7QUFDSixDQUFDO0dBN0JLakIsS0FBSzs7UUFFS0Ysb0RBQVc7UUFFUkQsb0RBQVc7OztBQUp4QkcsS0FBQUEsS0FBSztBQStCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyb2xsZXIvRmV0Y2guanM/YmIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwcERhdGEgfSBmcm9tICcuLi9tb2RhbHMvcmVkdWNlck1vZGFscyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRSZXBvTGlzdCB9IGZyb20gJy4vYWN0aW9uJztcblxuY29uc3QgRmV0Y2ggPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFtyZXBvTGlzdCwgc2V0UmVwb0xpc3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgdW5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJuYW1lKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgc2V0UmVwbyA9IChyZXMpID0+IHtcbiAgICBkaXNwYXRjaChzZXRSZXBvTGlzdChyZXMpKTtcbiAgICBkaXNwYXRjaDtcbiAgfTtcblxuICBjb25zdCBnZXRSZXBvcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dW5hbWV9L3JlcG9zYClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2V0dXNlcm5hbWUoJycpO1xuICAgICAgICBzZXRSZXBvKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UmVwb3MsXG5cbiAgICBsb2FkaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2g7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwcERhdGEiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UmVwb0xpc3QiLCJGZXRjaCIsInVuYW1lIiwic3RhdGUiLCJ1c2VybmFtZSIsImRpc3BhdGNoIiwic2V0UmVwbyIsInJlcyIsImdldFJlcG9zIiwic2V0TG9hZGluZyIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic2V0dXNlcm5hbWUiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/controller/Fetch.js\n"));

/***/ })

});