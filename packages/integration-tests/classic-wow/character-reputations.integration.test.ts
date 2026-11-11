import { characterReputationsSummary } from '@blizzard-api/classic-wow/character-reputations';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterReputationsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

const characters = [{ character: 'ordben', namespace: 'profile-classicann', realm: 'spineshatter' }] as const;

describe('classic-wow character-reputations integration', async () => {
  const client = await getIntegrationTestClient();

  test.each(characters)('validates character reputations for $namespace', async ({ character, namespace, realm }) => {
    const response = await client.sendRequest(characterReputationsSummary(namespace, realm, character));
    const parsed = characterReputationsSummaryResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error(
        'Classic character reputations validation failed:',
        namespace,
        realm,
        character,
        prettifyError(parsed.error),
      );
    }
    expect(parsed.success).toBe(true);
  });
});
