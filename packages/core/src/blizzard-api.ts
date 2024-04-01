export type Origins = 'us' | 'eu' | 'kr' | 'tw';
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
  | 'multi';

const locales = {
  us: ['en_US', 'es_MX', 'pt_BR', 'multi'],
  eu: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
  kr: ['ko_KR', 'en_GB', 'en_US', 'multi'],
  tw: ['zh_TW', 'en_GB', 'en_US', 'multi'],
} as const satisfies Record<Origins, Array<Locales>>;

interface BlizzardApiDefault<T extends Origins> {
  hostname: `https://${T}.api.blizzard.com`;
  defaultLocale: (typeof locales)[T][number];
}

interface BlizzardApiByRegion {
  us: BlizzardApiDefault<'us'>;
  eu: BlizzardApiDefault<'eu'>;
  kr: BlizzardApiDefault<'kr'>;
  tw: BlizzardApiDefault<'tw'>;
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
};

interface BlizzardApi<T extends Origins> {
  origin: Origins;
  locale: (typeof locales)[T][number];
  hostname: BlizzardApiDefault<Origins>['hostname'];
}

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