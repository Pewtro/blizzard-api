import { z } from 'zod';
import { ActSchema } from './act-schema';

export const HeroProgressionSchema = z.object({
  act1: ActSchema,
  act2: ActSchema,
  act3: ActSchema,
  act4: ActSchema,
  act5: ActSchema,
});
