import {
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubclass,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  itemClassIndexResponseSchema,
  itemClassResponseSchema,
  itemMediaResponseSchema,
  itemResponseSchema,
  itemSearchResponseSchema,
  itemSetIndexResponseSchema,
  itemSetResponseSchema,
  itemSubclassResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever item integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the item class tree and a sampled subclass', async ({ expect }) => {
    const classIndex = await client.sendRequest(itemClassIndex());
    const parsedClassIndex = itemClassIndexResponseSchema.safeParse(classIndex);
    if (!parsedClassIndex.success) {
      console.error('Item class index validation failed:', prettifyError(parsedClassIndex.error));
    }
    expect(parsedClassIndex.success).toBe(true);

    //Forever exposes a placeholder item class with id 0 whose subclasses carry a sentinel id, so only sample real classes.
    const sampledClasses = getRandomSample(
      parsedClassIndex.data?.item_classes?.filter((itemClassEntry) => itemClassEntry.id > 0),
      5,
    );

    for (const itemClassEntry of sampledClasses) {
      const classResponse = await client.sendRequest(itemClass(itemClassEntry.id));
      const parsedClass = itemClassResponseSchema.safeParse(classResponse);
      if (!parsedClass.success) {
        console.error('Item class validation failed for id', itemClassEntry.id, prettifyError(parsedClass.error));
      }
      expect(parsedClass.success).toBe(true);

      const subclass = parsedClass.data?.item_subclasses?.find((entry) => entry.id > 0);
      if (!subclass) continue;

      const subclassResponse = await client.sendRequest(itemSubclass(itemClassEntry.id, subclass.id));
      const parsedSubclass = itemSubclassResponseSchema.safeParse(subclassResponse);
      if (!parsedSubclass.success) {
        console.error(
          'Item subclass validation failed for class/id',
          itemClassEntry.id,
          subclass.id,
          prettifyError(parsedSubclass.error),
        );
      }
      expect(parsedSubclass.success).toBe(true);
    }
  });

  test('validates the item set index and a sampled item set', async ({ expect }) => {
    const itemSetIndexResponse = await client.sendRequest(itemSetIndex());
    const parsedSetIndex = itemSetIndexResponseSchema.safeParse(itemSetIndexResponse);
    if (!parsedSetIndex.success) {
      console.error('Item set index validation failed:', prettifyError(parsedSetIndex.error));
    }
    expect(parsedSetIndex.success).toBe(true);

    const sampledSets = getRandomSample(parsedSetIndex.data?.item_sets, 3);
    const itemSetResponses = await Promise.all(
      Array.from(sampledSets, (itemSetEntry) => client.sendRequest(itemSet(itemSetEntry.id))),
    );

    for (const response of itemSetResponses) {
      const parsedSet = itemSetResponseSchema.safeParse(response);
      if (!parsedSet.success) {
        console.error('Item set validation failed for id', response?.id, prettifyError(parsedSet.error));
      }
      expect(parsedSet.success).toBe(true);
    }
  });

  test('validates the item search and a sampled item with its media', async ({ expect }) => {
    const search = await client.sendRequest(itemSearch({ _page: 1, locale: 'en_US', name: 'linen' }));
    const parsedSearch = itemSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Item search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const sampled = getRandomSample(parsedSearch.data?.results, 3).map((result) => result.data.id);

    for (const itemId of sampled) {
      const itemResponse = await client.sendRequest(item(itemId));
      const parsedItem = itemResponseSchema.safeParse(itemResponse);
      if (!parsedItem.success) {
        console.error('Item validation failed for id', itemId, prettifyError(parsedItem.error));
      }
      expect(parsedItem.success).toBe(true);

      const media = await client.sendRequest(itemMedia(itemId));
      const parsedMedia = itemMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Item media validation failed for id', itemId, prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
});
