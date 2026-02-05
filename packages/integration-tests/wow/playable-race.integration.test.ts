import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/wow';

describe('wow playable race integration', () => {
  it('validates playable races', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.playableRaceIndex());
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = [];

    for (const race of resp.races) {
      requests.push(client.sendRequest(wow.playableRace(race.id)));
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
