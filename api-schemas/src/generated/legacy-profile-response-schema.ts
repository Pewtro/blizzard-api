import { z } from 'zod';
import { AchievementsSchema } from './achievements-schema';
import { CampaignSchema } from './campaign-schema';
import { CareerSchema } from './career-schema';
import { IconSchema } from './icon-schema';
import { RewardsSchema } from './rewards-schema';
import { SeasonSchema } from './season-schema';
import { SwarmLevelsSchema } from './swarm-levels-schema';

export const LegacyProfileResponseSchema = z.object({
  achievements: AchievementsSchema,
  campaign: CampaignSchema,
  career: CareerSchema,
  clanName: z.string(),
  clanTag: z.string(),
  displayName: z.string(),
  id: z.string(),
  portrait: IconSchema,
  profilePath: z.string(),
  realm: z.number(),
  rewards: RewardsSchema,
  season: SeasonSchema,
  swarmLevels: SwarmLevelsSchema,
});
