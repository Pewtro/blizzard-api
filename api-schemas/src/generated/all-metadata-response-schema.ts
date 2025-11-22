import { z } from 'zod';
import { GameModeSchema } from './game-mode-schema';
import { ClassSchema } from './class-schema';
import { KeywordSchema } from './keyword-schema';
import { RaritySchema } from './rarity-schema';
import { SetGroupSchema } from './set-group-schema';
import { SetSchema } from './set-schema';

export const AllMetadataResponseSchema = z.object({
  arenaIds: z.array(z.number()),
  bgGameModes: z.array(GameModeSchema),
  cardBackCategories: z.array(GameModeSchema),
  classes: z.array(ClassSchema),
  filterableFields: z.array(z.string()),
  gameModes: z.array(GameModeSchema),
  keywords: z.array(KeywordSchema),
  mercenaryFactions: z.array(GameModeSchema),
  mercenaryRoles: z.array(GameModeSchema),
  minionTypes: z.array(GameModeSchema),
  numericFields: z.array(z.string()),
  rarities: z.array(RaritySchema),
  setGroups: z.array(SetGroupSchema),
  sets: z.array(SetSchema),
  spellSchools: z.array(GameModeSchema),
  types: z.array(GameModeSchema),
});
