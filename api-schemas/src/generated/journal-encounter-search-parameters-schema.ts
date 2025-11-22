import { z } from 'zod';

export const JournalEncounterSearchParametersSchema = z.object({
  instanceName: z.string(),
  locale: z.any(),
});
