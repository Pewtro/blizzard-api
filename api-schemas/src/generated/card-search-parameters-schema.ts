import { z } from 'zod';

export const CardSearchParametersSchema = z.object({
  attack: z.union([z.any(), z.number(), z.array(z.number())]).optional(),
  defaultMercenary: z.union([z.any(), z.number(), z.array(z.number())]).optional(),
  health: z.union([z.any(), z.number(), z.array(z.number())]).optional(),
  mercenaryId: z.union([z.any(), z.number(), z.array(z.number())]).optional(),
  gameMode: z
    .union([
      z.any(),
      z.literal('arena'),
      z.literal('battlegrounds'),
      z.literal('classic'),
      z.literal('constructed'),
      z.literal('duels'),
      z.literal('mercenaries'),
      z.literal('standard'),
    ])
    .optional(),
  locale: z.any().optional(),
  mercenaryRole: z.union([z.any(), z.string()]).optional(),
  minionType: z.union([z.any(), z.string()]).optional(),
  page: z.union([z.any(), z.number()]).optional(),
  pageSize: z.union([z.any(), z.number()]).optional(),
  sort: z
    .union([
      z.any(),
      z.literal('attack:asc'),
      z.literal('attack:desc'),
      z.literal('health:asc'),
      z.literal('health:desc'),
      z.literal('name:asc'),
      z.literal('name:desc'),
      z.literal('tier:asc'),
      z.literal('tier:desc'),
    ])
    .optional(),
  textFilter: z.union([z.any(), z.string()]).optional(),
  tier: z.union([z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.literal('hero')]).optional(),
});
