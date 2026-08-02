import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import type { CharacterClass } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { characterClassResponseSchema, skillResponseSchema } from '../../../generated/schemas/d3';

describe('d3 character-class-and-skill integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches a character class and an associated skill', async ({ expect }) => {
    const classes: Array<CharacterClass> = [
      'barbarian',
      'crusader',
      'demon-hunter',
      'monk',
      'necromancer',
      'witch-doctor',
      'wizard',
    ];
    const classSkillMap = new Map<CharacterClass, Array<string>>([
      ['barbarian', ['bash', 'cleave', 'frenzy', 'hammer-of-the-ancients', 'rend', 'seismic-slam']],
      ['crusader', ['blessed-shield', 'condemn', 'shield-bash', 'shield-glare']],
      ['demon-hunter', ['caltrops', 'chakram', 'hungering-arrow', 'impale', 'rain-of-vengeance']],
      ['monk', ['dashing-strike', 'fists-of-thunder', 'lashing-tail-kick', 'wave-of-light']],
      ['necromancer', ['corpse-explosion', 'decrepify', 'frailty', 'siphon-blood']],
      ['witch-doctor', ['big-bad-voodoo', 'firebats', 'horrify', 'piranhas']],
      ['wizard', ['arcane-orb', 'blizzard', 'disintegrate', 'energy-twister', 'hydra', 'ray-of-frost']],
    ]);
    const classPromises = classes.map(
      async (characterClass) => await client.sendRequest(d3.characterClass(characterClass)),
    );
    const classResponses = await Promise.all(classPromises);
    for (const classResponse of classResponses) {
      const classResponseParsed = characterClassResponseSchema.safeParse(classResponse);
      if (!classResponseParsed.success) {
        console.error('Character class response validation failed:', classResponse?.slug, classResponseParsed.error);
      }
      expect(classResponseParsed.success).toBe(true);

      const skillSlugs = classSkillMap.get(classResponse!.slug);
      // eslint-disable-next-line sonarjs/pseudo-random
      const randomSkillKey = Math.floor(Math.random() * (skillSlugs?.length ?? 0));
      const randomSkillSlug = skillSlugs?.[randomSkillKey ?? 0];
      if (!randomSkillSlug) {
        console.error('No skill slugs found for character class:', classResponse?.slug);
      }
      expect(randomSkillSlug).toBeDefined();

      const skillResponse = await client.sendRequest(d3.skill(classResponse!.slug, randomSkillSlug!));
      const parsedSkillResponse = skillResponseSchema.safeParse(skillResponse);
      if (!parsedSkillResponse.success) {
        console.error(
          'Skill response validation failed:',
          classResponse?.slug,
          randomSkillSlug,
          parsedSkillResponse.error,
        );
      }
      expect(parsedSkillResponse.success).toBe(true);
    }
  });
});
