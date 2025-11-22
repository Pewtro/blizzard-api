import { z } from 'zod';

export const ColumnSchema = z.object({
  hidden: z.boolean(),
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
  label: z.union([z.any(), z.string()]),
  order: z.union([z.any(), z.number()]).optional(),
  type: z.union([z.literal('DATETIME'), z.literal('NUMBER'), z.literal('STRING')]),
});
