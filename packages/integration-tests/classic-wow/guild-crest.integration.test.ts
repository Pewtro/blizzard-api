import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { guildCrestComponentsIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow guild crest integration', () => {
  it('validates guild crest components index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.guildCrestComponentsIndex('static-classic1x'));
    const parsed = guildCrestComponentsIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest components index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
