import { z } from 'zod';

export const FactionSchema = z.object({
  name: z.union([z.literal('Alliance'), z.literal('Horde')]),
  type: z.union([z.literal('ALLIANCE'), z.literal('HORDE')]),
});
