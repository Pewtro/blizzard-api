import { wow } from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some wow api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });

  it('should be able to fetch an achievement', async ({ expect }) => {
    const response = await client.sendRequest(wow.achievement(16_542));

    expect(response.data).toBeDefined();
  });
  it('should be able to connected realm index', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealmIndex());

    expect(response.data).toBeDefined();
    expect(response.data.connected_realms.length).toBeGreaterThan(0);
  });
  it('should be able to fetch a connected realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealm(3692));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(3692);
  });

  it('should be able to fetch realm index', async ({ expect }) => {
    const response = await client.sendRequest(wow.realmIndex());

    expect(response.data).toBeDefined();
    expect(response.data.realms.length).toBeGreaterThan(0);
  });

  it('should be able to fetch a specific realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.realm('soulflayer'));

    expect(response.data).toBeDefined();
    expect(response.data.name).toBe('Soulflayer');
  });

  it('should be able to fetch a specific item', async ({ expect }) => {
    const response = await client.sendRequest(wow.item(18_803));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(18_803);
  });
  it('should be able to fetch a creature family', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureFamily(1));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(1);
  });

  it('should be able to fetch a creature type', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureType(1));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(1);
  });

  it('should be able to fetch a creature', async ({ expect }) => {
    const response = await client.sendRequest(wow.creature(42_722));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(42_722);
  });

  it('can search for an azerite essence', async ({ expect }) => {
    const response = await client.sendRequest(
      wow.azeriteEssenceSearch({ _page: 1, 'allowed_specializations.id': 264, orderby: 'name' }),
    );

    expect(response.data).toBeDefined();
  });

  it('can search for a connected realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealmSearch({ _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a creature', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureSearch({ name: 'Dragon', locale: 'en_US', _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for an item', async ({ expect }) => {
    const response = await client.sendRequest(wow.itemSearch({ name: '', locale: 'en_US', _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a journal encounter', async ({ expect }) => {
    const response = await client.sendRequest(
      wow.journalEncounterSearch({ instanceName: '', locale: 'en_US', _page: 1 }),
    );

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can look up a specific encounter', async ({ expect }) => {
    const response = await client.sendRequest(wow.journalEncounter(1713));
    expect(response.data).toBeDefined();
  });

  it('can search for a media asset', async ({ expect }) => {
    const response = await client.sendRequest(wow.mediaSearch({ _page: 1 }));
    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a mount', async ({ expect }) => {
    const response = await client.sendRequest(wow.mountSearch({ name: 'Turtle', locale: 'en_US', _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a regular realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.realmSearch({ _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a spell', async ({ expect }) => {
    const response = await client.sendRequest(wow.spellSearch({ name: 'Fireball', locale: 'en_US', _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });
});
