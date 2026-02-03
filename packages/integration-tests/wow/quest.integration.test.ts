import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { questIndexResponseSchema, questResponseSchema } from '../../../generated/schemas/wow/quest';

describe('wow quest integration', () => {
  it('validates quest index and fetches quest detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.questIndex());
    const parsed = questIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Quest index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const quest = await client.sendRequest(wow.quest(32_370));
    const parsedQuest = questResponseSchema.safeParse(quest);
    if (!parsedQuest.success) {
      console.error('Quest detail validation failed:', treeifyError(parsedQuest.error));
    }
    expect(parsedQuest.success).toBe(true);
  }, 30_000);
  //TODO Do more quest tests
});
