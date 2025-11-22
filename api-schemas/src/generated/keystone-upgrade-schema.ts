import { z } from 'zod';

export const KeystoneUpgradeSchema = z.object({
  qualifying_duration: z.number(),
  upgrade_level: z.number(),
});
