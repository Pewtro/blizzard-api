import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { ReputationFactionIndexResponseSchema } from '../generated';

test('wow.reputationFactionIndex should match ReputationFactionIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['reputationFactionIndex'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = ReputationFactionIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.reputationFactionIndex', err && (err as Error).message);
    throw err;
  }
});
