"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var clsx_1 = require("clsx");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var HomepageFeatures_1 = require("@site/src/components/HomepageFeatures");
var index_module_css_1 = require("./index.module.css");
function HomepageHeader() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<header className={(0, clsx_1.default)("hero hero--primary", index_module_css_1.default.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={index_module_css_1.default.buttons}></div>
      </div>
    </header>);
}
function Home() {
    return (<Layout_1.default title={"BOTSE Helper"} description="References and Guides for Betrayal of the Second Era.">
      <HomepageHeader />
      <main>
        <HomepageFeatures_1.default />
      </main>
    </Layout_1.default>);
}
