import { wow } from '@blizzard-api/wow';
import { describe, expect, it } from 'vitest';
import { environment } from '../../../../../environment';
import { BlizzardApiClient } from '../../client';

describe('achievement', async () => {
  const client = new BlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });
  const access = await client.getAccessToken();
  client.setAccessToken(access.data.access_token);

  it('should be able to fetch an achievement', async () => {
    const response = await client.sendRequest(wow.achievements.achievementCategory(16_542)).catch((error) => {
      console.error('error', error);
      throw new Error('Failed to fetch achievement');
    });

    expect(response.data.id).toBe(16_542);
  });
});
