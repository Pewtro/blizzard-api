import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow guild integration', () => {
  it('fetches guild endpoints for echoes on laughing-skull', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'laughing-skull';
    const guildSlug = 'echoes';

    const guildResp = await client.sendRequest(wow.guild(realm, guildSlug));
    expect(guildResp).toBeDefined();

    const achievementsResp = await client.sendRequest(wow.guildAchievements(realm, guildSlug));
    expect(achievementsResp).toBeDefined();

    const rosterResp = await client.sendRequest(wow.guildRoster(realm, guildSlug));
    expect(rosterResp).toBeDefined();
  }, 30_000);
});
