import { z } from 'zod';

export const CampaignSchema = z.object({
  hots: z.string(),
  wol: z.string(),
});
