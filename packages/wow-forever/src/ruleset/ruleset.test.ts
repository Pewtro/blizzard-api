import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { ruleset, rulesetIndex } from './index';

describe('rulesetApi', () => {
  test('ruleset should return a resource object with the correct path and namespace', () => {
    const resource = ruleset(2);

    expect(resource.path).toBe(`${wowBasePath}/ruleset/2`);
    expect(resource.namespace).toBe('dynamic-forever');
  });

  test('rulesetIndex should return a resource object with the correct path and namespace', () => {
    const resource = rulesetIndex();

    expect(resource.path).toBe(`${wowBasePath}/ruleset/index`);
    expect(resource.namespace).toBe('dynamic-forever');
  });
});
