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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var global_styles_1 = require("./global-styles");
var primitive_1 = require("./primitive");
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var size = function (size) { return "width:" + (size ? size : 24) + "px; height:" + (size ? size : 24) + "px;"; };
var anim = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject([" transition:300ms;\n\t&:hover{ transition: all 100ms; }\n"], [" transition:300ms;\n\t&:hover{ transition: all 100ms; }\n"])));
var unselectable = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject([" user-select:none; & * { user-select:none; } "], [" user-select:none; & * { user-select:none; } "])));
var untouchable = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject([" ", " pointer-events:none; & * { pointer-events:none; }  "], [" ", " pointer-events:none; & * { pointer-events:none; }  "])), unselectable);
var actionable = styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject([" ", " cursor:pointer;  "], [" ", " cursor:pointer;  "])), unselectable);
var hideVisually = styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject([" border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;\n"], [" border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;\n"])));
var mediaDimensions = {
    sm: 500,
    md: 768,
    lg: 1110,
};
var media = {
    sm: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "], ["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "])), mediaDimensions.sm, styled_components_1.css.apply(void 0, args));
    },
    md: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "], ["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "])), mediaDimensions.md, styled_components_1.css.apply(void 0, args));
    },
    lg: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "], ["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "])), mediaDimensions.lg, styled_components_1.css.apply(void 0, args));
    },
    w: function (width) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "], ["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "])), width, styled_components_1.css.apply(void 0, args));
    }
};
exports.mediaProps = styled_components_1.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n"], ["\n\t", /* Media Props */ "\n\t", "\n\t", "\n\t", "\n\n\t", "\n"])), '' /* Media Props */, function (p) { return p.smHide ? media.sm(templateObject_11 || (templateObject_11 = __makeTemplateObject([" ", ""], [" ", ""])), hideVisually) : ''; }, function (p) { return p.mdHide ? media.md(templateObject_12 || (templateObject_12 = __makeTemplateObject([" ", ""], [" ", ""])), hideVisually) : ''; }, function (p) { return p.lgHide ? media.lg(templateObject_13 || (templateObject_13 = __makeTemplateObject([" ", ""], [" ", ""])), hideVisually) : ''; }, function (p) { return p.if ? global_styles_1.s.if : ''; });
exports.Column = styled_components_1.default(Root)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", "\n  ", "\n\t", "\n\t", "\n\t", "\n"], ["\n  ", "\n  ", "\n\t", "\n\t", "\n\t", "\n"])), function (p) { return p.hCenter ? global_styles_1.s.aic : ''; }, function (p) { return p.vCenter ? global_styles_1.s.jcc : ''; }, exports.mediaProps, primitive_1.boxProps, global_styles_1.s.flxCol);
exports.Row = styled_components_1.default(Root)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n  ", "\n\t", "\n\t", "\n\t", "\n\t", "\n"])), function (p) { return p.hCenter ? global_styles_1.s.jcc : ''; }, function (p) { return p.vCenter ? global_styles_1.s.aic : ''; }, exports.mediaProps, primitive_1.boxProps, global_styles_1.s.flxRow);
exports.Box = styled_components_1.default(function (_a) {
    var tag = _a.tag, children = _a.children, props = __rest(_a, ["tag", "children"]);
    return react_1.default.createElement(tag ? tag : Root, props, children);
})(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"])), primitive_1.boxProps, exports.mediaProps, function (p) { return p.row ? global_styles_1.s.flxRow : ''; }, function (p) { return p.col || p.column ? global_styles_1.s.flxCol : ''; }, function (p) { return p.row && p.hCenter ? global_styles_1.s.jcc : ''; }, function (p) { return p.row && p.vCenter ? global_styles_1.s.aic : ''; }, function (p) { return (!p.row || p.col || p.column) && p.hCenter ? global_styles_1.s.aic : ''; }, function (p) { return (!p.row || p.col || p.column) && p.vCenter ? global_styles_1.s.jcc : ''; });
var globalStyles = __assign({}, global_styles_1.s, { size: size,
    anim: anim,
    media: media,
    hideVisually: hideVisually,
    unselectable: unselectable,
    untouchable: untouchable,
    actionable: actionable,
    boxProps: primitive_1.boxProps,
    spacingProps: primitive_1.spacingProps,
    textProps: primitive_1.textProps,
    dimensionProps: primitive_1.dimensionProps,
    mediaDimensions: mediaDimensions });
exports.s = globalStyles;
// Exported Utils
var utils_1 = require("./utils");
exports.parseUnit = utils_1.parseUnit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
