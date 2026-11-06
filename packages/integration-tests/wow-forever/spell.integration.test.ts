import { spell, spellMedia, spellSearch } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  spellMediaResponseSchema,
  spellResponseSchema,
  spellSearchResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever spell integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the spell search and sampled spells with media', async ({ expect }) => {
    const search = await client.sendRequest(spellSearch({ _page: 1, locale: 'en_US', name: 'shield' }));
    const parsedSearch = spellSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Spell search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const results = parsedSearch.success ? parsedSearch.data.results : [];
    const sampled = getRandomSample(
      results.map((result) => result.data.id),
      5,
    );

    for (const spellId of sampled) {
      const spellResponse = await client.sendRequest(spell(spellId));
      const parsedSpell = spellResponseSchema.safeParse(spellResponse);
      if (!parsedSpell.success) {
        console.error('Spell validation failed for id', spellId, prettifyError(parsedSpell.error));
      }
      expect(parsedSpell.success).toBe(true);

      const media = await client.sendRequest(spellMedia(spellId));
      const parsedMedia = spellMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Spell media validation failed for id', spellId, prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
});
