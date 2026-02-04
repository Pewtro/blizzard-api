import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { petIndexResponseSchema, petResponseSchema } from '../../../generated/schemas/wow/pet';

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
  }, 30_000);
});
