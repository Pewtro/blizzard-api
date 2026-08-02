import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import {
  eraIndexResponseSchema,
  eraLeaderboardResponseSchema,
  eraResponseSchema,
  seasonIndexResponseSchema,
  seasonLeaderboardResponseSchema,
  seasonResponseSchema,
} from '../../../generated/schemas/d3';

describe('d3 follower integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches a season index with leaderboard data', async ({ expect }) => {
    const seasonIndexResponse = await client.sendRequest(d3.seasonIndex());
    const parsedSeasonIndexResponse = seasonIndexResponseSchema.safeParse(seasonIndexResponse);
    if (!parsedSeasonIndexResponse.success) {
      console.error('Season index response validation failed:', parsedSeasonIndexResponse.error);
    }
    expect(parsedSeasonIndexResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomSeason = seasonIndexResponse!.season[Math.floor(Math.random() * seasonIndexResponse!.season.length)];
    const extractedSeasonId = randomSeason?.href.split('/').pop()?.split('?', 1)[0];
    if (!extractedSeasonId) {
      console.error('Failed to extract season ID from href', randomSeason?.href);
    }
    expect(extractedSeasonId).toBeDefined();

    const seasonResponse = await client.sendRequest(d3.season(Number(extractedSeasonId)));
    const parsedSeasonResponse = seasonResponseSchema.safeParse(seasonResponse);
    if (!parsedSeasonResponse.success) {
      console.error('Season response validation failed:', Number(extractedSeasonId), parsedSeasonResponse.error);
    }
    expect(parsedSeasonResponse.success).toBe(true);

    const randomLeaderboard =
      // eslint-disable-next-line sonarjs/pseudo-random
      seasonResponse!.leaderboard[Math.floor(Math.random() * seasonResponse!.leaderboard.length)];
    const extractedLeaderboardName = randomLeaderboard?.ladder.href.split('/').pop()?.split('?', 1)[0];
    if (!extractedLeaderboardName) {
      console.error('Failed to extract leaderboard name from href', randomLeaderboard?.ladder.href);
    }
    expect(extractedLeaderboardName).toBeDefined();

    const seasonLeaderboardResponse = await client.sendRequest(
      d3.seasonLeaderboard(Number(extractedSeasonId), extractedLeaderboardName!),
    );
    const parsedSeasonLeaderboardResponse = seasonLeaderboardResponseSchema.safeParse(seasonLeaderboardResponse);
    if (!parsedSeasonLeaderboardResponse.success) {
      console.error(
        'Season leaderboard response validation failed:',
        Number(extractedSeasonId),
        extractedLeaderboardName!,
        parsedSeasonLeaderboardResponse.error,
      );
    }
    expect(parsedSeasonLeaderboardResponse.success).toBe(true);
  });

  test('fetches an era index with leaderboard data', async ({ expect }) => {
    const eraIndexResponse = await client.sendRequest(d3.eraIndex());
    const parsedEraIndexResponse = eraIndexResponseSchema.safeParse(eraIndexResponse);
    if (!parsedEraIndexResponse.success) {
      console.error('Era index response validation failed:', parsedEraIndexResponse.error);
    }
    expect(parsedEraIndexResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomEra = eraIndexResponse!.era[Math.floor(Math.random() * eraIndexResponse!.era.length)];
    const extractedEraId = randomEra?.href.split('/').pop()?.split('?', 1)[0];
    if (!extractedEraId) {
      console.error('Failed to extract era ID from href', randomEra?.href);
    }
    expect(extractedEraId).toBeDefined();

    const eraResponse = await client.sendRequest(d3.era(Number(extractedEraId)));
    const parsedEraResponse = eraResponseSchema.safeParse(eraResponse);
    if (!parsedEraResponse.success) {
      console.error('Era response validation failed:', Number(extractedEraId), parsedEraResponse.error);
    }
    expect(parsedEraResponse.success).toBe(true);

    const randomLeaderboard =
      // eslint-disable-next-line sonarjs/pseudo-random
      eraResponse!.leaderboard[Math.floor(Math.random() * eraResponse!.leaderboard.length)];
    const extractedLeaderboardName = randomLeaderboard?.ladder.href.split('/').pop()?.split('?', 1)[0];

    if (!extractedLeaderboardName) {
      console.error('Failed to extract leaderboard name from href', randomLeaderboard?.ladder.href);
    }
    expect(extractedLeaderboardName).toBeDefined();

    const eraLeaderboardResponse = await client.sendRequest(
      d3.eraLeaderboard(Number(extractedEraId), extractedLeaderboardName!),
    );
    const parsedEraLeaderboardResponse = eraLeaderboardResponseSchema.safeParse(eraLeaderboardResponse);
    if (!parsedEraLeaderboardResponse.success) {
      console.error(
        'Era leaderboard response validation failed:',
        Number(extractedEraId),
        extractedLeaderboardName!,
        parsedEraLeaderboardResponse.error,
      );
    }
    expect(parsedEraLeaderboardResponse.success).toBe(true);
  });
});
