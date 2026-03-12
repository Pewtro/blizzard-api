import { hs } from '@blizzard-api/hs';
import { describe, test } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some hs api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('should be able to search for a card back', async ({ expect }) => {
    const response = await client.sendRequest(hs.cardBackSearch({ locale: 'en_GB' }));
    expect(response).toBeDefined();
  });

  test('should be able to fetch a card back', async ({ expect }) => {
    const response = await client.sendRequest(hs.fetchOneCardBack('1', 'en_GB'));
    expect(response).toBeDefined();
  });

  test('should be able to search for a card', async ({ expect }) => {
    const response = await client.sendRequest(hs.cardSearch({ locale: 'en_GB', textFilter: 'fireball' }));
    expect(response).toBeDefined();
  });

  test('should be able to fetch a card', async ({ expect }) => {
    const response = await client.sendRequest(hs.fetchOneCard('52119-arch-villain-rafaam'));
    expect(response).toBeDefined();
  });

  test('should be able to fetch a deck', async ({ expect }) => {
    const response = await client.sendRequest(
      hs.getDeck({ code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA' }),
    );
    expect(response).toBeDefined();
  });

  test('should be able to fetch all metadata', async ({ expect }) => {
    const response = await client.sendRequest(hs.allMetadata());
    expect(response).toBeDefined();
  });

  test('should be able to fetch specific metadata', async ({ expect }) => {
    const response = await client.sendRequest(hs.specificMetadata('classes'));
    expect(response).toBeDefined();
  });
});
