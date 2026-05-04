import { createBlizzardApiClient } from '@blizzard-api/client';
import { heirloom, heirloomIndex } from '@blizzard-api/wow/heirloom';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { heirloomIndexResponseSchema, heirloomResponseSchema } from '../../../generated/schemas/wow/heirloom';

describe('wow heirloom integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates heirloom index and fetches heirloom detail', async ({ expect }) => {
    const index = await client.sendRequest(heirloomIndex());
    const parsed = heirloomIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Heirloom index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.heirlooms[0] : undefined;
    if (first) {
      const item = await client.sendRequest(heirloom(first.id));
      const parsedItem = heirloomResponseSchema.safeParse(item);
      if (!parsedItem.success) {
        console.error('Heirloom detail validation failed:', first.id, treeifyError(parsedItem.error));
      }
      expect(parsedItem.success).toBe(true);
    }
  });
});
