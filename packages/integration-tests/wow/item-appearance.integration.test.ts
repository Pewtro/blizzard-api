import {
  itemAppearance,
  itemAppearanceSearch,
  itemAppearanceSet,
  itemAppearanceSetIndex,
  itemAppearanceSlot,
  itemAppearanceSlotIndex,
} from '@blizzard-api/wow/item-appearance';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  itemAppearanceResponseSchema,
  itemAppearanceSearchResponseSchema,
  itemAppearanceSetIndexResponseSchema,
  itemAppearanceSetResponseSchema,
  itemAppearanceSlotIndexResponseSchema,
  itemAppearanceSlotResponseSchema,
} from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow item appearance and neighborhood integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates item appearance search and sampled details', async ({ expect }) => {
    const search = await client.sendRequest(itemAppearanceSearch({ _page: 1 }));
    const parsedSearch = itemAppearanceSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Retail item appearance search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const appearanceIds = getRandomSample(
      parsedSearch.data!.results.map((result) => result.data.id),
      3,
    );
    for (const appearanceId of appearanceIds) {
      const detail = await client.sendRequest(itemAppearance(appearanceId));
      const parsedDetail = itemAppearanceResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Retail item appearance validation failed:', appearanceId, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  });

  test('validates item appearance set and slot indexes and sampled details', async ({ expect }) => {
    const [appearanceSetIndexResponse, slotIndexResponse] = await Promise.all([
      client.sendRequest(itemAppearanceSetIndex()),
      client.sendRequest(itemAppearanceSlotIndex()),
    ]);
    const parsedSetIndex = itemAppearanceSetIndexResponseSchema.safeParse(appearanceSetIndexResponse);
    const parsedSlotIndex = itemAppearanceSlotIndexResponseSchema.safeParse(slotIndexResponse);

    if (!parsedSetIndex.success) {
      console.error('Retail item appearance set index validation failed:', prettifyError(parsedSetIndex.error));
    }
    if (!parsedSlotIndex.success) {
      console.error('Retail item appearance slot index validation failed:', prettifyError(parsedSlotIndex.error));
    }
    expect(parsedSetIndex.success).toBe(true);
    expect(parsedSlotIndex.success).toBe(true);

    for (const appearanceSet of getRandomSample(parsedSetIndex.data!.appearance_sets, 3)) {
      const detail = await client.sendRequest(itemAppearanceSet(appearanceSet.id));
      const parsedDetail = itemAppearanceSetResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Retail appearance set validation failed:', appearanceSet.id, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }

    for (const slot of getRandomSample(parsedSlotIndex.data!.slots, 3)) {
      const slotType = new URL(slot.key.href).pathname.split('/').at(-1) as Parameters<typeof itemAppearanceSlot>[0];
      const detail = await client.sendRequest(itemAppearanceSlot(slotType));
      const parsedDetail = itemAppearanceSlotResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Retail appearance slot validation failed:', slotType, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  });
});
