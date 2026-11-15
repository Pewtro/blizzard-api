import { heirloom, heirloomIndex } from '@blizzard-api/wow/heirloom';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { heirloomIndexResponseSchema, heirloomResponseSchema } from '../../../generated/schemas/wow/heirloom';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow heirloom integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates heirloom index and fetches heirloom detail', async ({ expect }) => {
    const index = await client.sendRequest(heirloomIndex());
    const parsed = heirloomIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Heirloom index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const heirloomEntry = getRandomItem(parsed.data!.heirlooms);
    expect(heirloomEntry).toBeDefined();
    const item = await client.sendRequest(heirloom(heirloomEntry!.id));
    const parsedItem = heirloomResponseSchema.safeParse(item);
    if (!parsedItem.success) {
      console.error('Heirloom detail validation failed:', heirloomEntry!.id, prettifyError(parsedItem.error));
    }
    expect(parsedItem.success).toBe(true);
  });
});
