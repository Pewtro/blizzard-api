import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow character-achievements integration', () => {
  it('fetches character achievements summary and statistics for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const summary = await client.sendRequest(wow.characterAchievementsSummary(realm, character));
    expect(summary).toBeTruthy();
    const stats = await client.sendRequest(wow.characterAchievementStatistics(realm, character));
    expect(stats).toBeTruthy();
  }, 30_000);
});
