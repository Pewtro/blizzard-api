import { z } from 'zod';

export const ModeSchema = z.object({
  name: z.union([
    z.literal('10 Player'),
    z.literal('10 Player (Heroic)'),
    z.literal('25 Player'),
    z.literal('25 Player (Heroic)'),
    z.literal('Heroic'),
    z.literal('Mythic'),
    z.literal('Mythic+ Dungeons'),
    z.literal('Normal'),
    z.literal('Raid Finder'),
  ]),
  type: z.union([
    z.literal('HEROIC'),
    z.literal('LEGACY_10_MAN'),
    z.literal('LEGACY_10_MAN_HEROIC'),
    z.literal('LEGACY_25_MAN'),
    z.literal('LEGACY_25_MAN_HEROIC'),
    z.literal('LFR'),
    z.literal('MYTHIC'),
    z.literal('MYTHIC_KEYSTONE'),
    z.literal('NORMAL'),
  ]),
});
