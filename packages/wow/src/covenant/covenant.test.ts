import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { conduit, conduitIndex, covenant, covenantIndex, covenantMedia, soulbind, soulbindIndex } from './covenant';

describe.concurrent('covenantApi', () => {
  it('should return the correct path and namespace for conduit', ({ expect }) => {
    const conduitId = 123;
    const resource = conduit(conduitId);

    expect(resource.path).toBe(`${base}/covenant/conduit/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for conduitIndex', ({ expect }) => {
    const resource = conduitIndex();

    expect(resource.path).toBe(`${base}/covenant/conduit/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenant', ({ expect }) => {
    const covenantId = 123;
    const resource = covenant(covenantId);

    expect(resource.path).toBe(`${base}/covenant/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenantIndex', ({ expect }) => {
    const resource = covenantIndex();

    expect(resource.path).toBe(`${base}/covenant/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for covenantMedia', ({ expect }) => {
    const covenantId = 123;
    const resource = covenantMedia(covenantId);

    expect(resource.path).toBe(`${mediaBase}/covenant/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for soulbind', ({ expect }) => {
    const soulbindId = 123;
    const resource = soulbind(soulbindId);

    expect(resource.path).toBe(`${base}/covenant/soulbind/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for soulbindIndex', ({ expect }) => {
    const resource = soulbindIndex();

    expect(resource.path).toBe(`${base}/covenant/soulbind/index`);
    expect(resource.namespace).toBe('static');
  });
});
