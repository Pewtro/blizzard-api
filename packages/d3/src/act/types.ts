export interface ActResponse {
  name: string;
  number: number;
  quests: Array<Quest>;
  slug: string;
}

export interface ActIndexResponse {
  acts: Array<Act>;
}

interface Act {
  name: string;
  number: number;
  quests: Array<Quest>;
  slug: string;
}

interface Quest {
  id: number;
  name: string;
  slug: string;
}
