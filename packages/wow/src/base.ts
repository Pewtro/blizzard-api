export const base = '/data/wow' as const;

export const mediaBase = `${base}/media` as const;

export interface ResponseBase {
  _links: {
    self: {
      href: string;
    };
  };
}

export interface KeyBase {
  key: {
    href: string;
  };
}
