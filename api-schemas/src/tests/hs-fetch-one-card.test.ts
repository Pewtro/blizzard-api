import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { FetchOneCardResponseSchema } from '../generated';

test('hs.fetchOneCard should match FetchOneCardResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'hs' + '/src/index');
    const fn = mod['fetchOneCard'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = FetchOneCardResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'hs.fetchOneCard', err && (err as Error).message);
    throw err;
  }
});
