import { z } from 'zod';

export const CardBackSearchParametersSchema = z.object({
  cardBackCategory: z
    .union([
      z.any(),
      z.literal('achieve'),
      z.literal('base'),
      z.literal('blizzard'),
      z.literal('esports'),
      z.literal('events'),
      z.literal('fireside'),
      z.literal('game_license'),
      z.literal('golden'),
      z.literal('heroes'),
      z.literal('legend'),
      z.literal('pre_purchase'),
      z.literal('promotion'),
      z.literal('season'),
    ])
    .optional(),
  locale: z.any().optional(),
  page: z.union([z.any(), z.number()]).optional(),
  pageSize: z.union([z.any(), z.number()]).optional(),
  sort: z
    .union([
      z.any(),
      z.literal('attack:asc'),
      z.literal('attack:desc'),
      z.literal('class:asc'),
      z.literal('class:desc'),
      z.literal('dataAdded:asc'),
      z.literal('dataAdded:desc'),
      z.literal('groupByClass:asc'),
      z.literal('groupByClass:desc'),
      z.literal('health:asc'),
      z.literal('health:desc'),
      z.literal('manaCost:asc'),
      z.literal('manaCost:desc'),
      z.literal('name:asc'),
      z.literal('name:desc'),
    ])
    .optional(),
  textFilter: z.union([z.any(), z.string()]).optional(),
});
