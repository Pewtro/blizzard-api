import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  pvpTalent,
  pvpTalentIndex,
  talent,
  talentIndex,
  talentTree,
  talentTreeIndex,
  talentTreeNodes,
} from '@blizzard-api/wow/talent';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  pvpTalentIndexResponseSchema,
  pvpTalentResponseSchema,
  talentIndexResponseSchema,
  talentResponseSchema,
  talentTreeIndexResponseSchema,
  talentTreeNodesResponseSchema,
  talentTreeResponseSchema,
} from '../../../generated/schemas/wow/talent';

describe('wow talent integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates pvp talents', async ({ expect }) => {
    const pvpIndex = await client.sendRequest(pvpTalentIndex());
    const parsedPvpIndex = pvpTalentIndexResponseSchema.safeParse(pvpIndex);
    if (!parsedPvpIndex.success) {
      console.error('PvP talent index validation failed:', prettifyError(parsedPvpIndex.error));
    }
    expect(parsedPvpIndex.success).toBe(true);

    const pvpTalents = parsedPvpIndex.success ? parsedPvpIndex.data.pvp_talents : [];
    const sampleSize = Math.min(5, pvpTalents.length);
    const sampled =
      pvpTalents.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          pvpTalents.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : pvpTalents.slice(0, sampleSize);

    const requests = Array.from(sampled, (t) => client.sendRequest(pvpTalent(t.id)));
    const responses = await Promise.all(requests);
    for (const resp of responses) {
      const parsed = pvpTalentResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('PvP talent validation failed for id', resp?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  test('validates talents', async ({ expect }) => {
    const talentIndexResp = await client.sendRequest(talentIndex());
    const parsedTalentIndex = talentIndexResponseSchema.safeParse(talentIndexResp);
    if (!parsedTalentIndex.success) {
      console.error('Talent index validation failed:', prettifyError(parsedTalentIndex.error));
    }
    expect(parsedTalentIndex.success).toBe(true);

    const talents = parsedTalentIndex.success ? parsedTalentIndex.data.talents : [];
    const sampleSize = Math.min(5, talents.length);
    const sampled =
      talents.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          talents.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : talents.slice(0, sampleSize);
    const requests = Array.from(sampled, (t) => client.sendRequest(talent(t.id)));
    const responses = await Promise.all(requests);
    for (const resp of responses) {
      const parsed = talentResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Talent validation failed for id', resp?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  test('validates talent trees', async ({ expect }) => {
    const treeIndex = await client.sendRequest(talentTreeIndex());
    const parsedTreeIndex = talentTreeIndexResponseSchema.safeParse(treeIndex);
    if (!parsedTreeIndex.success) {
      console.error('Talent tree index validation failed:', prettifyError(parsedTreeIndex.error));
    }
    expect(parsedTreeIndex.success).toBe(true);

    const hunterSpecHeroCombinations = [
      { specId: 253, treeId: 774 },
      { specId: 254, treeId: 774 },
      { specId: 255, treeId: 774 },
    ];

    for (const combo of hunterSpecHeroCombinations) {
      const talentTreeResp = await client.sendRequest(talentTree(combo.treeId, combo.specId));
      const parsedTrees = talentTreeResponseSchema.safeParse(talentTreeResp);
      if (!parsedTrees.success) {
        console.error('Talent tree validation failed for combo', combo, prettifyError(parsedTrees.error));
      }
      expect(parsedTrees.success).toBe(true);

      const nodes = await client.sendRequest(talentTreeNodes(combo.treeId));
      const parsedNodes = talentTreeNodesResponseSchema.safeParse(nodes);
      if (!parsedNodes.success) {
        console.error('Talent tree nodes validation failed for treeId', combo.treeId, prettifyError(parsedNodes.error));
      }
      expect(parsedNodes.success).toBe(true);
    }
  });
});
