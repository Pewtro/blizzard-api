import { describe, it } from 'vitest';
import { getBlizzardApi } from './blizzard-api';
import type { Locales, Origins } from './locales';

describe.concurrent('getBlizzardApi', () => {
  it('should return the correct endpoint for the specified origin and locale', ({ expect }) => {
    const origin: Origins = 'us';
    const locale: Locales = 'es_MX';

    const result = getBlizzardApi(origin, locale);

    expect(result).toMatchObject({
      hostname: 'https://us.api.blizzard.com',
      locale: 'es_MX',
      origin: 'us',
    });
  });

  it('should return the default locale if no locale is specified', ({ expect }) => {
    const origin: Origins = 'eu';

    const result = getBlizzardApi(origin);

    expect(result).toMatchObject({
      hostname: 'https://eu.api.blizzard.com',
      locale: 'en_GB',
      origin: 'eu',
    });
  });
});
