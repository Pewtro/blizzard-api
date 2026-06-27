import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  conduit,
  conduitIndex,
  covenant,
  covenantIndex,
  covenantMedia,
  soulbind,
  soulbindIndex,
} from '@blizzard-api/wow/covenant';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  conduitIndexResponseSchema,
  conduitResponseSchema,
  covenantIndexResponseSchema,
  covenantMediaResponseSchema,
  covenantResponseSchema,
  soulbindIndexResponseSchema,
  soulbindResponseSchema,
} from '../../../generated/schemas/wow/covenant';

describe.concurrent('wow covenant integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates covenant index and fetches details', async ({ expect }) => {
    const covIndex = await client.sendRequest(covenantIndex());
    const parsedCov = covenantIndexResponseSchema.safeParse(covIndex);
    if (!parsedCov.success) {
      console.error('Covenant index validation failed:', treeifyError(parsedCov.error));
    }
    expect(parsedCov.success).toBe(true);

    const requests = Array.from(covIndex.covenants, (cov) => client.sendRequest(covenant(cov.id)));
    const responses = await Promise.all(requests);
    for (const covenantResp of responses) {
      const parsedDetail = covenantResponseSchema.safeParse(covenantResp);
      if (!parsedDetail.success) {
        console.error('Covenant detail validation failed:', covenantResp.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);

      const media = await client.sendRequest(covenantMedia(covenantResp.id));
      const parsedMedia = covenantMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Covenant media validation failed:', covenantResp.id, treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
  test('validates soulbind index and fetches details', async ({ expect }) => {
    const soulIndex = await client.sendRequest(soulbindIndex());
    const parsedSoul = soulbindIndexResponseSchema.safeParse(soulIndex);
    if (!parsedSoul.success) {
      console.error('Soulbind index validation failed:', treeifyError(parsedSoul.error));
    }
    expect(parsedSoul.success).toBe(true);

    const requests = Array.from(parsedSoul.success ? parsedSoul.data.soulbinds : [], (soul) =>
      client.sendRequest(soulbind(soul.id)),
    );
    const responses = await Promise.all(requests);

    for (const soulbindResp of responses) {
      const parsedDetail = soulbindResponseSchema.safeParse(soulbindResp);
      if (!parsedDetail.success) {
        console.error('Soulbind detail validation failed:', soulbindResp.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  });

  test('validates conduit index and fetches details', async ({ expect }) => {
    const conduitIndexResp = await client.sendRequest(conduitIndex());
    const parsedConduit = conduitIndexResponseSchema.safeParse(conduitIndexResp);
    if (!parsedConduit.success) {
      console.error('Conduit index validation failed:', treeifyError(parsedConduit.error));
    }
    expect(parsedConduit.success).toBe(true);

    // Pick up to 5 conduits at random from the index to fetch details
    const conduits = parsedConduit.success ? parsedConduit.data.conduits : [];
    const sampleSize = Math.min(5, conduits.length);
    const sampled =
      conduits.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          conduits.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : conduits.slice(0, sampleSize);

    const requests = Array.from(sampled, (conduitResp) => client.sendRequest(conduit(conduitResp.id)));
    const responses = await Promise.all(requests);

    for (const conduitResp of responses) {
      const parsedDetail = conduitResponseSchema.safeParse(conduitResp);
      if (!parsedDetail.success) {
        console.error('Conduit detail validation failed:', conduitResp.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  });
});
