import { z } from 'zod';

export const RealmSearchParametersSchema = z.object({
  timezone: z
    .union([
      z.any(),
      z.literal('America/Chicago'),
      z.literal('America/Denver'),
      z.literal('America/Los_Angeles'),
      z.literal('America/New_York'),
      z.literal('America/Sao_Paulo'),
      z.literal('Asia/Seoul'),
      z.literal('Australia/Melbourne'),
      z.literal('Europe/Paris'),
    ])
    .optional(),
});
