import { playableRace, playableRaceIndex } from '@blizzard-api/classic-wow/playable-race';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/classic-wow';

describe.concurrent('classic-wow playable race integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates playable races for classic era', async ({ expect }) => {
    const resp = await client.sendRequest(playableRaceIndex('static-classic1x'));
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = Array.from(resp.races, (race) => client.sendRequest(playableRace('static-classic1x', race.id)));

    const results = await Promise.all(requests);

    for (const result of results) {
      const parsedResult = playableRaceResponseSchema.safeParse(result);
      if (!parsedResult.success) {
        console.error('Race detail validation failed for id', result.id, treeifyError(parsedResult.error));
      }
      expect(parsedResult.success).toBe(true);
    }
  });
  test('validates playable races for classic progression', async ({ expect }) => {
    const resp = await client.sendRequest(playableRaceIndex('static-classic'));
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = Array.from(resp.races, (race) => client.sendRequest(playableRace('static-classic', race.id)));

    const results = await Promise.all(requests);

    for (const result of results) {
      const parsedResult = playableRaceResponseSchema.safeParse(result);
      if (!parsedResult.success) {
        console.error('Race detail validation failed for id', result.id, treeifyError(parsedResult.error));
      }
      expect(parsedResult.success).toBe(true);
    }
  });
});
