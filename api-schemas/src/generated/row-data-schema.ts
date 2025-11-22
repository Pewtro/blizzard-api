import { z } from 'zod';

export const RowDataSchema = z.object({
  id: z.union([
    z.literal('AchievementPoints'),
    z.literal('BattleTag'),
    z.literal('ClanName'),
    z.literal('CompletedTime'),
    z.literal('GameAccount'),
    z.literal('HeroBattleTag'),
    z.literal('HeroClanTag'),
    z.literal('HeroClass'),
    z.literal('HeroGender'),
    z.literal('HeroId'),
    z.literal('HeroLevel'),
    z.literal('HeroVisualItems'),
    z.literal('ParagonLevel'),
    z.literal('Rank'),
    z.literal('RiftLevel'),
    z.literal('RiftTime'),
  ]),
  number: z.union([z.any(), z.number()]).optional(),
  string: z.union([z.any(), z.string()]).optional(),
  timestamp: z.union([z.any(), z.number()]).optional(),
});
