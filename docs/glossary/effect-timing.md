---
id: effect-timing
title: Effect Timing
hoverText: Effects must be resolved one at a time. Each effect must be completely resolved before resolving the next effect.
---

Some abilities have effects that depend on others for timing or have multiple effects. These abilities are resolved following the rules below:

- Effects must be resolved one at a time. Each effect must be completely resolved before resolving the next effect.
  - A “when” effect is resolved immediately when the triggering event occurs.
  - An “after” effect is resolved immediately following the triggering event.
  - A “before” effect is resolved immediately before the triggering event.
- If different effects are resolved with the same timing, the players decide the order in which those effects are resolved.
- Some abilities have multiple effects with the same timing, such as the Purge skill in the [Restoring Light](/docs/skill-lines/mage/restoring-light) skill line. If some of these effects can be resolved and others cannot, the effects that can be resolved are resolved. Effects that cannot be resolved are ignored.
