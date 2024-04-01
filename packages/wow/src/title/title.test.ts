import { describe, expect, it } from 'vitest';
import { base } from '../base';
import { titleApi } from './title';

describe('titleApi', () => {
  it('should return the correct path for title', () => {
    const titleId = 123;
    const resource = titleApi.title(titleId);
    expect(resource.path).toBe(`${base}/title/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for titleIndex', () => {
    const resource = titleApi.titleIndex();
    expect(resource.path).toBe(`${base}/title/index`);
    expect(resource.namespace).toBe('static');
  });
});
