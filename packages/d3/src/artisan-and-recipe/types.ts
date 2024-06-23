export interface ArtisanResponse {
  name: string;
  portrait: string;
  slug: string;
  training: Training;
}

interface Training {
  tiers: Array<Tier>;
}

interface Tier {
  taughtRecipes: Array<Recipe>;
  tier: number;
  trainedRecipes: Array<Recipe>;
}

interface Recipe {
  cost: number;
  id: string;
  itemProduced: Item;
  name: string;
  reagents: Array<Reagent>;
  slug: string;
}

interface Item {
  icon: string;
  id: string;
  name: string;
  path: string;
  slug: string;
}

interface Reagent {
  item: Item;
  quantity: number;
}

export interface RecipeResponse {
  cost: number;
  id: string;
  itemProduced: Item;
  name: string;
  reagents: Array<Reagent>;
  slug: string;
}
