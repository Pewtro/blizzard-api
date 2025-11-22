import { z } from 'zod';
import { SocketSchema } from './socket-schema';
import { TypeClassSchema } from './type-class-schema';

export const ConduitSocketSchema = z.object({
  socket: SocketSchema,
  type: TypeClassSchema,
});
