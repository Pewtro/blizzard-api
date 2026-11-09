import {
  reputationFaction,
  reputationFactionIndex,
  reputationTiers,
  reputationTiersIndex,
} from '@blizzard-api/wow/reputations';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  reputationFactionIndexResponseSchema,
  reputationFactionResponseSchema,
  reputationTiersIndexResponseSchema,
  reputationTiersResponseSchema,
} from '../../../generated/schemas/wow/reputations';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow reputations integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates reputation factions', async ({ expect }) => {
    const factions = await client.sendRequest(reputationFactionIndex());
    const parsedFactions = reputationFactionIndexResponseSchema.safeParse(factions);
    if (!parsedFactions.success) {
      console.error('Reputation faction index validation failed:', prettifyError(parsedFactions.error));
    }
    expect(parsedFactions.success).toBe(true);

    const sampled = getRandomSample(parsedFactions.data?.factions, 5);

    const factionRequests = Array.from(sampled, (f) => client.sendRequest(reputationFaction(f.id)));

    const factionResponses = await Promise.all(factionRequests);
    for (const fr of factionResponses) {
      const parsed = reputationFactionResponseSchema.safeParse(fr);
      if (!parsed.success) {
        console.error('Reputation faction validation failed for id', fr?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  test('validates reputation tiers', async ({ expect }) => {
    const tiers = await client.sendRequest(reputationTiersIndex());
    const parsedTiers = reputationTiersIndexResponseSchema.safeParse(tiers);
    if (!parsedTiers.success) {
      console.error('Reputation tiers index validation failed:', prettifyError(parsedTiers.error));
    }
    expect(parsedTiers.success).toBe(true);

    const sampled = getRandomSample(parsedTiers.data?.reputation_tiers, 5);

    const tierRequests = Array.from(sampled, (t) => client.sendRequest(reputationTiers(t.id)));
    const tierResponses = await Promise.all(tierRequests);
    for (const tr of tierResponses) {
      const parsed = reputationTiersResponseSchema.safeParse(tr);
      if (!parsed.success) {
        console.error('Reputation tiers validation failed for id', tr?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
