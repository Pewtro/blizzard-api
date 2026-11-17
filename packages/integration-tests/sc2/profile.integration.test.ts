import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  ladderResponseSchema,
  ladderSummaryResponseSchema,
  metadataResponseSchema,
  profileResponseSchema,
  staticProfileResponseSchema,
} from '../../../generated/schemas/sc2';
import { getIntegrationTestClient } from '../utils/client';

describe('sc2 profile integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches ladder', async ({ expect }) => {
    const summary = await client.sendRequest(sc2.ladderSummary('eu', 1, 9_500_381));
    const parsedSummary = ladderSummaryResponseSchema.safeParse(summary);
    if (!parsedSummary.success) {
      console.error('Ladder Summary failed', prettifyError(parsedSummary.error));
    }
    expect(parsedSummary.success).toBe(true);

    const ladderId = Number(parsedSummary.data!.allLadderMemberships[0]?.ladderId ?? 1);
    const response = await client.sendRequest(sc2.ladder('eu', 1, 9_500_381, ladderId));
    const parsedResponse = ladderResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Ladder failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
  test('fetches ladder summary', async ({ expect }) => {
    const response = await client.sendRequest(sc2.ladderSummary('eu', 1, 9_500_381));
    const parsedResponse = ladderSummaryResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Ladder Summary failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
  test('fetches profile metadata', async ({ expect }) => {
    const response = await client.sendRequest(sc2.metadata('eu', 1, 9_500_381));
    const parsedResponse = metadataResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Profile Metadata failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a profile', async ({ expect }) => {
    const response = await client.sendRequest(sc2.profile('eu', 1, 9_500_381));
    const parsedResponse = profileResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Profile failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a static profile', async ({ expect }) => {
    const response = await client.sendRequest(sc2.staticProfile('eu'));
    const parsedResponse = staticProfileResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Static Profile failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
});
