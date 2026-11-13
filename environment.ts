import { z } from 'zod';

const environmentSchema = z.object({
  blizzardBnetAccountId: z.string().optional(),
  blizzardClientId: z.string(),
  blizzardClientSecret: z.string(),
});

export const environment = environmentSchema.parse({
  blizzardBnetAccountId: process.env.BLIZZARD_BNET_ACCOUNT_ID,
  blizzardClientId: process.env.BLIZZARD_CLIENT_ID,
  blizzardClientSecret: process.env.BLIZZARD_CLIENT_SECRET,
});
