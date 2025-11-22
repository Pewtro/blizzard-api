import { z } from 'zod';
import { UpgradeItemSchema } from './upgrade-item-schema';

export const UpgradeSchema = z.object({
  item: UpgradeItemSchema,
  level: z.number(),
});
