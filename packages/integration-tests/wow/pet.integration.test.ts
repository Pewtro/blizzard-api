import { pet, petAbility, petAbilityIndex, petAbilityMedia, petIndex, petMedia } from '@blizzard-api/wow/pet';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  petAbilityIndexResponseSchema,
  petAbilityMediaResponseSchema,
  petAbilityResponseSchema,
  petIndexResponseSchema,
  petMediaResponseSchema,
  petResponseSchema,
} from '../../../generated/schemas/wow/pet';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow pet integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates pet index and fetches pet detail', async ({ expect }) => {
    const index = await client.sendRequest(petIndex());
    const parsed = petIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Pet index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 pets at random from the index to fetch details
    const pets = parsed.success ? parsed.data.pets : [];
    const sampled = getRandomSample(pets, 5);

    const requests = Array.from(sampled, (t) => client.sendRequest(pet(t.id)));
    const responses = await Promise.all(requests);
    for (const petResp of responses) {
      const parsedPet = petResponseSchema.safeParse(petResp);
      if (!parsedPet.success) {
        console.error('Pet detail validation failed for id', petResp?.id, prettifyError(parsedPet.error));
      }
      expect(parsedPet.success).toBe(true);
    }
  });

  test('validates pet abilities and media', async ({ expect }) => {
    const abilityIndex = await client.sendRequest(petAbilityIndex());
    const parsedAbilityIndex = petAbilityIndexResponseSchema.safeParse(abilityIndex);
    if (!parsedAbilityIndex.success) {
      console.error('Pet ability index validation failed:', prettifyError(parsedAbilityIndex.error));
    }
    expect(parsedAbilityIndex.success).toBe(true);

    const abilities = parsedAbilityIndex.success ? parsedAbilityIndex.data.abilities : [];
    const sampled = getRandomSample(abilities, 5);

    for (const ability of sampled) {
      const detail = await client.sendRequest(petAbility(ability.id));
      const parsedDetail = petAbilityResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Pet ability detail validation failed for id', ability.id, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const media = await client.sendRequest(petAbilityMedia(ability.id));
      const parsedMedia = petAbilityMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Pet ability media validation failed for id', ability.id, prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }

    const petIndexResp = await client.sendRequest(petIndex());
    const parsedPetIndex = petIndexResponseSchema.safeParse(petIndexResp);
    if (!parsedPetIndex.success) {
      console.error('Pet index validation failed:', prettifyError(parsedPetIndex.error));
    }
    expect(parsedPetIndex.success).toBe(true);

    // Pick up to 5 pets at random from the index to fetch details
    const pets = petIndexResp!.pets;
    const petSampled = getRandomSample(pets, 5);

    const requests = Array.from(petSampled, (petResp) => client.sendRequest(petMedia(petResp.id)));
    const responses = await Promise.all(requests);

    for (const petResp of responses) {
      const parsedPetMedia = petMediaResponseSchema.safeParse(petResp);
      if (!parsedPetMedia.success) {
        console.error('Pet media validation failed for id', petResp?.id, prettifyError(parsedPetMedia.error));
      }
      expect(parsedPetMedia.success).toBe(true);
    }
  });
});
