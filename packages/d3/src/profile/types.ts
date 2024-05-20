export interface AccountResponse {
  battleTag: string;
  paragonLevel: number;
  paragonLevelHardcore: number;
  paragonLevelSeason: number;
  paragonLevelSeasonHardcore: number;
  guildName: string;
  heroes: Array<Hero>;
  lastHeroPlayed: number;
  lastUpdated: number;
  kills: AccountResponseKills;
  highestHardcoreLevel: number;
  timePlayed: TimePlayed;
  progression: Progression;
  seasonalProfiles: Record<`season${number}`, Season>;
  blacksmithSeason: Artisan;
  blacksmithHardcore: Artisan;
  jewelerSeason: Artisan;
  mysticSeason: Artisan;
  jewelerHardcore: Artisan;
  mysticHardcore: Artisan;
  blacksmithSeasonHardcore: Artisan;
  jewelerSeasonHardcore: Artisan;
  mysticSeasonHardcore: Artisan;
  blacksmith: Artisan;
  jeweler: Artisan;
  mystic: Artisan;
}

interface Artisan {
  slug: 'blacksmith' | 'jeweler' | 'mystic';
  level: number;
}

interface Hero {
  id: number;
  name: string;
  class: string;
  classSlug: string;
  gender: number;
  level: number;
  kills: HeroKills;
  paragonLevel: number;
  hardcore: boolean;
  seasonal: boolean;
  dead: boolean;
  'last-updated': number;
}

interface HeroKills {
  elites: number;
}

interface AccountResponseKills {
  monsters: number;
  elites: number;
  hardcoreMonsters: number;
}

interface Progression {
  act1: boolean;
  act3: boolean;
  act2: boolean;
  act5: boolean;
  act4: boolean;
}

interface Season {
  seasonId: number;
  paragonLevel: number;
  paragonLevelHardcore: number;
  kills: AccountResponseKills;
  timePlayed: TimePlayed;
  highestHardcoreLevel: number;
}

interface TimePlayed {
  'demon-hunter': number;
  barbarian: number;
  'witch-doctor': number;
  necromancer: number;
  wizard: number;
  monk: number;
  crusader: number;
}

export interface AccountHeroResponse {
  id: number;
  name: string;
  class: string;
  gender: number;
  level: number;
  paragonLevel: number;
  kills: Kills;
  hardcore: boolean;
  seasonal: boolean;
  seasonCreated: number;
  skills: Skills;
  items: Record<string, Item>;
  followers: Followers;
  legendaryPowers: Array<Item>;
  progression: HeroProgression;
  alive: boolean;
  lastUpdated: number;
  highestSoloRiftCompleted: number;
  stats: Record<string, number>;
}

interface Followers {
  templar: Templar;
  scoundrel: Scoundrel;
  enchantress: Enchantress;
}

interface Enchantress {
  slug: string;
  level: number;
  items: EnchantressItems;
  stats: Stats;
  skills: Array<unknown>;
}

interface EnchantressItems {
  mainHand: Item;
}

interface Item {
  id: string;
  name: string;
  icon: string;
  displayColor?: DisplayColor;
  tooltipParams: string;
  dyeColor?: Item;
}

interface Stats {
  goldFind: number;
  magicFind: number;
  experienceBonus: number;
}

interface Scoundrel {
  slug: string;
  level: number;
  items: Record<string, Item>;
  stats: Stats;
  skills: Array<Skill>;
}

interface Skill {
  slug: string;
  name: string;
  icon: string;
  level: number;
  tooltipUrl: string;
  description: string;
  descriptionHtml: string;
  flavorText?: string;
}

interface Templar {
  slug: string;
  level: number;
  items: TemplarItems;
  stats: Stats;
  skills: Array<Skill>;
}

interface TemplarItems {
  head: Item;
  torso: Item;
  shoulders: Item;
  waist: Item;
  hands: Item;
  bracers: Item;
  feet: Item;
  mainHand: Item;
  offHand: Item;
}

interface Kills {
  elites: number;
}

interface HeroProgression {
  act1: Act;
  act2: Act;
  act3: Act;
  act4: Act;
  act5: Act;
}

interface Act {
  completed: boolean;
  completedQuests: Array<CompletedQuest>;
}

interface CompletedQuest {
  slug: string;
  name: string;
}

interface Skills {
  active: Array<Active>;
  passive: Array<Passive>;
}

interface Active {
  skill: Skill;
  rune: Rune;
}

interface Rune {
  slug: string;
  type: string;
  name: string;
  level: number;
  description: string;
  descriptionHtml: string;
}

interface Passive {
  skill: Skill;
}

type DisplayColor = 'blue' | 'green' | 'orange' | 'white' | 'yellow';

export interface AccountHeroItemsResponse {
  id: string;
  name: string;
  icon: string;
  displayColor: DisplayColor;
  tooltipParams: string;
  requiredLevel: number;
  itemLevel: number;
  stackSizeMax: number;
  accountBound: boolean;
  flavorText: string;
  typeName: string;
  type: Record<string, boolean | string>;
  armor: number;
  attacksPerSecond: number;
  minDamage: number;
  maxDamage: number;
  elementalType?: string;
  slots: string;
  attributes: Attributes;
  attributesHtml: Attributes;
  openSockets: number;
  seasonRequiredToDrop: number;
  isSeasonRequiredToDrop: boolean;
  set?: Set;
  gems?: Array<Gem>;
  craftedBy?: CraftedBy;
  damage?: string;
  dps?: string;
}

interface Attributes {
  primary: Array<string>;
  secondary?: Array<string>;
}

interface CraftedBy {
  id: string;
  slug: string;
  name: string;
  cost: number;
  reagents: Array<Reagent>;
  itemProduced: ItemProduced;
}

interface ItemProduced {
  id: string;
  path: string;
}

interface Reagent {
  quantity: number;
  item: AccountHeroItem;
}

interface AccountHeroItem {
  id: string;
  slug: string;
  name: string;
  icon: string;
  path: string;
}

interface Gem {
  item: AccountHeroItem;
  attributes: Array<string>;
  isGem: boolean;
  isJewel: boolean;
  jewelRank?: number;
  jewelSecondaryUnlockRank?: number;
}

interface Set {
  name: string;
  slug: string;
  description: string;
  descriptionHtml: string;
}

export interface AccountHeroFollowerItemsResponse {
  templar: Record<string, FollowerItem>;
  scoundrel: Record<string, FollowerItem>;
  enchantress: Record<string, FollowerItem>;
}

interface FollowerItem {
  accountBound: boolean;
  armor: number;
  attacksPerSecond: number;
  attributes?: Attributes;
  attributesHtml?: Attributes;
  blockChance?: string;
  craftedBy?: CraftedBy;
  damage?: string;
  displayColor: string;
  dps?: string;
  dye?: Dye;
  flavorText?: string;
  icon: string;
  id: string;
  isSeasonRequiredToDrop: boolean;
  itemLevel: number;
  maxDamage: number;
  minDamage: number;
  name: string;
  openSockets: number;
  requiredLevel: number;
  seasonRequiredToDrop: number;
  set?: Set;
  slots: string;
  stackSizeMax: number;
  tooltipParams: string;
  type: Record<string, boolean | string>;
  typeName: string;
}

interface Dye {
  id: string;
  name: string;
  icon: string;
  tooltipParams: string;
}
