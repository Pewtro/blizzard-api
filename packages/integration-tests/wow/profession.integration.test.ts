import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { professionIndexResponseSchema, professionResponseSchema } from '../../../generated/schemas/wow/profession';

describe('wow profession integration', () => {
  it('validates profession index and fetches profession detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.professionIndex());
    const parsedIndex = professionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Profession index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const first = parsedIndex.success ? parsedIndex.data.professions[0] : undefined;
    if (first) {
      const prof = await client.sendRequest(wow.profession(first.id));
      const parsedProf = professionResponseSchema.safeParse(prof);
      if (!parsedProf.success) {
        console.error('Profession detail validation failed:', treeifyError(parsedProf.error));
      }
      expect(parsedProf.success).toBe(true);
    }
  }, 30_000);
});
