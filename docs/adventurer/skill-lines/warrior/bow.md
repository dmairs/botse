---
id: bow
title: Bow
---

# <img src="/icons/skills/bow/icon.png" alt="Bow" className="icon-svg" /> Bow

**Associated Stat:** [Stamina](/docs/adventurer/stats/stamina)

**Required Battle Form:** [<img src="/icons/ranged-weapon.svg" alt="Ranged Weapon Icon" className="icon-svg" />](/docs/battles/battle-forms/ranged-weapon)

## Level 1

### Snipe

**Dice Supply:** 4

<img src="/icons/skills/bow/snipe-all-results.png" className="skill-icon" />

| Icon                                                             | Ability                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="/icons/skills/bow/snipe.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Deal X damage to your target. Ignore 1 [defense](/docs/adventurer/stats/defense) on your target for this [engage](/docs/battles/adventurer-turn/engage). |

## Level 2

### Volley

**Dice Supply:** 1

| Icon                                                              | Ability                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/icons/skills/bow/volley.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Deal a total of 4 damage, distributed as you choose among [enemies](/docs/glossary/enemy) [adjacent](/docs/glossary/adjacent) to you. [Then](/docs/glossary/then), [place](/docs/glossary/move-or-place) yourself in an [unoccupied](/docs/glossary/occupied) hex 2-4 hexes away from your current hex. |

:::info
**How does Volley and [Riposte](/docs/battles/enemy-skills/riposte) interact?**

Whether or not units are adjacent is determined at the time the die is resolved, not at the time the damage is applied.

Volley deals damage to an adjacent enemy, so if that enemy has Riposte, Riposte triggers, because it reacts to being dealt damage by an adjacent unit.

Whether you resolve the Riposte damage or the movement first is up to you, but resolving the move first doesn't prevent the Riposte damage, because they were adjacent at the time the damage was dealt.

<a href="https://discord.com/channels/273472391403798528/1394258182729367695/1430289898585198715" target="_blank">Source</a>

---

**Can you place yourself without dealing damage?**

No, according to the "Resolving Partial Skills and Abilities" rule, anything before a **then** is considered to be the cost of the skill.

<a href="https://discord.com/channels/273472391403798528/1361396124782694450/1387191141656559696" target="_blank">Source</a>

---

**How does Volley work with [Iron Bark](/docs/battles/enemy-skills/iron-bark)?**

Any restrictions regarding which units a die can be resolved against (for example, if a result requires adjacency) are assessed at the time the die is resolved, not at the time the damage is applied. Volley damages an adjacent enemy. Therefore the enemy must be adjacent at the time that Volley is resolved - even if that damage is pooled and then later applied after you are no longer adjacent.

Iron Bark wouldn't trigger because you were adjacent when the damage was dealt.

<a href="https://discord.com/channels/273472391403798528/1394290053613879366/1405222483912687716" target="_blank">Source</a>
:::

### Acid Spray

**Dice Supply:** 1

| Icon                                                                  | Ability                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/icons/skills/bow/acid-spray.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Select up to 3 [targetable](/docs/glossary/targetable) [enemies](/docs/glossary/enemy). [Roll 2 D6](/docs/glossary/roll-a-d6) for each. Apply a [Bane](/docs/battles/status-effects/bane) ([<img src="/icons/bane.svg" alt="Bane Icon" className="icon-svg" />](/docs/battles/status-effects/bane)) status die to each enemy for whom you roll a total of 7 or higher. |

## Level 3

### Vinedusk Training

**Dice Supply:** 2

| Icon                                                                         | Ability                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/icons/skills/bow/vinedusk-training.png" className="skill-icon" /> | [<img src="/icons/active-slot.svg" alt="Active Slot Icon" className="icon-svg" />](/docs/glossary/active-slot): At the [start of your turn](/docs/battles/adventurer-turn/index/), you may exhaust this die to [recover](/docs/glossary/recover) up to 2 Bow skill dice, or up to 3 if they are all Snipe dice. |

### Rapid Fire

**Dice Supply:** 2

| Icon                                                                    | Ability                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="/icons/skills/bow/rapid-fire-1.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Deal 2 damage to your target for each Snipe die in your cooldown track prior to this [engage](/docs/battles/adventurer-turn/engage).                                                                                                               |
| <img src="/icons/skills/bow/rapid-fire-2.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Deal 2 damage to your target for each Snipe die in your cooldown track prior to this [engage](/docs/battles/adventurer-turn/engage). [Then](/docs/glossary/then), recover those dice, replacing them with light [fatigue](/docs/glossary/fatigue). |

:::info

**How do two copies of Rapid Fire (recovering side) resolve?**

Once the first one is resolved, the second wouldn't do anything because you wouldn't have any Snipe dice in your cooldown track upon resolving it. Just because there are two copies of a die in the supply, doesn't mean they necessarily work when rolled together and getting the same result.

<a href="https://discord.com/channels/273472391403798528/1361396124782694450/1387182043573649440" target="_blank">Source</a>

:::

### Arrow Barrage

**Dice Supply:** 1

| Icon                                                                       | Ability                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="/icons/skills/bow/arrow-barrage-1.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): Deal 2 damage to your target. [Then](/docs/glossary/then), choose to either roll Arrow Barrage again or exhaust it.                                                                                                  |
| <img src="/icons/skills/bow/arrow-barrage-2.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): You must resolve this result. You are dealt 2 [true damage](/docs/glossary/true-damage) unless you [drain](/docs/glossary/drained) all skill dice rolled during this [engage](/docs/battles/adventurer-turn/engage). |

## Level 4

### Scatter Shot

**Dice Supply:** 1

| Icon                                                                    | Ability                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/icons/skills/bow/scatter-shot.png" className="skill-icon" /> | [<img src="/icons/instant.svg" alt="Instant Icon" className="icon-svg" />](/docs/glossary/instant): All damage dealt to your target this [engage](/docs/battles/adventurer-turn/engage) [may](/docs/glossary/may) also be dealt to another [targetable](/docs/glossary/targetable) [enemy](/docs/glossary/enemy). [Defense](/docs/adventurer/stats/defense) ignored as a result of Snipe dice may also be ignored for this enemy. |
