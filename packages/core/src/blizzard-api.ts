/**
 * Possible locales for use within the Blizzard API.
 */
export type Locales =
  | 'de_DE'
  | 'en_GB'
  | 'en_US'
  | 'es_ES'
  | 'es_MX'
  | 'fr_FR'
  | 'it_IT'
  | 'ko_KR'
  | 'multi'
  | 'pt_BR'
  | 'pt_PT'
  | 'ru_RU'
  | 'zh_CN'
  | 'zh_TW';
/**
 * Possible regions for use within the Blizzard API.
 */
export type Origins = 'cn' | 'eu' | 'kr' | 'tw' | 'us';

/**
 * A record of regions and their supported locales.
 */
const _regionLocaleMap = {
  cn: ['zh_CN'],
  eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
  kr: ['ko_KR', 'en_GB', 'en_US', 'multi'],
  tw: ['zh_TW', 'en_GB', 'en_US', 'multi'],
  us: ['en_US', 'es_MX', 'pt_BR', 'multi'],
} as const satisfies Record<Origins, Array<Locales>>;

/**
 * A record of Blizzard API configurations by region.
 */
interface BlizzardApiByRegion {
  cn: BlizzardApiDefault<'cn'>;
  eu: BlizzardApiDefault<'eu'>;
  kr: BlizzardApiDefault<'kr'>;
  tw: BlizzardApiDefault<'tw'>;
  us: BlizzardApiDefault<'us'>;
}

/**
 * The default Blizzard API configuration for each region.
 */
interface BlizzardApiDefault<T extends Origins> {
  defaultLocale: (typeof _regionLocaleMap)[T][number];
  hostname: T extends 'cn' ? 'https://gateway.battlenet.com.cn' : `https://${T}.api.blizzard.com`;
}

const endpoints: BlizzardApiByRegion = {
  cn: {
    defaultLocale: 'zh_CN',
    hostname: 'https://gateway.battlenet.com.cn',
  },
  eu: {
    defaultLocale: 'en_GB',
    hostname: 'https://eu.api.blizzard.com',
  },
  kr: {
    defaultLocale: 'ko_KR',
    hostname: 'https://kr.api.blizzard.com',
  },
  tw: {
    defaultLocale: 'zh_TW',
    hostname: 'https://tw.api.blizzard.com',
  },
  us: {
    defaultLocale: 'en_US',
    hostname: 'https://us.api.blizzard.com',
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
  hostname: BlizzardApiDefault<Origins>['hostname'];
  locale: (typeof _regionLocaleMap)[T][number];
  origin: Origins;
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
  locale?: (typeof _regionLocaleMap)[typeof origin][number],
): BlizzardApi<typeof origin> {
  const endpoint = endpoints[origin];

  return {
    hostname: endpoint.hostname,
    locale: locale ?? endpoint.defaultLocale,
    origin,
  };
}
