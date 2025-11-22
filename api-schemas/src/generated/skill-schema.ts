import { z } from 'zod';

export const SkillSchema = z.object({
  description: z.string(),
  descriptionHtml: z.string(),
  flavorText: z.union([z.any(), z.string()]).optional(),
  icon: z.string(),
  level: z.number(),
  name: z.string(),
  slug: z.string(),
  tooltipUrl: z.string(),
});
