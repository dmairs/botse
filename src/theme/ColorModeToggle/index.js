"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ColorModeToggle_1 = require("@theme-original/ColorModeToggle");
var styles_1 = require("@mui/material/styles");
var ColorModeToggleWrapper = function (props) {
    var setMode = (0, styles_1.useColorScheme)().setMode;
    var value = props.value;
    (0, react_1.useEffect)(function () {
        setMode(value);
    }, [value, setMode]);
    return (<>
      <ColorModeToggle_1.default {...props}/>
    </>);
};
exports.default = ColorModeToggleWrapper;
