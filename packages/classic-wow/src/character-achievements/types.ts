import type { CharacterAchievementsSummaryResponse as CharacterAchievementsSummaryRetailResponse } from '../../../wow/src/character-achievements/types';

export type { CharacterAchievementStatisticsResponse } from '../../../wow/src/character-achievements/types';

export type CharacterAchievementsSummaryResponse = Omit<CharacterAchievementsSummaryRetailResponse, 'statistics'>;
