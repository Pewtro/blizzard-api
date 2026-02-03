import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character specialization integration', () => {
  it('fetches specialization summary for a character', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(
      classicWow.characterSpecializationsSummary('profile-classic', realm, character),
    );
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character specialization summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
