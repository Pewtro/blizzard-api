import { characterProfileStatus, characterProfileSummary } from '@blizzard-api/classic-wow/character-profile';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterProfileSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { characterProfileStatusResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character profile integration', async () => {
  const client = await getIntegrationTestClient();
  const realm = 'shekzeer';
  const character = 'putro';
  test('fetches profile summary', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileSummary('profile-classic', realm, character));
    const parsed = characterProfileSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character profile summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fetches profile status', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileStatus('profile-classic', realm, character));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(resp);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', realm, character, prettifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  });
});

describe('classic-wow character profile integration for classic anniversary', async () => {
  const client = await getIntegrationTestClient();
  const realm = 'thunderstrike';
  const character = 'kytahela';
  test('fetches profile summary', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileSummary('profile-classicann', realm, character));
    const parsed = characterProfileSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character profile summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fetches profile status', async ({ expect }) => {
    const resp = await client.sendRequest(characterProfileStatus('profile-classicann', realm, character));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(resp);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', realm, character, prettifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  });
});
