import { z } from 'zod';

export const SlotSchema = z.object({
  appearances: z.array(z.any()),
  slot: z.any(),
  name: z.string(),
  type: z.string(),
});
