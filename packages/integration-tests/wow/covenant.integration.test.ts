import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow covenant integration', () => {
  it('fetches covenant and soulbind indices', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const covIndex = await client.sendRequest(wow.covenantIndex());
    expect(covIndex).toBeTruthy();
    const soulIndex = await client.sendRequest(wow.soulbindIndex());
    expect(soulIndex).toBeTruthy();
  }, 30_000);
});
