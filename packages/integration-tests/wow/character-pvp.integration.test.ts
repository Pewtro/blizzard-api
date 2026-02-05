import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterPvpBracketStatisticsResponseSchema,
  characterPvpSummaryResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-pvp integration', () => {
  it('validates character pvp summary', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(wow.characterPvpSummary(realm, character));
    const parsed = characterPvpSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character pvp summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  it('validates character pvp bracket statistics', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'voidshuffle';

    const bracketResp = await client.sendRequest(wow.characterPvpBracketStatistics(realm, character, '2v2'));
    const parsedBracket = characterPvpBracketStatisticsResponseSchema.safeParse(bracketResp);
    if (!parsedBracket.success) {
      console.error('Character pvp bracket validation failed:', treeifyError(parsedBracket.error));
    }
    expect(parsedBracket.success).toBe(true);
  });
});
