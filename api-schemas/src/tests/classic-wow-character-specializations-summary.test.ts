import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { CharacterSpecializationsSummaryResponseSchema } from '../generated';

test('classic-wow.characterSpecializationsSummary should match CharacterSpecializationsSummaryResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'classic-wow' + '/src/index');
    const fn = mod['characterSpecializationsSummary'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = CharacterSpecializationsSummaryResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'classic-wow.characterSpecializationsSummary', err && (err as Error).message);
    throw err;
  }
});
