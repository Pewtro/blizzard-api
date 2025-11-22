import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { RealmLockedStatusSchema } from './realm-locked-status-schema';
import { RealmSchema } from './realm-schema';
import { HrefSchema } from './href-schema';

export const ConnectedRealmResponseSchema = z.object({
  auctions: __typeSchema,
  has_queue: z.boolean(),
  id: z.number(),
  mythic_leaderboards: __typeSchema,
  population: __typeSchema,
  realm_locked_status: z.union([z.any(), RealmLockedStatusSchema]).optional(),
  realms: z.array(RealmSchema),
  status: __typeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
