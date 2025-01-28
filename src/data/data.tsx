interface DataItem {
  name: string;
  url: string;
}

export const classes: DataItem[] = [
  { name: "Arcanist", url: "/docs/adventurer/classes/mage/arcanist" },
  { name: "Healer", url: "/docs/adventurer/classes/mage/healer" },
  { name: "Necromancer", url: "/docs/adventurer/classes/mage/necromancer" },
  { name: "Nightblade", url: "/docs/adventurer/classes/mage/nightblade" },
  { name: "Sorcerer", url: "/docs/adventurer/classes/mage/sorcerer" },
  { name: "Warden", url: "/docs/adventurer/classes/mage/warden" },
  { name: "Acrobat", url: "/docs/adventurer/classes/thief/acrobat" },
  { name: "Bard", url: "/docs/adventurer/classes/thief/bard" },
  { name: "Burglar", url: "/docs/adventurer/classes/thief/burglar" },
  { name: "Pilgrim", url: "/docs/adventurer/classes/thief/pilgrim" },
  { name: "Rogue", url: "/docs/adventurer/classes/thief/rogue" },
  { name: "Scout", url: "/docs/adventurer/classes/thief/scout" },
  { name: "Archer", url: "/docs/adventurer/classes/warrior/archer" },
  {
    name: "Dragonknight",
    url: "/docs/adventurer/classes/warrior/dragonknight",
  },
  { name: "Knight", url: "/docs/adventurer/classes/warrior/knight" },
  { name: "Ranger", url: "/docs/adventurer/classes/warrior/ranger" },
  { name: "Spellsword", url: "/docs/adventurer/classes/warrior/spellsword" },
  { name: "Templar", url: "/docs/adventurer/classes/warrior/templar" },
];

export const provinces: DataItem[] = [
  { name: "Black Marsh", url: "/docs/campaign/provinces/black-marsh" },
  { name: "Cyrodiil", url: "/docs/campaign/provinces/cyrodiil" },
  { name: "High Rock", url: "/docs/campaign/provinces/high-rock" },
  { name: "Morrowind", url: "/docs/campaign/provinces/morrowind" },
  { name: "Skyrim", url: "/docs/campaign/provinces/skyrim" },
  { name: "Valenwood", url: "/docs/campaign/provinces/valenwood" },
];

export const races: DataItem[] = [
  { name: "Argonian", url: "/docs/adventurer/races/argonian" },
  { name: "Breton", url: "/docs/adventurer/races/breton" },
  { name: "Dark Elf", url: "/docs/adventurer/races/dark-elf" },
  { name: "High Elf", url: "/docs/adventurer/races/high-elf" },
  { name: "Imperial", url: "/docs/adventurer/races/imperial" },
  { name: "Khajiit", url: "/docs/adventurer/races/khajiit" },
  { name: "Nord", url: "/docs/adventurer/races/nord" },
  { name: "Orc", url: "/docs/adventurer/races/orc" },
  { name: "Redguard", url: "/docs/adventurer/races/redguard" },
  { name: "Wood Elf", url: "/docs/adventurer/races/wood-elf" },
];

export const skills: DataItem[] = [
  { name: "Bow", url: "/docs/adventurer/skill-lines/warrior/bow" },
  {
    name: "Destruction Staff",
    url: "/docs/adventurer/skill-lines/mage/destruction-staff",
  },
  {
    name: "One Hand and Shield",
    url: "/docs/adventurer/skill-lines/warrior/one-hand-and-shield",
  },
  {
    name: "Two handed",
    url: "/docs/adventurer/skill-lines/warrior/two-handed",
  },
];

export const guilds: DataItem[] = [
  {
    name: "Circle of Champions",
    url: "/docs/campaign/guilds/circle-of-champions",
  },
  { name: "Eyes of the Queen", url: "/docs/campaign/guilds/eyes-of-the-queen" },

  { name: "Fighters Guild", url: "/docs/campaign/guilds/fighters-guild" },
  { name: "Mages Guild", url: "/docs/campaign/guilds/mages-guild" },
  { name: "Outer Watch", url: "/docs/campaign/guilds/outer-watch" },
  { name: "Thieves Guild", url: "/docs/campaign/guilds/thieves-guild" },
  { name: "Dark Brotherhood", url: "/docs/campaign/guilds/dark-brotherhood" },
  { name: "Psijic Order", url: "/docs/campaign/guilds/psijic-order" },
  { name: "Undaunted", url: "/docs/campaign/guilds/undaunted" },
];
