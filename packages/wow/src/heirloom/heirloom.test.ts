import { describe, it } from 'vitest';
import { base } from '../base';
import { heirloom, heirloomIndex } from './heirloom';

describe.concurrent('heirloomApi', () => {
  it('should return the heirloom resource for a given heirloomId', ({ expect }) => {
    const heirloomId = 123;
    const resource = heirloom(heirloomId);
    expect(resource.path).toBe(`${base}/heirloom/${heirloomId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the heirloom index resource', ({ expect }) => {
    const resource = heirloomIndex();
    expect(resource.path).toBe(`${base}/heirloom/index`);
    expect(resource.namespace).toBe('static');
  });
});
