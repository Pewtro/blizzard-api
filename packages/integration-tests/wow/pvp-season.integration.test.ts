import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  pvpLeaderboardIndexResponseSchema,
  pvpLeaderboardResponseSchema,
  pvpRewardsIndexResponseSchema,
  pvpSeasonIndexResponseSchema,
  pvpSeasonResponseSchema,
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

    const seasonId = parsedSeason.success ? parsedSeason.data.current_season.id : undefined;
    if (seasonId) {
      const seasonDetail = await client.sendRequest(wow.pvpSeason(seasonId));
      const parsedSeasonDetail = pvpSeasonResponseSchema.safeParse(seasonDetail);
      if (!parsedSeasonDetail.success) {
        console.error('PVP season detail validation failed:', treeifyError(parsedSeasonDetail.error));
      }
      expect(parsedSeasonDetail.success).toBe(true);

      const rewards = await client.sendRequest(wow.pvpRewardsIndex(seasonId));
      const parsedRewards = pvpRewardsIndexResponseSchema.safeParse(rewards);
      if (!parsedRewards.success) {
        console.error('PVP rewards index validation failed:', treeifyError(parsedRewards.error));
      }
      expect(parsedRewards.success).toBe(true);
    }

    const leaderboardIndex = await client.sendRequest(wow.pvpLeaderboardIndex(season.current_season.id));
    const parsedLeaderboardIndex = pvpLeaderboardIndexResponseSchema.safeParse(leaderboardIndex);
    if (!parsedLeaderboardIndex.success) {
      console.error('PVP leaderboard index validation failed:', treeifyError(parsedLeaderboardIndex.error));
    }
    expect(parsedLeaderboardIndex.success).toBe(true);

    const leaderboard = await client.sendRequest(wow.pvpLeaderboard(season.current_season.id, '3v3'));
    const parsedLeaderboard = pvpLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error('PVP leaderboard detail validation failed:', treeifyError(parsedLeaderboard.error));
      console.log('leaderboard', leaderboard);
      console.log('parsedLeaderboard.error', parsedLeaderboard.error);
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
