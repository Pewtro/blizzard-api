import {
  characterAchievementsSummary,
  characterAchievementStatistics,
  characterAppearanceSummary,
  characterCollectionsIndex,
  characterCompletedQuests,
  characterDungeons,
  characterEncountersSummary,
  characterEquipmentSummary,
  characterHeirloomsCollectionSummary,
  characterHunterPetsSummary,
  characterMediaSummary,
  characterMountsCollectionSummary,
  characterMythicKeystoneProfileIndex,
  characterPetsCollectionSummary,
  characterProfessionsSummary,
  characterProfileStatus,
  characterProfileSummary,
  characterPvpSummary,
  characterQuests,
  characterRaids,
  characterReputationsSummary,
  characterSpecializationsSummary,
  characterStatisticsSummary,
  characterTitlesSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterAchievementsSummaryResponseSchema,
  characterAchievementStatisticsResponseSchema,
  characterAppearanceResponseSchema,
  characterCollectionsIndexResponseSchema,
  characterCompletedQuestsResponseSchema,
  characterDungeonsResponseSchema,
  characterEncountersSummaryResponseSchema,
  characterEquipmentSummaryResponseSchema,
  characterHeirloomsCollectionSummaryResponseSchema,
  characterHunterPetsSummaryResponseSchema,
  characterMediaSummaryResponseSchema,
  characterMountsCollectionSummaryResponseSchema,
  characterMythicKeystoneProfileIndexResponseSchema,
  characterPetsCollectionSummaryResponseSchema,
  characterProfessionsSummaryResponseSchema,
  characterProfileStatusResponseSchema,
  characterProfileSummaryResponseSchema,
  characterPvpSummaryResponseSchema,
  characterQuestsResponseSchema,
  characterRaidsResponseSchema,
  characterReputationsSummaryResponseSchema,
  characterSpecializationsSummaryResponseSchema,
  characterStatisticsSummaryResponseSchema,
  characterTitlesSummaryResponseSchema,
  characterToysCollectionSummaryResponseSchema,
  characterTransmogCollectionSummaryResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

const characterName = 'Putrofessor';
const characterSurname = 'Putricide';
const hunterName = 'Ba';
const hunterSurname = 'Dut';

describe('wow-forever character profile integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the character profile summary and status', async ({ expect }) => {
    const summary = await client.sendRequest(characterProfileSummary(characterName, characterSurname));
    const parsedSummary = characterProfileSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Character profile summary validation failed:', prettifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const status = await client.sendRequest(characterProfileStatus(characterName, characterSurname));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(status);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', prettifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
    expect(parsedStatus.data?.id).toBe(parsedSummary.data?.id);
  });

  test('validates the character achievements and statistics', async ({ expect }) => {
    const achievements = await client.sendRequest(characterAchievementsSummary(characterName, characterSurname));
    const parsedAchievements = characterAchievementsSummaryResponseSchema.safeParse(achievements);
    if (!parsedAchievements.success) {
      console.error('Character achievements validation failed:', prettifyError(parsedAchievements.error));
    }
    expect(parsedAchievements.success).toBe(true);

    const statistics = await client.sendRequest(characterAchievementStatistics(characterName, characterSurname));
    const parsedStatistics = characterAchievementStatisticsResponseSchema.safeParse(statistics);
    if (!parsedStatistics.success) {
      console.error('Character achievement statistics validation failed:', prettifyError(parsedStatistics.error));
    }
    expect(parsedStatistics.success).toBe(true);
  });

  test('validates the character appearance and media', async ({ expect }) => {
    const appearance = await client.sendRequest(characterAppearanceSummary(characterName, characterSurname));
    const parsedAppearance = characterAppearanceResponseSchema.safeParse(appearance);
    if (!parsedAppearance.success) {
      console.error('Character appearance validation failed:', prettifyError(parsedAppearance.error));
    }
    expect(parsedAppearance.success).toBe(true);

    const media = await client.sendRequest(characterMediaSummary(characterName, characterSurname));
    const parsedMedia = characterMediaSummaryResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Character media validation failed:', prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test('validates the character collections', async ({ expect }) => {
    const index = await client.sendRequest(characterCollectionsIndex(characterName, characterSurname));
    const parsedIndex = characterCollectionsIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Character collections index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const heirlooms = await client.sendRequest(characterHeirloomsCollectionSummary(characterName, characterSurname));
    const parsedHeirlooms = characterHeirloomsCollectionSummaryResponseSchema.safeParse(heirlooms);
    if (!parsedHeirlooms.success) {
      console.error('Character heirlooms validation failed:', prettifyError(parsedHeirlooms.error));
    }
    expect(parsedHeirlooms.success).toBe(true);

    const mounts = await client.sendRequest(characterMountsCollectionSummary(characterName, characterSurname));
    const parsedMounts = characterMountsCollectionSummaryResponseSchema.safeParse(mounts);
    if (!parsedMounts.success) {
      console.error('Character mounts validation failed:', prettifyError(parsedMounts.error));
    }
    expect(parsedMounts.success).toBe(true);

    const pets = await client.sendRequest(characterPetsCollectionSummary(characterName, characterSurname));
    const parsedPets = characterPetsCollectionSummaryResponseSchema.safeParse(pets);
    if (!parsedPets.success) {
      console.error('Character pets validation failed:', prettifyError(parsedPets.error));
    }
    expect(parsedPets.success).toBe(true);

    const toys = await client.sendRequest(characterToysCollectionSummary(characterName, characterSurname));
    const parsedToys = characterToysCollectionSummaryResponseSchema.safeParse(toys);
    if (!parsedToys.success) {
      console.error('Character toys validation failed:', prettifyError(parsedToys.error));
    }
    expect(parsedToys.success).toBe(true);

    const transmogs = await client.sendRequest(characterTransmogCollectionSummary(characterName, characterSurname));
    const parsedTransmogs = characterTransmogCollectionSummaryResponseSchema.safeParse(transmogs);
    if (!parsedTransmogs.success) {
      console.error('Character transmogs validation failed:', prettifyError(parsedTransmogs.error));
    }
    expect(parsedTransmogs.success).toBe(true);
  });

  test('validates the character encounters', async ({ expect }) => {
    const encounters = await client.sendRequest(characterEncountersSummary(characterName, characterSurname));
    const parsedEncounters = characterEncountersSummaryResponseSchema.safeParse(encounters);
    if (!parsedEncounters.success) {
      console.error('Character encounters validation failed:', prettifyError(parsedEncounters.error));
    }
    expect(parsedEncounters.success).toBe(true);

    const dungeons = await client.sendRequest(characterDungeons(characterName, characterSurname));
    const parsedDungeons = characterDungeonsResponseSchema.safeParse(dungeons);
    if (!parsedDungeons.success) {
      console.error('Character dungeons validation failed:', prettifyError(parsedDungeons.error));
    }
    expect(parsedDungeons.success).toBe(true);

    const raids = await client.sendRequest(characterRaids(characterName, characterSurname));
    const parsedRaids = characterRaidsResponseSchema.safeParse(raids);
    if (!parsedRaids.success) {
      console.error('Character raids validation failed:', prettifyError(parsedRaids.error));
    }
    expect(parsedRaids.success).toBe(true);
  });

  test('validates the character equipment and statistics', async ({ expect }) => {
    const equipment = await client.sendRequest(characterEquipmentSummary(characterName, characterSurname));
    const parsedEquipment = characterEquipmentSummaryResponseSchema.safeParse(equipment);
    if (!parsedEquipment.success) {
      console.error('Character equipment validation failed:', prettifyError(parsedEquipment.error));
    }
    expect(parsedEquipment.success).toBe(true);

    const statistics = await client.sendRequest(characterStatisticsSummary(characterName, characterSurname));
    const parsedStatistics = characterStatisticsSummaryResponseSchema.safeParse(statistics);
    if (!parsedStatistics.success) {
      console.error('Character statistics validation failed:', prettifyError(parsedStatistics.error));
    }
    expect(parsedStatistics.success).toBe(true);
  });

  test('validates the hunter pets of a hunter character', async ({ expect }) => {
    const summary = await client.sendRequest(characterProfileSummary(hunterName, hunterSurname));
    const parsedSummary = characterProfileSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Hunter profile summary validation failed:', prettifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);
    expect(parsedSummary.data?.hunter_pets).toBeDefined();

    const hunterPets = await client.sendRequest(characterHunterPetsSummary(hunterName, hunterSurname));
    const parsedHunterPets = characterHunterPetsSummaryResponseSchema.safeParse(hunterPets);
    if (!parsedHunterPets.success) {
      console.error('Character hunter pets validation failed:', prettifyError(parsedHunterPets.error));
    }
    expect(parsedHunterPets.success).toBe(true);
  });

  test('validates the character mythic keystone profile, professions and PvP summary', async ({ expect }) => {
    const keystone = await client.sendRequest(characterMythicKeystoneProfileIndex(characterName, characterSurname));
    const parsedKeystone = characterMythicKeystoneProfileIndexResponseSchema.safeParse(keystone);
    if (!parsedKeystone.success) {
      console.error('Character mythic keystone profile validation failed:', prettifyError(parsedKeystone.error));
    }
    expect(parsedKeystone.success).toBe(true);

    const professions = await client.sendRequest(characterProfessionsSummary(characterName, characterSurname));
    const parsedProfessions = characterProfessionsSummaryResponseSchema.safeParse(professions);
    if (!parsedProfessions.success) {
      console.error('Character professions validation failed:', prettifyError(parsedProfessions.error));
    }
    expect(parsedProfessions.success).toBe(true);

    const pvp = await client.sendRequest(characterPvpSummary(characterName, characterSurname));
    const parsedPvp = characterPvpSummaryResponseSchema.safeParse(pvp);
    if (!parsedPvp.success) {
      console.error('Character PvP summary validation failed:', prettifyError(parsedPvp.error));
    }
    expect(parsedPvp.success).toBe(true);
  });

  test('validates the character quests', async ({ expect }) => {
    const quests = await client.sendRequest(characterQuests(characterName, characterSurname));
    const parsedQuests = characterQuestsResponseSchema.safeParse(quests);
    if (!parsedQuests.success) {
      console.error('Character quests validation failed:', prettifyError(parsedQuests.error));
    }
    expect(parsedQuests.success).toBe(true);

    const completed = await client.sendRequest(characterCompletedQuests(characterName, characterSurname));
    const parsedCompleted = characterCompletedQuestsResponseSchema.safeParse(completed);
    if (!parsedCompleted.success) {
      console.error('Character completed quests validation failed:', prettifyError(parsedCompleted.error));
    }
    expect(parsedCompleted.success).toBe(true);
  });

  test('validates the character reputations, specializations and titles', async ({ expect }) => {
    const reputations = await client.sendRequest(characterReputationsSummary(characterName, characterSurname));
    const parsedReputations = characterReputationsSummaryResponseSchema.safeParse(reputations);
    if (!parsedReputations.success) {
      console.error('Character reputations validation failed:', prettifyError(parsedReputations.error));
    }
    expect(parsedReputations.success).toBe(true);

    const specializations = await client.sendRequest(characterSpecializationsSummary(characterName, characterSurname));
    const parsedSpecializations = characterSpecializationsSummaryResponseSchema.safeParse(specializations);
    if (!parsedSpecializations.success) {
      console.error('Character specializations validation failed:', prettifyError(parsedSpecializations.error));
    }
    expect(parsedSpecializations.success).toBe(true);

    const titles = await client.sendRequest(characterTitlesSummary(characterName, characterSurname));
    const parsedTitles = characterTitlesSummaryResponseSchema.safeParse(titles);
    if (!parsedTitles.success) {
      console.error('Character titles validation failed:', prettifyError(parsedTitles.error));
    }
    expect(parsedTitles.success).toBe(true);
  });
});
