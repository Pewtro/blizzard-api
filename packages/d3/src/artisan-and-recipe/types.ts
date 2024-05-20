export interface ArtisanResponse {
  slug: string;
  name: string;
  portrait: string;
  training: Training;
}

interface Training {
  tiers: Array<Tier>;
}

interface Tier {
  tier: number;
  trainedRecipes: Array<Recipe>;
  taughtRecipes: Array<Recipe>;
}

interface Recipe {
  id: string;
  slug: string;
  name: string;
  cost: number;
  reagents: Array<Reagent>;
  itemProduced: Item;
}

interface Item {
  id: string;
  slug: string;
  name: string;
  icon: string;
  path: string;
}

interface Reagent {
  quantity: number;
  item: Item;
}

export interface RecipeResponse {
  id: string;
  slug: string;
  name: string;
  cost: number;
  reagents: Array<Reagent>;
  itemProduced: Item;
}
