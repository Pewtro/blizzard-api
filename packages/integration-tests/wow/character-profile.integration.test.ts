import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterProfileStatusResponseSchema,
  characterProfileSummaryResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-profile integration', () => {
  it('validates character profile summary and status for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';

    const summary = await client.sendRequest(wow.characterProfileSummary(realm, character));
    const parsedSummary = characterProfileSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Character profile summary validation failed:', treeifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const status = await client.sendRequest(wow.characterProfileStatus(realm, character));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(status);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', treeifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  }, 30_000);
});
