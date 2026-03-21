"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var EnemySkillCards_1 = require("../EnemySkillCards");
var enemySkills_json_1 = require("../../data/enemySkills.json");
var Grid2_1 = require("@mui/material/Grid2");
var material_1 = require("@mui/material");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
var Close_1 = require("@mui/icons-material/Close");
var material_2 = require("@mui/material");
var SkillSelector = function () {
    var _a = (0, react_1.useState)(Array(enemySkills_json_1.default.length).fill(false)), toggled = _a[0], setToggled = _a[1];
    var handleToggle = function (index) {
        var newToggled = __spreadArray([], toggled, true);
        newToggled[index] = !newToggled[index];
        setToggled(newToggled);
    };
    return (<div>
      <material_1.Accordion defaultExpanded>
        <material_1.AccordionSummary expandIcon={<ExpandMore_1.default />} aria-controls="panel1a-content" id="panel1a-header">
          <material_1.Typography>Add Additional Enemy Skills</material_1.Typography>
        </material_1.AccordionSummary>
        <material_1.AccordionDetails>
          <Grid2_1.default container spacing={1}>
            {enemySkills_json_1.default.map(function (skill, index) { return (<Grid2_1.default size={{ xs: 6, sm: 3, md: 2, xl: 1 }} key={index}>
                <material_1.FormGroup>
                  <material_1.FormControlLabel control={<material_1.Switch id={"switch-".concat(index)} checked={toggled[index]} onChange={function () { return handleToggle(index); }} color="primary"/>} label={skill.title} style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
            }}/>
                </material_1.FormGroup>
              </Grid2_1.default>); })}
          </Grid2_1.default>
        </material_1.AccordionDetails>
      </material_1.Accordion>
      <Grid2_1.default container spacing={1} style={{ marginTop: "20px" }}>
        {enemySkills_json_1.default.map(function (skill, index) {
            return toggled[index] && (<Grid2_1.default size={{ xs: 12 }} key={index}>
                <div style={{ position: "relative" }}>
                  <material_2.IconButton size="small" onClick={function () { return handleToggle(index); }} style={{
                    position: "absolute",
                    right: 5,
                    top: 5,
                    zIndex: 1,
                }}>
                    <Close_1.default />
                  </material_2.IconButton>
                  <EnemySkillCards_1.default title={skill.title} ability={skill.hoverText} link={skill.filePath}/>
                </div>
              </Grid2_1.default>);
        })}
      </Grid2_1.default>
    </div>);
};
exports.default = SkillSelector;
