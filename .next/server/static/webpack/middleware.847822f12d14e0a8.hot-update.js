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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(middleware)/./node_modules/axios/lib/axios.js\");\n\nconst getUser = async (email, password)=>{\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"http://localhost:3010/auth/login\",\n        data: {\n            email,\n            password\n        },\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const User = await res.data;\n    if (!User) return null;\n    return User;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vZGF0YS91c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBCO0FBRW5CLE1BQU1DLFVBQVUsT0FBT0MsT0FBZUM7SUFDM0MsTUFBTUMsTUFBTSxNQUFNSixpREFBS0EsQ0FBQztRQUN0QkssUUFBUTtRQUNSQyxLQUFLO1FBQ0xDLE1BQU07WUFBRUw7WUFBT0M7UUFBUztRQUN4QkssU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsTUFBTUMsT0FBTyxNQUFNTCxJQUFJRyxJQUFJO0lBQzNCLElBQUcsQ0FBQ0UsTUFBTSxPQUFPO0lBQ2pCLE9BQU9BO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL3VzZXIudHM/OWJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4gPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwL2F1dGgvbG9naW4nLFxyXG4gICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgVXNlciA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gIGlmKCFVc2VyKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gVXNlcjtcclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./data/user.ts\n");

/***/ })

});