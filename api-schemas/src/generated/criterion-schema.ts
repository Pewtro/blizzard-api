import { z } from 'zod';

export const CriterionSchema = z.object({
  achievementId: z.string(),
  description: z.string(),
  evaluationClass: z.union([
    z.literal('Achv'),
    z.literal('Clnt'),
    z.literal('S2Gm'),
    z.literal('Sunk'),
    z.literal('Trny'),
  ]),
  flags: z.number(),
  id: z.string(),
  necessaryQuantity: z.number(),
  uiOrderHint: z.number(),
});
