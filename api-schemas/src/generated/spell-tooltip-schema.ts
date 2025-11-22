import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const SpellTooltipSchema = z.object({
  cast_time: z.union([
    z.literal('1.5 sec cast'),
    z.literal('2.5 sec cast'),
    z.literal('3 sec cast'),
    z.literal('Channeled'),
    z.literal('Instant'),
    z.literal('Passive'),
  ]),
  cooldown: z.union([z.any(), z.string()]).optional(),
  description: z.string(),
  power_cost: z.union([z.any(), z.string()]).optional(),
  range: z
    .union([
      z.any(),
      z.literal('8-30 yd range'),
      z.literal('15 yd range'),
      z.literal('30 yd range'),
      z.literal('40 yd range'),
      z.literal('50 yd range'),
      z.literal('55 yd range'),
      z.literal('100 yd range'),
      z.literal('Melee Range'),
    ])
    .optional(),
  spell: NameIdKeySchema,
});
