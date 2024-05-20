export interface ActResponse {
  slug: string;
  number: number;
  name: string;
  quests: Array<Quest>;
}

export interface ActIndexResponse {
  acts: Array<Act>;
}

interface Act {
  slug: string;
  number: number;
  name: string;
  quests: Array<Quest>;
}

interface Quest {
  id: number;
  name: string;
  slug: string;
}
