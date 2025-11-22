import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { MemberSchema } from './member-schema';
import { MythicRatingSchema } from './mythic-rating-schema';

export const BestRunSchema = z.object({
  completed_timestamp: z.number(),
  dungeon: NameIdKeySchema,
  duration: z.number(),
  is_completed_within_time: z.boolean(),
  keystone_affixes: z.array(NameIdKeySchema),
  keystone_level: z.number(),
  members: z.array(MemberSchema),
  mythic_rating: MythicRatingSchema,
});
