import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const InventoryTypeSchema = z.object({
  name: __typeSchema,
  type: z.union([
    z.literal('BACK'),
    z.literal('BAG'),
    z.literal('CHEST'),
    z.literal('FEET'),
    z.literal('FINGER'),
    z.literal('HANDS'),
    z.literal('HEAD'),
    z.literal('LEGS'),
    z.literal('NECK'),
    z.literal('NON_EQUIP'),
    z.literal('SHIRT'),
    z.literal('SHOULDER'),
    z.literal('TABARD'),
    z.literal('TRINKET'),
    z.literal('TWOHWEAPON'),
    z.literal('WAIST'),
    z.literal('WRIST'),
  ]),
});
