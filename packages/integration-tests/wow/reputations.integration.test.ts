import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  reputationFactionIndexResponseSchema,
  reputationFactionResponseSchema,
  reputationTiersIndexResponseSchema,
  reputationTiersResponseSchema,
} from '../../../generated/schemas/wow/reputations';

describe('wow reputations integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  it('validates reputation factions', async ({ expect }) => {
    const factions = await client.sendRequest(wow.reputationFactionIndex());
    const parsedFactions = reputationFactionIndexResponseSchema.safeParse(factions);
    if (!parsedFactions.success) {
      console.error('Reputation faction index validation failed:', treeifyError(parsedFactions.error));
    }
    expect(parsedFactions.success).toBe(true);

    const factionItems = parsedFactions.success ? parsedFactions.data.factions : [];
    const sampleSize = Math.min(5, factionItems.length);
    const sampled =
      factionItems.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          factionItems.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : factionItems.slice(0, sampleSize);

    const factionRequests = [];
    for (const f of sampled) {
      factionRequests.push(client.sendRequest(wow.reputationFaction(f.id)));
    }

    const factionResponses = await Promise.all(factionRequests);
    for (const fr of factionResponses) {
      const parsed = reputationFactionResponseSchema.safeParse(fr);
      if (!parsed.success) {
        console.error('Reputation faction validation failed for id', fr.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  it('validates reputation tiers', async ({ expect }) => {
    const tiers = await client.sendRequest(wow.reputationTiersIndex());
    const parsedTiers = reputationTiersIndexResponseSchema.safeParse(tiers);
    if (!parsedTiers.success) {
      console.error('Reputation tiers index validation failed:', treeifyError(parsedTiers.error));
    }
    expect(parsedTiers.success).toBe(true);

    const tierItems = parsedTiers.success ? parsedTiers.data.reputation_tiers : [];
    const sampleSize = Math.min(5, tierItems.length);
    const sampled =
      tierItems.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          tierItems.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : tierItems.slice(0, sampleSize);

    const tierRequests = [];
    for (const t of sampled) {
      tierRequests.push(client.sendRequest(wow.reputationTiers(t.id)));
    }
    const tierResponses = await Promise.all(tierRequests);
    for (const tr of tierResponses) {
      const parsed = reputationTiersResponseSchema.safeParse(tr);
      if (!parsed.success) {
        console.error('Reputation tiers validation failed for id', tr.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
