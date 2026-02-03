import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow character-encounters integration', () => {
  it('fetches character encounters for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const encounters = await client.sendRequest(wow.characterEncountersSummary(realm, character));
    expect(encounters).toBeTruthy();
  }, 30_000);
});
