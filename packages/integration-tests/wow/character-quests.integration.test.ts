import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterCompletedQuests, characterQuests } from '@blizzard-api/wow/character-quests';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterCompletedQuestsResponseSchema, characterQuestsResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-quests integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  const realm = 'laughing-skull';
  const character = 'putro';
  test('validates character quests', async ({ expect }) => {
    const resp = await client.sendRequest(characterQuests(realm, character));
    const parsed = characterQuestsResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character quests validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates completed quests', async ({ expect }) => {
    const completed = await client.sendRequest(characterCompletedQuests(realm, character));
    const parsedCompleted = characterCompletedQuestsResponseSchema.safeParse(completed);
    if (!parsedCompleted.success) {
      console.error('Character completed quests validation failed:', treeifyError(parsedCompleted.error));
    }
    expect(parsedCompleted.success).toBe(true);
  });
});
