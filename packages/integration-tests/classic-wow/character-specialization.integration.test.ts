import { characterSpecializationsSummary } from '@blizzard-api/classic-wow/character-specializations';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character specialization integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test.each([
    { character: 'reonwar', namespace: 'profile-classic1x', realm: 'soulseeker' },
    { character: 'putro', namespace: 'profile-classic', realm: 'shekzeer' },
    { character: 'kytahela', namespace: 'profile-classicann', realm: 'thunderstrike' },
  ] as const)(
    'fetches specialization summary for a character on $namespace',
    async ({ character, namespace, realm }) => {
      const resp = await client.sendRequest(characterSpecializationsSummary(namespace, realm, character));
      const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error(
          'Character specialization summary validation failed:',
          realm,
          character,
          prettifyError(parsed.error),
        );
      }
      expect(parsed.success).toBe(true);
    },
  );
});
