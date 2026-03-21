"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var InitColorSchemeScript_1 = require("@mui/material/InitColorSchemeScript");
var styles_1 = require("@mui/material/styles");
var MuiTheme_1 = require("@site/src/components/MuiTheme");
var Root = function (_a) {
    var children = _a.children;
    return (<>
      <InitColorSchemeScript_1.default />
      <styles_1.ThemeProvider theme={MuiTheme_1.default}>{children}</styles_1.ThemeProvider>
    </>);
};
exports.default = Root;
