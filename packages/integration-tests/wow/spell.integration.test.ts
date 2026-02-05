import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  spellMediaResponseSchema,
  spellResponseSchema,
  spellSearchResponseSchema,
} from '../../../generated/schemas/wow/spell';

describe('wow spell integration', () => {
  it('validates spell search and media responses', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const spell = await client.sendRequest(wow.spell(217_200));
    const parsedSpell = spellResponseSchema.safeParse(spell);
    if (!parsedSpell.success) {
      console.error('Spell detail validation failed:', treeifyError(parsedSpell.error));
    }
    expect(parsedSpell.success).toBe(true);

    const search = await client.sendRequest(wow.spellSearch({ locale: 'en_GB', name: 'Barbed' }));
    const parsedSearch = spellSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Spell search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const media = await client.sendRequest(wow.spellMedia(1_264_781));
    const parsedMedia = spellMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Spell media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });
});
