import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterMythicKeystoneProfileIndexResponseSchema,
  characterMythicKeystoneSeasonDetailsResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-mythic-keystone-profile integration', () => {
  it('validates mythic keystone profile index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const index = await client.sendRequest(wow.characterMythicKeystoneProfileIndex(realm, character));
    const parsed = characterMythicKeystoneProfileIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Character mythic keystone profile index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  it('validates mythic keystone season details when available', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';

    const index = await client.sendRequest(wow.characterMythicKeystoneProfileIndex(realm, character));
    const parsedIndex = characterMythicKeystoneProfileIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Character mythic keystone profile index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const seasonId = index.seasons.at(0)?.id;
    const details = await client.sendRequest(wow.characterMythicKeystoneSeasonDetails(realm, character, seasonId!));
    const parsedDetails = characterMythicKeystoneSeasonDetailsResponseSchema.safeParse(details);
    if (!parsedDetails.success) {
      console.error('Character mythic keystone season details validation failed:', treeifyError(parsedDetails.error));
    }
    expect(parsedDetails.success).toBe(true);
  });
});
