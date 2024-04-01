import { describe, expect, it } from 'vitest';
import { base, mediaBase } from '../base';
import { techTalentApi } from './tech-talent';

describe('techTalentApi', () => {
  it('should return the correct path for techTalent', () => {
    const techTalentId = 123;
    const resource = techTalentApi.techTalent(techTalentId);
    expect(resource.path).toBe(`${base}/tech-talent/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentIndex', () => {
    const resource = techTalentApi.techTalentIndex();
    expect(resource.path).toBe(`${base}/tech-talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentMedia', () => {
    const techTalentId = 456;
    const resource = techTalentApi.techTalentMedia(techTalentId);
    expect(resource.path).toBe(`${mediaBase}/tech-talent/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentTree', () => {
    const techTalentTreeId = 789;
    const resource = techTalentApi.techTalentTree(techTalentTreeId);
    expect(resource.path).toBe(`${base}/tech-talent-tree/789`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for techTalentTreeIndex', () => {
    const resource = techTalentApi.techTalentTreeIndex();
    expect(resource.path).toBe(`${base}/tech-talent-tree/index`);
    expect(resource.namespace).toBe('static');
  });
});
