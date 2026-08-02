import { z } from 'zod';

const environmentSchema = z.object({
  blizzardBnetAccountId: z.string().optional(),
  blizzardClientId: z.string(),
  blizzardClientSecret: z.string(),
});

export const environment = environmentSchema.parse({
  blizzardBnetAccountId: process.env.VITE_BLIZZARD_BNET_ACCOUNT_ID,
  blizzardClientId: process.env.VITE_BLIZZARD_CLIENT_ID,
  blizzardClientSecret: process.env.VITE_BLIZZARD_CLIENT_SECRET,
});
