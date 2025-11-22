import { z } from 'zod';

export const TypeClassSchema = z.object({
  name: z.union([
    z.literal('Endurance Conduit Slot'),
    z.literal('Finesse Conduit Slot'),
    z.literal('Potency Conduit Slot'),
  ]),
  type: z.union([z.literal('ENDURANCE'), z.literal('FINESSE'), z.literal('POTENCY')]),
});
