import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSubclass } from '@blizzard-api/classic-wow/item';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  itemClassIndexResponseSchema,
  itemClassResponseSchema,
  itemMediaResponseSchema,
  itemResponseSchema,
  itemSearchResponseSchema,
  itemSubclassResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('classic-wow item integration', async () => {
  const client = await getIntegrationTestClient();

  describe('classic era', () => {
    test('validates item and item media', async ({ expect }) => {
      const resp = await client.sendRequest(item('static-classic1x', 19_019));
      const parsed = itemResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item validation failed', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(itemMedia('static-classic1x', 19_019));
      const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Item media validation failed', prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates item class index and item details', async ({ expect }) => {
      const resp = await client.sendRequest(itemClassIndex('static-classic1x'));
      const parsed = itemClassIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item class index validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // Avoid the "WoW Token" class which has no subclasses and causes the subclass test to fail
      const randomItemClass = getRandomItem(resp!.item_classes);
      const foundItemClass = randomItemClass?.id === 18 ? resp!.item_classes[1] : randomItemClass;

      expect(foundItemClass).toBeDefined();

      const detail = await client.sendRequest(itemClass('static-classic1x', foundItemClass!.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', foundItemClass!.id, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const subclass = getRandomItem(detail!.item_subclasses) ?? { id: 1 };

      const subDetail = await client.sendRequest(itemSubclass('static-classic1x', foundItemClass!.id, subclass?.id));
      const parsedSubDetail = itemSubclassResponseSchema.safeParse(subDetail);
      if (!parsedSubDetail.success) {
        console.error(
          'Item subclass detail validation failed:',
          foundItemClass!.id,
          subclass.id,
          prettifyError(parsedSubDetail.error),
        );
      }
      expect(parsedSubDetail.success).toBe(true);
    });

    test('validates item search', async ({ expect }) => {
      const search = await client.sendRequest(
        itemSearch('static-classic1x', { _page: 1, locale: 'en_GB', name: 'Glaive' }),
      );
      const parsed = itemSearchResponseSchema.safeParse(search);
      if (!parsed.success) {
        console.error('Item search validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  });

  describe('classic progression', () => {
    test('validates item and item media', async ({ expect }) => {
      const resp = await client.sendRequest(item('static-classic', 19_019));
      const parsed = itemResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item validation failed', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(itemMedia('static-classic', 19_019));
      const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Item media validation failed', prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates item class index and item details', async ({ expect }) => {
      const resp = await client.sendRequest(itemClassIndex('static-classic'));
      const parsed = itemClassIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item class index validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // Avoid the "WoW Token" class which has no subclasses and causes the subclass test to fail
      const randomItemClass = getRandomItem(resp!.item_classes);
      const foundItemClass = randomItemClass?.id === 18 ? resp!.item_classes[1] : randomItemClass;

      expect(foundItemClass).toBeDefined();

      const detail = await client.sendRequest(itemClass('static-classic', foundItemClass!.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', foundItemClass!.id, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const subclass = getRandomItem(detail!.item_subclasses) ?? { id: 1 };

      const subDetail = await client.sendRequest(itemSubclass('static-classic', foundItemClass!.id, subclass.id));
      const parsedSubDetail = itemSubclassResponseSchema.safeParse(subDetail);
      if (!parsedSubDetail.success) {
        console.error(
          'Item subclass detail validation failed:',
          foundItemClass!.id,
          subclass.id,
          prettifyError(parsedSubDetail.error),
        );
      }
      expect(parsedSubDetail.success).toBe(true);
    });

    test('validates item search', async ({ expect }) => {
      const search = await client.sendRequest(
        itemSearch('static-classic', { _page: 1, locale: 'en_GB', name: 'Glaive' }),
      );
      const parsed = itemSearchResponseSchema.safeParse(search);
      if (!parsed.success) {
        console.error('Item search validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  });

  describe('classic anniversary', () => {
    test('validates item and item media', async ({ expect }) => {
      const resp = await client.sendRequest(item('static-classicann', 19_019));
      const parsed = itemResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item validation failed', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(itemMedia('static-classicann', 19_019));
      const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Item media validation failed:', prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates item class index and item details', async ({ expect }) => {
      const resp = await client.sendRequest(itemClassIndex('static-classicann'));
      const parsed = itemClassIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item class index validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // Avoid the "WoW Token" class which has no subclasses and causes the subclass test to fail
      const randomItemClass = getRandomItem(resp!.item_classes);
      const foundItemClass = randomItemClass?.id === 18 ? resp!.item_classes[1] : randomItemClass;

      expect(foundItemClass).toBeDefined();

      const detail = await client.sendRequest(itemClass('static-classicann', foundItemClass!.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', foundItemClass!.id, prettifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const subclass = getRandomItem(detail!.item_subclasses) ?? { id: 1 };

      const subDetail = await client.sendRequest(itemSubclass('static-classicann', foundItemClass!.id, subclass.id));
      const parsedSubDetail = itemSubclassResponseSchema.safeParse(subDetail);
      if (!parsedSubDetail.success) {
        console.error(
          'Item subclass detail validation failed:',
          foundItemClass!.id,
          subclass.id,
          prettifyError(parsedSubDetail.error),
        );
      }
      expect(parsedSubDetail.success).toBe(true);
    });

    test('validates item search', async ({ expect }) => {
      const search = await client.sendRequest(
        itemSearch('static-classicann', { _page: 1, locale: 'en_GB', name: 'Glaive' }),
      );
      const parsed = itemSearchResponseSchema.safeParse(search);
      if (!parsed.success) {
        console.error('Item search validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  });
});
