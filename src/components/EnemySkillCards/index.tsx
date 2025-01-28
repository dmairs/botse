import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import addTooltips from "./addTooltips";
import ListItem from "@mui/material/ListItem";

interface EnemySkillCardsProps {
  title: string;
  ability: string;
  link: string;
}

const markdownToHtml = (markdown: string): string => {
  let html = markdown
    .replace(/\\/g, "")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  html = addTooltips(html);
  return html;
};

const EnemySkillCards: React.FC<EnemySkillCardsProps> = ({
  title,
  ability,
  link,
}) => {
  return (
    <Card>
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: 13 + "px",
          },
          padding: 13 + "px",
        }}
      >
        <h4 style={{ marginBottom: 5 + "px" }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <span
          dangerouslySetInnerHTML={{ __html: markdownToHtml(ability) }}
        ></span>
      </CardContent>
    </Card>
  );
};

export default EnemySkillCards;
