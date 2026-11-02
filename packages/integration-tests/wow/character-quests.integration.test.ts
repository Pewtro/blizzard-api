import { characterCompletedQuests, characterQuests } from '@blizzard-api/wow/character-quests';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterCompletedQuestsResponseSchema, characterQuestsResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-quests integration', async () => {
  const client = await getIntegrationTestClient();
  const realm = 'laughing-skull';
  const character = 'putro';
  test('validates character quests', async ({ expect }) => {
    const resp = await client.sendRequest(characterQuests(realm, character));
    const parsed = characterQuestsResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character quests validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates completed quests', async ({ expect }) => {
    const completed = await client.sendRequest(characterCompletedQuests(realm, character));
    const parsedCompleted = characterCompletedQuestsResponseSchema.safeParse(completed);
    if (!parsedCompleted.success) {
      console.error('Character completed quests validation failed:', prettifyError(parsedCompleted.error));
    }
    expect(parsedCompleted.success).toBe(true);
  });
});
