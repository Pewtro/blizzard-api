import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { SpecificMetadataResponseSchema } from '../generated';

test('hs.specificMetadata should match SpecificMetadataResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'hs' + '/src/index');
    const fn = mod['specificMetadata'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = SpecificMetadataResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'hs.specificMetadata', err && (err as Error).message);
    throw err;
  }
});
