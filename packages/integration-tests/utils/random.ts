import { randomInt } from 'node:crypto';

/**
 * Get a random item from an array.
 * @param items The items to choose from.
 * @returns A random item, or `undefined` when the array is missing or empty.
 */
export const getRandomItem = <T>(items: ReadonlyArray<T> | undefined): T | undefined => {
  if (!items || items.length === 0) {
    return;
  }

  return items[randomInt(items.length)];
};

/**
 * Get a random sample of up to `count` unique items from an array.
 * @param items The items to choose from.
 * @param count The maximum number of items to return.
 * @returns A new array containing up to `count` random items.
 */
export const getRandomSample = <T>(items: ReadonlyArray<T> | undefined, count: number): Array<T> => {
  if (!items || items.length === 0) {
    return [];
  }

  const sampleSize = Math.min(count, items.length);
  const shuffled = [...items];

  for (let index = 0; index < sampleSize; index++) {
    const swapIndex = randomInt(index, shuffled.length);
    const current = shuffled[index]!;
    shuffled[index] = shuffled[swapIndex]!;
    shuffled[swapIndex] = current;
  }

  return shuffled.slice(0, sampleSize);
};
