import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const RealmResponseSchema = z.object({
  category: z.union([
    z.literal('Brazil'),
    z.literal('English'),
    z.literal('French'),
    z.literal('German'),
    z.literal('Italian'),
    z.literal('Latin America'),
    z.literal('Oceanic'),
    z.literal('PS'),
    z.literal('Russian'),
    z.literal('Spanish'),
    z.literal('United States'),
    z.literal('한국'),
  ]),
  connected_realm: __typeSchema,
  is_tournament: z.boolean(),
  locale: z.string(),
  region: NameIdKeySchema,
  slug: z.string(),
  timezone: z.union([
    z.literal('America/Chicago'),
    z.literal('America/Denver'),
    z.literal('America/Los_Angeles'),
    z.literal('America/New_York'),
    z.literal('America/Sao_Paulo'),
    z.literal('Asia/Seoul'),
    z.literal('Australia/Melbourne'),
    z.literal('Europe/Paris'),
  ]),
  type: __typeSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
