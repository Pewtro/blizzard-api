import { z } from 'zod';
import { MercenaryHeroSchema } from './mercenary-hero-schema';

export const CardSchema = z.object({
  artistName: z.union([z.any(), z.string()]),
  attack: z.number(),
  cardSetId: z.number(),
  cardTypeId: z.number(),
  classId: z.union([z.any(), z.number()]),
  collectible: z.number(),
  cropImage: z.union([z.any(), z.string()]),
  flavorText: z.string(),
  health: z.number(),
  id: z.number(),
  image: z.string(),
  imageGold: z.string(),
  isZilliaxCosmeticModule: z.boolean(),
  isZilliaxFunctionalModule: z.boolean(),
  manaCost: z.number(),
  mercenaryHero: MercenaryHeroSchema,
  minionTypeId: z.number(),
  multiClassIds: z.array(z.number()),
  multiTypeIds: z.union([z.any(), z.array(z.number())]).optional(),
  name: z.string(),
  rarityId: z.number(),
  slug: z.string(),
  text: z.string(),
});
