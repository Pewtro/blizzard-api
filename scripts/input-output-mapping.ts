import type { InputOutputMapping } from 'ts-to-zod/lib/config';

export const inputOutputMappings: Array<InputOutputMapping> = [
  //Core
  {
    input: '@blizzard-api/core',
    output: '../core',
  },
  //Shared package types
  {
    input: '../shared/types',
    output: './shared',
  },
];
