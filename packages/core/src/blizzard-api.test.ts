import { describe, it, expect } from 'vitest';
import type { Origins, Locales } from './blizzard-api';
import { getBlizzardApi } from './blizzard-api';

describe('getBlizzardApi', () => {
  it('should return the correct endpoint for the specified origin and locale', () => {
    const origin: Origins = 'us';
    const locale: Locales = 'es_MX';

    const result = getBlizzardApi(origin, locale);

    expect(result).toMatchObject({
      origin: 'us',
      hostname: 'https://us.api.blizzard.com',
      locale: 'es_MX',
    });
  });

  it('should return the default locale if no locale is specified', () => {
    const origin: Origins = 'eu';

    const result = getBlizzardApi(origin);

    expect(result).toMatchObject({
      origin: 'eu',
      hostname: 'https://eu.api.blizzard.com',
      locale: 'en_GB',
    });
  });
});
