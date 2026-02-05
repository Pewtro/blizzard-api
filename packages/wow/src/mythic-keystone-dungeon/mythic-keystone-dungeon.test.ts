import { wowBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import {
  mythicKeystoneDungeon,
  mythicKeystoneDungeonIndex,
  mythicKeystoneIndex,
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from './mythic-keystone-dungeon';

describe.concurrent('mythicKeystoneDungeonApi', () => {
  it('mythicKeystoneDungeon should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneDungeonId = 123;
    const resource = mythicKeystoneDungeon(mythicKeystoneDungeonId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneDungeonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneDungeonIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/dungeon/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystonePeriod should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystonePeriodId = 456;
    const resource = mythicKeystonePeriod(mythicKeystonePeriodId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/${mythicKeystonePeriodId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystonePeriodIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystonePeriodIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneSeason should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneSeasonId = 789;
    const resource = mythicKeystoneSeason(mythicKeystoneSeasonId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/${mythicKeystoneSeasonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneSeasonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneSeasonIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
