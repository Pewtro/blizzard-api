import { characterProfileStatus, characterProfileSummary } from '@blizzard-api/wow/character-profile';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterProfileStatusResponseSchema,
  characterProfileSummaryResponseSchema,
} from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-profile integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character profile summary and status', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const summary = await client.sendRequest(characterProfileSummary(realm, character));
    const parsedSummary = characterProfileSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Character profile summary validation failed:', prettifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const status = await client.sendRequest(characterProfileStatus(realm, character));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(status);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', prettifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  });
});
