import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  playableSpecializationIndexResponseSchema,
  playableSpecializationMediaResponseSchema,
  playableSpecializationResponseSchema,
} from '../../../generated/schemas/wow/playable-specialization';

describe('wow playable-specialization integration', () => {
  it('validates playable specialization index and fetches detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.playableSpecializationIndex());
    const parsed = playableSpecializationIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Playable specialization index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = [];
    for (const specialization of index.character_specializations) {
      requests.push(client.sendRequest(wow.playableSpecialization(specialization.id)));
    }
    const responses = await Promise.all(requests);
    for (const spec of responses) {
      const parsedSpec = playableSpecializationResponseSchema.safeParse(spec);
      if (!parsedSpec.success) {
        console.error('Playable specialization detail validation failed:', spec.id, treeifyError(parsedSpec.error));
      }

      expect(parsedSpec.success).toBe(true);

      const media = await client.sendRequest(wow.playableSpecializationMedia(spec.id));
      const parsedMedia = playableSpecializationMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Playable specialization media validation failed:', spec.id, treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  }, 15_000);
});
