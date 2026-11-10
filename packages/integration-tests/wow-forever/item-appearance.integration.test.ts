import type { ItemAppearanceSlotType } from '@blizzard-api/wow-forever';
import {
  itemAppearance,
  itemAppearanceSearch,
  itemAppearanceSet,
  itemAppearanceSetIndex,
  itemAppearanceSlot,
  itemAppearanceSlotIndex,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  itemAppearanceResponseSchema,
  itemAppearanceSearchResponseSchema,
  itemAppearanceSetIndexResponseSchema,
  itemAppearanceSetResponseSchema,
  itemAppearanceSlotIndexResponseSchema,
  itemAppearanceSlotResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever item appearance integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the set and slot indexes and sampled appearances', async ({ expect }) => {
    const appearanceIds = new Set<number>();

    const appearanceSetIndexResponse = await client.sendRequest(itemAppearanceSetIndex());
    const parsedSetIndex = itemAppearanceSetIndexResponseSchema.safeParse(appearanceSetIndexResponse);
    if (!parsedSetIndex.success) {
      console.error('Item appearance set index validation failed:', prettifyError(parsedSetIndex.error));
    }
    expect(parsedSetIndex.success).toBe(true);

    const sampledSetEntries = getRandomSample(parsedSetIndex.data?.appearance_sets, 3);
    for (const appearanceSetEntry of sampledSetEntries) {
      const appearanceSetResponse = await client.sendRequest(itemAppearanceSet(appearanceSetEntry.id));
      const parsedSet = itemAppearanceSetResponseSchema.safeParse(appearanceSetResponse);
      if (!parsedSet.success) {
        console.error(
          'Item appearance set validation failed for id',
          appearanceSetEntry.id,
          prettifyError(parsedSet.error),
        );
      }
      expect(parsedSet.success).toBe(true);
      const appearanceSetEntries = parsedSet.data?.appearances ?? [];
      for (const appearanceEntry of appearanceSetEntries) {
        appearanceIds.add(appearanceEntry.id);
      }
    }

    const slotIndexResponse = await client.sendRequest(itemAppearanceSlotIndex());
    const parsedSlotIndex = itemAppearanceSlotIndexResponseSchema.safeParse(slotIndexResponse);
    if (!parsedSlotIndex.success) {
      console.error('Item appearance slot index validation failed:', prettifyError(parsedSlotIndex.error));
    }
    expect(parsedSlotIndex.success).toBe(true);

    const sampledSlotEntries = getRandomSample(parsedSlotIndex.data?.slots, 3);
    for (const slotEntry of sampledSlotEntries) {
      const slotType = new URL(slotEntry.key.href).pathname.split('/').pop() as ItemAppearanceSlotType;
      const slotResponse = await client.sendRequest(itemAppearanceSlot(slotType));
      const parsedSlot = itemAppearanceSlotResponseSchema.safeParse(slotResponse);
      if (!parsedSlot.success) {
        console.error('Item appearance slot validation failed for type', slotType, prettifyError(parsedSlot.error));
      }
      expect(parsedSlot.success).toBe(true);
      const slotAppearances = parsedSlot.data?.appearances ?? [];
      for (const appearanceEntry of slotAppearances) {
        appearanceIds.add(appearanceEntry.id);
      }
    }

    const sampledAppearanceIds = getRandomSample([...appearanceIds], 5);
    for (const appearanceId of sampledAppearanceIds) {
      const appearance = await client.sendRequest(itemAppearance(appearanceId));
      const parsedAppearance = itemAppearanceResponseSchema.safeParse(appearance);
      if (!parsedAppearance.success) {
        console.error('Item appearance validation failed for id', appearanceId, prettifyError(parsedAppearance.error));
      }
      expect(parsedAppearance.success).toBe(true);
    }
  });

  test('validates the item appearance search and sampled search results', async ({ expect }) => {
    const search = await client.sendRequest(itemAppearanceSearch({ _page: 1 }));
    const parsedSearch = itemAppearanceSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Item appearance search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const sampledSearchResults = getRandomSample(parsedSearch.data?.results, 5);
    for (const searchEntry of sampledSearchResults) {
      const appearance = await client.sendRequest(itemAppearance(searchEntry.data.id));
      const parsedAppearance = itemAppearanceResponseSchema.safeParse(appearance);
      if (!parsedAppearance.success) {
        console.error(
          'Item appearance validation failed for id',
          searchEntry.data.id,
          prettifyError(parsedAppearance.error),
        );
      }
      expect(parsedAppearance.success).toBe(true);
    }
  });
});
