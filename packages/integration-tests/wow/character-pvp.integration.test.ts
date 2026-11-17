import { characterPvpBracketStatistics, characterPvpSummary } from '@blizzard-api/wow/character-pvp';
import { pvpLeaderboard, pvpSeasonIndex } from '@blizzard-api/wow/pvp-season';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterPvpBracketStatisticsResponseSchema,
  characterPvpSummaryResponseSchema,
  pvpLeaderboardResponseSchema,
  pvpSeasonIndexResponseSchema,
} from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow character-pvp integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character pvp summary', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterPvpSummary(realm, character));
    const parsed = characterPvpSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character pvp summary validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates character pvp bracket statistics for a currently ranked character', async ({ expect }) => {
    const seasonResponse = await client.sendRequest(pvpSeasonIndex());
    const parsedSeason = pvpSeasonIndexResponseSchema.safeParse(seasonResponse);
    if (!parsedSeason.success) {
      console.error('PvP season index validation failed:', prettifyError(parsedSeason.error));
    }
    expect(parsedSeason.success).toBe(true);

    const seasonId = parsedSeason.data!.current_season.id;
    const leaderboardResponse = await client.sendRequest(pvpLeaderboard(seasonId, '3v3'));
    const parsedLeaderboard = pvpLeaderboardResponseSchema.safeParse(leaderboardResponse);
    if (!parsedLeaderboard.success) {
      console.error('PvP leaderboard validation failed:', seasonId, prettifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);

    const candidates = getRandomSample(parsedLeaderboard.data!.entries, 10);
    expect(candidates.length).toBeGreaterThan(0);
    if (candidates.length === 0) return;

    let rankedCharacter: (typeof candidates)[number]['character'] | undefined;
    let summaryResponse: unknown;
    let bracketResponse: unknown;
    for (const { character } of candidates) {
      try {
        const summary = await client.sendRequest(characterPvpSummary(character.realm.slug, character.name));
        const bracket = await client.sendRequest(
          characterPvpBracketStatistics(character.realm.slug, character.name, '3v3'),
        );
        summaryResponse = summary;
        bracketResponse = bracket;
        rankedCharacter = character;
        break;
      } catch (error) {
        const status = (error as { response?: { status?: number } }).response?.status;
        if (status !== 404) throw error;
      }
    }

    expect(rankedCharacter).toBeDefined();
    if (!rankedCharacter) return;

    const parsedSummary = characterPvpSummaryResponseSchema.safeParse(summaryResponse);
    if (!parsedSummary.success) {
      console.error(
        'Character pvp summary validation failed:',
        rankedCharacter.realm.slug,
        rankedCharacter.name,
        prettifyError(parsedSummary.error),
      );
    }
    expect(parsedSummary.success).toBe(true);

    const parsedBracket = characterPvpBracketStatisticsResponseSchema.safeParse(bracketResponse);
    if (!parsedBracket.success) {
      console.error(
        'Character pvp bracket validation failed:',
        rankedCharacter.realm.slug,
        rankedCharacter.name,
        prettifyError(parsedBracket.error),
      );
    }
    expect(parsedBracket.success).toBe(true);
  });
});
