import { z } from 'zod';
import { MemberSchema } from './member-schema';
import { MythicRatingSchema } from './mythic-rating-schema';

export const LeadingGroupSchema = z.object({
  completed_timestamp: z.number(),
  duration: z.number(),
  keystone_level: z.number(),
  members: z.array(MemberSchema),
  mythic_rating: MythicRatingSchema,
  ranking: z.number(),
});
