"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocLinkList;
var react_1 = require("react");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var Link_1 = require("@docusaurus/Link");
var styles_module_css_1 = require("./styles.module.css");
function DocCardListForCurrentSidebarCategory(_a) {
    var className = _a.className;
    var category = (0, client_1.useCurrentSidebarCategory)();
    return <DocLinkList items={category.items} className={className}/>;
}
function DocLinkList(props) {
    var items = props.items, className = props.className;
    if (!items) {
        return <DocCardListForCurrentSidebarCategory {...props}/>;
    }
    var filteredItems = (0, client_1.filterDocCardListItems)(items);
    return (<ul className={styles_module_css_1.default.unstyled}>
      {filteredItems.map(function (item) {
            if (item.type === "link") {
                return <DocLink key={item.docId} item={item}/>;
            }
            if (item.type === "category") {
                return <DocCategoryLink key={item.href} category={item}/>;
            }
        })}
    </ul>);
}
function DocLink(_a) {
    var _b;
    var item = _a.item;
    var doc = (0, client_1.useDocById)((_b = item.docId) !== null && _b !== void 0 ? _b : undefined);
    var description = item.description || (doc === null || doc === void 0 ? void 0 : doc.description);
    return (<li key={item.docId} className="margin-bottom--md">
      <Link_1.default to={item.href}>{item.label}</Link_1.default>
      {description && (<small className={styles_module_css_1.default.description}>{description}</small>)}
    </li>);
}
function DocCategoryLink(_a) {
    var _b, _c;
    var category = _a.category;
    var categoryHref = (0, client_1.findFirstSidebarItemLink)(category);
    var doc = (0, client_1.useDocById)((_b = category.docId) !== null && _b !== void 0 ? _b : undefined);
    var description = category.description ||
        ((_c = category.customProps) === null || _c === void 0 ? void 0 : _c.description) ||
        (doc === null || doc === void 0 ? void 0 : doc.description);
    return (<li key={category.docId} className="margin-bottom--md">
      <Link_1.default to={categoryHref}>{category.label}</Link_1.default>
      {description && (<small className={styles_module_css_1.default.description}>{description}</small>)}
    </li>);
}
