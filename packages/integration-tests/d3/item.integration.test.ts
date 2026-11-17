import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod/v4/core';
import { itemResponseSchema } from '../../../generated/schemas/d3';
import { getIntegrationTestClient } from '../utils/client';

describe('d3 item integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches regular and set items', async ({ expect }) => {
    const response = await client.sendRequest(d3.item('corrupted-ashbringer-Unique_Sword_2H_104_x1'));
    const natalyaResponse = await client.sendRequest(d3.item('natalyas-sight-Unique_Helm_009_x1'));
    const parsedResponse = itemResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Item validation failed:', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);

    const parsedSetResponse = itemResponseSchema.safeParse(natalyaResponse);
    if (!parsedSetResponse.success) {
      console.error('Set item validation failed:', prettifyError(parsedSetResponse.error));
    }
    expect(parsedSetResponse.success).toBe(true);
  });
});
