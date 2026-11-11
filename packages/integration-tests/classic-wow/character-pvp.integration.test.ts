import { characterPvpBracketStatistics } from '@blizzard-api/classic-wow/character-pvp';
import { pvpSeasonIndex, pvpSeasonLeaderboard, pvpSeasonLeaderboards } from '@blizzard-api/classic-wow/pvp-season';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterPvpBracketStatisticsResponseSchema,
  pvpLeaderboardIndexResponseSchema,
  pvpLeaderboardResponseSchema,
  pvpSeasonIndexResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character-pvp integration', async () => {
  const client = await getIntegrationTestClient();
  const namespace = 'dynamic-classic';

  test('validates bracket statistics for a currently ranked character', async ({ expect }) => {
    const seasonResponse = await client.sendRequest(pvpSeasonIndex(namespace));
    const parsedSeason = pvpSeasonIndexResponseSchema.safeParse(seasonResponse);
    if (!parsedSeason.success) {
      console.error('Classic PvP season index validation failed:', prettifyError(parsedSeason.error));
    }
    expect(parsedSeason.success).toBe(true);

    const seasonId = parsedSeason.data!.current_season.id;
    const indexResponse = await client.sendRequest(pvpSeasonLeaderboards(namespace, seasonId));
    const parsedIndex = pvpLeaderboardIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Classic PvP leaderboard index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const bracket = parsedIndex.data!.leaderboards.find((leaderboard) => leaderboard.name === '2v2');
    expect(bracket).toBeDefined();
    if (!bracket) return;

    const leaderboardResponse = await client.sendRequest(pvpSeasonLeaderboard(namespace, seasonId, bracket.name));
    const parsedLeaderboard = pvpLeaderboardResponseSchema.safeParse(leaderboardResponse);
    if (!parsedLeaderboard.success) {
      console.error('Classic PvP leaderboard validation failed:', prettifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);

    const character = parsedLeaderboard.data!.entries?.[0]?.character;
    expect(character).toBeDefined();
    if (!character) return;

    const bracketResponse = await client.sendRequest(
      characterPvpBracketStatistics('profile-classic', character.realm.slug, character.name, bracket.name),
    );
    const parsedBracket = characterPvpBracketStatisticsResponseSchema.safeParse(bracketResponse);
    if (!parsedBracket.success) {
      console.error('Classic character PvP bracket validation failed:', prettifyError(parsedBracket.error));
    }
    expect(parsedBracket.success).toBe(true);
  });
});
