import { z } from 'zod';

const environmentSchema = z.object({
  blizzardClientId: z.string(),
  blizzardClientSecret: z.string(),
});

export const environment = environmentSchema.parse({
  blizzardClientId: process.env.VITE_BLIZZARD_CLIENT_ID,
  blizzardClientSecret: process.env.VITE_BLIZZARD_CLIENT_SECRET,
});
