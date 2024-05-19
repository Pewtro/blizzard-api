import { describe, it } from 'vitest';
import { base, mediaBase } from '../../../wow/src/base';
import * as classicGuildCrestApi from './guild-crest';

const namespace = 'static-classic';
describe.concurrent('classicGuildCrestApi', () => {
  it('should return the guild crest components index resource', ({ expect }) => {
    const resource = classicGuildCrestApi.guildCrestComponentsIndex(namespace);
    expect(resource.path).toBe(`${base}/guild-crest/index`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the guild crest border resource for a given borderId', ({ expect }) => {
    const borderId = 123;
    const resource = classicGuildCrestApi.guildCrestBorder(namespace, borderId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/border/123`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the guild crest emblem resource for a given emblemId', ({ expect }) => {
    const emblemId = 456;
    const resource = classicGuildCrestApi.guildCrestEmblem(namespace, emblemId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/emblem/456`);
    expect(resource.namespace).toBe(namespace);
  });
});
