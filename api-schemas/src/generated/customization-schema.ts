import { z } from 'zod';
import { ChoiceSchema } from './choice-schema';
import { NameIdSchema } from './name-id-schema';

export const CustomizationSchema = z.object({
  choice: ChoiceSchema,
  option: NameIdSchema,
});
