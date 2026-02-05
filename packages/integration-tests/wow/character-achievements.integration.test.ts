import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterAchievementsSummaryResponseSchema,
  characterAchievementStatisticsResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-achievements integration', () => {
  it('validates character achievements summary and statistics', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';

    const summary = await client.sendRequest(wow.characterAchievementsSummary(realm, character));
    const parsedSummary = characterAchievementsSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Character achievements summary validation failed:', treeifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const stats = await client.sendRequest(wow.characterAchievementStatistics(realm, character));
    const parsedStats = characterAchievementStatisticsResponseSchema.safeParse(stats);
    if (!parsedStats.success) {
      console.error('Character achievement statistics validation failed:', treeifyError(parsedStats.error));
    }
    expect(parsedStats.success).toBe(true);
  });
});
