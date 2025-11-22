import { z } from 'zod';

export const MatchSchema = z.object({
  date: z.number(),
  decision: z.union([z.literal('Left'), z.literal('Loss'), z.literal('Win')]),
  map: z.string(),
  speed: z.union([z.literal('Fast'), z.literal('Faster')]),
  type: z.union([z.literal('2v2'), z.literal('3v3'), z.literal('Co-Op'), z.literal('Custom')]),
});
