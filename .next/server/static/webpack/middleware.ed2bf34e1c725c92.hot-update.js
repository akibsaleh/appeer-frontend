"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./data/user.ts":
/*!**********************!*\
  !*** ./data/user.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(middleware)/./node_modules/axios/lib/axios.js\");\n\nconst getUser = async (email, password)=>{\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"http://localhost:3010/auth/login\",\n        data: {\n            email,\n            password\n        },\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const User = res.data;\n    if (!User) return null;\n    return User;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vZGF0YS91c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBCO0FBRW5CLE1BQU1DLFVBQVUsT0FBT0MsT0FBZUM7SUFDM0MsTUFBTUMsTUFBTSxNQUFNSixpREFBS0EsQ0FBQztRQUN0QkssUUFBUTtRQUNSQyxLQUFLO1FBQ0xDLE1BQU07WUFBRUw7WUFBT0M7UUFBUztRQUN4QkssU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsTUFBTUMsT0FBT0wsSUFBSUcsSUFBSTtJQUNyQixJQUFHLENBQUNFLE1BQU0sT0FBTztJQUNqQixPQUFPQTtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2VyLnRzPzliYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8VXNlciB8IG51bGw+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC9hdXRoL2xvZ2luJyxcclxuICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFVzZXIgPSByZXMuZGF0YTtcclxuICBpZighVXNlcikgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIFVzZXI7XHJcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0VXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiaGVhZGVycyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./data/user.ts\n");

/***/ })

});