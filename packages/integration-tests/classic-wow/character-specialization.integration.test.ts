import { characterSpecializationsSummary } from '@blizzard-api/classic-wow/character-specialization';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character specialization integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches specialization summary for a character on classic era', async ({ expect }) => {
    const realm = 'soulseeker';
    const character = 'reonwar';

    const resp = await client.sendRequest(characterSpecializationsSummary('profile-classic1x', realm, character));
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error(
        'Character specialization summary validation failed:',
        realm,
        character,
        treeifyError(parsed.error),
      );
    }
    expect(parsed.success).toBe(true);
  });
  test('fetches specialization summary for a character on classic progression', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterSpecializationsSummary('profile-classic', realm, character));
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error(
        'Character specialization summary validation failed:',
        realm,
        character,
        treeifyError(parsed.error),
      );
    }
    expect(parsed.success).toBe(true);
  });
});
