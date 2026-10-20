import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;

describe('characterProfileStatus', () => {
  test.each(namespaces)(
    'should return the correct resource for character profile status in the %s namespace',
    (namespace) => {
      const realmSlug = 'some-realm';
      const characterName = 'some-character';

      const result = characterProfileStatus(namespace, realmSlug, characterName);

      expect(result).toEqual({
        namespace,
        path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/status`,
      });
    },
  );
});

describe('characterProfileSummary', () => {
  test.each(namespaces)(
    'should return the correct resource for character profile summary in the %s namespace',
    (namespace) => {
      const realmSlug = 'some-realm';
      const characterName = 'some-character';

      const result = characterProfileSummary(namespace, realmSlug, characterName);

      expect(result).toEqual({
        namespace,
        path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}`,
      });
    },
  );
});
