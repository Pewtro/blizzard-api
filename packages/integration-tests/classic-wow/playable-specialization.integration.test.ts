import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from '@blizzard-api/classic-wow/playable-specialization';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  playableSpecializationIndexResponseSchema,
  playableSpecializationMediaResponseSchema,
  playableSpecializationResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow playable-specialization integration', async () => {
  const client = await getIntegrationTestClient();
  const namespace = 'static-classic';

  test('validates specialization index, detail, and media', async ({ expect }) => {
    const indexResponse = await client.sendRequest(playableSpecializationIndex(namespace));
    const parsedIndex = playableSpecializationIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Classic playable specialization index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const specialization = parsedIndex.data!.character_specializations[0];
    expect(specialization).toBeDefined();
    if (!specialization) return;

    const detailResponse = await client.sendRequest(playableSpecialization(namespace, specialization.id));
    const parsedDetail = playableSpecializationResponseSchema.safeParse(detailResponse);
    if (!parsedDetail.success) {
      console.error(
        'Classic playable specialization validation failed:',
        specialization.id,
        prettifyError(parsedDetail.error),
      );
    }
    expect(parsedDetail.success).toBe(true);

    const mediaResponse = await client.sendRequest(playableSpecializationMedia(namespace, specialization.id));
    const parsedMedia = playableSpecializationMediaResponseSchema.safeParse(mediaResponse);
    if (!parsedMedia.success) {
      console.error(
        'Classic playable specialization media validation failed:',
        specialization.id,
        prettifyError(parsedMedia.error),
      );
    }
    expect(parsedMedia.success).toBe(true);
  });
});
