import { z } from 'zod';

export const BaseSearchParametersSchema = z.object({
  _page: z.union([z.any(), z.number()]).optional(),
  orderby: z.union([z.any(), z.string(), z.array(z.string())]).optional(),
});
