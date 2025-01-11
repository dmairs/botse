---
id: dungeon
title: Dungeon
hoverText:
---

In a dungeon battle, the map is set up beforehand but is composed of multiple tiles, which can include delve tiles or the clash tile. However, the dungeon ignores the icons printed on the tiles. Instead, enemies and other components are populated following the dungeon's specific setup diagram and rules, which appear in a [province's](/docs/campaign/provinces/) gazetteer.

## Enemy Pool

Dungeons use an overall enemy pool to populate enemies at setup, as clashes do. The maximum number of enemies that can be drawn and deployed depends on both the EP and the numbered enemy hexes in the dungeon setup diagram.

## Setup

1. **Set Up the Battle Map:** Assemble the dungeon map by placing each tile in the play area as shown in the dungeon's setup diagram.
2. **Place Cache Chips:** Place [cache](/docs/glossary/cache) chips in the hexes shown on the dungeon setup diagram. Ensure each chip has the proper side up depending on if it is a <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> or <img src="/icons/legendary-item.svg" alt="Legandary Item Icon" className="icon-svg" /> cache.
3. **Deploy Enemies:** First, deploy each objective unit (or other component) specified by the encounter text to the hexes shown in the dungeon setup diagram. Then, deploy enemies to numbered hexes and special hexes as described below.
   - **Numbered Hexes:** Calculate an enemy pool (EP). Draw and deploy the highest level enemy possible within the EP to the next numbered hex as shown in the diagram, starting with Hex 1. Subtract each enemy's level value from the EP after it is drawn and deploy its chip with the corresponding level faceup. Continue deploying enemies until the calculated EP is entirely used up, or the diagram shows no numbered hexes that are unoccupied. Any points remaining in the EP after all enemy hexes are occupied are not used.
   - **Special Hexes:** Deploy each enemy (or other component) specified by the encounter text to the star or lettered hexes shown in the dungeon setup diagram. If there are multiple star or lettered hexes to which an enemy could deploy, the party chooses which hex. If you are instructed to calculate another enemy pool to deploy these enemies, follow the same restrictions as for numbered hexes above.
4. **Deploy Adventurers:** Deploy each [adventurer](/docs/glossary/adventurer) to the entrance tile. Start by choosing an adventurer to take the first player token and deploy their chip so that they occupy any single hex. Then, proceed to deploy each other adventurer in clockwise order around the table. This becomes the permanent turn order for the rest of the battle. Each adventurer may set their [battle form](/docs/battles/battle-forms/) when deployed and choose which [item](/docs/adventurer/items) cards to place in their ready slots.
5. **Deploy Companions:** If adventurers have [companion](/docs/glossary/companion) units that are deployed during battle setup, deploy those companions to the entrance tile, if able. If multiple players have companions to deploy, deploy those companions in player turn order.
   - If there are no [unoccupied](/docs/glossary/occupied) hexes remaining on the entrance tile, set undeployed companions next to the entrance tile. They can enter the battle map during later [rounds](/docs/battles/battle-round).
6. **Set Round Counter:** Set the party's Round Counter die to 1 and place it in the square slot on the dial chip holder. Then, begin battle rounds. Trigger skills and other abilities with "start of battle" timing now.
