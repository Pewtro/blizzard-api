import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './guild-crest';

describe.concurrent('guildCrestApi', () => {
  it('should return the guild crest components index resource', ({ expect }) => {
    const resource = guildCrestComponentsIndex();
    expect(resource.path).toBe(`${base}/guild-crest/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the guild crest border resource for a given borderId', ({ expect }) => {
    const borderId = 123;
    const resource = guildCrestBorder(borderId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/border/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the guild crest emblem resource for a given emblemId', ({ expect }) => {
    const emblemId = 456;
    const resource = guildCrestEmblem(emblemId);
    expect(resource.path).toBe(`${mediaBase}/guild-crest/emblem/456`);
    expect(resource.namespace).toBe('static');
  });
});
