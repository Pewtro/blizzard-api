import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow character-collections integration', () => {
  it('fetches collections indices and summaries for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const index = await client.sendRequest(wow.characterCollectionsIndex(realm, character));
    expect(index).toBeTruthy();
    const transmog = await client.sendRequest(wow.characterTransmogCollectionSummary(realm, character));
    expect(transmog).toBeTruthy();
  }, 30_000);
});
