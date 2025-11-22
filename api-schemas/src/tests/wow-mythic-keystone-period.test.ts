import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { MythicKeystonePeriodResponseSchema } from '../generated';

test('wow.mythicKeystonePeriod should match MythicKeystonePeriodResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['mythicKeystonePeriod'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = MythicKeystonePeriodResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.mythicKeystonePeriod', err && (err as Error).message);
    throw err;
  }
});
