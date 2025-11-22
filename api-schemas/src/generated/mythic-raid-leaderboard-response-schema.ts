import { z } from 'zod';
import { EntrySchema } from './entry-schema';
import { JournalInstanceSchema } from './journal-instance-schema';
import { HrefSchema } from './href-schema';

export const MythicRaidLeaderboardResponseSchema = z.object({
  criteria_type: z.string(),
  entries: z.array(EntrySchema),
  journal_instance: JournalInstanceSchema,
  slug: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
