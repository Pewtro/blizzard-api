import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow playable-specialization integration', () => {
  it('fetches playable specialization index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.playableSpecializationIndex());
    expect(index).toBeTruthy();
  }, 30_000);
});
