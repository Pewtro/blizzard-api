import { playableClass, playableClassIndex, playableClassMedia } from '@blizzard-api/classic-wow/playable-class';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  playableClassIndexResponseSchema,
  playableClassMediaResponseSchema,
  playableClassResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow playable class integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test.each(['static-classic1x', 'static-classic', 'static-classicann'] as const)(
    'fetches playable class and media by id for %s',
    async (namespace) => {
      const indices = await client.sendRequest(playableClassIndex(namespace));
      const parsedIndices = playableClassIndexResponseSchema.safeParse(indices);
      if (!parsedIndices.success) {
        console.error('Playable class index validation failed:', prettifyError(parsedIndices.error));
      }
      expect(parsedIndices.success).toBe(true);

      const classRequests = [];
      const mediaRequests = [];
      const classIndices = indices?.classes ?? [];
      for (const playerClass of classIndices) {
        classRequests.push(client.sendRequest(playableClass(namespace, playerClass.id)));
        mediaRequests.push(client.sendRequest(playableClassMedia(namespace, playerClass.id)));
      }
      const responses = await Promise.all(classRequests);
      for (const resp of responses) {
        const parsed = playableClassResponseSchema.safeParse(resp);
        if (!parsed.success) {
          console.error('Playable class validation failed:', prettifyError(parsed.error));
        }
        expect(parsed.success).toBe(true);
      }
      const mediaResponses = await Promise.all(mediaRequests);
      for (const mediaResp of mediaResponses) {
        const mediaParsed = playableClassMediaResponseSchema.safeParse(mediaResp);

        if (!mediaParsed.success) {
          console.error('Playable class media validation failed:', prettifyError(mediaParsed.error));
        }
        expect(mediaParsed.success).toBe(true);
      }
    },
  );
});
