import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
} from '@blizzard-api/wow/character-mythic-keystone-profile';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  characterMythicKeystoneProfileIndexResponseSchema,
  characterMythicKeystoneSeasonDetailsResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow character-mythic-keystone-profile integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates mythic keystone profile index', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const index = await client.sendRequest(characterMythicKeystoneProfileIndex(realm, character));
    const parsed = characterMythicKeystoneProfileIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Character mythic keystone profile index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates mythic keystone season details when available', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const index = await client.sendRequest(characterMythicKeystoneProfileIndex(realm, character));
    const parsedIndex = characterMythicKeystoneProfileIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Character mythic keystone profile index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const seasonId = index.seasons.at(0)?.id;
    const details = await client.sendRequest(characterMythicKeystoneSeasonDetails(realm, character, seasonId!));
    const parsedDetails = characterMythicKeystoneSeasonDetailsResponseSchema.safeParse(details);
    if (!parsedDetails.success) {
      console.error('Character mythic keystone season details validation failed:', treeifyError(parsedDetails.error));
    }
    expect(parsedDetails.success).toBe(true);
  });
});
