import { createBlizzardApiClient } from '@blizzard-api/client';
import { hs } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { cardSearchResponseSchema, fetchOneCardResponseSchema } from '../../../generated/schemas/hs';

describe('hs cards integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches card search results and fetches a card from response', async ({ expect }) => {
    const response = await client.sendRequest(hs.cardSearch({ locale: 'en_GB' }));
    const parsedResponse = cardSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Card search response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomCard = response?.cards[Math.floor(Math.random() * response.cards.length)];
    if (!randomCard) {
      console.error('No card found from search response');
    }
    expect(randomCard).toBeDefined();

    const specificCardResponse = await client.sendRequest(hs.fetchOneCard(randomCard!.slug, { locale: 'en_GB' }));
    const parsedSpecificCardresponse = fetchOneCardResponseSchema.safeParse(specificCardResponse);
    if (!parsedSpecificCardresponse.success) {
      console.error('Fetch one card failed from card search', randomCard!.slug, parsedSpecificCardresponse.error);
    }
    expect(parsedSpecificCardresponse.success).toBe(true);
  });

  test('fetches detailed card search results and fetches a card from response', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.cardSearch({
        //attack: 4,
        class: 'mage',
        collectible: 'collectible',
        //gameMode: 'constructed',
        //health: 12,
        //keyword: 'battlecry',
        locale: 'en_GB',
        //manaCost: 8,
        minionType: 'dragon',
        page: 1,
        pageSize: 5,
        rarity: 'legendary',
        set: 'rise-of-shadows',
        sort: 'name:asc',
        //textFilter: 'kalecgos',
        type: 'minion',
      }),
    );
    const parsedResponse = cardSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Detailed card search response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomCard = response?.cards[Math.floor(Math.random() * response.cards.length)];
    if (!randomCard) {
      console.error('No card found from detailed search response');
    }
    expect(randomCard).toBeDefined();

    const specificCardResponse = await client.sendRequest(hs.fetchOneCard(randomCard!.slug, { locale: 'en_GB' }));
    const parsedSpecificCardresponse = fetchOneCardResponseSchema.safeParse(specificCardResponse);
    if (!parsedSpecificCardresponse.success) {
      console.error(
        'Fetch one card failed from detailed card search',
        randomCard!.slug,
        parsedSpecificCardresponse.error,
      );
    }
    expect(parsedSpecificCardresponse.success).toBe(true);
  });

  test('fetches battleground card search results and fetches a card from response', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.cardSearch({
        gameMode: 'battlegrounds',
        tier: ['hero', 3],
      }),
    );
    const parsedResponse = cardSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Battleground card search response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomCard = response?.cards[Math.floor(Math.random() * response.cards.length)];
    if (!randomCard) {
      console.error('No card found from battleground search response');
    }
    expect(randomCard).toBeDefined();

    const specificCardResponse = await client.sendRequest(hs.fetchOneCard(randomCard!.slug, { locale: 'en_GB' }));
    const parsedSpecificCardresponse = fetchOneCardResponseSchema.safeParse(specificCardResponse);
    if (!parsedSpecificCardresponse.success) {
      console.error(
        'Fetch one card failed from battleground card search',
        randomCard!.slug,
        parsedSpecificCardresponse.error,
      );
    }
    expect(parsedSpecificCardresponse.success).toBe(true);
  });

  test('fetches mercenaries card search results and fetches a card from response', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.cardSearch({
        gameMode: 'mercenaries',
      }),
    );
    const parsedResponse = cardSearchResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Mercenaries card search response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomCard = response?.cards[Math.floor(Math.random() * response.cards.length)];
    if (!randomCard) {
      console.error('No card found from mercenaries search response');
    }
    expect(randomCard).toBeDefined();

    const specificCardResponse = await client.sendRequest(hs.fetchOneCard(randomCard!.slug, { locale: 'en_GB' }));
    const parsedSpecificCardresponse = fetchOneCardResponseSchema.safeParse(specificCardResponse);
    if (!parsedSpecificCardresponse.success) {
      console.error(
        'Fetch one card failed from mercenaries card search',
        randomCard!.slug,
        parsedSpecificCardresponse.error,
      );
    }
    expect(parsedSpecificCardresponse.success).toBe(true);
  });
});
