import {
  pvpSeason,
  pvpSeasonIndex,
  pvpSeasonLeaderboard,
  pvpSeasonLeaderboards,
  pvpSeasonRewards,
} from '@blizzard-api/classic-wow/pvp-season';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  pvpLeaderboardIndexResponseSchema,
  pvpLeaderboardResponseSchema,
  pvpRewardsIndexResponseSchema,
  pvpSeasonIndexResponseSchema,
  pvpSeasonResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow pvp season integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates pvp season index and season details', async ({ expect }) => {
    const season = await client.sendRequest(pvpSeasonIndex('dynamic-classic'));
    const parsed = pvpSeasonIndexResponseSchema.safeParse(season);
    if (!parsed.success) {
      console.error('PvP season index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const seasonId = season!.current_season.id;
    const seasonDetail = await client.sendRequest(pvpSeason('dynamic-classic', seasonId));
    const parsedSeasonDetail = pvpSeasonResponseSchema.safeParse(seasonDetail);
    if (!parsedSeasonDetail.success) {
      console.error('PVP season detail validation failed:', seasonId, prettifyError(parsedSeasonDetail.error));
    }
    expect(parsedSeasonDetail.success).toBe(true);
  });
  test('validates pvp season index and season details for the anniversary namespace', async ({ expect }) => {
    const season = await client.sendRequest(pvpSeasonIndex('dynamic-classicann'));
    const parsed = pvpSeasonIndexResponseSchema.safeParse(season);
    if (!parsed.success) {
      console.error('PvP season index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const seasonId = season!.current_season.id;
    const seasonDetail = await client.sendRequest(pvpSeason('dynamic-classicann', seasonId));
    const parsedSeasonDetail = pvpSeasonResponseSchema.safeParse(seasonDetail);
    if (!parsedSeasonDetail.success) {
      console.error('PVP season detail validation failed:', seasonId, prettifyError(parsedSeasonDetail.error));
    }
    expect(parsedSeasonDetail.success).toBe(true);
  });

  test('validates the progression season leaderboard index, sampled leaderboard, and rewards', async ({ expect }) => {
    const seasonIndex = await client.sendRequest(pvpSeasonIndex('dynamic-classic'));
    const parsedSeasonIndex = pvpSeasonIndexResponseSchema.safeParse(seasonIndex);
    if (!parsedSeasonIndex.success) {
      console.error('Progression PvP season index validation failed:', prettifyError(parsedSeasonIndex.error));
    }
    expect(parsedSeasonIndex.success).toBe(true);

    const seasonId = parsedSeasonIndex.data!.current_season.id;
    const [leaderboardIndex, rewards] = await Promise.all([
      client.sendRequest(pvpSeasonLeaderboards('dynamic-classic', seasonId)),
      client.sendRequest(pvpSeasonRewards('dynamic-classic', seasonId)),
    ]);
    const parsedLeaderboardIndex = pvpLeaderboardIndexResponseSchema.safeParse(leaderboardIndex);
    const parsedRewards = pvpRewardsIndexResponseSchema.safeParse(rewards);
    if (!parsedLeaderboardIndex.success) {
      console.error('PvP leaderboard index validation failed:', prettifyError(parsedLeaderboardIndex.error));
    }
    if (!parsedRewards.success) {
      console.error('PvP rewards validation failed:', prettifyError(parsedRewards.error));
    }
    expect(parsedLeaderboardIndex.success).toBe(true);
    expect(parsedRewards.success).toBe(true);

    const bracket = parsedLeaderboardIndex.data!.leaderboards[0]?.name;
    expect(bracket).toBeDefined();
    if (!bracket) return;

    const leaderboard = await client.sendRequest(pvpSeasonLeaderboard('dynamic-classic', seasonId, bracket));
    const parsedLeaderboard = pvpLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error('PvP leaderboard validation failed:', bracket, prettifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
