import { classicWow } from '@blizzard-api/classic-wow';
import { describe, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some classic wow api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  //TODO This is not working, it returns a 404 - it does the same in the official documentation
  it.skip('should be able to fetch the auction house index', async ({ expect }) => {
    const response = await client.sendRequest(classicWow.auctionHouseIndex('dynamic-classic1x', 4440));

    expect(response.auctions).toBeDefined();
  });

  //TODO This is not working, it returns a 404 - it does the same in the official documentation
  //This response is really large so it might sometimes time out, so we increase the timeout from the default 5 seconds to 20 seconds
  it.skip('should be able to fetch the auction house data', { timeout: 20_000 }, async ({ expect }) => {
    const response = await client.sendRequest(classicWow.auctions('dynamic-classic', 4440, 2));

    expect(response.auctions).toBeDefined();
  });

  it('should be able to fetch the classic wow realms', async ({ expect }) => {
    const response = await client.sendRequest(classicWow.realmIndex('dynamic-classic'));

    expect(response.realms).toBeDefined();
  });

  it("should be able to fetch a guild's achievements", async ({ expect }) => {
    const response = await client.sendRequest(
      classicWow.guildAchievements('profile-classic', 'firemaw', 'raid-drømmen'),
    );

    expect(response.achievements).toBeDefined();
  });
  it('should be able to fetch some information on a guild', async ({ expect }) => {
    const response = await client.sendRequest(classicWow.guild('profile-classic', 'firemaw', 'raid-drømmen'));

    expect(response.name).toBeDefined();
    expect(response.name).toBe('Raid Drømmen');
  });
});
