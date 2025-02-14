import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './achievements';

describe.concurrent('Achievements', () => {
  it('should return correct path and namespace for achievementCategory', ({ expect }) => {
    const resource = achievementCategory(1);
    expect(resource.path).toBe(`${base}/achievement-category/1`);
    expect(resource.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementCategoryIndex', ({ expect }) => {
    const resource = achievementCategoryIndex();
    expect(resource.path).toBe(`${base}/achievement-category/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievement', ({ expect }) => {
    const resource = achievement(1);
    expect(resource.path).toBe(`${base}/achievement/1`);
    expect(resource.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementIndex', ({ expect }) => {
    const resource = achievementIndex();
    expect(resource.path).toBe(`${base}/achievement/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementMedia', ({ expect }) => {
    const resource = achievementMedia(1);
    expect(resource.path).toBe(`${mediaBase}/achievement/1`);
    expect(resource.namespace).toBe('static');
  });
});
