import { z } from 'zod';

export const HeroSchema = z.object({
  artistName: z.union([z.any(), z.string()]),
  cardSetId: z.number(),
  cardTypeId: z.number(),
  classId: z.number(),
  collectible: z.number(),
  cropImage: z.any(),
  flavorText: z.string(),
  health: z.union([z.any(), z.number()]).optional(),
  id: z.number(),
  image: z.string(),
  imageGold: z.string(),
  isZilliaxCosmeticModule: z.boolean(),
  isZilliaxFunctionalModule: z.boolean(),
  manaCost: z.number(),
  multiClassIds: z.array(z.number()),
  name: z.string(),
  parentId: z.number(),
  rarityId: z.union([z.any(), z.number()]),
  slug: z.string(),
  text: z.string(),
});
