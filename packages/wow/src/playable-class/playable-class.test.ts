import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { playableClass, playableClassIndex, playableClassMedia, pvpTalentSlots } from './playable-class';

describe.concurrent('playableClassApi', () => {
  it('playableClass should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableClassId = 123;
    const resource = playableClass(playableClassId);

    expect(resource.path).toBe(`${base}/playable-class/${playableClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('playableClassIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = playableClassIndex();

    expect(resource.path).toBe(`${base}/playable-class/index`);
    expect(resource.namespace).toBe('static');
  });

  it('playableClassMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableClassId = 123;
    const resource = playableClassMedia(playableClassId);

    expect(resource.path).toBe(`${mediaBase}/playable-class/${playableClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('pvpTalentSlots should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableClassId = 123;
    const resource = pvpTalentSlots(playableClassId);

    expect(resource.path).toBe(`${base}/playable-class/${playableClassId}/pvp-talent-slots`);
    expect(resource.namespace).toBe('static');
  });
});
