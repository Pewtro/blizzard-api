export type ItemTypeIndexResponse = Array<ItemTypeIndex>;

export type ItemTypeResponse = Array<ItemType>;

interface ItemType {
  icon: string;
  id: string;
  name: string;
  path: string;
  slug: string;
}

interface ItemTypeIndex {
  id: string;
  name: string;
  path: string;
}
