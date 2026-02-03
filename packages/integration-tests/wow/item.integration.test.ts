import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { itemClassIndexResponseSchema, itemClassResponseSchema } from '../../../generated/schemas/wow/item';

describe('wow item integration', () => {
  it('validates item class index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.itemClassIndex());
    const parsed = itemClassIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Item class index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.item_classes[0] : undefined;
    if (first) {
      const detail = await client.sendRequest(wow.itemClass(first.id));
      const parsedDetail = itemClassResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Item class detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);
});
