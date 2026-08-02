import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod/v4/core';
import { environment } from '../../../environment';
import { itemResponseSchema } from '../../../generated/schemas/d3';

describe('d3 item integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches an item', async ({ expect }) => {
    const response = await client.sendRequest(d3.item('corrupted-ashbringer-Unique_Sword_2H_104_x1'));
    const parsedResponse = itemResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Item validation failed:', treeifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
});
