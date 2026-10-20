/**
 * Blizzard API namespaces.
 * @see https://develop.battle.net/documentation/world-of-warcraft/guides/namespaces
 */

/**
 * The type of namespace, e.g. `static`, `dynamic` or `profile`. This is also the retail namespace.
 */
export type NamespaceTypes = 'dynamic' | 'profile' | 'static';

/**
 * The classic versions of World of Warcraft supported by the Blizzard API.
 *
 * - `classic1x` is World of Warcraft Classic (Era)
 * - `classic` is Mists of Pandaria Classic (Progression)
 * - `classicann` is Burning Crusade Classic (Anniversary)
 */
export type ClassicVersions = 'classic1x' | 'classic' | 'classicann';

/**
 * The static namespaces of the classic versions of World of Warcraft.
 */
export type StaticClassicNamespaces = `static-${ClassicVersions}`;

/**
 * The dynamic namespaces of the classic versions of World of Warcraft.
 */
export type DynamicClassicNamespaces = `dynamic-${ClassicVersions}`;

/**
 * The profile namespaces of the classic versions of World of Warcraft.
 */
export type ProfileClassicNamespaces = `profile-${ClassicVersions}`;

/**
 * Every namespace supported by the Blizzard API.
 */
export type BlizzardNamespaces =
  | DynamicClassicNamespaces
  | NamespaceTypes
  | ProfileClassicNamespaces
  | StaticClassicNamespaces;
