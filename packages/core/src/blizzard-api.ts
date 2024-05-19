/**
 * Possible regions for use within the Blizzard API.
 */
export type Origins = 'us' | 'eu' | 'kr' | 'tw' | 'cn';
/**
 * Possible locales for use within the Blizzard API.
 */
export type Locales =
  | 'en_US'
  | 'es_MX'
  | 'pt_BR'
  | 'en_GB'
  | 'es_ES'
  | 'fr_FR'
  | 'ru_RU'
  | 'de_DE'
  | 'pt_PT'
  | 'it_IT'
  | 'ko_KR'
  | 'zh_TW'
  | 'zh_CN'
  | 'multi';

/**
 * A record of regions and their supported locales.
 */
const locales = {
  us: ['en_US', 'es_MX', 'pt_BR', 'multi'],
  eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
  kr: ['ko_KR', 'en_GB', 'en_US', 'multi'],
  tw: ['zh_TW', 'en_GB', 'en_US', 'multi'],
  cn: ['zh_CN'],
} as const satisfies Record<Origins, Array<Locales>>;

/**
 * The default Blizzard API configuration for each region.
 */
interface BlizzardApiDefault<T extends Origins> {
  hostname: T extends 'cn' ? 'https://gateway.battlenet.com.cn' : `https://${T}.api.blizzard.com`;
  defaultLocale: (typeof locales)[T][number];
}

/**
 * A record of Blizzard API configurations by region.
 */
interface BlizzardApiByRegion {
  us: BlizzardApiDefault<'us'>;
  eu: BlizzardApiDefault<'eu'>;
  kr: BlizzardApiDefault<'kr'>;
  tw: BlizzardApiDefault<'tw'>;
  cn: BlizzardApiDefault<'cn'>;
}

const endpoints: BlizzardApiByRegion = {
  us: {
    hostname: 'https://us.api.blizzard.com',
    defaultLocale: 'en_US',
  },
  eu: {
    hostname: 'https://eu.api.blizzard.com',
    defaultLocale: 'en_GB',
  },
  kr: {
    hostname: 'https://kr.api.blizzard.com',
    defaultLocale: 'ko_KR',
  },
  tw: {
    hostname: 'https://tw.api.blizzard.com',
    defaultLocale: 'zh_TW',
  },
  cn: {
    hostname: 'https://gateway.battlenet.com.cn',
    defaultLocale: 'zh_CN',
  },
};

/**
 * A Blizzard API configuration object.
 * @template T The region of the Blizzard API.
 * @property origin The region of the Blizzard API.
 * @property locale The locale of the Blizzard API.
 * @property hostname The hostname of the Blizzard API.
 */
interface BlizzardApi<T extends Origins> {
  origin: Origins;
  locale: (typeof locales)[T][number];
  hostname: BlizzardApiDefault<Origins>['hostname'];
}

/**
 * Get the Blizzard API configuration for a given region.
 * @template T The region of the Blizzard API.
 * @param origin The region of the Blizzard API.
 * @param locale The locale of the Blizzard API.
 * @returns The Blizzard API configuration for the given region.
 * @example
 * const api = getBlizzardApi('us', 'en_US');
 * console.log(api.hostname); // 'https://us.api.blizzard.com'
 * console.log(api.locale); // 'en_US'
 * console.log(api.origin); // 'us'
 */
export function getBlizzardApi<T extends Origins>(
  origin: T,
  locale?: (typeof locales)[typeof origin][number],
): BlizzardApi<typeof origin> {
  const endpoint = endpoints[origin];

  return {
    origin,
    hostname: endpoint.hostname,
    locale: locale ?? endpoint.defaultLocale,
  };
}
