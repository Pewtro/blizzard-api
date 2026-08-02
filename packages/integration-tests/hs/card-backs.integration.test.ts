import { createBlizzardApiClient } from '@blizzard-api/client';
import { hs } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { cardBackSearchResponseSchema, singleCardBackSearchResponseSchema } from '../../../generated/schemas/hs';

describe('hs card-backs integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches card back search results and fetches card back details from results', async ({ expect }) => {
    const response = await client.sendRequest(hs.cardBackSearch({ locale: 'en_GB' }));
    const parsedResponse = cardBackSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Card back search response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomCardBack = response!.cardBacks[Math.floor(Math.random() * response!.cardBacks.length)];
    const extractedCardBackSlug = randomCardBack?.slug;
    if (!extractedCardBackSlug) {
      console.error('Failed to extract card back slug from response', randomCardBack);
    }
    expect(extractedCardBackSlug).toBeDefined();

    const cardBackResponse = await client.sendRequest(hs.fetchOneCardBack(extractedCardBackSlug!, 'en_GB'));
    const parsedCardBackResponse = singleCardBackSearchResponseSchema.safeParse(cardBackResponse);
    if (!parsedCardBackResponse.success) {
      console.error('Single card back response validation failed:', parsedCardBackResponse.error);
    }
    expect(parsedCardBackResponse.success).toBe(true);
  });
});
