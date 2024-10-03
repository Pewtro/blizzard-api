type SortDirection = 'asc' | 'desc';

type SortOptions = 'attack' | 'class' | 'dataAdded' | 'groupByClass' | 'health' | 'manaCost' | 'name';

export type SearchSortOption = `${SortOptions}:${SortDirection}`;

export type GameMode = 'arena' | 'battlegrounds' | 'classic' | 'constructed' | 'duels' | 'mercenaries' | 'standard';
