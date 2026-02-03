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

    const first = parsed.success ? parsed.data.pets[0] : undefined;
    if (first) {
      const pet = await client.sendRequest(wow.pet(first.id));
      const parsedPet = petResponseSchema.safeParse(pet);
      if (!parsedPet.success) {
        console.error('Pet detail validation failed:', treeifyError(parsedPet.error));
      }
      expect(parsedPet.success).toBe(true);
    }
  }, 30_000);
});
