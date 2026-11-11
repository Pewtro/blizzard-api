import { describe, expect, test } from 'vitest';
import { characterReputationsSummary } from './index';

const namespaces = ['profile-classicann'] as const;

describe('classicCharacterReputationsApi', () => {
  test.each(namespaces)(
    'characterReputationsSummary should return the correct resource in the %s namespace',
    (namespace) => {
      const resource = characterReputationsSummary(namespace, 'realm-slug', 'Character-Name');

      expect(resource.path).toBe('/profile/wow/character/realm-slug/character-name/reputations');
      expect(resource.namespace).toBe(namespace);
    },
  );
});
