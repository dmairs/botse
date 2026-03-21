"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
require("./custom.css");
var Randomizer = (0, react_1.forwardRef)(function (_a, ref) {
    var outcomes = _a.outcomes, title = _a.title;
    var _b = (0, react_1.useState)(null), result = _b[0], setResult = _b[1];
    var _c = (0, react_1.useState)(false), isRolling = _c[0], setIsRolling = _c[1];
    var generateRandomResult = function () {
        setIsRolling(true);
        setResult(null);
        setTimeout(function () {
            var randomIndex = Math.floor(Math.random() * outcomes.length);
            setResult(outcomes[randomIndex]);
            setIsRolling(false);
        }, 1500);
    };
    return (<material_1.Box textAlign="center">
        <material_1.Typography variant="h5" gutterBottom>
          {title}
        </material_1.Typography>
        <material_1.Fab ref={ref} color="primary" onClick={generateRandomResult} disabled={isRolling} size="large">
          <icons_material_1.Casino />
        </material_1.Fab>
        {isRolling && (<material_1.Box mt={2}>
            <img src="/img/d20.png" alt="Rolling Dice" className="dice"/>
          </material_1.Box>)}
        {result && !isRolling && (<material_1.Typography variant="h5" mt={2}>
            <a href={result.url} target="_blank">
              {result.name}
            </a>
          </material_1.Typography>)}
      </material_1.Box>);
});
Randomizer.displayName = "Randomizer";
exports.default = Randomizer;
