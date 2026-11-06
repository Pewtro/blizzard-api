import {
  pvpTalentIndex,
  talent,
  talentIndex,
  talentTree,
  talentTreeIndex,
  talentTreeNodes,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  pvpTalentIndexResponseSchema,
  talentIndexResponseSchema,
  talentResponseSchema,
  talentTreeIndexResponseSchema,
  talentTreeNodesResponseSchema,
  talentTreeResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

const idsFromHref = (href: string): { specId?: number; treeId: number } => {
  const match = /\/talent-tree\/(\d+)(?:\/playable-specialization\/(\d+))?/.exec(href);
  const treeId = Number(match?.[1]);
  const specId = match?.[2] === undefined ? undefined : Number(match?.[2]);
  return { specId, treeId };
};

describe('wow-forever talent integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the talent index and sampled talents', async ({ expect }) => {
    const index = await client.sendRequest(talentIndex());
    const parsedIndex = talentIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Talent index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const talents = parsedIndex.success ? parsedIndex.data.talents : [];
    const sampled = getRandomSample(
      talents.filter((talentEntry) => talentEntry.name !== null),
      5,
    );
    const responses = await Promise.all(
      Array.from(sampled, (talentEntry) => client.sendRequest(talent(talentEntry.id))),
    );

    for (const response of responses) {
      const parsedTalent = talentResponseSchema.safeParse(response);
      if (!parsedTalent.success) {
        console.error('Talent validation failed for id', response?.id, prettifyError(parsedTalent.error));
      }
      expect(parsedTalent.success).toBe(true);
    }
  });

  test('validates the talent tree index and a sampled tree of each shape', async ({ expect }) => {
    const index = await client.sendRequest(talentTreeIndex());
    const parsedIndex = talentTreeIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Talent tree index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    //Index entries carry no id, so the talent tree id (and the spec id for spec trees) are taken from the href.
    const classTree = parsedIndex.success ? getRandomSample(parsedIndex.data.class_talent_trees, 1)[0] : undefined;
    if (!classTree) return;
    const { treeId } = idsFromHref(classTree.key.href);
    const nodesResponse = await client.sendRequest(talentTreeNodes(treeId));
    const parsedNodes = talentTreeNodesResponseSchema.safeParse(nodesResponse);
    if (!parsedNodes.success) {
      console.error('Talent tree nodes validation failed for tree', treeId, prettifyError(parsedNodes.error));
    }
    expect(parsedNodes.success).toBe(true);
  });

  test('validates a sampled specialization talent tree', async ({ expect }) => {
    const index = await client.sendRequest(talentTreeIndex());
    const parsedIndex = talentTreeIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Talent tree index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    //Index entries carry no id, so the talent tree id (and the spec id for spec trees) are taken from the href.
    const specTree = parsedIndex.success ? getRandomSample(parsedIndex.data.spec_talent_trees, 1)[0] : undefined;
    if (!specTree) return;
    const { specId, treeId } = idsFromHref(specTree.key.href);
    if (specId === undefined) return;
    const treeResponse = await client.sendRequest(talentTree(treeId, specId));
    const parsedTree = talentTreeResponseSchema.safeParse(treeResponse);
    if (!parsedTree.success) {
      console.error('Talent tree validation failed for tree/spec', treeId, specId, prettifyError(parsedTree.error));
    }
    expect(parsedTree.success).toBe(true);
  });

  test('validates the pvp talent index envelope', async ({ expect }) => {
    //Forever currently returns an empty pvp talent index, so this only validates the envelope.
    const index = await client.sendRequest(pvpTalentIndex());
    const parsedIndex = pvpTalentIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Pvp talent index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);
  });
});
