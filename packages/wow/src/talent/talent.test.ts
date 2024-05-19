import { describe, it } from 'vitest';
import { base } from '../base';
import * as talentApi from './talent';

describe.concurrent('talentApi', () => {
  it('should return the correct path for pvpTalent', ({ expect }) => {
    const pvpTalentId = 123;
    const resource = talentApi.pvpTalent(pvpTalentId);
    expect(resource.path).toBe(`${base}/pvp-talent/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for pvpTalentIndex', ({ expect }) => {
    const resource = talentApi.pvpTalentIndex();
    expect(resource.path).toBe(`${base}/pvp-talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talent', ({ expect }) => {
    const talentId = 456;
    const resource = talentApi.talent(talentId);
    expect(resource.path).toBe(`${base}/talent/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentIndex', ({ expect }) => {
    const resource = talentApi.talentIndex();
    expect(resource.path).toBe(`${base}/talent/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTree', ({ expect }) => {
    const talentTreeId = 789;
    const specId = 10;
    const resource = talentApi.talentTree(talentTreeId, specId);
    expect(resource.path).toBe(`${base}/talent-tree/789/playable-specialization/10`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTreeIndex', ({ expect }) => {
    const resource = talentApi.talentTreeIndex();
    expect(resource.path).toBe(`${base}/talent-tree/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for talentTreeNodes', ({ expect }) => {
    const talentTreeId = 789;
    const resource = talentApi.talentTreeNodes(talentTreeId);
    expect(resource.path).toBe(`${base}/talent-tree/789`);
    expect(resource.namespace).toBe('static');
  });
});
