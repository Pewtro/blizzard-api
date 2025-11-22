import { z } from 'zod';

export const LadderSummaryResponseSchema = z.object({
  allLadderMemberships: z.array(z.unknown()),
  placementMatches: z.array(z.unknown()),
  showCaseEntries: z.array(z.unknown()),
});
