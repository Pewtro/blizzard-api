import { playableRace, playableRaceIndex } from '@blizzard-api/wow/playable-race';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow playable race integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates playable races', async ({ expect }) => {
    const resp = await client.sendRequest(playableRaceIndex());
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = Array.from(resp!.races, (race) => client.sendRequest(playableRace(race.id)));

    const results = await Promise.all(requests);

    for (const result of results) {
      const parsedResult = playableRaceResponseSchema.safeParse(result);
      if (!parsedResult.success) {
        console.error('Race detail validation failed for id', result?.id, prettifyError(parsedResult.error));
      }
      expect(parsedResult.success).toBe(true);
    }
  });
});
