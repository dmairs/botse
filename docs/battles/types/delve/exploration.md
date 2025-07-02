---
id: exploration
title: Exploration
hoverText:
tags:
  - Delve
---

During a delve, adventurers explore the battle map by interacting with the <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes of the map. When an adventurer explores a hex, they draw a delve card and reveal a new tile to connect to the map. As tiles are connected, the map expands, and additional <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> connection hexes open up to explore.

An adventurer can trigger an exploration of a hex in 2 ways:

- **Occupying an Explorable Hex:** During their turn, an adventurer may choose to trigger an exploration when they move into or are placed in an explorable hex, or when they start their turn in that hex. The adventurer can continue a move action that was interrupted by this exploration. Exploring in this way is not considered to be an explore action. Note that [companion units](/docs/glossary/companion) cannot explore hexes.

- **Performing an Explore Action:** An adventurer can also trigger an exploration by performing an explore action targeting an explorable hex. To perform this action, choose an explorable hex in [sight](/docs/glossary/sight) and measure the distance to that hex. If it is within the adventurer's movement range (based on [Stamina](/docs/adventurer/stats/stamina)), an exploration of that hex is triggered.

:::info
You occupy every hex you move into. When you're using [Acrobatics](/docs/adventurer/skill-lines/thief/acrobatics) to move through already [occupied](/docs/glossary/occupied) hexes, you occupy those hexes, you just can't end your movement in them. You are able to explore an occupied hex if an ability allows you to move into that hex.

<a href="https://discord.com/channels/273472391403798528/1361396124782694450/1382539710303572008" target="_blank">Source</a>
:::

## Explorable Hexes

A hex with a <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> icon is an explorable hex if the following conditions are true:

- It is an edge hex, which means at least 1 of its edges is not shared with another tile.
- It is not already explored. A <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hex is explored if it is adjacent to a <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hex on another tile. Note that certain effects can cause tiles to be removed so that a previously explored hex is explorable again.
- Not all [skyshards](/docs/battles/types/delve/skyshard) have been drawn for the current encounter. After all skyshards are drawn for a delve, that delve is fully explored.

## Drawing Cards and Tiles

When your adventurer triggers an exploration of a hex, you draw a delve card, connecting the tile shown and populating it with enemies and caches. Delve cards and delve tiles combine to create unique situations in every delve, often affecting how many chips are placed, a tile's positioning, or how adventurers interact with a tile. When drawing a delve card, follow these steps:

1. **Draw Tile:** Draw a tile matching the shape shown on the delve card. If no tile of this shape is available to draw, place this card facedown with other skyshard cards you have gained for this encounter and treat it as a skyshard icon that you have acquired toward completing this delve. This exploration ends; do not draw another delve card or resolve any text on the drawn delve card. The hex remains explorable, but you must trigger another exploration to draw another card. Note: If you triggered this exploration by moving into this hex, you must move out and back in to trigger another exploration on it this turn.

2. **Trigger Effects:** Read the delve card's text and trigger any When Revealed or other immediate effects as instructed.

3. **Connect Tile:** Align the revealed tile's hex edges so that 1 of its <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes is adjacent to the hex being explored. When placed, the revealed tile cannot overlap other tiles. Further placement rules are as follows: - Both <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes must touch along a common edge. You can shift or rotate the revealed tile to an orientation of your choice, but both icons' hexes must touch. As long as this requirement is met, the tile can be placed so it is adjacent to other previously connected tiles. - A tile must be connected so that at least 1 of its <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes remains explorable, if able. The first delve tile placed must be connected to the entrance tile so only 1 of its <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes is adjacent to both of the entrance's <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hexes (which share a single <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> icon). - If the revealed tile cannot be connected without overlapping other tiles, discard its card, and return the tile to the bottom of its unexplored tiles stack. This exploration ends, but the hex remains explorable if not all skyshards have been drawn for the encounter. Note: If you triggered this exploration by moving into this hex, you must move out and back in to trigger another exploration on it this turn.
   After the tile is placed, it is now considered connected to each other tile with which it shares an adjacent hex, regardless of whether those hexes have <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> icons.

4. **Place Caches:** Place as many of the cache chips shown on the delve card as you can. Place <img src="/icons/legendary-item.svg" alt="Legandary Item Icon" className="icon-svg" /> chips (if any) before <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> chips. Start placing cache chips in the <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> hex farthest from the <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> hex that was explored to reveal this tile. Place each additional cache in the next closest <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> hex; if 2 <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> hexes are of equal distance, you may choose the hex. If there are more caches on the delve card than the tile has <img src="/icons/common-item.svg" alt="Common Item Icon" className="icon-svg" /> hexes, the remaining caches are not placed.

5. **Deploy Enemies:** Draw and deploy as many enemy chips as you can based on the EP for the revealed tile, the challenge scale, and the <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> icons on the revealed tile. Start deploying enemies to the <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hex farthest from the <img src="/icons/door.svg" alt="Door Icon" className="icon-svg" /> hex that was explored to reveal this tile. Deploy each additional enemy to the next farthest <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hex; if 2 <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hexes are of equal distance, you may choose the hex. Stop deploying enemies when the EP is entirely used, all enemies shown on the delve card are deployed, or no [unoccupied](/docs/glossary/occupied) <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hexes remain on the revealed tile (even if the EP still has points remaining). When deploying enemies, use the challenge scale as follows:

   - The left side of each row shows an icon with the number of adventurers in the party.
   - Each space to the right of the adventurers icon with a numeric value is an enemy that must be drawn, if able, and that enemy's maximum level. If the printed level is greater than the remaining EP, draw the highest level enemy possible without exceeding the EP.
   - Each enemy chip is drawn from left to right along the appropriate row. Each enemy's level is subtracted from the EP. Then, that enemy is deployed to 1 of the tile's <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hexes.
   - If there are more enemies in the challenge scale than there are <img src="/icons/enemy-deployment-hex.svg" alt="Enemy Deployment Hex Icon" className="icon-svg" /> hexes, the remaining enemies on the challenge scale are not deployed. If the EP is used up, no more enemies are deployed even if there are still enemies on the challenge scale.

6. **Place Card:** If the card has a skyshard icon (<img src="/icons/skyshard.svg" alt="Skyshard Icon" className="icon-svg" />), environment effect, or [trap](/docs/glossary/trap) that applies to the revealed tile, place the card faceup next to its tile. Otherwise, discard it.

---

:::info
**When deploying enemies to a new tile, does the EP value of previously deployed enemies reduce the EP value?**

No, you calculate a brand new EP for each delve tile placed.

<a href="https://boardgamegeek.com/thread/3445727/article/45568288#45568288" target="_blank">Source</a>
:::
