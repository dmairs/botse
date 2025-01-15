import React from "react";
import Layout from "@theme/Layout";
import SkillSelector from "../components/SkillSelector";

export default function EnemySkillsTracker(): JSX.Element {
  return (
    <Layout
      title={`BOTSE Helper`}
      description="References and Guides for Betrayal of the Second Era."
    >
      <main style={{ padding: 20 + "px" }}>
        <header>
          <h1>Enemy Skills Tracker</h1>
          <p>
            Select enemy skills from the menu below as they appear in battle, to
            keep track of which skills are currently present in the battle. You
            can collapse the panel for better visibility.{" "}
          </p>
        </header>
        <SkillSelector />
      </main>
    </Layout>
  );
}
