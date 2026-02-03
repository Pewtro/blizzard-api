import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterCollectionsIndexResponseSchema,
  characterTransmogCollectionSummaryResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-collections integration', () => {
  it('validates collections indices and summaries for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';

    const index = await client.sendRequest(wow.characterCollectionsIndex(realm, character));
    const parsedIndex = characterCollectionsIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Character collections index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const transmog = await client.sendRequest(wow.characterTransmogCollectionSummary(realm, character));
    const parsedTransmog = characterTransmogCollectionSummaryResponseSchema.safeParse(transmog);
    if (!parsedTransmog.success) {
      console.error('Character transmog collection validation failed:', treeifyError(parsedTransmog.error));
    }
    expect(parsedTransmog.success).toBe(true);
  }, 30_000);
});
