---
id: overland-phase
title: Overland Phase
sidebar_label: "2. Overland Phase"
sidebar_position: 2
hoverText: The party plans its movement across the overland map and checks for any encounters or events.
---

The party plans its movement across the overland map and checks for any encounters or events.

## 1. Start of Phase

Trigger any effects with this timing.

## 2. Move party

Your party has a base overland movement of 3, which means the party can move its token up to 3 [adjacent](/docs/glossary/adjacent) hexes. Note that some [provinces'](/docs/campaign/provinces/index) effects—such as [Black Marsh](/docs/campaign/provinces/black-marsh)'s—can modify the party's base overland movement.

- **Day 1**: If this is the first day of your session, the party must remain in its starting location and resolve a [town](/docs/campaign/day/encounter-phase/town) encounter. This does not apply during an endgame session.
- **Fatigue Movement**: After using its base overland movement, the party may continue to move by gaining [fatigue](/docs/glossary/fatigue) for each additional hex of movement. For each additional hex of movement, each adventurer must gain 1 light fatigue. If no light fatigue dice are available, they gain 1 overfatigue instead. The number of additional hexes moved cannot exceed the party's base movement rate. The party must stop if 1 or more adventurers' cooldown tracks are full.

:::info
It is possible for the party to end its movement in a hex with no icon and trigger no encounter; these hexes without icons have no game effect.
:::

:::tip[FAQ]
**Can you move through landmarks?**

You are permitted to move through landmarks on the overland map without triggering them. A landmark is triggered if the party ends its movement on it, same as [towns](/docs/campaign/day/encounter-phase/town).

<a href="https://support.chiptheorygames.com/support/solutions/articles/33000290533" target="_blank">Source</a>
:::

## 3. Trigger Encounter

By ending its movement in specific hexes on the map, the party triggers 1 of the following types of encounters in descending order of priority below. The party does not resolve this encounter until the next phase, the Encounter Phase.

### Quest Encounter

These are triggered as described by the party's current quest step in the gazetteer, or by a side quest card. This typically happens when the party moves into a specific hex or fulfills some other requirement. Quest encounters take precedence over town or overland encounters, meaning that you must resolve the quest encounter that day rather than a town or overland encounter. If multiple quest encounters would trigger at the same time, guild quest encounters take precedence over side quest encounters.

### Town Encounter

These are triggered when the party ends its move in a [town's](/docs/campaign/day/encounter-phase/town) (<img src="/icons/town.svg" alt="Town Icon" class="icon-svg" />) hex on the overland map. Each town is described in its own entry in the gazetteer. During the encounter, each adventurer can take 2 town actions to use the town's features, such as its trainer or shop.

### Overland Encounter

These are triggered when the party moves into a hex with a landmark. In this case, the party must draw an overland card which describes an encounter that occurs in the wilds of Tamriel. The landmark at that location determines the type of overland card it draws as described below.

#### Peaceful landmark <img src="/icons/peaceful.svg" alt="Peaceful Landmark Icon" class="icon-svg" />

Draw a peaceful encounter card.

After the party resolves a peaceful encounter card, set that card aside until the end of the day so its icon can be referred to when activating the [provinces'](/docs/campaign/provinces/index) effect during the [End of Day Phase](/docs/campaign/day/end-of-day-phase).

#### Conflict landmark <img src="/icons/conflict.svg" alt="Conflict Outcome Icon" class="icon-svg" />

Draw a conflict encounter card.

#### Unstable landmark <img src="/icons/unstable-landmark.svg" alt="Unstable Landmark Icon" class="icon-svg" />

Roll the unstable die and draw the type of overland card matching the icon result. If the result is <img src="/icons/town.svg" alt="Town Icon" class="icon-svg" />, trigger a town encounter with a [traveling caravan](/docs/campaign/day/encounter-phase/travelling-caravan) instead.

If a choice icon on the back of the overland card is the “unstable” version of itself (<img src="/icons/unstable-clash.svg" alt="Unstable Clash Icon"  class="icon-svg" /> / <img src="/icons/unstable-delve.svg" alt="Unstable Delve Icon" class="icon-svg" /> / <img src="/icons/unstable-peaceful.svg" alt="Unstable Peaceful Icon" class="icon-svg" />), it is an unstable choice. If the party is at an unstable landmark, they **must** resolve that choice (that choice is optional if not at an unstable landmark). After the party completes an encounter at an unstable landmark (regardless of whether the encounter was successful), each adventurer gains 2 [tenacity](/docs/glossary/tenacity) during the [Reward Phase](/docs/campaign/day/reward-phase).
