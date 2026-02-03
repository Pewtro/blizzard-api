import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow character-profile integration', () => {
  it('fetches character profile summary and status for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const summary = await client.sendRequest(wow.characterProfileSummary(realm, character));
    expect(summary).toBeTruthy();
    const status = await client.sendRequest(wow.characterProfileStatus(realm, character));
    expect(status).toBeTruthy();
  }, 30_000);
});
