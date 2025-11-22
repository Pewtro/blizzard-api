import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { AchievementIndexResponseSchema } from '../generated';

test('wow.achievementIndex should match AchievementIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['achievementIndex'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = AchievementIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.achievementIndex', err && (err as Error).message);
    throw err;
  }
});
