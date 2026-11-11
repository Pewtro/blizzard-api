import { heirloom, heirloomIndex } from '@blizzard-api/wow-forever/heirloom';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { heirloomIndexResponseSchema, heirloomResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

describe('wow-forever heirloom integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the heirloom index and any available details', async ({ expect }) => {
    const indexResponse = await client.sendRequest(heirloomIndex());
    const parsedIndex = heirloomIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Forever heirloom index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const heirloomEntry = parsedIndex.data!.heirlooms?.[0];
    // Forever currently returns an empty heirloom index, so there is no detail ID to request.
    if (!heirloomEntry) return;

    const detail = await client.sendRequest(heirloom(heirloomEntry.id));
    const parsedDetail = heirloomResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Forever heirloom validation failed:', heirloomEntry.id, prettifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);
  });
});
