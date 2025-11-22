import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { SelectedTalentSchema } from './selected-talent-schema';

export const LoadoutSchema = z.object({
  is_active: z.boolean(),
  selected_class_talent_tree: NameIdKeySchema,
  selected_class_talents: z.array(SelectedTalentSchema),
  selected_spec_talent_tree: NameIdKeySchema,
  selected_spec_talents: z.union([z.any(), z.array(SelectedTalentSchema)]).optional(),
  talent_loadout_code: z.string(),
});
