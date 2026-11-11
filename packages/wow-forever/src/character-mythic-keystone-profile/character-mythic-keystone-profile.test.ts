import { describe, expect, test } from 'vitest';
import { characterMythicKeystoneProfileIndex } from './index';

describe('characterMythicKeystoneProfileApi', () => {
  test('characterMythicKeystoneProfileIndex should return a resource object with the correct path and namespace', () => {
    const resource = characterMythicKeystoneProfileIndex('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/mythic-keystone-profile');
    expect(resource.namespace).toBe('profile-forever');
  });
});
