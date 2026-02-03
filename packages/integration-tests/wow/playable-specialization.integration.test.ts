import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  playableSpecializationIndexResponseSchema,
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

    for (const specialization of index.character_specializations) {
      const spec = await client.sendRequest(wow.playableSpecialization(specialization.id));
      const parsedSpec = playableSpecializationResponseSchema.safeParse(spec);
      if (!parsedSpec.success) {
        console.error('Playable specialization detail validation failed:', treeifyError(parsedSpec.error));
      }

      expect(parsedSpec.success).toBe(true);
    }
  }, 30_000);
});
