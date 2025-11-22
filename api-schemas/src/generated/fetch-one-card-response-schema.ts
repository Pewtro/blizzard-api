import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const FetchOneCardResponseSchema = z.object({
  artistName: z.string(),
  attack: z.number(),
  cardSetId: z.number(),
  cardTypeId: z.number(),
  classId: z.number(),
  collectible: z.number(),
  cropImage: z.string(),
  flavorText: z.union([z.string(), __typeSchema]),
  health: z.number(),
  id: z.number(),
  image: z.union([z.string(), __typeSchema]),
  imageGold: z.union([z.string(), __typeSchema]),
  isZilliaxCosmeticModule: z.boolean(),
  isZilliaxFunctionalModule: z.boolean(),
  keywordIds: z.array(z.number()),
  manaCost: z.number(),
  multiClassIds: z.array(z.number()),
  name: z.union([z.string(), __typeSchema]),
  rarityId: z.number(),
  slug: z.string(),
  text: z.union([z.string(), __typeSchema]),
});
