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
import {
  pvpTalentIndexResponseSchema,
  pvpTalentResponseSchema,
  talentIndexResponseSchema,
  talentResponseSchema,
  talentTreeIndexResponseSchema,
  talentTreeNodesResponseSchema,
  talentTreeResponseSchema,
} from '../../../generated/schemas/wow/talent';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow talent integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates pvp talents', async ({ expect }) => {
    const pvpIndex = await client.sendRequest(pvpTalentIndex());
    const parsedPvpIndex = pvpTalentIndexResponseSchema.safeParse(pvpIndex);
    if (!parsedPvpIndex.success) {
      console.error('PvP talent index validation failed:', prettifyError(parsedPvpIndex.error));
    }
    expect(parsedPvpIndex.success).toBe(true);

    const sampled = getRandomSample(parsedPvpIndex.data?.pvp_talents, 5);

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

    const sampled = getRandomSample(parsedTalentIndex.data?.talents, 5);
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
