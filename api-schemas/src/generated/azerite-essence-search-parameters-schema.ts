import { z } from 'zod';

export const AzeriteEssenceSearchParametersSchema = z.object({
  'allowed_specializations.id': z.union([z.any(), z.number()]).optional(),
});
