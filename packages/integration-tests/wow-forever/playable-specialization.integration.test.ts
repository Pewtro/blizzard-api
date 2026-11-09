import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  playableSpecializationIndexResponseSchema,
  playableSpecializationMediaResponseSchema,
  playableSpecializationResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever playable specialization integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the playable specialization index and sampled specializations', async ({ expect }) => {
    const index = await client.sendRequest(playableSpecializationIndex());
    const parsedIndex = playableSpecializationIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable specialization index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.character_specializations, 5);
    const responses = await Promise.all(
      Array.from(sampled, (spec) => client.sendRequest(playableSpecialization(spec.id))),
    );

    for (const response of responses) {
      const parsedSpec = playableSpecializationResponseSchema.safeParse(response);
      if (!parsedSpec.success) {
        console.error(
          'Playable specialization validation failed for id',
          response?.id,
          prettifyError(parsedSpec.error),
        );
      }
      expect(parsedSpec.success).toBe(true);
    }

    const sampledForMedia = getRandomSample(parsedIndex.data?.character_specializations, 2);
    const mediaResponses = await Promise.all(
      Array.from(sampledForMedia, (spec) => client.sendRequest(playableSpecializationMedia(spec.id))),
    );
    for (const media of mediaResponses) {
      const parsedMedia = playableSpecializationMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error(
          'Playable specialization media validation failed for id',
          media?.id,
          prettifyError(parsedMedia.error),
        );
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
});
