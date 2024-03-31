import { describe, it, expect } from 'vitest';
import type { Origins, Locales } from './endpoint';
import { getEndpoint } from './endpoint';

describe('getEndpoint', () => {
  it('should return the correct endpoint for the specified origin and locale', () => {
    const origin: Origins = 'us';
    const locale: Locales = 'en_US';

    const result = getEndpoint(origin, locale);

    expect(result).toMatchObject({
      origin: 'us',
      hostname: 'https://us.api.blizzard.com',
      locale: 'en_US',
    });
  });

  it('should return the default locale if no locale is specified', () => {
    const origin: Origins = 'eu';

    const result = getEndpoint(origin);

    expect(result).toMatchObject({
      origin: 'eu',
      hostname: 'https://eu.api.blizzard.com',
      locale: 'en_GB',
    });
  });
});
