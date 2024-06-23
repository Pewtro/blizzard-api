export interface AccountResponse {
  battleTag: string;
  blacksmith: Artisan;
  blacksmithHardcore: Artisan;
  blacksmithSeason: Artisan;
  blacksmithSeasonHardcore: Artisan;
  guildName: string;
  heroes: Array<Hero>;
  highestHardcoreLevel: number;
  jeweler: Artisan;
  jewelerHardcore: Artisan;
  jewelerSeason: Artisan;
  jewelerSeasonHardcore: Artisan;
  kills: AccountResponseKills;
  lastHeroPlayed: number;
  lastUpdated: number;
  mystic: Artisan;
  mysticHardcore: Artisan;
  mysticSeason: Artisan;
  mysticSeasonHardcore: Artisan;
  paragonLevel: number;
  paragonLevelHardcore: number;
  paragonLevelSeason: number;
  paragonLevelSeasonHardcore: number;
  progression: Progression;
  seasonalProfiles: Record<`season${number}`, Season>;
  timePlayed: TimePlayed;
}

interface Artisan {
  level: number;
  slug: 'blacksmith' | 'jeweler' | 'mystic';
}

interface Hero {
  class: string;
  classSlug: string;
  dead: boolean;
  gender: number;
  hardcore: boolean;
  id: number;
  kills: HeroKills;
  'last-updated': number;
  level: number;
  name: string;
  paragonLevel: number;
  seasonal: boolean;
}

interface HeroKills {
  elites: number;
}

interface AccountResponseKills {
  elites: number;
  hardcoreMonsters: number;
  monsters: number;
}

interface Progression {
  act1: boolean;
  act2: boolean;
  act3: boolean;
  act4: boolean;
  act5: boolean;
}

interface Season {
  highestHardcoreLevel: number;
  kills: AccountResponseKills;
  paragonLevel: number;
  paragonLevelHardcore: number;
  seasonId: number;
  timePlayed: TimePlayed;
}

interface TimePlayed {
  barbarian: number;
  crusader: number;
  'demon-hunter': number;
  monk: number;
  necromancer: number;
  'witch-doctor': number;
  wizard: number;
}

export interface AccountHeroResponse {
  alive: boolean;
  class: string;
  followers: Followers;
  gender: number;
  hardcore: boolean;
  highestSoloRiftCompleted: number;
  id: number;
  items: Record<string, Item>;
  kills: Kills;
  lastUpdated: number;
  legendaryPowers: Array<Item>;
  level: number;
  name: string;
  paragonLevel: number;
  progression: HeroProgression;
  seasonal: boolean;
  seasonCreated: number;
  skills: Skills;
  stats: Record<string, number>;
}

interface Followers {
  enchantress: Enchantress;
  scoundrel: Scoundrel;
  templar: Templar;
}

interface Enchantress {
  items: EnchantressItems;
  level: number;
  skills: Array<unknown>;
  slug: string;
  stats: Stats;
}

interface EnchantressItems {
  mainHand: Item;
}

interface Item {
  displayColor?: DisplayColor;
  dyeColor?: Item;
  icon: string;
  id: string;
  name: string;
  tooltipParams: string;
}

interface Stats {
  experienceBonus: number;
  goldFind: number;
  magicFind: number;
}

interface Scoundrel {
  items: Record<string, Item>;
  level: number;
  skills: Array<Skill>;
  slug: string;
  stats: Stats;
}

interface Skill {
  description: string;
  descriptionHtml: string;
  flavorText?: string;
  icon: string;
  level: number;
  name: string;
  slug: string;
  tooltipUrl: string;
}

interface Templar {
  items: TemplarItems;
  level: number;
  skills: Array<Skill>;
  slug: string;
  stats: Stats;
}

interface TemplarItems {
  bracers: Item;
  feet: Item;
  hands: Item;
  head: Item;
  mainHand: Item;
  offHand: Item;
  shoulders: Item;
  torso: Item;
  waist: Item;
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
  name: string;
  slug: string;
}

interface Skills {
  active: Array<Active>;
  passive: Array<Passive>;
}

interface Active {
  rune: Rune;
  skill: Skill;
}

interface Rune {
  description: string;
  descriptionHtml: string;
  level: number;
  name: string;
  slug: string;
  type: string;
}

interface Passive {
  skill: Skill;
}

type DisplayColor = 'blue' | 'green' | 'orange' | 'white' | 'yellow';

export interface AccountHeroItemsResponse {
  accountBound: boolean;
  armor: number;
  attacksPerSecond: number;
  attributes: Attributes;
  attributesHtml: Attributes;
  craftedBy?: CraftedBy;
  damage?: string;
  displayColor: DisplayColor;
  dps?: string;
  elementalType?: string;
  flavorText: string;
  gems?: Array<Gem>;
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

interface Attributes {
  primary: Array<string>;
  secondary?: Array<string>;
}

interface CraftedBy {
  cost: number;
  id: string;
  itemProduced: ItemProduced;
  name: string;
  reagents: Array<Reagent>;
  slug: string;
}

interface ItemProduced {
  id: string;
  path: string;
}

interface Reagent {
  item: AccountHeroItem;
  quantity: number;
}

interface AccountHeroItem {
  icon: string;
  id: string;
  name: string;
  path: string;
  slug: string;
}

interface Gem {
  attributes: Array<string>;
  isGem: boolean;
  isJewel: boolean;
  item: AccountHeroItem;
  jewelRank?: number;
  jewelSecondaryUnlockRank?: number;
}

interface Set {
  description: string;
  descriptionHtml: string;
  name: string;
  slug: string;
}

export interface AccountHeroFollowerItemsResponse {
  enchantress: Record<string, FollowerItem>;
  scoundrel: Record<string, FollowerItem>;
  templar: Record<string, FollowerItem>;
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
  icon: string;
  id: string;
  name: string;
  tooltipParams: string;
}
