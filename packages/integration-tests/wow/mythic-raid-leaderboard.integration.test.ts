import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mythicRaidLeaderboardResponseSchema } from '../../../generated/schemas/wow/mythic-raid-leaderboard';

describe('wow mythic-raid-leaderboard integration', () => {
  it('fetches a raid leaderboard for a known instance slug', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.mythicRaidLeaderboard('uldir', 'alliance'));
    const parsedResp = mythicRaidLeaderboardResponseSchema.safeParse(resp);
    if (!parsedResp.success) {
      console.error('Mythic raid leaderboard validation failed for uldir', treeifyError(parsedResp.error));
    }
    expect(parsedResp.success).toBe(true);
  });
});
