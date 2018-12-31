"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var global_styles_1 = require("./global-styles");
var utils_1 = require("./utils");
var defaultBreakpoints = [576, 768, 992, 1200];
exports.dimensionProps = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  \n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n  ", "\n\n\t", "\n"], ["\n  ", "\n  \n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n  ", "\n\n\t", "\n"
    // Spacing Properties
])), function (p) { return p.display ? "display:" + p.display + ";" : ''; }, function (p) { return p.w ? "width:" + utils_1.parseUnit(p.w) + ";" : ''; }, function (p) { return p.h ? "height:" + utils_1.parseUnit(p.h) + ";" : ''; }, function (p) { return p.minw ? "min-width:" + utils_1.parseUnit(p.minw) + ";" : ''; }, function (p) { return p.minh ? "min-height:" + utils_1.parseUnit(p.minh) + ";" : ''; }, function (p) { return p.maxw ? "max-width:" + utils_1.parseUnit(p.maxw) + ";" : ''; }, function (p) { return p.maxh ? "max-height:" + utils_1.parseUnit(p.maxh) + ";" : ''; }, function (p) { return p.sz ? "width:" + utils_1.parseUnit(p.sz) + "; height:" + utils_1.parseUnit(p.sz) + ";" : ''; });
// Spacing Properties
var REG = /^[mp][trblhv]?$/;
var properties = {
    m: 'margin',
    p: 'padding'
};
var directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    h: ['Top', 'Bottom'],
    v: ['Left', 'Right'],
};
var getSpaceStyleName = function (key) {
    var _a = key.split(''), a = _a[0], b = _a[1];
    var property = properties[a];
    var direction = directions[b] || '';
    return Array.isArray(direction)
        ? direction.map(function (dir) { return property + dir; })
        : [property + direction];
};
exports.spacingProps = function (props) {
    var keys = Object.keys(props)
        .filter(function (key) { return REG.test(key); });
    return keys.map(function (key) {
        var value = props[key];
        var styleNames = getSpaceStyleName(key);
        var style = function (n) { return utils_1.is(n) ? styleNames.reduce(function (a, prop) {
            var _a;
            return (__assign({}, a, (_a = {}, _a[prop] = utils_1.parseUnit(n), _a)));
        }, {}) : null; };
        if (!Array.isArray(value)) {
            return style(value);
        }
        var styles = {};
        var breakpoints = [null].concat(defaultBreakpoints.map(utils_1.createMediaQuery));
        for (var i = 0; i < value.length; i++) {
            var media = breakpoints[i];
            if (!media) {
                styles = style(value[i]) || {};
                continue;
            }
            var rule = style(value[i]);
            if (!rule)
                continue;
            styles[media] = rule;
        }
        return styles;
    });
};
exports.flexProps = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n\t", "\n\n\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n  \n  ", "\n  \n\t", "\n  ", "\n  \n  ", "\n  ", "\n\n  ", "\n  ", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n"], ["\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n\t", "\n\n\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n  \n  ", "\n  \n\t", "\n  ", "\n  \n  ", "\n  ", "\n\n  ", "\n  ", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n"])), function (p) { return p.jcc ? global_styles_1.s.jcc : ''; }, function (p) { return p.jcsa ? global_styles_1.s.jcsa : ''; }, function (p) { return p.jcsb ? global_styles_1.s.jcsb : ''; }, function (p) { return p.jcfs ? global_styles_1.s.jcfs : ''; }, function (p) { return p.jcfe ? global_styles_1.s.jcfe : ''; }, function (p) { return p.aic ? global_styles_1.s.aic : ''; }, function (p) { return p.aifs ? global_styles_1.s.aifs : ''; }, function (p) { return p.aife ? global_styles_1.s.aife : ''; }, function (p) { return p.aib ? global_styles_1.s.aib : ''; }, function (p) { return p.ass ? global_styles_1.s.ass : ''; }, function (p) { return p.asfs ? global_styles_1.s.asfs : ''; }, function (p) { return p.asfe ? global_styles_1.s.asfe : ''; }, function (p) { return p.asc ? global_styles_1.s.asc : ''; }, function (p) { return p.jss ? global_styles_1.s.jss : ''; }, function (p) { return p.jsfs ? global_styles_1.s.jsfs : ''; }, function (p) { return p.jsfe ? global_styles_1.s.jsfe : ''; }, function (p) { return p.jsc ? global_styles_1.s.jsc : ''; }, function (p) { return p.center ? global_styles_1.s.aic + " " + global_styles_1.s.jcc : ''; }, function (p) { return (p.column || p.col) ? global_styles_1.s.flxCol : ''; }, function (p) { return p.row ? global_styles_1.s.flxRow : ''; }, function (p) { return p.hCenter && (p.col || p.column) ? global_styles_1.s.aic : ''; }, function (p) { return p.vCenter && (p.col || p.column) ? global_styles_1.s.jcc : ''; }, function (p) { return p.hCenter && p.row ? global_styles_1.s.jcc : ''; }, function (p) { return p.vCenter && p.row ? global_styles_1.s.aic : ''; }, function (p) { return p.flxWrap ? global_styles_1.s.flxWrap : ''; }, function (p) { return p.flxOrder ? "display:flex; order:" + p.flxOrder + ";" : ''; }, function (p) { return p.flex ? "display:flex; flex:" + p.flex + ";" : ''; }, function (p) { return p.flex1 ? "display:flex; flex: 1 1 0%;" : ''; });
exports.positionProps = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n  \n  ", "\n"], ["\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n\t", "\n  ", "\n  \n  ", "\n"])), function (p) { return p.pabs ? global_styles_1.s.pabs : ''; }, function (p) { return p.prel ? global_styles_1.s.prel : ''; }, function (p) { return p.pfix ? "position: fixed;" : ''; }, function (p) { return p.top ? "top: " + utils_1.parseUnit(p.top) + ";" : ''; }, function (p) { return p.botttom ? "botttom: " + utils_1.parseUnit(p.botttom) + ";" : ''; }, function (p) { return p.left ? "left: " + utils_1.parseUnit(p.left) + ";" : ''; }, function (p) { return p.right ? "right: " + utils_1.parseUnit(p.right) + ";" : ''; }, function (p) { return p.zi ? "z-index: " + p.zi + ";" : ''; });
exports.appearanceProps = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n\t", "\n  ", "\n  \n  ", "\n  \n\t", "\n  ", "\n"], ["\n\t", "\n\t", "\n  ", "\n  \n  ", "\n  \n\t", "\n  ", "\n"])), function (p) { return p.background ? "background-color:" + p.background + ";" : ''; }, function (p) { return p.bg ? "background-color:" + p.bg + ";" : ''; }, function (p) { return p.color ? "color:" + p.color + ";" : ''; }, function (p) { return p.br ? "border-radius:" + utils_1.parseUnit(p.br) + ";" : ''; }, function (p) { return p.opacity ? "opacity:" + p.opacity + ";" : ''; }, function (p) { return p.op ? "opacity:" + p.op + ";" : ''; });
exports.textProps = styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"])), function (p) { return p.fs ? "font-size:" + utils_1.parseUnit(p.fs) + ";" : ''; }, function (p) { return p.light ? "font-weight:300;" : ''; }, function (p) { return p.regular ? "font-weight:400;" : ''; }, function (p) { return p.medium ? "font-weight:500;" : ''; }, function (p) { return p.semi ? "font-weight:600;" : ''; }, function (p) { return p.bold ? "font-weight:700;" : ''; }, function (p) { return p.weight ? "font-weight:" + p.weight + ";" : ''; }, function (p) { return p.center ? "text-align:center;" : ''; }, function (p) { return p.right ? "text-align:right;" : ''; }, function (p) { return p.tal ? "text-align:left;" : ''; }, function (p) { return p.tac ? "text-align:center;" : ''; }, function (p) { return p.tar ? "text-align:right;" : ''; }, function (p) { return p.lh ? "line-height:" + utils_1.parseUnit(p.lh) + ";" : ''; }, function (p) { return p.ls ? "letter-spacing:" + utils_1.parseUnit(p.ls) + ";" : ''; }, function (p) { return p.upcase ? "text-transform:uppercase;" : ''; });
exports.boxProps = styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n\t", "\n\t", "\n"])), exports.spacingProps, exports.flexProps, exports.positionProps, exports.appearanceProps);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=primitive.js.map