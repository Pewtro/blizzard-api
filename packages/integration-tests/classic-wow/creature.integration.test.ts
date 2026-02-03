import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  creatureFamilyIndexResponseSchema,
  creatureTypeIndexResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow creature integration', () => {
  it('validates creature family index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.creatureFamilyIndex('static-classic1x'));
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);

  it('validates creature type index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.creatureTypeIndex('static-classic1x'));
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
