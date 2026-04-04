import React from "react";
import Layout from "@theme/Layout";
import CooldownTracker from "../components/CooldownTracker";

export default function CooldownTrackTracker(): JSX.Element {
  return (
    <Layout
      title={`BOTSE Helper`}
      description="References and Guides for Betrayal of the Second Era."
    >
      <main style={{ padding: 20 }}>
        <header>
          <h1>Cooldown Track Tracker</h1>
          <p>
            Track dice in your cooldown track during battle. Select status dice
            from the panel below to add them to your track. Click the{" "}
            <strong>×</strong> on a die to remove it.
          </p>
        </header>
        <CooldownTracker />
      </main>
    </Layout>
  );
}
