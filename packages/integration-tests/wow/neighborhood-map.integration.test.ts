import { neighborhood, neighborhoodMap, neighborhoodMaps } from '@blizzard-api/wow/neighborhood-map';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  neighborhoodMapIndexResponseSchema,
  neighborhoodMapResponseSchema,
  neighborhoodResponseSchema,
} from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow neighborhood-map integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the neighborhood map index, map details, and sample neighborhoods', async ({ expect }) => {
    const indexResponse = await client.sendRequest(neighborhoodMaps());
    const parsedIndex = neighborhoodMapIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Neighborhood map index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const map = parsedIndex.data!.maps[0];
    expect(map).toBeDefined();
    if (!map) return;

    const mapResponse = await client.sendRequest(neighborhoodMap(map.id));
    const parsedMap = neighborhoodMapResponseSchema.safeParse(mapResponse);
    if (!parsedMap.success) {
      console.error('Neighborhood map validation failed:', map.id, prettifyError(parsedMap.error));
    }
    expect(parsedMap.success).toBe(true);

    for (const neighborhoodId of [1, 2, 3, 4, 5]) {
      const response = await client.sendRequest(neighborhood(map.id, neighborhoodId));
      const parsedNeighborhood = neighborhoodResponseSchema.safeParse(response);
      if (!parsedNeighborhood.success) {
        console.error('Neighborhood validation failed:', neighborhoodId, prettifyError(parsedNeighborhood.error));
      }
      expect(parsedNeighborhood.success).toBe(true);
    }
  });
});
