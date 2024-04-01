import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { guildCrestApi } from './guild-crest';

describe('guildCrestApi', () => {
  it('should return the guild crest components index resource', () => {
    const resource = guildCrestApi.guildCrestComponentsIndex();
    expect(resource.path).toBe(`${base}/guild-crest/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the guild crest border resource for a given borderId', () => {
    const borderId = 123;
    const resource = guildCrestApi.guildCrestBorder(borderId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/border/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the guild crest emblem resource for a given emblemId', () => {
    const emblemId = 456;
    const resource = guildCrestApi.guildCrestEmblem(emblemId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/emblem/456`);
    expect(resource.namespace).toBe('static');
  });
});
