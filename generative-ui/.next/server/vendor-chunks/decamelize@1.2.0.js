"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/decamelize@1.2.0";
exports.ids = ["vendor-chunks/decamelize@1.2.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/decamelize@1.2.0/node_modules/decamelize/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/decamelize@1.2.0/node_modules/decamelize/index.js ***!
  \******************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (str, sep) {\n\tif (typeof str !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tsep = typeof sep === 'undefined' ? '_' : sep;\n\n\treturn str\n\t\t.replace(/([a-z\\d])([A-Z])/g, '$1' + sep + '$2')\n\t\t.replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + sep + '$2')\n\t\t.toLowerCase();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vZGVjYW1lbGl6ZUAxLjIuMC9ub2RlX21vZHVsZXMvZGVjYW1lbGl6ZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlY2FtZWxpemVAMS4yLjAvbm9kZV9tb2R1bGVzL2RlY2FtZWxpemUvaW5kZXguanM/ODRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIHNlcCkge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0c2VwID0gdHlwZW9mIHNlcCA9PT0gJ3VuZGVmaW5lZCcgPyAnXycgOiBzZXA7XG5cblx0cmV0dXJuIHN0clxuXHRcdC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEnICsgc2VwICsgJyQyJylcblx0XHQucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XFxkXSspL2csICckMScgKyBzZXAgKyAnJDInKVxuXHRcdC50b0xvd2VyQ2FzZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/decamelize@1.2.0/node_modules/decamelize/index.js\n");

/***/ })

};
;