import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterCollectionsIndexResponseSchema,
  characterHeirloomsCollectionSummaryResponseSchema,
  characterMountsCollectionSummaryResponseSchema,
  characterPetsCollectionSummaryResponseSchema,
  characterToysCollectionSummaryResponseSchema,
  characterTransmogCollectionSummaryResponseSchema,
} from '../../../generated/schemas/wow';

describe.concurrent('wow character-collections integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  const realm = 'laughing-skull';
  const character = 'putro';
  it('validates collections indices', async ({ expect }) => {
    const index = await client.sendRequest(wow.characterCollectionsIndex(realm, character));
    const parsedIndex = characterCollectionsIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Character collections index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);
  });

  it('validates heirlooms collection summary', async ({ expect }) => {
    const heirlooms = await client.sendRequest(wow.characterHeirloomsCollectionSummary(realm, character));
    const parsedHeirlooms = characterHeirloomsCollectionSummaryResponseSchema.safeParse(heirlooms);
    if (!parsedHeirlooms.success) {
      console.error('Character heirlooms collection validation failed:', treeifyError(parsedHeirlooms.error));
    }
    expect(parsedHeirlooms.success).toBe(true);
  });

  it('validates mounts collection summary', async ({ expect }) => {
    const mounts = await client.sendRequest(wow.characterMountsCollectionSummary(realm, character));
    const parsedMounts = characterMountsCollectionSummaryResponseSchema.safeParse(mounts);
    if (!parsedMounts.success) {
      console.error('Character mounts collection validation failed:', treeifyError(parsedMounts.error));
    }
    expect(parsedMounts.success).toBe(true);
  });

  it('validates pets collection summary', async ({ expect }) => {
    const pets = await client.sendRequest(wow.characterPetsCollectionSummary(realm, character));
    const parsedPets = characterPetsCollectionSummaryResponseSchema.safeParse(pets);
    if (!parsedPets.success) {
      console.error('Character pets collection validation failed:', treeifyError(parsedPets.error));
    }
    expect(parsedPets.success).toBe(true);
  });

  it('validates toys collection summary', async ({ expect }) => {
    const toys = await client.sendRequest(wow.characterToysCollectionSummary(realm, character));
    const parsedToys = characterToysCollectionSummaryResponseSchema.safeParse(toys);
    if (!parsedToys.success) {
      console.error('Character toys collection validation failed:', treeifyError(parsedToys.error));
    }
    expect(parsedToys.success).toBe(true);
  });

  it('validates transmog collection summary', async ({ expect }) => {
    const transmog = await client.sendRequest(wow.characterTransmogCollectionSummary(realm, character));
    const parsedTransmog = characterTransmogCollectionSummaryResponseSchema.safeParse(transmog);
    if (!parsedTransmog.success) {
      console.error('Character transmog collection validation failed:', treeifyError(parsedTransmog.error));
    }
    expect(parsedTransmog.success).toBe(true);
  });
});
