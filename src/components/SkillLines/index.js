"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var skillLines_json_1 = require("@site/src/assets/json/skillLines.json");
var addTooltips_js_1 = require("./addTooltips.js");
var SkillLine = function (_a) {
    var id = _a.id;
    var skillLine = skillLines_json_1.default.find(function (line) { return line.id === id; });
    if (!skillLine) {
        return <div>Skill line not found</div>;
    }
    return (<div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ textAlign: 'left' }}>{skillLine.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {skillLine.skills.map(function (skill, index) { return (<tr key={index}>
                            <td width="10%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <img src={skill.svg} alt='Skill Icon'/>
                            </td>
                            <td>{(0, addTooltips_js_1.default)(skill.description)}</td>
                        </tr>); })}
                </tbody>
            </table>
        </div>);
};
exports.default = SkillLine;
