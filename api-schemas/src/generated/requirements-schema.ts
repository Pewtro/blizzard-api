import { z } from 'zod';
import { DisplayStringValueSchema } from './display-string-value-schema';
import { PlayableClassesSchema } from './playable-classes-schema';

export const RequirementsSchema = z.object({
  level: DisplayStringValueSchema,
  playable_classes: z.union([z.any(), PlayableClassesSchema]).optional(),
});
