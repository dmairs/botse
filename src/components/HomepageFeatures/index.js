"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomepageFeatures;
var clsx_1 = require("clsx");
var Heading_1 = require("@theme/Heading");
var styles_module_css_1 = require("./styles.module.css");
var Link_1 = require("@docusaurus/Link");
var FeatureList = [
    {
        url: "/docs/",
        title: "Go to References & Guides",
        Svg: require("@site/static/img/books.svg").default,
        description: <> </>,
    },
];
function Feature(_a) {
    var url = _a.url, title = _a.title, Svg = _a.Svg, description = _a.description;
    return (<div className={(0, clsx_1.default)("col col--12")}>
      <Link_1.default to={url} style={{ textDecoration: "none" }}>
        <div className="text--center">
          <Svg className={styles_module_css_1.default.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading_1.default as="h3">{title}</Heading_1.default>
          <p>{description}</p>
        </div>
      </Link_1.default>
    </div>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1.default.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}
