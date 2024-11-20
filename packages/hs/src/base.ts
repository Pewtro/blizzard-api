export type GameMode = 'arena' | 'battlegrounds' | 'classic' | 'constructed' | 'duels' | 'mercenaries' | 'standard';

export type SearchSortOption = `${SortOptions}:${SortDirection}`;

type SortDirection = 'asc' | 'desc';

type SortOptions = 'attack' | 'class' | 'dataAdded' | 'groupByClass' | 'health' | 'manaCost' | 'name';
