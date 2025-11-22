import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { ReputationTiersIndexResponseSchema } from '../generated';

test('wow.reputationTiersIndex should match ReputationTiersIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['reputationTiersIndex'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = ReputationTiersIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.reputationTiersIndex', err && (err as Error).message);
    throw err;
  }
});
