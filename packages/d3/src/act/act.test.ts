import { describe, it } from 'vitest';
import { base } from '../base';
import { act, actIndex } from './act';

describe.concurrent('act', () => {
  it('should return the act resource', ({ expect }) => {
    const resource = act(1);
    expect(resource.path).toBe(`${base}/act/1`);
  });
  it('should return the act index resource', ({ expect }) => {
    const resource = actIndex();
    expect(resource.path).toBe(`${base}/act`);
  });
});
