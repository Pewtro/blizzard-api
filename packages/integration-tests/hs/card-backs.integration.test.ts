import { hs } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { cardBackSearchResponseSchema, singleCardBackSearchResponseSchema } from '../../../generated/schemas/hs';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('hs card-backs integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches card back search results and fetches card back details from results', async ({ expect }) => {
    const response = await client.sendRequest(hs.cardBackSearch({ locale: 'en_GB' }));
    const parsedResponse = cardBackSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Card back search response validation failed:', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);

    const randomCardBack = getRandomItem(response!.cardBacks);
    const extractedCardBackSlug = randomCardBack?.slug;
    if (!extractedCardBackSlug) {
      console.error('Failed to extract card back slug from response', randomCardBack);
    }
    expect(extractedCardBackSlug).toBeDefined();

    const cardBackResponse = await client.sendRequest(hs.fetchOneCardBack(extractedCardBackSlug!, 'en_GB'));
    const parsedCardBackResponse = singleCardBackSearchResponseSchema.safeParse(cardBackResponse);
    if (!parsedCardBackResponse.success) {
      console.error('Single card back response validation failed:', prettifyError(parsedCardBackResponse.error));
    }
    expect(parsedCardBackResponse.success).toBe(true);
  });
});
