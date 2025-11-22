import { z } from 'zod';
import { DisplayStringValueSchema } from './display-string-value-schema';
import { DamageSchema } from './damage-schema';

export const WeaponSchema = z.object({
  attack_speed: DisplayStringValueSchema,
  damage: DamageSchema,
  dps: DisplayStringValueSchema,
});
