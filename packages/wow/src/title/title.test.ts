import { describe, it } from 'vitest';
import { base } from '../base';
import { title, titleIndex } from './title';

describe.concurrent('titleApi', () => {
  it('should return the correct path for title', ({ expect }) => {
    const titleId = 123;
    const resource = title(titleId);
    expect(resource.path).toBe(`${base}/title/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for titleIndex', ({ expect }) => {
    const resource = titleIndex();
    expect(resource.path).toBe(`${base}/title/index`);
    expect(resource.namespace).toBe('static');
  });
});
