import { z } from 'zod';

export const HrefSchema = z.object({
  href: z.string(),
});
