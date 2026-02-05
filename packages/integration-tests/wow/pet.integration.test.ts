import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  petAbilityIndexResponseSchema,
  petAbilityMediaResponseSchema,
  petAbilityResponseSchema,
  petIndexResponseSchema,
  petMediaResponseSchema,
  petResponseSchema,
} from '../../../generated/schemas/wow/pet';

describe('wow pet integration', () => {
  it('validates pet index and fetches pet detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.petIndex());
    const parsed = petIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Pet index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 pets at random from the index to fetch details
    const pets = parsed.success ? parsed.data.pets : [];
    const sampleSize = Math.min(5, pets.length);
    const sampled =
      pets.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          pets.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : pets.slice(0, sampleSize);

    const requests = [];

    for (const t of sampled) {
      requests.push(client.sendRequest(wow.pet(t.id)));
    }
    const responses = await Promise.all(requests);
    for (const pet of responses) {
      const parsedPet = petResponseSchema.safeParse(pet);
      if (!parsedPet.success) {
        console.error('Pet detail validation failed for id', pet.id, treeifyError(parsedPet.error));
      }
      expect(parsedPet.success).toBe(true);
    }
  });

  it('validates pet abilities and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const abilityIndex = await client.sendRequest(wow.petAbilityIndex());
    const parsedAbilityIndex = petAbilityIndexResponseSchema.safeParse(abilityIndex);
    if (!parsedAbilityIndex.success) {
      console.error('Pet ability index validation failed:', treeifyError(parsedAbilityIndex.error));
    }
    expect(parsedAbilityIndex.success).toBe(true);

    const abilities = parsedAbilityIndex.success ? parsedAbilityIndex.data.abilities : [];
    const sampleSize = Math.min(5, abilities.length);
    const sampled =
      abilities.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          abilities.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : abilities.slice(0, sampleSize);

    for (const ability of sampled) {
      const detail = await client.sendRequest(wow.petAbility(ability.id));
      const parsedDetail = petAbilityResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Pet ability detail validation failed for id', ability.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const media = await client.sendRequest(wow.petAbilityMedia(ability.id));
      const parsedMedia = petAbilityMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Pet ability media validation failed for id', ability.id, treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }

    const petIndex = await client.sendRequest(wow.petIndex());
    const parsedPetIndex = petIndexResponseSchema.safeParse(petIndex);
    if (!parsedPetIndex.success) {
      console.error('Pet index validation failed:', treeifyError(parsedPetIndex.error));
    }
    expect(parsedPetIndex.success).toBe(true);

    // Pick up to 5 pets at random from the index to fetch details
    const pets = petIndex.pets;
    const petSampleSize = Math.min(5, pets.length);
    const petSampled =
      pets.length > petSampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          pets.toSorted(() => 0.5 - Math.random()).slice(0, petSampleSize)
        : pets.slice(0, petSampleSize);

    const requests = [];

    for (const pet of petSampled) {
      requests.push(client.sendRequest(wow.petMedia(pet.id)));
    }
    const responses = await Promise.all(requests);

    for (const pet of responses) {
      const parsedPetMedia = petMediaResponseSchema.safeParse(pet);
      if (!parsedPetMedia.success) {
        console.error('Pet media validation failed for id', pet.id, treeifyError(parsedPetMedia.error));
      }
      expect(parsedPetMedia.success).toBe(true);
    }
  });
});
