"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EnemySkillsTracker;
var react_1 = require("react");
var Layout_1 = require("@theme/Layout");
var SkillSelector_1 = require("../components/SkillSelector");
function EnemySkillsTracker() {
    return (<Layout_1.default title={"BOTSE Helper"} description="References and Guides for Betrayal of the Second Era.">
      <main style={{ padding: 20 + "px" }}>
        <header>
          <h1>Enemy Skills Tracker</h1>
          <p>
            Select enemy skills from the menu below as they appear in battle, to
            keep track of which skills are currently present in the battle. You
            can collapse the panel for better visibility.{" "}
          </p>
        </header>
        <SkillSelector_1.default />
      </main>
    </Layout_1.default>);
}
