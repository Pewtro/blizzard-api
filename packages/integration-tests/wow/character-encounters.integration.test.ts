import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterDungeonsResponseSchema,
  characterEncountersSummaryResponseSchema,
  characterRaidsResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-encounters integration', () => {
  it('validates character encounters', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const encounters = await client.sendRequest(wow.characterEncountersSummary(realm, character));
    const parsed = characterEncountersSummaryResponseSchema.safeParse(encounters);
    if (!parsed.success) {
      console.error('Character encounters validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Validate dungeons and raids endpoints referenced by the summary
    const dungeons = await client.sendRequest(wow.characterDungeons(realm, character));
    const parsedDungeons = characterDungeonsResponseSchema.safeParse(dungeons);
    if (!parsedDungeons.success) {
      console.error('Character dungeons validation failed:', treeifyError(parsedDungeons.error));
    }
    expect(parsedDungeons.success).toBe(true);

    const raids = await client.sendRequest(wow.characterRaids(realm, character));
    const parsedRaids = characterRaidsResponseSchema.safeParse(raids);
    if (!parsedRaids.success) {
      console.error('Character raids validation failed:', treeifyError(parsedRaids.error));
    }
    expect(parsedRaids.success).toBe(true);
  });
});
