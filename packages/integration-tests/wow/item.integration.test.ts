/* eslint-disable sonarjs/pseudo-random */
import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubClass,
} from '@blizzard-api/wow/item';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  itemClassIndexResponseSchema,
  itemClassResponseSchema,
  itemMediaResponseSchema,
  itemResponseSchema,
  itemSearchResponseSchema,
  itemSetIndexResponseSchema,
  itemSetResponseSchema,
  itemSubClassResponseSchema,
} from '../../../generated/schemas/wow/item';

describe.concurrent('wow item integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates item and item media', async ({ expect }) => {
    const resp = await client.sendRequest(item(19_019));
    const parsed = itemResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Item validation failed', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const respMedia = await client.sendRequest(itemMedia(19_019));
    const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
    if (!parsedMedia.success) {
      console.error('Item media validation failed', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });
  test('validates item class index', async ({ expect }) => {
    const resp = await client.sendRequest(itemClassIndex());
    const parsed = itemClassIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Item class index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const randomItemClassIndex = Math.floor(Math.random() * resp.item_classes.length);
    const foundItemClass = resp.item_classes[randomItemClassIndex];

    expect(foundItemClass).toBeDefined();

    const detail = await client.sendRequest(itemClass(foundItemClass!.id));
    const parsedDetail = itemClassResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Item class detail validation failed:', foundItemClass!.id, treeifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);

    const subClassIndex = Math.floor(Math.random() * detail.item_subclasses.length);
    const subClass = detail.item_subclasses[subClassIndex];

    const subDetail = await client.sendRequest(itemSubClass(foundItemClass!.id, subClass!.id));
    const parsedSubDetail = itemSubClassResponseSchema.safeParse(subDetail);
    if (!parsedSubDetail.success) {
      console.error(
        'Item subclass detail validation failed:',
        foundItemClass!.id,
        subClass!.id,
        treeifyError(parsedSubDetail.error),
      );
    }
    expect(parsedSubDetail.success).toBe(true);
  });

  test('validates item sets', async ({ expect }) => {
    const setIndex = await client.sendRequest(itemSetIndex());
    const parsedSetIndex = itemSetIndexResponseSchema.safeParse(setIndex);
    if (!parsedSetIndex.success) {
      console.error('Item set index validation failed:', treeifyError(parsedSetIndex.error));
    }
    expect(parsedSetIndex.success).toBe(true);

    const first = parsedSetIndex.success ? parsedSetIndex.data.item_sets[0] : undefined;
    if (first) {
      const set = await client.sendRequest(itemSet(first.id));
      const parsedSet = itemSetResponseSchema.safeParse(set);
      if (!parsedSet.success) {
        console.error('Item set detail validation failed:', first.id, treeifyError(parsedSet.error));
      }
      expect(parsedSet.success).toBe(true);
    }
  });

  test('validates item search', async ({ expect }) => {
    const search = await client.sendRequest(itemSearch({ _page: 1, locale: 'en_GB', name: 'Glaive' }));
    const parsed = itemSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Item search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
