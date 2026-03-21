"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTooltips = function (html) {
    var termRegex = /<Term pathName='(.*?)'>(.*?)<\/Term>/g;
    var linkRegex = /<a href="(.*?)">(.*?)<\/a>/g;
    // Replace term tags with Term components
    html = html.replace(termRegex, function (match, pathName, term) {
        return "<Term pathName=\"".concat(pathName, "\">").concat(term, "</Term>");
    });
    // Replace link tags with anchor elements
    html = html.replace(linkRegex, function (match, href, text) {
        return "<a href=\"".concat(href, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(text, "</a>");
    });
    return html;
};
exports.default = addTooltips;
