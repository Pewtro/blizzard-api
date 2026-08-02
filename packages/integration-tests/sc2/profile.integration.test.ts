import { createBlizzardApiClient } from '@blizzard-api/client';
import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import {
  ladderResponseSchema,
  ladderSummaryResponseSchema,
  metadataResponseSchema,
  profileResponseSchema,
  staticProfileResponseSchema,
} from '../../../generated/schemas/sc2';

describe('sc2 profile integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches ladder', async ({ expect }) => {
    const response = await client.sendRequest(sc2.ladder('eu', 1, 9_500_381, 1));
    const parsedResponse = ladderResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Ladder failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
  test('fetches ladder summary', async ({ expect }) => {
    const response = await client.sendRequest(sc2.ladderSummary('eu', 1, 9_500_381));
    const parsedResponse = ladderSummaryResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Ladder Summary failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
  test('fetches profile metadata', async ({ expect }) => {
    const response = await client.sendRequest(sc2.metadata('eu', 1, 9_500_381));
    const parsedResponse = metadataResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Profile Metadata failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a profile', async ({ expect }) => {
    const response = await client.sendRequest(sc2.profile('eu', 1, 9_500_381));
    const parsedResponse = profileResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Profile failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a static profile', async ({ expect }) => {
    const response = await client.sendRequest(sc2.staticProfile('eu'));
    const parsedResponse = staticProfileResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Static Profile failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
});
