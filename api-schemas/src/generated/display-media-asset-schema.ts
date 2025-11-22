import { z } from 'zod';

export const DisplayMediaAssetSchema = z.object({
  key: z.string(),
  value: z.string(),
});
