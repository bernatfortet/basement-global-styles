"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = function (n) { return n !== undefined && n !== null; };
exports.isNum = function (n) { return typeof n === 'number' && !isNaN(n); };
exports.parseUnit = function (n) { return exports.isNum(n) ? n + 'px' : n; };
exports.isNegative = function (n) { return n < 0; };
exports.createMediaQuery = function (n) { return "@media screen and (min-width: " + exports.parseUnit(n) + ")"; };
exports.defaultBreakpoints = [576, 768, 992, 1200];
//# sourceMappingURL=utils.js.map