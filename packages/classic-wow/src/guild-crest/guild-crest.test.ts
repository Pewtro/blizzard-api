import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classicGuildCrestApi', () => {
  test.each(namespaces)('should return the guild crest components index resource in the %s namespace', (namespace) => {
    const resource = guildCrestComponentsIndex(namespace);
    expect(resource.path).toBe(`${wowBasePath}/guild-crest/index`);
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)(
    'should return the guild crest border resource for a given borderId in the %s namespace',
    (namespace) => {
      const borderId = 123;
      const resource = guildCrestBorder(namespace, borderId);
      expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/border/123`);
      expect(resource.namespace).toBe(namespace);
    },
  );

  test.each(namespaces)(
    'should return the guild crest emblem resource for a given emblemId in the %s namespace',
    (namespace) => {
      const emblemId = 456;
      const resource = guildCrestEmblem(namespace, emblemId);
      expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/emblem/456`);
      expect(resource.namespace).toBe(namespace);
    },
  );
});
