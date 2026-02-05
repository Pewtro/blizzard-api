import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { heirloomIndexResponseSchema, heirloomResponseSchema } from '../../../generated/schemas/wow/heirloom';

describe('wow heirloom integration', () => {
  it('validates heirloom index and fetches heirloom detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.heirloomIndex());
    const parsed = heirloomIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Heirloom index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.heirlooms[0] : undefined;
    if (first) {
      const item = await client.sendRequest(wow.heirloom(first.id));
      const parsedItem = heirloomResponseSchema.safeParse(item);
      if (!parsedItem.success) {
        console.error('Heirloom detail validation failed:', treeifyError(parsedItem.error));
      }
      expect(parsedItem.success).toBe(true);
    }
  });
});
