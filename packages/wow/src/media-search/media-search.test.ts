import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { mediaSearchApi } from './media-search';

describe('mediaSearchApi', () => {
  it('should return the media search resource', () => {
    const resource = mediaSearchApi.mediaSearch();
    expect(resource.path).toBe(`${base}/search/media`);
    expect(resource.namespace).toBe('static');
  });
});
