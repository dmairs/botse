import React from "react";
import Term from "@grnet/docusaurus-term-preview";

const addTooltips = (html: string): string => {
  const termRegex = /<Term pathName='(.*?)'>(.*?)<\/Term>/g;
  const linkRegex = /<a href="(.*?)">(.*?)<\/a>/g;

  // Replace term tags with Term components
  html = html.replace(termRegex, (match, pathName, term) => {
    return `<Term pathName="${pathName}">${term}</Term>`;
  });

  // Replace link tags with anchor elements
  html = html.replace(linkRegex, (match, href, text) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });

  return html;
};

export default addTooltips;
