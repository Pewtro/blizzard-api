import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';

export const CharacterCollectionsIndexResponseSchema = z.object({
  character: CharacterSchema,
  heirlooms: HrefSchema,
  mounts: HrefSchema,
  pets: HrefSchema,
  toys: HrefSchema,
  transmogs: HrefSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
