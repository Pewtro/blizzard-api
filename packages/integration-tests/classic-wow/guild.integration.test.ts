import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('classic-wow guild integration', () => {
  it('fetches guild endpoints for raid-drømmen on shekzeer', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const guildSlug = 'raid-drømmen';

    const guildResp = await client.sendRequest(classicWow.guild('profile-classic', realm, guildSlug));
    expect(guildResp).toBeDefined();

    const achievementsResp = await client.sendRequest(
      classicWow.guildAchievements('profile-classic', realm, guildSlug),
    );
    expect(achievementsResp).toBeDefined();

    const rosterResp = await client.sendRequest(classicWow.guildRoster('profile-classic', realm, guildSlug));
    expect(rosterResp).toBeDefined();
  });
});
