import { describe, it } from 'vitest';
import { base } from '../base';
import { toy, toyIndex } from './toy';

describe.concurrent('toyApi', () => {
  it('should return the correct path for toy', ({ expect }) => {
    const toyId = 123;
    const resource = toy(toyId);
    expect(resource.path).toBe(`${base}/toy/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for toyIndex', ({ expect }) => {
    const resource = toyIndex();
    expect(resource.path).toBe(`${base}/toy/index`);
    expect(resource.namespace).toBe('static');
  });
});
