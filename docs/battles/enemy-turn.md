---
id: enemy-turn
title: Enemy Turn
hoverText: After all [adventurer turns](/docs/battles/adventurer-turn/) (and any [companion](/docs/glossary/companion) turns), each [enemy](/docs/glossary/enemy) takes a turn in order from highest to lowest level value.
---

After all [adventurer turns](/docs/battles/adventurer-turn/) (and any [companion](/docs/glossary/companion) turns), each [enemy](/docs/glossary/enemy) takes a turn in order from highest to lowest level value. [Quest units](/docs/glossary/quest-unit) are treated as having the highest level in any encounter. If multiple enemies have the same level, the party decides which order those enemies act in each round.

## Turn Sequence

1. **Start of Turn:** Trigger any abilities with this timing, such as status effects on the enemy chip.
2. **Move:** Move the enemy up to 2 hexes. The enemy moves only if there are no [targetable](/docs/glossary/targetable) units in its [range](/docs/glossary/range). If the enemy must move, it moves toward the [closest](/docs/glossary/closest) hex where at least 1 targetable unit would be within its range and in [sight](/docs/glossary/sight).
3. **Engage:** The enemy engages opposing units, if able, following these substeps in the order below.
   - **a. Determine Target(s):** The enemy targets a number of opposing units up to its target value that are within its [range](/docs/glossary/range) and in [sight](/docs/glossary/sight), in the order its priority icon dictates. If multiple units have the same priority, the party chooses the target.
   - **b. Gather and Roll Dice:** Roll all of the enemy's Combat dice. If the enemy can engage multiple targets in range, it rolls its Combat dice once and resolves the roll for each target during the next step. Units that are being targeted during the enemy's engage are being engaged by that enemy. <u>If the enemy gathers no dice during this step (for example, if it has a Combat value of 0), this step is still completed for the purpose of triggering other abilities.</u>
   - **c. Resolve the Roll:** Resolve the total rolled Combat dice value against the target to deal the rolled amount of damage. If there are multiple targets, resolve the roll against each, starting with the enemy's highest priority unit and continuing in descending order (for example the strongest unit, then next strongest). If target units have the same HP value, the party decides which to resolve the roll against first.
   - **d. Units React:** Adventurers, companions, or enemies may resolve abilities that are triggered after this engage. Enemies must resolve these abilities, if able.
4. **End of Turn**: Trigger any abilities with this timing. Then, the next enemy in level order takes its turn.

## Enemy Movement

Enemies only move if they do not already have a [targetable](/docs/glossary/targetable) [unit](/docs/glossary/unit) within their [range](/docs/glossary/range). If they do have a targetable unit within range, they skip movement.

If an enemy must move, it first determines a destination hex to move toward. The destination must be the **[closest](/docs/glossary/closest)** [unoccupied](/docs/glossary/occupied) hex where at least 1 **targetable unit** would be within that enemy's range and in sight. To be an eligible destination hex, each hex between the enemy and its destination must be unoccupied. After the enemy determines its destination hex, it moves along those hexes. It moves even if it cannot reach the destination hex with its movement this turn.

When the enemy moves, it ends its movement immediately after it moves into its destination hex—even if it could move additional hexes to put more units in range.

If there are multiple destination hexes possible, the enemy uses its priority icon to determine whether to prioritize the strongest or weakest targetable unit and selects its destination hex accordingly. If there are still multiple destination hexes possible, the party decides which it moves to. Note that the enemy does not consider its number of possible targets when determining its movement.

If there are no valid destination hexes available, the enemy instead finds the closest opposing unit, even if it is untargetable. The enemy moves to the closest hex it can get to that is as few hexes from that opposing unit as possible.

## Enemy Skills

Most enemies have 1 or more skills, which are abilities that trigger as described in the Enemy Skills Reference. It is recommended that players review an enemy's skills as the chip is deployed to the map. If an enemy engages multiple targets, each target is affected by each of the enemy's relevant skills.

[See here](/docs/battles/enemy-skills) for a list of all enemy skills.
