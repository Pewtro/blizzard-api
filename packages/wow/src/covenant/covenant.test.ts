import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { covenantApi } from './covenant';

describe('covenantApi', () => {
  it('should return the correct path and namespace for conduit', () => {
    const conduitId = 123;
    const resource = covenantApi.conduit(conduitId);

    expect(resource.path).toBe(`${base}/covenant/conduit/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for conduitIndex', () => {
    const resource = covenantApi.conduitIndex();

    expect(resource.path).toBe(`${base}/covenant/conduit/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenant', () => {
    const covenantId = 123;
    const resource = covenantApi.covenant(covenantId);

    expect(resource.path).toBe(`${base}/covenant/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenantIndex', () => {
    const resource = covenantApi.covenantIndex();

    expect(resource.path).toBe(`${base}/covenant/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenantMedia', () => {
    const covenantId = 123;
    const resource = covenantApi.covenantMedia(covenantId);

    expect(resource.path).toBe(`${mediaBase}/covenant/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for soulbind', () => {
    const soulbindId = 123;
    const resource = covenantApi.soulbind(soulbindId);

    expect(resource.path).toBe(`${base}/covenant/soulbind/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for soulbindIndex', () => {
    const resource = covenantApi.soulbindIndex();

    expect(resource.path).toBe(`${base}/covenant/soulbind/index`);
    expect(resource.namespace).toBe('static');
  });
});
