import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { LegacyMatchHistoryResponseSchema } from '../generated';

test('sc2.legacyMatchHistory should match LegacyMatchHistoryResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'sc2' + '/src/index');
    const fn = mod['legacyMatchHistory'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = LegacyMatchHistoryResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'sc2.legacyMatchHistory', err && (err as Error).message);
    throw err;
  }
});
