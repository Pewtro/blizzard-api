import { z } from 'zod';

export const SocketTypeSchema = z.object({
  name: z.string(),
  type: z.string(),
});
