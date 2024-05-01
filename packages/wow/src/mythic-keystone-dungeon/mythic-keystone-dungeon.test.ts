import { describe, it } from 'vitest';
import { base } from '../base';
import { mythicKeystoneDungeonApi } from './mythic-keystone-dungeon';

describe.concurrent('mythicKeystoneDungeonApi', () => {
  it('mythicKeystoneDungeon should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneDungeonId = 123;
    const resource = mythicKeystoneDungeonApi.mythicKeystoneDungeon(mythicKeystoneDungeonId);

    expect(resource.path).toBe(`${base}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneDungeonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneDungeonApi.mythicKeystoneDungeonIndex();

    expect(resource.path).toBe(`${base}/mythic-keystone/dungeon/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneDungeonApi.mythicKeystoneIndex();

    expect(resource.path).toBe(`${base}/mythic-keystone/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystonePeriod should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystonePeriodId = 456;
    const resource = mythicKeystoneDungeonApi.mythicKeystonePeriod(mythicKeystonePeriodId);

    expect(resource.path).toBe(`${base}/mythic-keystone/period/${mythicKeystonePeriodId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystonePeriodIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneDungeonApi.mythicKeystonePeriodIndex();

    expect(resource.path).toBe(`${base}/mythic-keystone/period/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneSeason should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneSeasonId = 789;
    const resource = mythicKeystoneDungeonApi.mythicKeystoneSeason(mythicKeystoneSeasonId);

    expect(resource.path).toBe(`${base}/mythic-keystone/season/${mythicKeystoneSeasonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneSeasonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneDungeonApi.mythicKeystoneSeasonIndex();

    expect(resource.path).toBe(`${base}/mythic-keystone/season/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
