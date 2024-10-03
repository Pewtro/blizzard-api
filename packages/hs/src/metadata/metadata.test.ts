import type { Resource } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { allMetadata, specificMetadata } from './metadata';
import type { AllMetadataResponse, SpecificMetadataResponse } from './types';

describe('metadata', () => {
  describe('allMetadata', () => {
    it('should return the correct resource path for all metadata', () => {
      const result: Resource<AllMetadataResponse> = allMetadata();
      expect(result).toEqual({
        path: 'hearthstone/metadata',
      });
    });
  });

  describe('specificMetadata', () => {
    const types = ['classes', 'keywords', 'minionTypes', 'rarities', 'setGroups', 'sets', 'types'] as const;

    for (const type of types) {
      it(`should return the correct resource path for specific metadata type: ${type}`, () => {
        const result: Resource<SpecificMetadataResponse> = specificMetadata(type);
        expect(result).toEqual({
          path: `hearthstone/metadata/${type}`,
        });
      });
    }
  });
});
