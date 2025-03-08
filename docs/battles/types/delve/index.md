---
id: index
title: Delve
hoverText: Delve battles represent adventurers navigating an uncharted, labyrinthine space.
slug: /battles/types/delve/index
tags:
  - Delve
---

Delve battles represent adventurers navigating an uncharted, labyrinthine space. In a delve battle, the map is composed of multiple tiles marked with icons. These icons interact with delve cards and are used as reference points when additional tiles are revealed. The adventurers move through the delve, exploring new rooms, unlocking [caches](/docs/glossary/cache), and gaining [skyshards](/docs/battles/types/delve/skyshard)—pieces of crystalized Magicka that are used to track the party's progress.

## Enemy Pool

Unlike in the other battle modes it is not calculated once at the beginning of the battle, but for each individual tile as that tile is explored. Each delve card has a challenge scale, which shows the maximum number of enemies that can be drawn for a revealed tile and their maximum levels. The number of enemies that are actually deployed depends on the EP available, the drawn card's challenge scale, and the number of hexes on the revealed tile. The procedure for deploying enemies in a delve is described under Delve Exploration.

## Setup

1. **Set Up the Battle Map:** Separate the delve tiles by shape into separate stacks, keeping them facedown. Then, place the entrance tile in the play area (leaving plenty of room to expand the map). Some [provinces](/docs/campaign/provinces/index) use additional setup rules for delves. Refer to the province's Delve Feature section at the front of the gazetteer for these rules.
2. **Place Cache Chips:** No cache chips are placed.
3. **Deploy Enemies:** No enemy chips are deployed. These are deployed as additional tiles are explored.
4. **Deploy Adventurers:** Deploy each [adventurer](/docs/glossary/adventurer) to the entrance tile. Start by choosing an adventurer to take the first player token and deploy their chip so that they occupy any single hex. Then, proceed to deploy each other adventurer in clockwise order around the table. This becomes the permanent turn order for the rest of the battle. Each adventurer may set their [battle form](/docs/battles/battle-forms/index) when deployed and choose which [item](/docs/adventurer/items/index) cards to place in their ready slots.
   - In a delve battle, an adventurer in a <img src="/icons/door.svg" alt="Door Icon" class="icon-svg" /> hex may explore and connect the next tile at the start of their first [turn](/docs/glossary/turn).
5. **Deploy Companions:** If adventurers have [companion](/docs/glossary/companion) units that are deployed during battle setup, deploy those companions to the entrance tile, if able. If multiple players have companions to deploy, deploy those companions in player turn order.
   - If there are no [unoccupied](/docs/glossary/occupied) hexes remaining on the entrance tile, set undeployed companions next to the entrance tile. They can enter the battle map during later [rounds](/docs/battles/battle-round).
6. **Set Round Counter:** Set the party's Round Counter die to 1 and place it in the square slot on the dial chip holder. Then, begin battle rounds. Trigger skills and other abilities with "start of battle" timing now.

---

:::tip[FAQ]
**Do you always get XP for skyshards?**

The only battle objective which gives you XP for the number of skyshards collected is the [Uncover](/docs/battles/objectives/uncover) objective. Delves with the [Survey](/docs/battles/objectives/survey), [Eliminate](/docs/battles/objectives/eliminate), or any other objective, only give the XP as stated in the encounter.

<a href="https://support.chiptheorygames.com/support/solutions/articles/33000292564" target="_blank">Source</a>
:::

:::info
**How does Uncover differ from Survey?**

| Aspect             | Uncover                                                                                                                                                         | Survey                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| XP Rewards         | 1 XP for each collected skyshard and encounter reward (if successful). You still gain XP for skyshards if you retreat with at least 1 party member still alive. | Encounter Reward XP only           |
| Partial Completion | You gain XP for each skyshard even if retreating before completing the encounter.                                                                               | Not possible, encounter is failed. |
| Encounter Duration | End of battle round, however it is optional even after objective is met.                                                                                        | End of battle round, not optional. |

:::
