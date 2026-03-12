import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
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
  test('mythicKeystoneDungeon should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneDungeonId = 123;
    const resource = mythicKeystoneDungeon(mythicKeystoneDungeonId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystoneDungeonIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const resource = mythicKeystoneDungeonIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/dungeon/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystoneIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystonePeriod should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystonePeriodId = 456;
    const resource = mythicKeystonePeriod(mythicKeystonePeriodId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/${mythicKeystonePeriodId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystonePeriodIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const resource = mythicKeystonePeriodIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystoneSeason should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneSeasonId = 789;
    const resource = mythicKeystoneSeason(mythicKeystoneSeasonId);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/${mythicKeystoneSeasonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystoneSeasonIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const resource = mythicKeystoneSeasonIndex();

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
