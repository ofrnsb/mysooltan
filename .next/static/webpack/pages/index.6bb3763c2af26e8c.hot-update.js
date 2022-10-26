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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modals_reducerModals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/reducerModals */ \"./pages/modals/reducerModals.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ \"./pages/controller/action.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Fetch = function() {\n    _s();\n    // const [repoList, setRepoList] = useState();\n    var uname = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.username;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loading = ref[0], setLoading = ref[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var setRepo = function(res) {\n        dispatch((0,_action__WEBPACK_IMPORTED_MODULE_4__.setRepoList)(res));\n    };\n    var getRepos = function() {\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(uname, \"/repos\")).then(function(res) {\n            console.log(res);\n            setusername(\"\");\n            setRepo(res.data);\n            setLoading(false);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    };\n    return {\n        repoList: repoList,\n        getRepos: getRepos,\n        loading: loading\n    };\n};\n_s(Fetch, \"P8BC0MwdRJlAU+HJ7oTqUwKXcCE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Fetch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fetch);\nvar _c;\n$RefreshReg$(_c, \"Fetch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUNNO0FBQ0s7QUFDaEI7QUFFdkMsSUFBTU8sS0FBSyxHQUFHLFdBQU07O0lBQ2xCLDhDQUE4QztJQUM5QyxJQUFNQyxLQUFLLEdBQUdILHdEQUFXLENBQUMsU0FBQ0ksS0FBSztlQUFLQSxLQUFLLENBQUNDLFFBQVE7S0FBQSxDQUFDO0lBQ3BELElBQThCUixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBakNTLE9BQU8sR0FBZ0JULEdBQVUsR0FBMUIsRUFBRVUsVUFBVSxHQUFJVixHQUFVLEdBQWQ7SUFFMUIsSUFBTVcsUUFBUSxHQUFHVCx3REFBVyxFQUFFO0lBRTlCLElBQU1VLE9BQU8sR0FBRyxTQUFDQyxHQUFHLEVBQUs7UUFDdkJGLFFBQVEsQ0FBQ1Asb0RBQVcsQ0FBQ1MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBTUMsUUFBUSxHQUFHLFdBQU07UUFDckJKLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQlosaURBQ00sQ0FBQywrQkFBOEIsQ0FBUSxNQUFNLENBQVpRLEtBQUssRUFBQyxRQUFNLENBQUMsQ0FBQyxDQUNsRFUsSUFBSSxDQUFDLFNBQUNILEdBQUcsRUFBSztZQUNiSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDLENBQUM7WUFDakJNLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQlAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO1lBQ2xCVixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0RXLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21CQUFLTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksR0FBRyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0xDLFFBQVEsRUFBUkEsUUFBUTtRQUNSVCxRQUFRLEVBQVJBLFFBQVE7UUFFUkwsT0FBTyxFQUFQQSxPQUFPO0tBQ1IsQ0FBQztBQUNKLENBQUM7R0E5QktKLEtBQUs7O1FBRUtGLG9EQUFXO1FBR1JELG9EQUFXOzs7QUFMeEJHLEtBQUFBLEtBQUs7QUFnQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cm9sbGVyL0ZldGNoLmpzP2JiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBEYXRhIH0gZnJvbSAnLi4vbW9kYWxzL3JlZHVjZXJNb2RhbHMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0UmVwb0xpc3QgfSBmcm9tICcuL2FjdGlvbic7XG5cbmNvbnN0IEZldGNoID0gKCkgPT4ge1xuICAvLyBjb25zdCBbcmVwb0xpc3QsIHNldFJlcG9MaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHVuYW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VybmFtZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHNldFJlcG8gPSAocmVzKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UmVwb0xpc3QocmVzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVwb3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBheGlvc1xuICAgICAgLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VuYW1lfS9yZXBvc2ApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNldHVzZXJuYW1lKCcnKTtcbiAgICAgICAgc2V0UmVwbyhyZXMuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlcG9MaXN0LFxuICAgIGdldFJlcG9zLFxuXG4gICAgbG9hZGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBEYXRhIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFJlcG9MaXN0IiwiRmV0Y2giLCJ1bmFtZSIsInN0YXRlIiwidXNlcm5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRpc3BhdGNoIiwic2V0UmVwbyIsInJlcyIsImdldFJlcG9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzZXR1c2VybmFtZSIsImRhdGEiLCJjYXRjaCIsImVyciIsInJlcG9MaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/controller/Fetch.js\n"));

/***/ })

});