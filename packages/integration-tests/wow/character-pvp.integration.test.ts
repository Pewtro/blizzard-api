import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterPvpBracketStatistics, characterPvpSummary } from '@blizzard-api/wow/character-pvp';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterPvpBracketStatisticsResponseSchema,
  characterPvpSummaryResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-pvp integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character pvp summary', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterPvpSummary(realm, character));
    const parsed = characterPvpSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character pvp summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates character pvp bracket statistics', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'voidshuffle';

    const bracketResp = await client.sendRequest(characterPvpBracketStatistics(realm, character, '2v2'));
    const parsedBracket = characterPvpBracketStatisticsResponseSchema.safeParse(bracketResp);
    if (!parsedBracket.success) {
      console.error('Character pvp bracket validation failed:', treeifyError(parsedBracket.error));
    }
    expect(parsedBracket.success).toBe(true);
  });
});
