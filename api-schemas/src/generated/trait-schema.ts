import { z } from 'zod';
import { ConduitSocketSchema } from './conduit-socket-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const TraitSchema = z.object({
  conduit_socket: z.union([z.any(), ConduitSocketSchema]).optional(),
  display_order: z.number(),
  tier: z.number(),
  trait: z.union([z.any(), NameIdKeySchema]).optional(),
});
