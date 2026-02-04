import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  conduitIndexResponseSchema,
  conduitResponseSchema,
  covenantIndexResponseSchema,
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
  it('validates covenant index and fetches details', async ({ expect }) => {
    const covIndex = await client.sendRequest(wow.covenantIndex());
    const parsedCov = covenantIndexResponseSchema.safeParse(covIndex);
    if (!parsedCov.success) {
      console.error('Covenant index validation failed:', treeifyError(parsedCov.error));
    }
    expect(parsedCov.success).toBe(true);

    const requests = [];

    for (const cov of parsedCov.success ? parsedCov.data.covenants : []) {
      requests.push(client.sendRequest(wow.covenant(cov.id)));
    }
    const responses = await Promise.all(requests);
    for (const covenant of responses) {
      const parsedDetail = covenantResponseSchema.safeParse(covenant);
      if (!parsedDetail.success) {
        console.error('Covenant detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);
  it('validates soulbind index and fetches details', async ({ expect }) => {
    const soulIndex = await client.sendRequest(wow.soulbindIndex());
    const parsedSoul = soulbindIndexResponseSchema.safeParse(soulIndex);
    if (!parsedSoul.success) {
      console.error('Soulbind index validation failed:', treeifyError(parsedSoul.error));
    }
    expect(parsedSoul.success).toBe(true);

    const requests = [];
    for (const soul of parsedSoul.success ? parsedSoul.data.soulbinds : []) {
      requests.push(client.sendRequest(wow.soulbind(soul.id)));
    }
    const responses = await Promise.all(requests);

    for (const soulbind of responses) {
      const parsedDetail = soulbindResponseSchema.safeParse(soulbind);
      if (!parsedDetail.success) {
        console.error('Soulbind detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);

  it('validates conduit index and fetches details', async ({ expect }) => {
    const conduitIndex = await client.sendRequest(wow.conduitIndex());
    const parsedConduit = conduitIndexResponseSchema.safeParse(conduitIndex);
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

    const requests = [];
    for (const conduit of sampled) {
      requests.push(client.sendRequest(wow.conduit(conduit.id)));
    }
    const responses = await Promise.all(requests);

    for (const conduit of responses) {
      const parsedDetail = conduitResponseSchema.safeParse(conduit);
      if (!parsedDetail.success) {
        console.error('Conduit detail validation failed:', treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  }, 30_000);
});
