import { z } from 'zod';

export const ItemSearchParametersSchema = z.object({
  locale: z.any(),
  name: z.string(),
});
