import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  covenantIndexResponseSchema,
  covenantResponseSchema,
  soulbindIndexResponseSchema,
} from '../../../generated/schemas/wow/covenant';

describe('wow covenant integration', () => {
  it('validates covenant and soulbind indices and fetches detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const covIndex = await client.sendRequest(wow.covenantIndex());
    const parsedCov = covenantIndexResponseSchema.safeParse(covIndex);
    if (!parsedCov.success) {
      console.error('Covenant index validation failed:', treeifyError(parsedCov.error));
    }
    expect(parsedCov.success).toBe(true);

    const firstCov = parsedCov.success ? parsedCov.data.covenants[0] : undefined;
    if (firstCov) {
      const covenant = await client.sendRequest(wow.covenant(firstCov.id));
      const parsedDetail = covenantResponseSchema.safeParse(covenant);
      if (!parsedDetail.success) {
        console.error('Covenant detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }

    const soulIndex = await client.sendRequest(wow.soulbindIndex());
    const parsedSoul = soulbindIndexResponseSchema.safeParse(soulIndex);
    if (!parsedSoul.success) {
      console.error('Soulbind index validation failed:', treeifyError(parsedSoul.error));
    }
    expect(parsedSoul.success).toBe(true);
  }, 30_000);
});
