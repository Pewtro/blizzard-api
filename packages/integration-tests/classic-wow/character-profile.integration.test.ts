import { characterProfileStatus, characterProfileSummary } from '@blizzard-api/classic-wow/character-profile';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterProfileSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { characterProfileStatusResponseSchema } from '../../../generated/schemas/wow';

describe('classic-wow character profile integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  const realm = 'shekzeer';
  const character = 'putro';
  test('fetches profile summary', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileSummary('profile-classic', realm, character));
    const parsed = characterProfileSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character profile summary validation failed:', realm, character, treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fetches profile status', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileStatus('profile-classic', realm, character));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(resp);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', realm, character, treeifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  });
});
