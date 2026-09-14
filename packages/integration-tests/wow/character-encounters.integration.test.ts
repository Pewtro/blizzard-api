import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterDungeons, characterEncountersSummary, characterRaids } from '@blizzard-api/wow/character-encounters';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterDungeonsResponseSchema,
  characterEncountersSummaryResponseSchema,
  characterRaidsResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-encounters integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character encounters', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const encounters = await client.sendRequest(characterEncountersSummary(realm, character));
    const parsed = characterEncountersSummaryResponseSchema.safeParse(encounters);
    if (!parsed.success) {
      console.error('Character encounters validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Validate dungeons and raids endpoints referenced by the summary
    const dungeons = await client.sendRequest(characterDungeons(realm, character));
    const parsedDungeons = characterDungeonsResponseSchema.safeParse(dungeons);
    if (!parsedDungeons.success) {
      console.error('Character dungeons validation failed:', prettifyError(parsedDungeons.error));
    }
    expect(parsedDungeons.success).toBe(true);

    const raids = await client.sendRequest(characterRaids(realm, character));
    const parsedRaids = characterRaidsResponseSchema.safeParse(raids);
    if (!parsedRaids.success) {
      console.error('Character raids validation failed:', prettifyError(parsedRaids.error));
    }
    expect(parsedRaids.success).toBe(true);
  });
});
