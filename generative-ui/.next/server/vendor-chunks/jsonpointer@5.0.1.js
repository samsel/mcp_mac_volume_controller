/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jsonpointer@5.0.1";
exports.ids = ["vendor-chunks/jsonpointer@5.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var hasExcape = /~/\nvar escapeMatcher = /~[01]/g\nfunction escapeReplacer (m) {\n  switch (m) {\n    case '~1': return '/'\n    case '~0': return '~'\n  }\n  throw new Error('Invalid tilde escape: ' + m)\n}\n\nfunction untilde (str) {\n  if (!hasExcape.test(str)) return str\n  return str.replace(escapeMatcher, escapeReplacer)\n}\n\nfunction setter (obj, pointer, value) {\n  var part\n  var hasNextPart\n\n  for (var p = 1, len = pointer.length; p < len;) {\n    if (pointer[p] === 'constructor' || pointer[p] === 'prototype' || pointer[p] === '__proto__') return obj\n\n    part = untilde(pointer[p++])\n    hasNextPart = len > p\n\n    if (typeof obj[part] === 'undefined') {\n      // support setting of /-\n      if (Array.isArray(obj) && part === '-') {\n        part = obj.length\n      }\n\n      // support nested objects/array when setting values\n      if (hasNextPart) {\n        if ((pointer[p] !== '' && pointer[p] < Infinity) || pointer[p] === '-') obj[part] = []\n        else obj[part] = {}\n      }\n    }\n\n    if (!hasNextPart) break\n    obj = obj[part]\n  }\n\n  var oldValue = obj[part]\n  if (value === undefined) delete obj[part]\n  else obj[part] = value\n  return oldValue\n}\n\nfunction compilePointer (pointer) {\n  if (typeof pointer === 'string') {\n    pointer = pointer.split('/')\n    if (pointer[0] === '') return pointer\n    throw new Error('Invalid JSON pointer.')\n  } else if (Array.isArray(pointer)) {\n    for (const part of pointer) {\n      if (typeof part !== 'string' && typeof part !== 'number') {\n        throw new Error('Invalid JSON pointer. Must be of type string or number.')\n      }\n    }\n    return pointer\n  }\n\n  throw new Error('Invalid JSON pointer.')\n}\n\nfunction get (obj, pointer) {\n  if (typeof obj !== 'object') throw new Error('Invalid input object.')\n  pointer = compilePointer(pointer)\n  var len = pointer.length\n  if (len === 1) return obj\n\n  for (var p = 1; p < len;) {\n    obj = obj[untilde(pointer[p++])]\n    if (len === p) return obj\n    if (typeof obj !== 'object' || obj === null) return undefined\n  }\n}\n\nfunction set (obj, pointer, value) {\n  if (typeof obj !== 'object') throw new Error('Invalid input object.')\n  pointer = compilePointer(pointer)\n  if (pointer.length === 0) throw new Error('Invalid JSON pointer for set.')\n  return setter(obj, pointer, value)\n}\n\nfunction compile (pointer) {\n  var compiled = compilePointer(pointer)\n  return {\n    get: function (object) {\n      return get(object, compiled)\n    },\n    set: function (object, value) {\n      return set(object, compiled, value)\n    }\n  }\n}\n\nexports.get = get\nexports.set = set\nexports.compile = compile\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbnBvaW50ZXJANS4wLjEvbm9kZV9tb2R1bGVzL2pzb25wb2ludGVyL2pzb25wb2ludGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLFFBQVE7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFdBQVc7QUFDWCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ2NoYWluLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29ucG9pbnRlckA1LjAuMS9ub2RlX21vZHVsZXMvanNvbnBvaW50ZXIvanNvbnBvaW50ZXIuanM/MmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzRXhjYXBlID0gL34vXG52YXIgZXNjYXBlTWF0Y2hlciA9IC9+WzAxXS9nXG5mdW5jdGlvbiBlc2NhcGVSZXBsYWNlciAobSkge1xuICBzd2l0Y2ggKG0pIHtcbiAgICBjYXNlICd+MSc6IHJldHVybiAnLydcbiAgICBjYXNlICd+MCc6IHJldHVybiAnfidcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGlsZGUgZXNjYXBlOiAnICsgbSlcbn1cblxuZnVuY3Rpb24gdW50aWxkZSAoc3RyKSB7XG4gIGlmICghaGFzRXhjYXBlLnRlc3Qoc3RyKSkgcmV0dXJuIHN0clxuICByZXR1cm4gc3RyLnJlcGxhY2UoZXNjYXBlTWF0Y2hlciwgZXNjYXBlUmVwbGFjZXIpXG59XG5cbmZ1bmN0aW9uIHNldHRlciAob2JqLCBwb2ludGVyLCB2YWx1ZSkge1xuICB2YXIgcGFydFxuICB2YXIgaGFzTmV4dFBhcnRcblxuICBmb3IgKHZhciBwID0gMSwgbGVuID0gcG9pbnRlci5sZW5ndGg7IHAgPCBsZW47KSB7XG4gICAgaWYgKHBvaW50ZXJbcF0gPT09ICdjb25zdHJ1Y3RvcicgfHwgcG9pbnRlcltwXSA9PT0gJ3Byb3RvdHlwZScgfHwgcG9pbnRlcltwXSA9PT0gJ19fcHJvdG9fXycpIHJldHVybiBvYmpcblxuICAgIHBhcnQgPSB1bnRpbGRlKHBvaW50ZXJbcCsrXSlcbiAgICBoYXNOZXh0UGFydCA9IGxlbiA+IHBcblxuICAgIGlmICh0eXBlb2Ygb2JqW3BhcnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gc3VwcG9ydCBzZXR0aW5nIG9mIC8tXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopICYmIHBhcnQgPT09ICctJykge1xuICAgICAgICBwYXJ0ID0gb2JqLmxlbmd0aFxuICAgICAgfVxuXG4gICAgICAvLyBzdXBwb3J0IG5lc3RlZCBvYmplY3RzL2FycmF5IHdoZW4gc2V0dGluZyB2YWx1ZXNcbiAgICAgIGlmIChoYXNOZXh0UGFydCkge1xuICAgICAgICBpZiAoKHBvaW50ZXJbcF0gIT09ICcnICYmIHBvaW50ZXJbcF0gPCBJbmZpbml0eSkgfHwgcG9pbnRlcltwXSA9PT0gJy0nKSBvYmpbcGFydF0gPSBbXVxuICAgICAgICBlbHNlIG9ialtwYXJ0XSA9IHt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYXNOZXh0UGFydCkgYnJlYWtcbiAgICBvYmogPSBvYmpbcGFydF1cbiAgfVxuXG4gIHZhciBvbGRWYWx1ZSA9IG9ialtwYXJ0XVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIG9ialtwYXJ0XVxuICBlbHNlIG9ialtwYXJ0XSA9IHZhbHVlXG4gIHJldHVybiBvbGRWYWx1ZVxufVxuXG5mdW5jdGlvbiBjb21waWxlUG9pbnRlciAocG9pbnRlcikge1xuICBpZiAodHlwZW9mIHBvaW50ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgcG9pbnRlciA9IHBvaW50ZXIuc3BsaXQoJy8nKVxuICAgIGlmIChwb2ludGVyWzBdID09PSAnJykgcmV0dXJuIHBvaW50ZXJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiBwb2ludGVyLicpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwb2ludGVyKSkge1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBwb2ludGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwYXJ0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiBwb2ludGVyLiBNdXN0IGJlIG9mIHR5cGUgc3RyaW5nIG9yIG51bWJlci4nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9pbnRlclxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcG9pbnRlci4nKVxufVxuXG5mdW5jdGlvbiBnZXQgKG9iaiwgcG9pbnRlcikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnB1dCBvYmplY3QuJylcbiAgcG9pbnRlciA9IGNvbXBpbGVQb2ludGVyKHBvaW50ZXIpXG4gIHZhciBsZW4gPSBwb2ludGVyLmxlbmd0aFxuICBpZiAobGVuID09PSAxKSByZXR1cm4gb2JqXG5cbiAgZm9yICh2YXIgcCA9IDE7IHAgPCBsZW47KSB7XG4gICAgb2JqID0gb2JqW3VudGlsZGUocG9pbnRlcltwKytdKV1cbiAgICBpZiAobGVuID09PSBwKSByZXR1cm4gb2JqXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCAob2JqLCBwb2ludGVyLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnB1dCBvYmplY3QuJylcbiAgcG9pbnRlciA9IGNvbXBpbGVQb2ludGVyKHBvaW50ZXIpXG4gIGlmIChwb2ludGVyLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcG9pbnRlciBmb3Igc2V0LicpXG4gIHJldHVybiBzZXR0ZXIob2JqLCBwb2ludGVyLCB2YWx1ZSlcbn1cblxuZnVuY3Rpb24gY29tcGlsZSAocG9pbnRlcikge1xuICB2YXIgY29tcGlsZWQgPSBjb21waWxlUG9pbnRlcihwb2ludGVyKVxuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldChvYmplY3QsIGNvbXBpbGVkKVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAob2JqZWN0LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldChvYmplY3QsIGNvbXBpbGVkLCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5nZXQgPSBnZXRcbmV4cG9ydHMuc2V0ID0gc2V0XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js\n");

/***/ })

};
;