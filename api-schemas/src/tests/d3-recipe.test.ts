import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { RecipeResponseSchema } from '../generated';

test('d3.recipe should match RecipeResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'd3' + '/src/index');
    const fn = mod['recipe'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = RecipeResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'd3.recipe', err && (err as Error).message);
    throw err;
  }
});
