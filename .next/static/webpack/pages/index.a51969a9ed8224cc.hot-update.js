/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Content.module.css":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Content.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Content_mainContainer__LQ7Wg {\\n  display: flex;\\n  flex-direction: column;\\n\\n  min-height: 100vh;\\n}\\n\\n.Content_header__1JhAd {\\n  text-align: center;\\n  flex: 0 1;\\n}\\n\\n.Content_Content__7WHf_ {\\n  flex: 1 0;\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: justify;\\n  gap: 20px;\\n\\n  padding: 0px 30px;\\n}\\n\\n.Content_inputWrapper__vM8Tp {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.Content_inputWrapper__vM8Tp .Content_button__yj5H_ {\\n  all: unset;\\n  width: 95%;\\n  height: 25px;\\n  background-color: red;\\n  text-align: center;\\n  border-radius: 5px;\\n\\n  transition: 0.2s ease-in-out;\\n}\\n\\n.Content_input__dcCXA {\\n  height: 30px;\\n  font-size: 20px;\\n  box-sizing: border-box;\\n  padding: 5px;\\n}\\n\\n.Content_input__dcCXA:focus {\\n  background-color: #9ffd32;\\n  color: black;\\n\\n  outline: none;\\n}\\n\\n.Content_button__yj5H_:hover {\\n  cursor: pointer;\\n}\\n\\n.Content_loading__pqLnG {\\n  background-color: green;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 20px;\\n  border: 10px solid red;\\n}\\n\\n.Content_list__lxQ_a {\\n  text-align: left;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Content.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,sBAAsB;;EAEtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAO;AACT;;AAEA;EACE,SAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;;EAET,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;;EAElB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;;EAEZ,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB\",\"sourcesContent\":[\".mainContainer {\\n  display: flex;\\n  flex-direction: column;\\n\\n  min-height: 100vh;\\n}\\n\\n.header {\\n  text-align: center;\\n  flex: 0;\\n}\\n\\n.Content {\\n  flex: 1 0 0;\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: justify;\\n  gap: 20px;\\n\\n  padding: 0px 30px;\\n}\\n\\n.inputWrapper {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.inputWrapper .button {\\n  all: unset;\\n  width: 95%;\\n  height: 25px;\\n  background-color: red;\\n  text-align: center;\\n  border-radius: 5px;\\n\\n  transition: 0.2s ease-in-out;\\n}\\n\\n.input {\\n  height: 30px;\\n  font-size: 20px;\\n  box-sizing: border-box;\\n  padding: 5px;\\n}\\n\\n.input:focus {\\n  background-color: #9ffd32;\\n  color: black;\\n\\n  outline: none;\\n}\\n\\n.button:hover {\\n  cursor: pointer;\\n}\\n\\n.loading {\\n  background-color: green;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 20px;\\n  border: 10px solid red;\\n}\\n\\n.list {\\n  text-align: left;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"mainContainer\": \"Content_mainContainer__LQ7Wg\",\n\t\"header\": \"Content_header__1JhAd\",\n\t\"Content\": \"Content_Content__7WHf_\",\n\t\"inputWrapper\": \"Content_inputWrapper__vM8Tp\",\n\t\"button\": \"Content_button__yj5H_\",\n\t\"input\": \"Content_input__dcCXA\",\n\t\"loading\": \"Content_loading__pqLnG\",\n\t\"list\": \"Content_list__lxQ_a\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL0NvbnRlbnQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EseUVBQXlFLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixjQUFjLEdBQUcsNkJBQTZCLGNBQWMsb0JBQW9CLDJCQUEyQix3QkFBd0Isd0JBQXdCLGNBQWMsd0JBQXdCLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsYUFBYSx3QkFBd0IsR0FBRyx5REFBeUQsZUFBZSxlQUFlLGlCQUFpQiwwQkFBMEIsdUJBQXVCLHVCQUF1QixtQ0FBbUMsR0FBRywyQkFBMkIsaUJBQWlCLG9CQUFvQiwyQkFBMkIsaUJBQWlCLEdBQUcsaUNBQWlDLDhCQUE4QixpQkFBaUIsb0JBQW9CLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix3QkFBd0IsMkJBQTJCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLFNBQVMsMEZBQTBGLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksMENBQTBDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsYUFBYSx1QkFBdUIsWUFBWSxHQUFHLGNBQWMsZ0JBQWdCLG9CQUFvQiwyQkFBMkIsd0JBQXdCLHdCQUF3QixjQUFjLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGFBQWEsd0JBQXdCLEdBQUcsMkJBQTJCLGVBQWUsZUFBZSxpQkFBaUIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsbUNBQW1DLEdBQUcsWUFBWSxpQkFBaUIsb0JBQW9CLDJCQUEyQixpQkFBaUIsR0FBRyxrQkFBa0IsOEJBQThCLGlCQUFpQixvQkFBb0IsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsY0FBYyw0QkFBNEIsZ0JBQWdCLGlCQUFpQix3QkFBd0IsMkJBQTJCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxxQkFBcUI7QUFDbHlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvQ29udGVudC5tb2R1bGUuY3NzPzhlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db250ZW50X21haW5Db250YWluZXJfX0xRN1dnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5Db250ZW50X2hlYWRlcl9fMUpoQWQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleDogMCAxO1xcbn1cXG5cXG4uQ29udGVudF9Db250ZW50X183V0hmXyB7XFxuICBmbGV4OiAxIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgcGFkZGluZzogMHB4IDMwcHg7XFxufVxcblxcbi5Db250ZW50X2lucHV0V3JhcHBlcl9fdk04VHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Db250ZW50X2lucHV0V3JhcHBlcl9fdk04VHAgLkNvbnRlbnRfYnV0dG9uX195ajVIXyB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5Db250ZW50X2lucHV0X19kY0NYQSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uQ29udGVudF9pbnB1dF9fZGNDWEE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmZmQzMjtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5Db250ZW50X2J1dHRvbl9feWo1SF86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQ29udGVudF9sb2FkaW5nX19wcUxuRyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZWQ7XFxufVxcblxcbi5Db250ZW50X2xpc3RfX2x4UV9hIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvQ29udGVudC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQU87QUFDVDs7QUFFQTtFQUNFLFNBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZOztFQUVaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleDogMDtcXG59XFxuXFxuLkNvbnRlbnQge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgcGFkZGluZzogMHB4IDMwcHg7XFxufVxcblxcbi5pbnB1dFdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dFdyYXBwZXIgLmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmZmQzMjtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZWQ7XFxufVxcblxcbi5saXN0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5Db250YWluZXJcIjogXCJDb250ZW50X21haW5Db250YWluZXJfX0xRN1dnXCIsXG5cdFwiaGVhZGVyXCI6IFwiQ29udGVudF9oZWFkZXJfXzFKaEFkXCIsXG5cdFwiQ29udGVudFwiOiBcIkNvbnRlbnRfQ29udGVudF9fN1dIZl9cIixcblx0XCJpbnB1dFdyYXBwZXJcIjogXCJDb250ZW50X2lucHV0V3JhcHBlcl9fdk04VHBcIixcblx0XCJidXR0b25cIjogXCJDb250ZW50X2J1dHRvbl9feWo1SF9cIixcblx0XCJpbnB1dFwiOiBcIkNvbnRlbnRfaW5wdXRfX2RjQ1hBXCIsXG5cdFwibG9hZGluZ1wiOiBcIkNvbnRlbnRfbG9hZGluZ19fcHFMbkdcIixcblx0XCJsaXN0XCI6IFwiQ29udGVudF9saXN0X19seFFfYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Content.module.css\n"));

/***/ })

});