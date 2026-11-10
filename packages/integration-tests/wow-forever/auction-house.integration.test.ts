import { auctionHouseIndex, auctions, commodities, rulesetIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  auctionHouseCommoditiesResponseSchema,
  auctionHouseIndexResponseSchema,
  auctionHouseResponseSchema,
  rulesetIndexResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever auction house integration', { timeout: 120_000 }, async () => {
  const client = await getIntegrationTestClient();

  test('validates the auction house index and sampled auction houses', async ({ expect }) => {
    const rulesetIndexResponse = await client.sendRequest(rulesetIndex());
    const parsedRulesetIndex = rulesetIndexResponseSchema.safeParse(rulesetIndexResponse);
    if (!parsedRulesetIndex.success) {
      console.error('Ruleset index validation failed:', prettifyError(parsedRulesetIndex.error));
    }
    expect(parsedRulesetIndex.success).toBe(true);

    const sampledRulesets = getRandomSample(parsedRulesetIndex.data?.rulesets, 1);
    for (const rulesetEntry of sampledRulesets) {
      const auctionHouseIndexResponse = await client.sendRequest(auctionHouseIndex(rulesetEntry.id));
      const parsedAuctionHouseIndex = auctionHouseIndexResponseSchema.safeParse(auctionHouseIndexResponse);
      if (!parsedAuctionHouseIndex.success) {
        console.error(
          'Auction house index validation failed for ruleset',
          rulesetEntry.id,
          prettifyError(parsedAuctionHouseIndex.error),
        );
      }
      expect(parsedAuctionHouseIndex.success).toBe(true);

      const sampledAuctionHouses = getRandomSample(parsedAuctionHouseIndex.data?.auctions, 1);
      for (const auctionHouseEntry of sampledAuctionHouses) {
        const auctionHouseResponse = await client.sendRequest(auctions(rulesetEntry.id, auctionHouseEntry.id));
        const parsedAuctionHouse = auctionHouseResponseSchema.safeParse(auctionHouseResponse);
        if (!parsedAuctionHouse.success) {
          console.error(
            'Auction house validation failed for id',
            auctionHouseEntry.id,
            prettifyError(parsedAuctionHouse.error),
          );
        }
        expect(parsedAuctionHouse.success).toBe(true);
      }
    }
  });

  test('validates the commodities of a sampled auction house', async ({ expect }) => {
    const rulesetIndexResponse = await client.sendRequest(rulesetIndex());
    const parsedRulesetIndex = rulesetIndexResponseSchema.safeParse(rulesetIndexResponse);
    if (!parsedRulesetIndex.success) {
      console.error('Ruleset index validation failed:', prettifyError(parsedRulesetIndex.error));
    }
    expect(parsedRulesetIndex.success).toBe(true);

    const sampledRulesets = getRandomSample(parsedRulesetIndex.data?.rulesets, 1);
    for (const rulesetEntry of sampledRulesets) {
      const auctionHouseIndexResponse = await client.sendRequest(auctionHouseIndex(rulesetEntry.id));
      const parsedAuctionHouseIndex = auctionHouseIndexResponseSchema.safeParse(auctionHouseIndexResponse);
      if (!parsedAuctionHouseIndex.success) {
        console.error(
          'Auction house index validation failed for ruleset',
          rulesetEntry.id,
          prettifyError(parsedAuctionHouseIndex.error),
        );
      }
      expect(parsedAuctionHouseIndex.success).toBe(true);

      const sampledAuctionHouses = getRandomSample(parsedAuctionHouseIndex.data?.auctions, 1);
      for (const auctionHouseEntry of sampledAuctionHouses) {
        const commoditiesResponse = await client.sendRequest(commodities(rulesetEntry.id, auctionHouseEntry.id));
        const parsedCommodities = auctionHouseCommoditiesResponseSchema.safeParse(commoditiesResponse);
        if (!parsedCommodities.success) {
          console.error(
            'Auction house commodities validation failed for id',
            auctionHouseEntry.id,
            prettifyError(parsedCommodities.error),
          );
        }
        expect(parsedCommodities.success).toBe(true);
      }
    }
  });
});
