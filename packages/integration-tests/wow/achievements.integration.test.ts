import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { achievementIndexResponseSchema, achievementResponseSchema } from '../../../generated/schemas/wow/achievements';

describe('wow achievements integration', () => {
  it('fetches achievement indices and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.achievementIndex());
    const parsed = achievementIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Achievement index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // call a single achievement by id from the index
    const first = parsed.success ? parsed.data.achievements[0] : undefined;
    if (first) {
      const ach = await client.sendRequest(wow.achievement(first.id));
      const parsedAch = achievementResponseSchema.safeParse(ach);
      if (!parsedAch.success) {
        console.error('Achievement detail validation failed:', treeifyError(parsedAch.error));
      }
      expect(parsedAch.success).toBe(true);
    }
  }, 30_000);
});
