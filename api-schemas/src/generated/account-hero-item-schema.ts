import { z } from 'zod';

export const AccountHeroItemSchema = z.object({
  icon: z.string(),
  id: z.string(),
  name: z.string(),
  path: z.string(),
  slug: z.string(),
});
