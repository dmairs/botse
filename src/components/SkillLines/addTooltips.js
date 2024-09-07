// addTooltips.js
import React from 'react';
import Term from "@grnet/docusaurus-term-preview";

const addTooltips = (description) => {
  const termRegex = /<Term pathName='(.*?)'>(.*?)<\/Term>/g;
  const parts = [];
  let lastIndex = 0;

  description.replace(termRegex, (match, pathName, term, offset) => {
    parts.push(description.slice(lastIndex, offset));
    parts.push(<Term key={offset} pathName={pathName}>{term}</Term>);
    lastIndex = offset + match.length;
  });

  parts.push(description.slice(lastIndex));
  return parts;
};

export default addTooltips;