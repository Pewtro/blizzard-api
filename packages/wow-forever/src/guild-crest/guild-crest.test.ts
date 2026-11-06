import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './index';

describe('guildCrestApi', () => {
  test('guildCrestBorder should return a resource object with the correct path and namespace', () => {
    const resource = guildCrestBorder(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/border/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('guildCrestComponentsIndex should return a resource object with the correct path and namespace', () => {
    const resource = guildCrestComponentsIndex();

    expect(resource.path).toBe(`${wowBasePath}/guild-crest/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('guildCrestEmblem should return a resource object with the correct path and namespace', () => {
    const resource = guildCrestEmblem(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/emblem/123`);
    expect(resource.namespace).toBe('static-forever');
  });
});
