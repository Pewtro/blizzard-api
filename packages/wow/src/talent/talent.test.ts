import { wowBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { pvpTalent, pvpTalentIndex, talent, talentIndex, talentTree, talentTreeIndex, talentTreeNodes } from './talent';

describe.concurrent('talentApi', () => {
  it('should return the correct path for pvpTalent', ({ expect }) => {
    const pvpTalentId = 123;
    const resource = pvpTalent(pvpTalentId);
    expect(resource.path).toBe(`${wowBasePath}/pvp-talent/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for pvpTalentIndex', ({ expect }) => {
    const resource = pvpTalentIndex();
    expect(resource.path).toBe(`${wowBasePath}/pvp-talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talent', ({ expect }) => {
    const talentId = 456;
    const resource = talent(talentId);
    expect(resource.path).toBe(`${wowBasePath}/talent/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentIndex', ({ expect }) => {
    const resource = talentIndex();
    expect(resource.path).toBe(`${wowBasePath}/talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTree', ({ expect }) => {
    const talentTreeId = 789;
    const specId = 10;
    const resource = talentTree(talentTreeId, specId);
    expect(resource.path).toBe(`${wowBasePath}/talent-tree/789/playable-specialization/10`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTreeIndex', ({ expect }) => {
    const resource = talentTreeIndex();
    expect(resource.path).toBe(`${wowBasePath}/talent-tree/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTreeNodes', ({ expect }) => {
    const talentTreeId = 789;
    const resource = talentTreeNodes(talentTreeId);
    expect(resource.path).toBe(`${wowBasePath}/talent-tree/789`);
    expect(resource.namespace).toBe('static');
  });
});
