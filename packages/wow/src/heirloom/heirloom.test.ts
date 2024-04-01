import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { heirloomApi } from './heirloom';

describe('heirloomApi', () => {
  it('should return the heirloom resource for a given heirloomId', () => {
    const heirloomId = 123;
    const resource = heirloomApi.heirloom(heirloomId);
    expect(resource.path).toBe(`${base}/heirloom/${heirloomId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the heirloom index resource', () => {
    const resource = heirloomApi.heirloomIndex();
    expect(resource.path).toBe(`${base}/heirloom/index`);
    expect(resource.namespace).toBe('static');
  });
});
