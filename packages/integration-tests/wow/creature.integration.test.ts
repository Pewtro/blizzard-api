import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  creatureFamilyIndexResponseSchema,
  creatureFamilyResponseSchema, creatureTypeIndexResponseSchema, creatureTypeResponseSchema 
} from '../../../generated/schemas/wow/creature';


describe('wow creature integration', () => {
  it('validates creature family index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.creatureFamilyIndex());
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.creature_families[0] : undefined;
    if (first) {
      const detail = await client.sendRequest(wow.creatureFamily(first.id));
      const parsedDetail = creatureFamilyResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Creature family detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);

  it('validates creature type index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.creatureTypeIndex());
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.creature_types[0] : undefined;
    if (first) {
      const detail = await client.sendRequest(wow.creatureType(first.id));
      const parsedDetail = creatureTypeResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Creature type detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);
});
