import { z } from 'zod';

export const MetadataResponseSchema = z.object({
  avatarUrl: z.string(),
  name: z.string(),
  profileId: z.string(),
  profileUrl: z.string(),
  realmId: z.number(),
  regionId: z.number(),
});
