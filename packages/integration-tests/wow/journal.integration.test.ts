import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow journal integration', () => {
  it('fetches journal encounter index and expansion index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const enc = await client.sendRequest(wow.journalEncounterIndex());
    expect(enc).toBeTruthy();
    const exp = await client.sendRequest(wow.journalExpansionIndex());
    expect(exp).toBeTruthy();
  }, 30_000);
});
