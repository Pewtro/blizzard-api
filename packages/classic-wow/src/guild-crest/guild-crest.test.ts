import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './guild-crest';

const namespace = 'static-classic';
describe.concurrent('classicGuildCrestApi', () => {
  it('should return the guild crest components index resource', ({ expect }) => {
    const resource = guildCrestComponentsIndex(namespace);
    expect(resource.path).toBe(`${wowBasePath}/guild-crest/index`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the guild crest border resource for a given borderId', ({ expect }) => {
    const borderId = 123;
    const resource = guildCrestBorder(namespace, borderId);
    expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/border/123`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the guild crest emblem resource for a given emblemId', ({ expect }) => {
    const emblemId = 456;
    const resource = guildCrestEmblem(namespace, emblemId);
    expect(resource.path).toBe(`${wowMediaBasePath}/guild-crest/emblem/456`);
    expect(resource.namespace).toBe(namespace);
  });
});
