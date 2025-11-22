import { z } from 'zod';

export const SelfSchema = z.object({
  href: z.string(),
});
