import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { techTalent, techTalentIndex, techTalentMedia, techTalentTree, techTalentTreeIndex } from './tech-talent';

describe.concurrent('techTalentApi', () => {
  it('should return the correct path for techTalent', ({ expect }) => {
    const techTalentId = 123;
    const resource = techTalent(techTalentId);
    expect(resource.path).toBe(`${wowBasePath}/tech-talent/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentIndex', ({ expect }) => {
    const resource = techTalentIndex();
    expect(resource.path).toBe(`${wowBasePath}/tech-talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentMedia', ({ expect }) => {
    const techTalentId = 456;
    const resource = techTalentMedia(techTalentId);
    expect(resource.path).toBe(`${wowMediaBasePath}/tech-talent/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentTree', ({ expect }) => {
    const techTalentTreeId = 789;
    const resource = techTalentTree(techTalentTreeId);
    expect(resource.path).toBe(`${wowBasePath}/tech-talent-tree/789`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentTreeIndex', ({ expect }) => {
    const resource = techTalentTreeIndex();
    expect(resource.path).toBe(`${wowBasePath}/tech-talent-tree/index`);
    expect(resource.namespace).toBe('static');
  });
});
