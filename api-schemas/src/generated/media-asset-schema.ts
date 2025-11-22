import { z } from 'zod';

export const MediaAssetSchema = z.object({
  file_data_id: z.number(),
  key: z.string(),
  value: z.string(),
});
