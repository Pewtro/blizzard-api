import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  pvpLeaderboardIndexResponseSchema,
  pvpSeasonIndexResponseSchema,
} from '../../../generated/schemas/wow/pvp-season';

describe('wow pvp integration', () => {
  it('validates pvp leaderboard and season indices', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const season = await client.sendRequest(wow.pvpSeasonIndex());
    const parsedSeason = pvpSeasonIndexResponseSchema.safeParse(season);
    if (!parsedSeason.success) {
      console.error('PVP season index validation failed:', treeifyError(parsedSeason.error));
    }
    expect(parsedSeason.success).toBe(true);

    const leaderboard = await client.sendRequest(wow.pvpLeaderboardIndex(season.current_season.id));
    const parsedLeaderboard = pvpLeaderboardIndexResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error('PVP leaderboard index validation failed:', treeifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);
  }, 30_000);
});
