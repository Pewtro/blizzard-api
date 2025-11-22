import { z } from 'zod';

export const TeamMemberSchema = z.object({
  clanTag: z.union([z.any(), z.string()]).optional(),
  displayName: z.string(),
  favoriteRace: z.union([z.literal('protoss'), z.literal('random'), z.literal('terran'), z.literal('zerg')]),
  id: z.string(),
  realm: z.number(),
  region: z.number(),
});
