import { z } from 'zod';
import { CategorySchema } from './category-schema';
import { CreatureSchema } from './creature-schema';
import { FactionSchema } from './faction-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { ItemSchema } from './item-schema';
import { ModeSchema } from './mode-schema';
import { JournalSectionSchema } from './journal-section-schema';
import { HrefSchema } from './href-schema';

export const JournalEncounterResponseSchema = z.object({
  category: CategorySchema,
  creatures: z.array(CreatureSchema),
  description: z.string(),
  faction: z.union([z.any(), FactionSchema]).optional(),
  instance: NameIdKeySchema,
  items: z.array(ItemSchema),
  modes: z.union([z.any(), z.array(ModeSchema)]).optional(),
  sections: z.array(JournalSectionSchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
