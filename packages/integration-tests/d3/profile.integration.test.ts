import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod/v4/core';
import { environment } from '../../../environment';
import {
  accountHeroFollowerItemsResponseSchema,
  accountHeroItemsResponseSchema,
  accountHeroResponseSchema,
  accountResponseSchema,
} from '../../../generated/schemas/d3';

describe('d3 profile integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches account profile data', async ({ expect, skip }) => {
    if (!environment.blizzardBnetAccountId) {
      skip('No Blizzard Battle.net account ID provided in environment variables.');
      return;
    }
    const response = await client.sendRequest(d3.account(environment.blizzardBnetAccountId));
    const parsedResponse = accountResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Account validation failed:', treeifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);

    const heroes = response?.heroes;
    expect(heroes).toBeDefined();
    expect(heroes?.length).toBeGreaterThan(0);
    // eslint-disable-next-line sonarjs/pseudo-random
    const randomHero = heroes?.[Math.floor(Math.random() * heroes.length)];
    expect(randomHero).toBeDefined();
    const heroResponse = await client.sendRequest(d3.accountHero(environment.blizzardBnetAccountId, randomHero!.id));
    const parsedHeroResponse = accountHeroResponseSchema.safeParse(heroResponse);
    if (!parsedHeroResponse.success) {
      console.error('Hero validation failed:', randomHero!.id, treeifyError(parsedHeroResponse.error));
    }
    expect(parsedHeroResponse.success).toBe(true);

    const heroItemsResponse = await client.sendRequest(
      d3.accountHeroItems(environment.blizzardBnetAccountId, randomHero!.id),
    );
    const parsedHeroItemsResponse = accountHeroItemsResponseSchema.safeParse(heroItemsResponse);
    if (!parsedHeroItemsResponse.success) {
      console.error('Hero items validation failed:', randomHero!.id, parsedHeroItemsResponse.error);
    }
    expect(parsedHeroItemsResponse.success).toBe(true);

    const heroFollowerItemsResponse = await client.sendRequest(
      d3.accountHeroFollowerItems(environment.blizzardBnetAccountId, randomHero!.id),
    );
    const parsedHeroFollowerItemsResponse = accountHeroFollowerItemsResponseSchema.safeParse(heroFollowerItemsResponse);
    if (!parsedHeroFollowerItemsResponse.success) {
      console.error(
        'Hero follower items validation failed:',
        randomHero!.id,
        treeifyError(parsedHeroFollowerItemsResponse.error),
      );
    }
    expect(parsedHeroFollowerItemsResponse.success).toBe(true);
  });
});
