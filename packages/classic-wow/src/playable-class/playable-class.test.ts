import { describe, it } from 'vitest';
import { base, mediaBase } from '../../../wow/src/base';
import { classicPlayableClassApi } from './playable-class';

const namespace = 'static-classic';

describe.concurrent('classicPlayableClassApi', () => {
  it('should return a playable class resource', ({ expect }) => {
    const playableClassId = 1;

    const resource = classicPlayableClassApi.playableClass(namespace, playableClassId);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${base}/playable-class/1`);
  });

  it('should return a playable class index resource', ({ expect }) => {
    const resource = classicPlayableClassApi.playableClassIndex(namespace);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${base}/playable-class/index`);
  });

  it('should return a playable class media resource', ({ expect }) => {
    const playableClassId = 1;

    const resource = classicPlayableClassApi.playableClassMedia(namespace, playableClassId);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${mediaBase}/playable-class/1`);
  });
});
