import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { AuctionHouseIndexResponseSchema } from '../generated';
import { auctionHouseIndex } from '../../../packages/classic-wow/src';

test('classic-wow.auctionHouseIndex should match AuctionHouseIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const res = await client.sendRequest(auctionHouseIndex());
    const parsed = AuctionHouseIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'classic-wow.auctionHouseIndex', err && (err as Error).message);
    throw err;
  }
});
