import React from "react";
import Layout from "@theme/Layout";
import SkillSelector from "../components/SkillSelector";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function EnemySkillsTracker(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`BOTSE Helper`}
      description="References and Guides for Betrayal of the Second Era."
    >
      <main>
        <SkillSelector />
      </main>
    </Layout>
  );
}
