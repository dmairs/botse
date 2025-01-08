---
id: engage
title: Engage
hoverText: Adventurers may engage multiple times per turn but are limited by the dice they can roll and [fatigue](/docs/glossary/fatigue) they can gain. You may perform a [move](/docs/battles/adventurer-turn/move) action before or after you perform an engage action, but not both.
---

This action represents your adventurer using their skills in battle. Adventurers may engage multiple times per turn but are limited by the dice they can roll and [fatigue](/docs/glossary/fatigue) they can gain. You may perform a [move](/docs/battles/adventurer-turn/move) action before or after you perform an engage action, but not both.

To perform an engage action, follow the steps below. An ability that instructs an adventurer to engage outside of an engage action is also resolved using these steps.

## Engage Steps

1. **Gain Fatigue:** If this is your first engage action this turn, skip this step. For each additional engage action, gain 1 [light fatigue](/docs/glossary/fatigue). If playing on [Expert](/docs/difficulty-levels/expert) difficulty, you must gain 2 light fatigue instead of 1.
2. **Choose Battle Form:** Declare the [battle form](docs/battles/battle-forms/) you will use. You may change to another form by marking the new form on your adventurer mat. Your battle form determines your [range](/docs/glossary/range) and dice that can be rolled.
3. **Declare Target:** Skill dice that deal damage to the target of an engage require you to choose a target. You can choose only 1 target unit per engage (unless an ability specifies), and the target must be in [sight](/docs/glossary/sight) and [range](/docs/glossary/range) for your current battle form. Abilities and effects that refer to a target can only be resolved on that unit in step 5. Choosing a target during your engage is optional. If an adventurer declares a target during the engage, the target unit is being engaged by that adventurer.
4. **Gather and Roll Dice:** Gather a number of dice to roll. This number is limited by your [Stamina](/docs/stats/stamina) and [Magicka](/docs/stats/magicka) stats (the stat that a [skill line](/docs/adventurer/skill-lines/) is tied to is shown on that skill line's reference sheet). Each time you engage, you may roll up to a number of dice that use Stamina equal to your Stamina stat, and likewise for your Magicka stat. If you have 1 or more ready [<img src="/icons/weapon.svg" alt="Weapon Icon" class="icon-svg" />](/docs/items/types/weapon) items with an ability that matches your current battle form, you may now choose 1 [<img src="/icons/weapon.svg" alt="Weapon Icon" class="icon-svg" />](/docs/items/types/weapon) item's abilities to resolve. Then, roll all of the dice together.
   - You can gather skill dice only if they are available in your attribute rows and if they have no battle form icon or have an icon that matches your current form.
   - Combat dice can be gathered and rolled with any battle form except [<img src="/icons/magic.svg" alt="Magic Icon" class="icon-svg" />](docs/battles/battle-forms/magic).
   - You may gather dice based on different stats. If you do so, each die is counted toward its own stat's limit. For example, it is possible to roll [Destruction Staff](/docs/adventurer/skill-lines/mage/destruction-staff) dice (which are based on the Magicka stat and use [<img src="/icons/magic.svg" alt="Magic Icon" class="icon-svg" />](docs/battles/battle-forms/magic) battle form) together with [Acrobatics](/docs/adventurer/skill-lines/thief/acrobatics) dice (which are based on the Stamina stat and have no battle form icon).
   - If an ability adds free Combat dice, enemy Combat dice are used instead of Combat skill dice. These dice do not count against your Stamina or Magicka stat but are treated as Combat dice for other effects—such as [<img src="/icons/weapon.svg" alt="Weapon Icon" class="icon-svg" />](/docs/items/types/weapon) items.
   - If you gather no dice during this step, the remaining engage action steps are still completed for the purpose of triggering other abilities.
5. **Resolve the Roll:** Check the rolled results. Then, follow the steps below in order.
   - **a. Determine results to resolve:** You are not required to resolve a die's result. Some abilities allow results to be modified by rerolling or changing them to another result; this must be done before resolving other abilities.
   - **b. Resolve abilities:** Abilities are resolved one at a time in the order the player chooses.
     - If an ability deals damage, total all damage dealt to each unit by that ability and deal it to one affected unit at a time, in the order the player chooses. **Important:** Keep track of the total amount of damage dealt to a unit during this engage as it reduces that unit's defense, which does not reset until after this action ends.
     - To resolve a skill die with a [<img src="/icons/tenacity.svg" alt="Tenacity Icon" class="icon-svg"/>](/docs/glossary/tenacity) result, exhaust that die and increase your tenacity by 1.
     - Enemy Combat dice added to the roll as free dice must be discarded after their results are resolved. These dice cannot be placed in an [active slot](/docs/glossary/active-slot) while in defensive battle form ([<img src="/icons/defensive.svg" alt="Defensive Icon" class="icon-svg" />](docs/battles/battle-forms/defensive)). Note also that these dice do not have [<img src="/icons/tenacity.svg" alt="Tenacity Icon" class="icon-svg"/>](/docs/glossary/tenacity) icons, so they cannot be resolved to add to tenacity.
     - Any die with a result you chose not to resolve must be exhausted.
6. **Units React:** Enemies, adventurers, or companions may resolve abilities that are triggered after this engage. Enemies must resolve these abilities, if able.

## Resolving Skill Abilities

Each skill die ability has at least 1 of the following codes that determines how it is resolved and where the die must be placed afterwards. Some skills have wording that can affect non-target units. If an ability requires that a die be exhausted, that die must be placed in the leftmost open position in the cooldown track.

| Icon                                                              | Name                                            |
| ----------------------------------------------------------------- | ----------------------------------------------- |
| <img src="/icons/active-slot.svg" alt="Active Slot Icon" />       | [Active Slot](/docs/glossary/active-slot)       |
| <img src="/icons/cooldown-track.svg" alt="Cooldown Track Icon" /> | [Cooldown Track](/docs/glossary/cooldown-track) |
| <img src="/icons/drained.svg" alt="Drained Icon" />               | [Drained](/docs/glossary/drained)               |
| <img src="/icons/instant.svg" alt="Instant Icon" />               | [Instant](/docs/glossary/instant)               |
| <img src="/icons/status-effect.svg" alt="Status Effect Icon" />   | [Status Effect](/docs/glossary/status-effect)   |

## Rolling Skill Dice outside of battle

Some skill die abilities allow skill dice to be rolled during non-battle encounters or even outside of the [Encounter Phase](/docs/day/encounter-phase). If 1 or more skill dice can be rolled this way, follow the engage action sequence above to resolve that roll, with the following exceptions:

- Ignore the Gain Fatigue, Declare Target and Choose Battle Form steps unless otherwise specified.
- Resolve any effects that occur in response to your roll during the Units React step.

:::tip[FAQ]
If an enemy has a skill that triggers **after** it is engaged, that skill does not trigger if the enemy is defeated during that engage.
:::
