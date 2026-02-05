import { wowBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { heirloom, heirloomIndex } from './heirloom';

describe.concurrent('heirloomApi', () => {
  it('should return the heirloom resource for a given heirloomId', ({ expect }) => {
    const heirloomId = 123;
    const resource = heirloom(heirloomId);
    expect(resource.path).toBe(`${wowBasePath}/heirloom/${heirloomId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the heirloom index resource', ({ expect }) => {
    const resource = heirloomIndex();
    expect(resource.path).toBe(`${wowBasePath}/heirloom/index`);
    expect(resource.namespace).toBe('static');
  });
});
