import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSubclass } from '@blizzard-api/classic-wow/item';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  itemClassIndexResponseSchema,
  itemClassResponseSchema,
  itemMediaResponseSchema,
  itemResponseSchema,
  itemSearchResponseSchema,
  itemSubclassResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow item integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  describe('classic era', () => {
    test('validates item and item media', async ({ expect }) => {
      const resp = await client.sendRequest(item('static-classic1x', 19_019));
      const parsed = itemResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item validation failed', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(itemMedia('static-classic1x', 19_019));
      const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Item media validation failed', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates item class index', async ({ expect }) => {
      const resp = await client.sendRequest(itemClassIndex('static-classic1x'));
      const parsed = itemClassIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item class index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const randomItemClassIndex = Math.floor(Math.random() * resp.item_classes.length);

      // Avoid the "WoW Token" class which has no subclasses and causes the subclass test to fail
      const foundItemClass =
        resp.item_classes[randomItemClassIndex]?.id === 18
          ? resp.item_classes[1]
          : resp.item_classes[randomItemClassIndex];

      expect(foundItemClass).toBeDefined();

      const detail = await client.sendRequest(itemClass('static-classic1x', foundItemClass!.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', foundItemClass!.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const subclassIndex = Math.floor(Math.random() * (detail.item_subclasses?.length ?? 1));
      const subclass = detail.item_subclasses?.[subclassIndex] ?? { id: 1 };

      const subDetail = await client.sendRequest(itemSubclass('static-classic1x', foundItemClass!.id, subclass?.id));
      const parsedSubDetail = itemSubclassResponseSchema.safeParse(subDetail);
      if (!parsedSubDetail.success) {
        console.error(
          'Item subclass detail validation failed:',
          foundItemClass!.id,
          subclass.id,
          treeifyError(parsedSubDetail.error),
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
        console.error('Item search validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  });

  describe('classic progression', () => {
    test('validates item and item media', async ({ expect }) => {
      const resp = await client.sendRequest(item('static-classic', 19_019));
      const parsed = itemResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item validation failed', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(itemMedia('static-classic', 19_019));
      const parsedMedia = itemMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Item media validation failed', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates item class index', async ({ expect }) => {
      const resp = await client.sendRequest(itemClassIndex('static-classic'));
      const parsed = itemClassIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Item class index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const randomItemClassIndex = Math.floor(Math.random() * resp.item_classes.length);

      // Avoid the "WoW Token" class which has no subclasses and causes the subclass test to fail
      const foundItemClass =
        resp.item_classes[randomItemClassIndex]?.id === 18
          ? resp.item_classes[1]
          : resp.item_classes[randomItemClassIndex];

      expect(foundItemClass).toBeDefined();

      const detail = await client.sendRequest(itemClass('static-classic', foundItemClass!.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', foundItemClass!.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const subclassIndex = Math.floor(Math.random() * (detail.item_subclasses?.length ?? 1));
      const subclass = detail.item_subclasses?.[subclassIndex] ?? { id: 1 };

      const subDetail = await client.sendRequest(itemSubclass('static-classic', foundItemClass!.id, subclass.id));
      const parsedSubDetail = itemSubclassResponseSchema.safeParse(subDetail);
      if (!parsedSubDetail.success) {
        console.error(
          'Item subclass detail validation failed:',
          foundItemClass!.id,
          subclass.id,
          treeifyError(parsedSubDetail.error),
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
        console.error('Item search validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  });
});
