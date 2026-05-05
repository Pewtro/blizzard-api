/* eslint-disable sonarjs/pseudo-random */
import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  decor,
  decorIndex,
  decorSearch,
  fixture,
  fixtureHook,
  fixtureHookIndex,
  fixtureHookSearch,
  fixtureIndex,
  fixtureSearch,
  room,
  roomIndex,
  roomSearch,
} from '@blizzard-api/wow/housing-decor';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  decorIndexResponseSchema,
  decorResponseSchema,
  decorSearchResponseSchema,
  fixtureHookIndexResponseSchema,
  fixtureHookResponseSchema,
  fixtureHookSearchResponseSchema,
  fixtureIndexResponseSchema,
  fixtureResponseSchema,
  fixtureSearchResponseSchema,
  roomIndexReponseSchema,
  roomResponseSchema,
  roomSearchResponseSchema,
} from '../../../generated/schemas/wow/housing-decor';

describe('wow housing-decor integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('decor index + decor detail', async ({ expect }) => {
    const index = await client.sendRequest(decorIndex());
    const parsedIndex = decorIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Decor index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampleSize = 3;
    const sampledDecors =
      index.decor_items.length > sampleSize
        ? index.decor_items.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : index.decor_items;

    const requests = [];

    for (const item of sampledDecors) {
      requests.push(client.sendRequest(decor(item.id)));
    }

    const details = await Promise.all(requests);

    for (const detail of details) {
      const parsed = decorResponseSchema.safeParse(detail);
      if (!parsed.success) {
        console.error('Decor detail validation failed:', detail.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('decor search', async ({ expect }) => {
    const response = await client.sendRequest(decorSearch({ _page: 1, locale: 'en_US', name: 'chair' }));
    const parsed = decorSearchResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Decor search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fixture index + fixture detail', async ({ expect }) => {
    const index = await client.sendRequest(fixtureIndex());
    const parsedIndex = fixtureIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Fixture index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampleSize = 3;

    const sampledFixtures =
      index.fixtures.length > sampleSize
        ? index.fixtures.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : index.fixtures;

    const requests = [];

    for (const item of sampledFixtures) {
      requests.push(client.sendRequest(fixture(item.id)));
    }
    const details = await Promise.all(requests);

    for (const detail of details) {
      const parsed = fixtureResponseSchema.safeParse(detail);
      if (!parsed.success) {
        console.error('Fixture detail validation failed:', detail.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('fixture search', async ({ expect }) => {
    const response = await client.sendRequest(fixtureSearch({ _page: 1, locale: 'en_US', name: 'table' }));
    const parsed = fixtureSearchResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Fixture search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fixture hook index + fixture hook detail', async ({ expect }) => {
    const index = await client.sendRequest(fixtureHookIndex());
    const parsedIndex = fixtureHookIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Fixture hook index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampleSize = 3;
    const sampledHooks =
      index.fixture_hooks.length > sampleSize
        ? index.fixture_hooks.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : index.fixture_hooks;

    const requests = [];

    for (const item of sampledHooks) {
      requests.push(client.sendRequest(fixtureHook(item.id)));
    }

    const details = await Promise.all(requests);

    for (const detail of details) {
      const parsed = fixtureHookResponseSchema.safeParse(detail);
      if (!parsed.success) {
        console.error('Fixture hook detail validation failed:', detail.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('fixture hook search', async ({ expect }) => {
    const response = await client.sendRequest(fixtureHookSearch({ _page: 1, locale: 'en_US', name: 'hook' }));
    const parsed = fixtureHookSearchResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Fixture hook search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('room index + room detail', async ({ expect }) => {
    const index = await client.sendRequest(roomIndex());
    const parsedIndex = roomIndexReponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Room index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampleSize = 3;
    const sampledRooms =
      index.rooms.length > sampleSize
        ? index.rooms.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : index.rooms;

    const requests = [];

    for (const item of sampledRooms) {
      requests.push(client.sendRequest(room(item.id)));
    }
    const details = await Promise.all(requests);

    for (const detail of details) {
      const parsed = roomResponseSchema.safeParse(detail);
      if (!parsed.success) {
        console.error('Room detail validation failed:', detail.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('room search', async ({ expect }) => {
    const response = await client.sendRequest(roomSearch({ _page: 1, locale: 'en_US', name: 'living' }));
    const parsed = roomSearchResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Room search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
