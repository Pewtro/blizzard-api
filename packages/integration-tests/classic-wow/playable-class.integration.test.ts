import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableClassResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow playable class integration', () => {
  it('fetches playable class and media by id', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    // Use a well-known class id (1 = Warrior)
    const classId = 1;

    const resp = await client.sendRequest(classicWow.playableClass('static-classic1x', classId));
    const parsed = playableClassResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable class validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const mediaResp = await client.sendRequest(classicWow.playableClassMedia('static-classic1x', classId));
    // Media response shape isn't fully typed here; assert defined
    expect(mediaResp).toBeDefined();
  }, 30_000);
});
