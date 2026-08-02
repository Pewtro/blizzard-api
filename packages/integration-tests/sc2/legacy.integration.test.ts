import { createBlizzardApiClient } from '@blizzard-api/client';
import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import {
  legacyAchievementsResponseSchema,
  legacyLaddersResponseSchema,
  legacyMatchHistoryResponseSchema,
  legacyProfileResponseSchema,
  legacyRewardsResponseSchema,
  singleLegacyLadderResponseSchema,
} from '../../../generated/schemas/sc2';

describe('sc2 legacy integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches legacy achievements', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyAchievements('eu'));
    const parsedResponse = legacyAchievementsResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Achievements failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a legacy ladder', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyLadder('eu', 235_782));
    const parsedResponse = singleLegacyLadderResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Ladder failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
    expect(response).toBeDefined();
  });

  test('fetches legacy ladders', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyLadders('eu', 1, 9_500_381));
    const parsedResponse = legacyLaddersResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Ladders failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches legacy match history', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyMatchHistory('eu', 1, 9_500_381));
    const parsedResponse = legacyMatchHistoryResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Match History failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a legacy profile', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyProfile('eu', 1, 9_500_381));
    const parsedResponse = legacyProfileResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Profile failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches legacy rewards', async ({ expect }) => {
    const response = await client.sendRequest(sc2.legacyRewards('eu'));
    const parsedResponse = legacyRewardsResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Legacy Rewards failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
});
