import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  techTalentIndexResponseSchema,
  techTalentMediaResponseSchema,
  techTalentResponseSchema,
  techTalentTreeIndexResponseSchema,
  techTalentTreeResponseSchema,
} from '../../../generated/schemas/wow/tech-talent';

describe('wow tech-talent integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  it('validates tech talent index, detail, and media', async ({ expect }) => {
    const index = await client.sendRequest(wow.techTalentIndex());
    const parsedIndex = techTalentIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Tech talent index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const talents = parsedIndex.success ? parsedIndex.data.talents : [];
    const sampleSize = Math.min(5, talents.length);
    const sampled =
      talents.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          talents.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : talents.slice(0, sampleSize);

    const detailRequests = [];
    const mediaRequests = [];
    for (const t of sampled) {
      detailRequests.push(client.sendRequest(wow.techTalent(t.id)));
      mediaRequests.push(client.sendRequest(wow.techTalentMedia(t.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = techTalentResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Tech talent detail validation failed for id', d.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = techTalentMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Tech talent media validation failed for id', m, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
  it('validates tech talent trees', async ({ expect }) => {
    const treeIndex = await client.sendRequest(wow.techTalentTreeIndex());
    const parsedTreeIndex = techTalentTreeIndexResponseSchema.safeParse(treeIndex);
    if (!parsedTreeIndex.success) {
      console.error('Tech talent tree index validation failed:', treeifyError(parsedTreeIndex.error));
    }
    expect(parsedTreeIndex.success).toBe(true);

    const techTalentTrees = parsedTreeIndex.success ? parsedTreeIndex.data.talent_trees : [];
    const sampleSize = Math.min(5, techTalentTrees.length);

    const sampled =
      techTalentTrees.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          techTalentTrees.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : techTalentTrees.slice(0, sampleSize);

    const detailRequests = [];

    for (const t of sampled) {
      detailRequests.push(client.sendRequest(wow.techTalentTree(t.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = techTalentTreeResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Tech talent tree validation failed for id', d.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
