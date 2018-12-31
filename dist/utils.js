"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = function (n) { return typeof n === 'number' && !isNaN(n); };
exports.parseUnit = function (n) { return exports.num(n) ? n + 'px' : n; };
