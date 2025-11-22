import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { SeasonResponseSchema } from '../generated';

test('d3.season should match SeasonResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'd3' + '/src/index');
    const fn = mod['season'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = SeasonResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'd3.season', err && (err as Error).message);
    throw err;
  }
});
