import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterProfileSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character profile integration', () => {
  it('fetches profile summary', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(classicWow.characterProfileSummary('profile-classic', realm, character));
    const parsed = characterProfileSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character profile summary validation failed:', realm, character, treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
