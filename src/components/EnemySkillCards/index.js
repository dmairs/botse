"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var addTooltips_1 = require("./addTooltips");
var markdownToHtml = function (markdown) {
    var html = markdown
        .replace(/\\/g, "")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    html = (0, addTooltips_1.default)(html);
    return html;
};
var EnemySkillCards = function (_a) {
    var title = _a.title, ability = _a.ability, link = _a.link;
    return (<material_1.Card>
      <material_1.CardContent sx={{
            "&:last-child": {
                paddingBottom: 13 + "px",
            },
            padding: 13 + "px",
        }}>
        <h4 style={{ marginBottom: 5 + "px" }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <span dangerouslySetInnerHTML={{ __html: markdownToHtml(ability) }}></span>
      </material_1.CardContent>
    </material_1.Card>);
};
exports.default = EnemySkillCards;
