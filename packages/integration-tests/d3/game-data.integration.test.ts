import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  eraIndexResponseSchema,
  eraLeaderboardResponseSchema,
  eraResponseSchema,
  seasonIndexResponseSchema,
  seasonLeaderboardResponseSchema,
  seasonResponseSchema,
} from '../../../generated/schemas/d3';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('d3 game data integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches a season index with leaderboard data', async ({ expect }) => {
    const seasonIndexResponse = await client.sendRequest(d3.seasonIndex());
    const parsedSeasonIndexResponse = seasonIndexResponseSchema.safeParse(seasonIndexResponse);
    if (!parsedSeasonIndexResponse.success) {
      console.error('Season index response validation failed:', prettifyError(parsedSeasonIndexResponse.error));
    }
    expect(parsedSeasonIndexResponse.success).toBe(true);

    const randomSeason = getRandomItem(seasonIndexResponse!.season);
    const extractedSeasonId = randomSeason?.href.split('/').pop()?.split('?', 1)[0];
    if (!extractedSeasonId) {
      console.error('Failed to extract season ID from href', randomSeason?.href);
    }
    expect(extractedSeasonId).toBeDefined();

    const seasonResponse = await client.sendRequest(d3.season(Number(extractedSeasonId)));
    const parsedSeasonResponse = seasonResponseSchema.safeParse(seasonResponse);
    if (!parsedSeasonResponse.success) {
      console.error(
        'Season response validation failed:',
        Number(extractedSeasonId),
        prettifyError(parsedSeasonResponse.error),
      );
    }
    expect(parsedSeasonResponse.success).toBe(true);

    const randomLeaderboard = getRandomItem(seasonResponse!.leaderboard);
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
        prettifyError(parsedSeasonLeaderboardResponse.error),
      );
    }
    expect(parsedSeasonLeaderboardResponse.success).toBe(true);
  });

  test('fetches an era index with leaderboard data', async ({ expect }) => {
    const eraIndexResponse = await client.sendRequest(d3.eraIndex());
    const parsedEraIndexResponse = eraIndexResponseSchema.safeParse(eraIndexResponse);
    if (!parsedEraIndexResponse.success) {
      console.error('Era index response validation failed:', prettifyError(parsedEraIndexResponse.error));
    }
    expect(parsedEraIndexResponse.success).toBe(true);

    const randomEra = getRandomItem(eraIndexResponse!.era);
    const extractedEraId = randomEra?.href.split('/').pop()?.split('?', 1)[0];
    if (!extractedEraId) {
      console.error('Failed to extract era ID from href', randomEra?.href);
    }
    expect(extractedEraId).toBeDefined();

    const eraResponse = await client.sendRequest(d3.era(Number(extractedEraId)));
    const parsedEraResponse = eraResponseSchema.safeParse(eraResponse);
    if (!parsedEraResponse.success) {
      console.error('Era response validation failed:', Number(extractedEraId), prettifyError(parsedEraResponse.error));
    }
    expect(parsedEraResponse.success).toBe(true);

    const randomLeaderboard = getRandomItem(eraResponse!.leaderboard);
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
        prettifyError(parsedEraLeaderboardResponse.error),
      );
    }
    expect(parsedEraLeaderboardResponse.success).toBe(true);
  });
});
