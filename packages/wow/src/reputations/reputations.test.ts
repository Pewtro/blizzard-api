import { describe, it } from 'vitest';
import { base } from '../base';
import { reputationApi } from './reputations';

describe.concurrent('reputationApi', () => {
  it('reputationFaction should return a resource object with the correct path and namespace', ({ expect }) => {
    const reputationFactionId = 123;
    const resource = reputationApi.reputationFaction(reputationFactionId);

    expect(resource.path).toBe(`${base}/reputation-faction/${reputationFactionId}`);
    expect(resource.namespace).toBe('static');
  });

  it('reputationFactionIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = reputationApi.reputationFactionIndex();

    expect(resource.path).toBe(`${base}/reputation-faction/index`);
    expect(resource.namespace).toBe('static');
  });

  it('reputationTiers should return a resource object with the correct path and namespace', ({ expect }) => {
    const reputationTiersId = 456;
    const resource = reputationApi.reputationTiers(reputationTiersId);

    expect(resource.path).toBe(`${base}/reputation-tiers/${reputationTiersId}`);
    expect(resource.namespace).toBe('static');
  });

  it('reputationTiersIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = reputationApi.reputationTiersIndex();

    expect(resource.path).toBe(`${base}/reputation-tiers/index`);
    expect(resource.namespace).toBe('static');
  });
});
