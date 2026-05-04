import {
  characterAchievementsSummary,
  characterAchievementStatistics,
} from '@blizzard-api/classic-wow/character-achievements';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterAchievementsSummaryResponseSchema,
  characterAchievementStatisticsResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow character achievements integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches achievements summary and statistics for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const summary = await client.sendRequest(characterAchievementsSummary('profile-classic', realm, character));
    const parsedSummary = characterAchievementsSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error(
        'Character achievements summary validation failed:',
        realm,
        character,
        treeifyError(parsedSummary.error),
      );
    }
    expect(parsedSummary.success).toBe(true);

    const stats = await client.sendRequest(characterAchievementStatistics('profile-classic', realm, character));
    const parsedStats = characterAchievementStatisticsResponseSchema.safeParse(stats);
    if (!parsedStats.success) {
      console.error(
        'Character achievement statistics validation failed:',
        realm,
        character,
        treeifyError(parsedStats.error),
      );
    }
    expect(parsedStats.success).toBe(true);
  });
});
