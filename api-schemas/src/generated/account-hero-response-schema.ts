import { z } from 'zod';
import { FollowersSchema } from './followers-schema';
import { __typeSchema } from './type-schema';
import { KillsSchema } from './kills-schema';
import { ItemSchema } from './item-schema';
import { HeroProgressionSchema } from './hero-progression-schema';
import { SkillsSchema } from './skills-schema';

export const AccountHeroResponseSchema = z.object({
  alive: z.boolean(),
  class: z.string(),
  followers: FollowersSchema,
  gender: z.number(),
  hardcore: z.boolean(),
  highestSoloRiftCompleted: z.number(),
  id: z.number(),
  items: __typeSchema,
  kills: KillsSchema,
  lastUpdated: z.number(),
  legendaryPowers: z.array(ItemSchema),
  level: z.number(),
  name: z.string(),
  paragonLevel: z.number(),
  progression: HeroProgressionSchema,
  seasonal: z.boolean(),
  seasonCreated: z.number(),
  skills: SkillsSchema,
  stats: __typeSchema,
});
