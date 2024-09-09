import React from 'react';
import {useDocsSidebar} from "@docusaurus/theme-common/internal";

import Layout from '@theme/Layout';
import DocCardList from '@theme/DocCardList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CustomCategoryPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const sidebar = useDocsSidebar();

  return (
    <Layout title="Custom Category Page" description="Description of the custom category page">
      <div className="container margin-vert--lg">
        <h1>{siteConfig.title} (hey)</h1>
        <p>Custom content for the category page.</p>
        {sidebar && <DocCardList items={sidebar.items} />}
      </div>
    </Layout>
  );
};

export default CustomCategoryPage;