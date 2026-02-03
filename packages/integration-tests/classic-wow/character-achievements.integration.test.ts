import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterAchievementsSummaryResponseSchema,
  characterAchievementStatisticsResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow character achievements integration', () => {
  it('fetches achievements summary and statistics for a character', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const character = 'putro';

    const summary = await client.sendRequest(
      classicWow.characterAchievementsSummary('profile-classic', realm, character),
    );
    const parsedSummary = characterAchievementsSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Character achievements summary validation failed:', treeifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const stats = await client.sendRequest(
      classicWow.characterAchievementStatistics('profile-classic', realm, character),
    );
    const parsedStats = characterAchievementStatisticsResponseSchema.safeParse(stats);
    if (!parsedStats.success) {
      console.error('Character achievement statistics validation failed:', treeifyError(parsedStats.error));
    }
    expect(parsedStats.success).toBe(true);
  }, 30_000);
});
