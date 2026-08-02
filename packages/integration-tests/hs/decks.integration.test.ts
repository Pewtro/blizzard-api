import { createBlizzardApiClient } from '@blizzard-api/client';
import { hs } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { deckResponseSchema } from '../../../generated/schemas/hs';

describe('hs decks integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches a deck by code', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.getDeck({ code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA' }),
    );
    const parsedResponse = deckResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Failed to parse response:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches a deck by card list', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.getDeck({
        hero: 813,
        ids: [
          906, 1099, 1363, 1367, 46_706, 48_099, 48_759, 49_184, 50_071, 50_278, 51_714, 52_109, 52_632, 52_715, 53_409,
          53_413, 53_756, 53_969, 54_148, 54_425, 54_431, 54_874, 54_898, 54_917, 55_166, 55_245, 55_438, 55_441,
          55_907, 57_416,
        ],
      }),
    );
    const parsedResponse = deckResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Failed to parse response:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
});
