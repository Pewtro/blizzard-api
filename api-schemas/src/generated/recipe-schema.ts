import { z } from 'zod';
import { RecipeItemSchema } from './recipe-item-schema';

export const RecipeSchema = z.object({
  item: RecipeItemSchema,
  reagents: z.array(z.any()),
  reagents_display_string: z.string(),
});
