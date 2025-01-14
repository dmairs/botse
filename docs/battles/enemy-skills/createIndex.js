// Generate new index with table for enemy skills using 'node createIndex.js' in the terminal
const fs = require("fs");
const path = require("path");

const enemySkillsDir = path.join(__dirname);
const botseDir = path.resolve(enemySkillsDir, "../../..");
const files = fs
  .readdirSync(enemySkillsDir)
  .filter((file) => file.endsWith(".md") && file !== "index.md");

const enemySkills = files.map((file) => {
  const filePath = path.join(enemySkillsDir, file);
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract front matter and content after front matter
  const frontMatterMatch = content.match(/---\s*([\s\S]*?)\s*---/);
  const frontMatter = frontMatterMatch ? frontMatterMatch[1] : "";
  const contentAfterFrontMatter = frontMatterMatch
    ? content.slice(frontMatterMatch[0].length).trim()
    : content;

  const idMatch = frontMatter.match(/id:\s*(\w+)/);
  const titleMatch = frontMatter.match(/title:\s*(.+)/);
  const hoverTextMatch = frontMatter.match(/hoverText:\s*(.+)/);

  return {
    id: idMatch ? idMatch[1] : "",
    title: titleMatch ? titleMatch[1].replace(/"/g, "") : "",
    hoverText: hoverTextMatch ? hoverTextMatch[1] : "",
    filePath: path
      .relative(
        botseDir,
        path.join(path.dirname(filePath), path.parse(filePath).name)
      )
      .replace(/\\/g, "/"),
    contentAfterFrontMatter: contentAfterFrontMatter,
  };
});

// Generate markdown content
let markdownContent = `---\nid: enemy-skills\ntitle: Enemy Skills\n---\n\n`;
markdownContent += `| Skill | Ability |\n|-------|------------|\n`;

enemySkills.forEach((skill) => {
  markdownContent += `| [${skill.title}](/${skill.filePath}) | ${skill.hoverText} |\n`;
});

fs.writeFileSync(path.join(__dirname, "index.md"), markdownContent);

// Generate JSON content
const jsonContent = JSON.stringify(enemySkills, null, 2);
fs.writeFileSync(path.join(__dirname, "enemySkills.json"), jsonContent);
