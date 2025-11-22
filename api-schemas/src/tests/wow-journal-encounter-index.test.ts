import { expect, test } from 'vitest';
import { createBlizzardApiClient } from '../../../packages/client/src';
import { JournalEncounterIndexResponseSchema } from '../generated';

test('wow.journalEncounterIndex should match JournalEncounterIndexResponseSchema', async () => {
  const client = await createBlizzardApiClient({
    key: process.env.VITE_BLIZZARD_CLIENT_ID!,
    origin: 'eu',
    secret: process.env.VITE_BLIZZARD_CLIENT_SECRET!,
  });

  try {
    const mod = await import('../../../packages/' + 'wow' + '/src/index');
    const fn = mod['journalEncounterIndex'];
    if (typeof fn !== 'function') {
      throw new Error('Endpoint function not found');
    }
    const resource = fn();
    const res = await client.sendRequest(resource);
    const parsed = JournalEncounterIndexResponseSchema.safeParse(res);
    if (!parsed.success) {
      console.error(parsed.error.format());
    }
    expect(parsed.success).toBe(true);
  } catch (err) {
    console.warn('Skipping test for', 'wow.journalEncounterIndex', err && (err as Error).message);
    throw err;
  }
});
