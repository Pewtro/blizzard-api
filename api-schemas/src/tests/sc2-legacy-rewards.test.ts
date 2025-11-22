import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { LegacyRewardsResponseSchema } from '../generated';

test('sc2.legacyRewards should match LegacyRewardsResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'sc2' + '/src/index');
    const fn = mod['legacyRewards'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = LegacyRewardsResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'sc2.legacyRewards', err && (err as Error).message);
    throw err;
  }
});
