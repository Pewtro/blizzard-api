import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { PvpTalentSlotsResponseSchema } from '../generated';

test('wow.pvpTalentSlots should match PvpTalentSlotsResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['pvpTalentSlots'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = PvpTalentSlotsResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.pvpTalentSlots', err && (err as Error).message);
    throw err;
  }
});
