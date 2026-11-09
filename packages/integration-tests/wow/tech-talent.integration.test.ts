import {
  techTalent,
  techTalentIndex,
  techTalentMedia,
  techTalentTree,
  techTalentTreeIndex,
} from '@blizzard-api/wow/tech-talent';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  techTalentIndexResponseSchema,
  techTalentMediaResponseSchema,
  techTalentResponseSchema,
  techTalentTreeIndexResponseSchema,
  techTalentTreeResponseSchema,
} from '../../../generated/schemas/wow/tech-talent';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow tech-talent integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates tech talent index, detail, and media', async ({ expect }) => {
    const index = await client.sendRequest(techTalentIndex());
    const parsedIndex = techTalentIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Tech talent index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.talents, 5);

    const detailRequests = [];
    const mediaRequests = [];
    for (const t of sampled) {
      detailRequests.push(client.sendRequest(techTalent(t.id)));
      mediaRequests.push(client.sendRequest(techTalentMedia(t.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = techTalentResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Tech talent detail validation failed for id', d?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = techTalentMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Tech talent media validation failed for id', m, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  test('validates tech talent trees', async ({ expect }) => {
    const treeIndex = await client.sendRequest(techTalentTreeIndex());
    const parsedTreeIndex = techTalentTreeIndexResponseSchema.safeParse(treeIndex);
    if (!parsedTreeIndex.success) {
      console.error('Tech talent tree index validation failed:', prettifyError(parsedTreeIndex.error));
    }
    expect(parsedTreeIndex.success).toBe(true);

    const sampled = getRandomSample(parsedTreeIndex.data?.talent_trees, 5);

    const detailRequests = Array.from(sampled, (t) => client.sendRequest(techTalentTree(t.id)));

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = techTalentTreeResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Tech talent tree validation failed for id', d?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
