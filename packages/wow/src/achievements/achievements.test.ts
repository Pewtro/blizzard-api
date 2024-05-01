import { describe, it } from 'vitest';
import { base, mediaBase } from '../base.js';
import { achievementApi } from './achievements.js';

describe.concurrent('Achievements', () => {
  it('should return correct path and namespace for achievementCategory', ({ expect }) => {
    const achievementCategory = achievementApi.achievementCategory(1);
    expect(achievementCategory.path).toBe(`${base}/achievement-category/1`);
    expect(achievementCategory.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementCategoryIndex', ({ expect }) => {
    const achievementCategoryIndex = achievementApi.achievementCategoryIndex();
    expect(achievementCategoryIndex.path).toBe(`${base}/achievement-category/index`);
    expect(achievementCategoryIndex.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievement', ({ expect }) => {
    const achievement = achievementApi.achievement(1);
    expect(achievement.path).toBe(`${base}/achievement/1`);
    expect(achievement.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementIndex', ({ expect }) => {
    const achievementIndex = achievementApi.achievementIndex();
    expect(achievementIndex.path).toBe(`${base}/achievement/index`);
    expect(achievementIndex.namespace).toBe('static');
  });

  it('should return correct path and namespace for achievementMedia', ({ expect }) => {
    const achievementMedia = achievementApi.achievementMedia(1);
    expect(achievementMedia.path).toBe(`${mediaBase}/achievement/1`);
    expect(achievementMedia.namespace).toBe('static');
  });
});
