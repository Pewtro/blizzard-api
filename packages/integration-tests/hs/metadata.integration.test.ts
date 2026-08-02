import { createBlizzardApiClient } from '@blizzard-api/client';
import { hs } from '@blizzard-api/hs';
import type { AllMetadataResponse } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { allMetadataResponseSchema, specificMetadataResponseSchema } from '../../../generated/schemas/hs';

describe('hs metadata integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches all metadata and based on type', async ({ expect }) => {
    const response = await client.sendRequest(hs.allMetadata());
    const parsedResponse = allMetadataResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Failed to parse response:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    const metadataTypes: Array<keyof AllMetadataResponse> = [
      'arenaIds',
      'bgGameModes',
      'cardBackCategories',
      'classes',
      'filterableFields',
      'gameModes',
      'keywords',
      'mercenaryFactions',
      'mercenaryRoles',
      'minionTypes',
      'numericFields',
      'rarities',
      'setGroups',
      'sets',
      'spellSchools',
      'types',
    ] as const;
    const metadataRequests = metadataTypes.map((type) => client.sendRequest(hs.specificMetadata(type)));
    const metadataResponses = await Promise.all(metadataRequests);

    for (const metadata of metadataResponses) {
      const parsedMetadata = specificMetadataResponseSchema.safeParse(metadata);
      if (!parsedMetadata.success) {
        console.error('Failed to parse specific metadata response:', metadata, parsedMetadata.error);
      }
      expect(parsedMetadata.success).toBe(true);
    }
  });
});
