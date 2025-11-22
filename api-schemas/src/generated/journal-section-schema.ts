import { z } from 'zod';
import { CreatureDisplaySchema } from './creature-display-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const JournalSectionSchema = z.object({
  body_text: z.union([z.any(), z.string()]).optional(),
  creature_display: z.union([z.any(), CreatureDisplaySchema]).optional(),
  id: z.number(),
  sections: z.union([z.any(), z.any()]).optional(),
  spell: z.union([z.any(), NameIdKeySchema]).optional(),
  title: z.string(),
});
