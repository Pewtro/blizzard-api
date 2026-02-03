import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character specialization integration', () => {
  it('fetches specialization summary for a character on classic era', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'soulseeker';
    const character = 'reonwar';

    const resp = await client.sendRequest(
      classicWow.characterSpecializationsSummary('profile-classic1x', realm, character),
    );
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character specialization summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
  it('fetches specialization summary for a character on classic progression', async ({ expect }) => {
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
