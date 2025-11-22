import { z } from 'zod';
import { AttributesSchema } from './attributes-schema';
import { CraftedBySchema } from './crafted-by-schema';
import { GemSchema } from './gem-schema';
import { SetSchema } from './set-schema';
import { __typeSchema } from './type-schema';

export const AccountHeroItemsResponseSchema = z.object({
  accountBound: z.boolean(),
  armor: z.number(),
  attacksPerSecond: z.number(),
  attributes: AttributesSchema,
  attributesHtml: AttributesSchema,
  craftedBy: z.union([z.any(), CraftedBySchema]).optional(),
  damage: z.union([z.any(), z.string()]).optional(),
  displayColor: z.union([
    z.literal('blue'),
    z.literal('green'),
    z.literal('orange'),
    z.literal('white'),
    z.literal('yellow'),
  ]),
  dps: z.union([z.any(), z.string()]).optional(),
  elementalType: z.union([z.any(), z.string()]).optional(),
  flavorText: z.string(),
  gems: z.union([z.any(), z.array(GemSchema)]).optional(),
  icon: z.string(),
  id: z.string(),
  isSeasonRequiredToDrop: z.boolean(),
  itemLevel: z.number(),
  maxDamage: z.number(),
  minDamage: z.number(),
  name: z.string(),
  openSockets: z.number(),
  requiredLevel: z.number(),
  seasonRequiredToDrop: z.number(),
  set: z.union([z.any(), SetSchema]).optional(),
  slots: z.string(),
  stackSizeMax: z.number(),
  tooltipParams: z.string(),
  type: __typeSchema,
  typeName: z.string(),
});
