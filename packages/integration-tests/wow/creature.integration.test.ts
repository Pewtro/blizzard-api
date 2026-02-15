import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  creatureFamilyIndexResponseSchema,
  creatureFamilyMediaResponseSchema,
  creatureFamilyResponseSchema,
  creatureSearchResponseSchema,
  creatureTypeIndexResponseSchema,
  creatureTypeResponseSchema,
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

    const detail = await client.sendRequest(wow.creatureFamily(1));
    const parsedDetail = creatureFamilyResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Creature family detail validation failed:', treeifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);

    const media = await client.sendRequest(wow.creatureFamilyMedia(1));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  it('validates creature search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(wow.creatureSearch({ _page: 1, locale: 'en_GB', name: 'dragon' }));
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

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
  });
});
