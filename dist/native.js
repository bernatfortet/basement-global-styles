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
var react_native_1 = require("react-native");
var styled_components_1 = require("styled-components");
var global_styles_1 = require("./global-styles");
var primitive_1 = require("./primitive");
var Root = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.Column = styled_components_1.default(Root)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n  ", "\n"], ["\n\t", "\n  ", "\n"])), primitive_1.boxProps, global_styles_1.s.flxCol);
exports.Row = styled_components_1.default(Root)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n  ", "\n"], ["\n\t", "\n  ", "\n"])), primitive_1.boxProps, global_styles_1.s.flxRow);
exports.Box = styled_components_1.default(Root)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), primitive_1.boxProps);
exports.Flex1 = styled_components_1.default(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject([" display:flex; flex:1;"], [" display:flex; flex:1;"])));
exports.Spacer = styled_components_1.default(Root)(templateObject_6 || (templateObject_6 = __makeTemplateObject([" ", " "], [" ", " "])), primitive_1.dimensionProps);
var globalStyles = __assign({}, global_styles_1.s, { boxProps: primitive_1.boxProps,
    spacingProps: primitive_1.spacingProps,
    textProps: primitive_1.textProps,
    dimensionProps: primitive_1.dimensionProps });
exports.s = globalStyles;
// Exported Utils
var utils_1 = require("./utils");
exports.parseUnit = utils_1.parseUnit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
