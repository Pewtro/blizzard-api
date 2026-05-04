import { createBlizzardApiClient } from '@blizzard-api/client';
import { playableRace, playableRaceIndex } from '@blizzard-api/wow/playable-race';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/wow';

describe('wow playable race integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates playable races', async ({ expect }) => {
    const resp = await client.sendRequest(playableRaceIndex());
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = [];

    for (const race of resp.races) {
      requests.push(client.sendRequest(playableRace(race.id)));
    }

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
