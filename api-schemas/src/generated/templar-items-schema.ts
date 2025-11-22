import { z } from 'zod';
import { ItemSchema } from './item-schema';

export const TemplarItemsSchema = z.object({
  bracers: ItemSchema,
  feet: ItemSchema,
  hands: ItemSchema,
  head: ItemSchema,
  mainHand: ItemSchema,
  offHand: ItemSchema,
  shoulders: ItemSchema,
  torso: ItemSchema,
  waist: ItemSchema,
});
