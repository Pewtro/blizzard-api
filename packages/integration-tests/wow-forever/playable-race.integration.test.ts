import { playableRace, playableRaceIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever playable race integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the playable race index and sampled races', async ({ expect }) => {
    const index = await client.sendRequest(playableRaceIndex());
    const parsedIndex = playableRaceIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable race index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const races = parsedIndex.success ? parsedIndex.data.races : [];
    const sampled = getRandomSample(races, 5);
    const responses = await Promise.all(Array.from(sampled, (race) => client.sendRequest(playableRace(race.id))));

    for (const response of responses) {
      const parsedRace = playableRaceResponseSchema.safeParse(response);
      if (!parsedRace.success) {
        console.error('Playable race validation failed for id', response?.id, prettifyError(parsedRace.error));
      }
      expect(parsedRace.success).toBe(true);
    }
  });
});
