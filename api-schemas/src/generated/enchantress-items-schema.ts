import { z } from 'zod';
import { ItemSchema } from './item-schema';

export const EnchantressItemsSchema = z.object({
  mainHand: ItemSchema,
});
