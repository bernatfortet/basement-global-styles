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
var primitive_1 = require("./primitive");
var utils_1 = require("./utils");
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var size = function (size) { return "width:" + (size ? size : 24) + "px; height:" + (size ? size : 24) + "px;"; };
var anim = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject([" transition:300ms;\n\t&:hover{ transition: all 100ms; }\n"], [" transition:300ms;\n\t&:hover{ transition: all 100ms; }\n"])));
var unselectable = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject([" user-select:none; & * { user-select:none; } "], [" user-select:none; & * { user-select:none; } "])));
var untouchable = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject([" ", " pointer-events:none; & * { pointer-events:none; }  "], [" ", " pointer-events:none; & * { pointer-events:none; }  "])), unselectable);
var actionable = styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject([" ", " cursor:pointer;  "], [" ", " cursor:pointer;  "])), unselectable);
var mediaQueries = utils_1.defaultBreakpoints.map(function (unit) { return utils_1.createMediaQuery(unit); });
var media = {
    sm: mediaQueries[0],
    md: mediaQueries[1],
    lg: mediaQueries[2],
    xlg: mediaQueries[3],
};
exports.Column = styled_components_1.default(Root)(templateObject_6 || (templateObject_6 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])), primitive_1.boxProps, global_styles_1.s.flxCol);
exports.Row = styled_components_1.default(Root)(templateObject_7 || (templateObject_7 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])), primitive_1.boxProps, global_styles_1.s.flxRow);
exports.Box = styled_components_1.default(Root)(templateObject_8 || (templateObject_8 = __makeTemplateObject([" ", ""], [" ", ""])), primitive_1.boxProps);
var globalStyles = __assign({}, global_styles_1.s, { size: size,
    anim: anim,
    media: media,
    unselectable: unselectable,
    untouchable: untouchable,
    actionable: actionable,
    boxProps: primitive_1.boxProps,
    spacingProps: primitive_1.spacingProps,
    textProps: primitive_1.textProps,
    dimensionProps: primitive_1.dimensionProps, breakpoints: utils_1.defaultBreakpoints });
exports.s = globalStyles;
// Exported Utils
var utils_2 = require("./utils");
exports.parseUnit = utils_2.parseUnit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=index.js.map