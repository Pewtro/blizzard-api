import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { pvpSeasonIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow pvp season integration', () => {
  it('validates pvp season index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.pvpSeasonIndex('dynamic-classic'));
    const parsed = pvpSeasonIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('PvP season index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
