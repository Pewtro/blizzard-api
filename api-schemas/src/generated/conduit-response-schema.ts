import { z } from 'zod';
import { ItemSchema } from './item-schema';
import { RankSchema } from './rank-schema';
import { SocketTypeSchema } from './socket-type-schema';
import { HrefSchema } from './href-schema';

export const ConduitResponseSchema = z.object({
  id: z.number(),
  item: ItemSchema,
  name: z.string(),
  ranks: z.array(RankSchema),
  socket_type: SocketTypeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
