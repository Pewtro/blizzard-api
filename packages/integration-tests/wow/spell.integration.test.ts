import { spell, spellMedia, spellSearch } from '@blizzard-api/wow/spell';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  spellMediaResponseSchema,
  spellResponseSchema,
  spellSearchResponseSchema,
} from '../../../generated/schemas/wow/spell';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow spell integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates spell search and media responses', async ({ expect }) => {
    const search = await client.sendRequest(spellSearch({ locale: 'en_GB', name: 'Barbed' }));
    const parsedSearch = spellSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Spell search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const result = getRandomItem(parsedSearch.data!.results);
    expect(result).toBeDefined();
    if (!result) return;

    const spellResp = await client.sendRequest(spell(result.data.id));
    const parsedSpell = spellResponseSchema.safeParse(spellResp);
    if (!parsedSpell.success) {
      console.error('Spell detail validation failed:', result.data.id, prettifyError(parsedSpell.error));
    }
    expect(parsedSpell.success).toBe(true);

    const media = await client.sendRequest(spellMedia(result.data.media.id));
    const parsedMedia = spellMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Spell media validation failed:', result.data.media.id, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });
});
