import { d3 } from '@blizzard-api/d3';
import { describe, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some d3 api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  it('should be able to fetch the act index', async ({ expect }) => {
    const response = await client.sendRequest(d3.actIndex());
    expect(response.acts).toBeDefined();
  });
  it('should be able to fetch artisan', async ({ expect }) => {
    const response = await client.sendRequest(d3.artisan('blacksmith'));
    expect(response.name).toBeDefined();
  });
  it('should be able to fetch recipe', async ({ expect }) => {
    const response = await client.sendRequest(d3.recipe('blacksmith', 'apprentice-flamberge'));
    expect(response.cost).toBeDefined();
  });

  it('should be able to fetch a season leaderboard', async ({ expect }) => {
    const response = await client.sendRequest(d3.seasonLeaderboard(1, 'achievement-points'));

    expect(response.achievement_points).toBeDefined();
  });

  it('should be able to fetch an era season leaderboard', async ({ expect }) => {
    const response = await client.sendRequest(d3.eraLeaderboard(1, 'rift-barbarian'));

    expect(response.generated_by).toBeDefined();
  });
});
