import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { CovenantIndexResponseSchema } from '../generated';

test('wow.covenantIndex should match CovenantIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['covenantIndex'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = CovenantIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.covenantIndex', err && (err as Error).message);
    throw err;
  }
});
