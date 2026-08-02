import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { itemTypeIndexResponseSchema, itemTypeResponseSchema } from '../../../generated/schemas/d3';

describe('d3 item-type integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches item type indices and item details', async ({ expect }) => {
    const response = await client.sendRequest(d3.itemTypeIndex());
    const parsedResponse = itemTypeIndexResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Item type index validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomItemType = response![Math.floor(Math.random() * response!.length)];
    const randomItemTypeSlug = randomItemType?.path.replace('item-type/', '');
    if (!randomItemTypeSlug) {
      console.error('No item type slug found in the response for the random item type:', randomItemType);
    }
    const itemTypeResponse = await client.sendRequest(d3.itemType(randomItemTypeSlug!));
    const itemTypeParsedResponse = itemTypeResponseSchema.safeParse(itemTypeResponse);
    if (!itemTypeParsedResponse.success) {
      console.error('Item type validation failed for slug:', randomItemTypeSlug, itemTypeParsedResponse.error);
    }
    expect(itemTypeParsedResponse.success).toBe(true);
  });
});
