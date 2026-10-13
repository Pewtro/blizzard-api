import { describe, expect, test } from 'vitest';
import type { ClientOptions } from './types';
import { clampMaxAttempts, getRetryOptions, validateClientOptions } from './utilities';

const base: ClientOptions = { key: 'key', origin: 'eu', secret: 'secret' };

describe('clampMaxAttempts', () => {
  test('should default to three attempts', () => {
    expect(clampMaxAttempts()).toBe(3);
  });

  test.each([
    { expected: 1, maxAttempts: 0 },
    { expected: 3, maxAttempts: NaN },
    { expected: 3, maxAttempts: Infinity },
    { expected: 1, maxAttempts: 1 },
    { expected: 2, maxAttempts: 2.9 },
    { expected: 1, maxAttempts: -5 },
  ])('should clamp maxAttempts=$maxAttempts to $expected', ({ expected, maxAttempts }) => {
    expect(clampMaxAttempts(maxAttempts)).toBe(expected);
  });
});

describe('getRetryOptions', () => {
  test('should derive the ky retry limit from maxAttempts', () => {
    expect(getRetryOptions(base)).toMatchObject({ limit: 2 });
    expect(getRetryOptions({ ...base, maxAttempts: 5 })).toMatchObject({ limit: 4 });
    expect(getRetryOptions({ ...base, maxAttempts: 1 })).toMatchObject({ limit: 0 });
  });

  test('should retry POST so the token endpoints are covered', () => {
    expect(getRetryOptions(base).methods).toStrictEqual(['get', 'post']);
  });

  test('should apply jitter', () => {
    expect(getRetryOptions(base)).toMatchObject({ jitter: true });
  });

  test('should disable retrying entirely when retryOnRateLimit is false', () => {
    expect(getRetryOptions({ ...base, maxAttempts: 5, retryOnRateLimit: false })).toMatchObject({ limit: 0 });
  });

  test('should let retryOnRateLimit false override kyOptions.retry', () => {
    expect(getRetryOptions({ ...base, kyOptions: { retry: 5 }, retryOnRateLimit: false })).toMatchObject({
      limit: 0,
    });
  });

  test('should merge kyOptions.retry per key instead of replacing the defaults', () => {
    const retry = getRetryOptions({ ...base, kyOptions: { retry: { backoffLimit: 250 } } });

    expect(retry).toMatchObject({ backoffLimit: 250, jitter: true, limit: 2, methods: ['get', 'post'] });
  });

  test('should expand the numeric kyOptions.retry shorthand without dropping the defaults', () => {
    const retry = getRetryOptions({ ...base, kyOptions: { retry: 5 } });

    expect(retry).toMatchObject({ limit: 5, methods: ['get', 'post'] });
  });

  test('should let an explicit kyOptions retry limit win over maxAttempts', () => {
    expect(getRetryOptions({ ...base, kyOptions: { retry: { limit: 1 } }, maxAttempts: 10 })).toMatchObject({
      limit: 1,
    });
  });
});

describe('validateClientOptions', () => {
  const valid = { key: 'key', origin: 'eu' as const, secret: 'secret' };

  test('should accept a complete configuration', () => {
    expect(() => {
      validateClientOptions(valid);
    }).not.toThrow();
  });

  test.each([
    { expected: 'key', options: { ...valid, key: '' } },
    { expected: 'secret', options: { ...valid, secret: '' } },
    { expected: 'origin', options: { ...valid, origin: '' as unknown as 'eu' } },
  ])('should reject a missing $expected', ({ options }) => {
    expect(() => {
      validateClientOptions(options);
    }).toThrow();
  });
});
