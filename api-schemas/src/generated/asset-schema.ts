import { z } from 'zod';

export const AssetSchema = z.object({
  key: z.string(),
  value: z.string(),
});
