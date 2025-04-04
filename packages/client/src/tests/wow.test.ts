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

    expect(response).toBeDefined();
  });
  it('should be able to connected realm index', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealmIndex());

    expect(response).toBeDefined();
    expect(response.connected_realms.length).toBeGreaterThan(0);
  });
  it('should be able to fetch a connected realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealm(3692));

    expect(response).toBeDefined();
    expect(response.id).toBe(3692);
  });

  it('should be able to fetch realm index', async ({ expect }) => {
    const response = await client.sendRequest(wow.realmIndex());

    expect(response).toBeDefined();
    expect(response.realms.length).toBeGreaterThan(0);
  });

  it('should be able to fetch a specific realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.realm('soulflayer'));

    expect(response).toBeDefined();
    expect(response.name).toBe('Soulflayer');
  });

  it('should be able to fetch a specific item', async ({ expect }) => {
    const response = await client.sendRequest(wow.item(18_803));

    expect(response).toBeDefined();
    expect(response.id).toBe(18_803);
  });
  it('should be able to fetch a creature family', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureFamily(1));

    expect(response).toBeDefined();
    expect(response.id).toBe(1);
  });

  it('should be able to fetch a creature type', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureType(1));

    expect(response).toBeDefined();
    expect(response.id).toBe(1);
  });

  it('should be able to fetch a creature', async ({ expect }) => {
    const response = await client.sendRequest(wow.creature(42_722));

    expect(response).toBeDefined();
    expect(response.id).toBe(42_722);
  });

  it('can search for an azerite essence', async ({ expect }) => {
    const response = await client.sendRequest(
      wow.azeriteEssenceSearch({ _page: 1, 'allowed_specializations.id': 264, orderby: 'name' }),
    );

    expect(response).toBeDefined();
  });

  it('can search for a connected realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.connectedRealmSearch({ _page: 1 }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for a creature', async ({ expect }) => {
    const response = await client.sendRequest(wow.creatureSearch({ _page: 1, locale: 'en_US', name: 'Dragon' }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for an item', async ({ expect }) => {
    const response = await client.sendRequest(wow.itemSearch({ _page: 1, locale: 'en_US', name: '' }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for a journal encounter', async ({ expect }) => {
    const response = await client.sendRequest(
      wow.journalEncounterSearch({ _page: 1, instanceName: 'The Nighthold', locale: 'en_US' }),
    );

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can look up a specific encounter', async ({ expect }) => {
    const response = await client.sendRequest(wow.journalEncounter(1713));
    expect(response).toBeDefined();
  });

  it('can search for a media asset', async ({ expect }) => {
    const response = await client.sendRequest(wow.mediaSearch({ _page: 1 }));
    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for a mount', async ({ expect }) => {
    const response = await client.sendRequest(wow.mountSearch({ _page: 1, locale: 'en_US', name: 'Turtle' }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for a regular realm', async ({ expect }) => {
    const response = await client.sendRequest(wow.realmSearch({ _page: 1 }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  it('can search for a spell', async ({ expect }) => {
    const response = await client.sendRequest(wow.spellSearch({ _page: 1, locale: 'en_US', name: 'Fireball' }));

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThan(0);
  });

  const defaultRealm = 'laughing-skull';
  const defaultCharacter = 'putro';
  it("can search for a character's achievements", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterAchievementsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's appearance", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterAppearanceSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's collections", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterCollectionsIndex(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's dungeons", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterDungeons(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's equipment", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterEquipmentSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's hunter pets", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterHunterPetsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's media", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterMediaSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's mythic keystone profile", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterMythicKeystoneProfileIndex(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's professions", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterProfessionsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's profile", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterProfileSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's pvp summary", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterPvpSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's quests", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterQuests(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's reputation", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterReputationsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's soulbinds", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterSoulbinds(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's specializations", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterSpecializationsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's statistics", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterStatisticsSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a character's titles", async ({ expect }) => {
    const response = await client.sendRequest(wow.characterTitlesSummary(defaultRealm, defaultCharacter));
    expect(response).toBeDefined();
  });

  it("can search for a guild's profile", async ({ expect }) => {
    const response = await client.sendRequest(wow.guild(defaultRealm, 'echoes'));
    expect(response).toBeDefined();
  });
});
