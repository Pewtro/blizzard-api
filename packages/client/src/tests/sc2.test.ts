import { sc2 } from '@blizzard-api/sc2';
import { describe, expect, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

//Some of the starcraft APIs are highly unstable and may not work as expected
describe.concurrent('smoketest some sc2 api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  //Skip this test because the blizzard API returns an empty string which is not a valid JSON response
  it('should get grandmaster leaderboard', async () => {
    const result = await client.sendRequest(sc2.grandmasterLeaderboard('eu'));
    expect(result).toBeDefined();
  });
  it('should get season data', async () => {
    const result = await client.sendRequest(sc2.season('eu'));
    expect(result).toBeDefined();
  });
  it('should get league data', async () => {
    const result = await client.sendRequest(sc2.getLeagueData('42', 'lotv-1v1', 'arranged', 'grandmaster'));
    expect(result).toBeDefined();
  });
  it('should get legacy achievements', async () => {
    const result = await client.sendRequest(sc2.legacyAchievements('eu'));
    expect(result).toBeDefined();
  });
  it('should get legacy ladder', async () => {
    const result = await client.sendRequest(sc2.legacyLadder('eu', 235_782));
    expect(result).toBeDefined();
  });
  it('should get legacy ladders', async () => {
    const result = await client.sendRequest(sc2.legacyLadders('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get legacy match history', async () => {
    const result = await client.sendRequest(sc2.legacyMatchHistory('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get legacy profile', async () => {
    const result = await client.sendRequest(sc2.legacyProfile('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get legacy rewards', async () => {
    const result = await client.sendRequest(sc2.legacyRewards('eu'));
    expect(result).toBeDefined();
  });
  it('should get ladder data', async () => {
    const result = await client.sendRequest(sc2.ladder('eu', 1, 235_782, 131_418_961));
    expect(result).toBeDefined();
  });
  it('should get ladder summary', async () => {
    const result = await client.sendRequest(sc2.ladderSummary('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get metadata', async () => {
    const result = await client.sendRequest(sc2.metadata('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get profile', async () => {
    const result = await client.sendRequest(sc2.profile('eu', 1, 235_782));
    expect(result).toBeDefined();
  });
  it('should get static profile', async () => {
    const result = await client.sendRequest(sc2.staticProfile('eu'));
    expect(result).toBeDefined();
  });
});
