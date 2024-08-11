import { wow } from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some wow api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
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
    const response = await client.sendRequest(wow.creatureSearch({ _page: 1, locale: 'en_US', name: 'Dragon' }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for an item', async ({ expect }) => {
    const response = await client.sendRequest(wow.itemSearch({ _page: 1, locale: 'en_US', name: '' }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a journal encounter', async ({ expect }) => {
    const response = await client.sendRequest(
      wow.journalEncounterSearch({ _page: 1, instanceName: 'The Nighthold', locale: 'en_US' }),
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
    const response = await client.sendRequest(wow.mountSearch({ _page: 1, locale: 'en_US', name: 'Turtle' }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a regular realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.realmSearch({ _page: 1 }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('can search for a spell', async ({ expect }) => {
    const response = await client.sendRequest(wow.spellSearch({ _page: 1, locale: 'en_US', name: 'Fireball' }));

    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  const defaultRealm = 'laughing-skull';
  const defaultCharacter = 'putro';
  it("can search for a character's achievements", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterAchievementsSummary(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's appearance", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterAppearanceSummary(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's collections", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterCollectionsIndex(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's dungeons", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterDungeons(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's equipment", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterEquipmentSummary(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's hunter pets", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterHunterPetsSummary(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });

  it("can search for a character's media", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterMediaSummary(defaultRealm, defaultCharacter));
    expect(response.data).toBeDefined();
  });
});
