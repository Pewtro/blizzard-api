import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow pvp integration', () => {
  it('fetches pvp leaderboard index and season index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const lb = await client.sendRequest(wow.pvpLeaderboardIndex());
    expect(lb).toBeTruthy();
    const season = await client.sendRequest(wow.pvpSeasonIndex());
    expect(season).toBeTruthy();
  }, 30_000);
});
