import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { ItemClassResponseSchema } from '../generated';

test('classic-wow.itemClass should match ItemClassResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'classic-wow' + '/src/index');
    const fn = mod['itemClass'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = ItemClassResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'classic-wow.itemClass', err && (err as Error).message);
    throw err;
  }
});
