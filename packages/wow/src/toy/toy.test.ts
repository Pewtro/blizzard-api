import { describe, expect, it } from 'vitest';
import { base } from '../base';
import { toyApi } from './toy';

describe('toyApi', () => {
  it('should return the correct path for toy', () => {
    const toyId = 123;
    const resource = toyApi.toy(toyId);
    expect(resource.path).toBe(`${base}/toy/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for toyIndex', () => {
    const resource = toyApi.toyIndex();
    expect(resource.path).toBe(`${base}/toy/index`);
    expect(resource.namespace).toBe('static');
  });
});
