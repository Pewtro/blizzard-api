import { playableRace, playableRaceIndex } from '@blizzard-api/classic-wow/playable-race';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow playable race integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test.each(['static-classic1x', 'static-classic', 'static-classicann'] as const)(
    'validates playable races for %s',
    async (namespace) => {
      const resp = await client.sendRequest(playableRaceIndex(namespace));
      const parsed = playableRaceIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Playable race index validation failed:', prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const requests = Array.from(resp!.races, (race) => client.sendRequest(playableRace(namespace, race.id)));

      const results = await Promise.all(requests);

      for (const result of results) {
        const parsedResult = playableRaceResponseSchema.safeParse(result);
        if (!parsedResult.success) {
          console.error('Race detail validation failed for id', result!.id, prettifyError(parsedResult.error));
        }
        expect(parsedResult.success).toBe(true);
      }
    },
  );
});
