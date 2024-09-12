---
id: occupied
title: Occupied/Unoccupied
hoverText: "A hex is occupied when it contains a unit (or overland token) and unoccupied when it does not."
---

A hex is occupied when it contains a unit (or overland token) and unoccupied when it does not.

A unit cannot be deployed to or move through a hex that is occupied by another unit. Battle map hexes that do not contain units but contain cache chips are unoccupied.

- A token can move into or through a hex on the overland map that is occupied by another token.
  Note that this is different from units on the battle map.

- Some abilities allow a unit to move through occupied hexes.
  A unit cannot choose to end its movement in an occupied hex.
  If a unit would be forced to end its movement in an occupied hex, the unit that moved is instead placed in the closest unoccupied hex (if
  there are multiple closest hexes, the party chooses the hex).
