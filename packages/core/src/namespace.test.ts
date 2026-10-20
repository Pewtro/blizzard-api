import { describe, expect, test } from 'vitest';
import type {
  BlizzardNamespaces,
  ClassicVersions,
  DynamicClassicNamespaces,
  NamespaceTypes,
  ProfileClassicNamespaces,
  StaticClassicNamespaces,
} from './namespace';

describe('BlizzardNamespaces', () => {
  test('should include the retail namespaces', () => {
    const namespaces: Array<BlizzardNamespaces> = ['dynamic', 'profile', 'static'];

    expect(namespaces).toEqual(['dynamic', 'profile', 'static']);
  });

  test('should include the classic era namespaces', () => {
    const namespaces: Array<BlizzardNamespaces> = ['dynamic-classic1x', 'profile-classic1x', 'static-classic1x'];

    expect(namespaces).toEqual(['dynamic-classic1x', 'profile-classic1x', 'static-classic1x']);
  });

  test('should include the classic progression namespaces', () => {
    const namespaces: Array<BlizzardNamespaces> = ['dynamic-classic', 'profile-classic', 'static-classic'];

    expect(namespaces).toEqual(['dynamic-classic', 'profile-classic', 'static-classic']);
  });

  test('should include the classic anniversary namespaces', () => {
    const namespaces: Array<BlizzardNamespaces> = ['dynamic-classicann', 'profile-classicann', 'static-classicann'];

    expect(namespaces).toEqual(['dynamic-classicann', 'profile-classicann', 'static-classicann']);
  });

  test('should combine every namespace type with every classic version', () => {
    const namespaces: Array<BlizzardNamespaces> = [];

    for (const namespaceType of ['dynamic', 'profile', 'static'] satisfies Array<NamespaceTypes>) {
      namespaces.push(namespaceType);

      for (const classicVersion of ['classic1x', 'classic', 'classicann'] satisfies Array<ClassicVersions>) {
        namespaces.push(`${namespaceType}-${classicVersion}`);
      }
    }

    expect(namespaces).toHaveLength(12);
  });
});

describe('classic namespaces', () => {
  test('should resolve the static namespaces of the classic versions', () => {
    const namespaces: Array<StaticClassicNamespaces> = ['static-classic1x', 'static-classic', 'static-classicann'];

    expect(namespaces).toHaveLength(3);
  });

  test('should resolve the dynamic namespaces of the classic versions', () => {
    const namespaces: Array<DynamicClassicNamespaces> = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'];

    expect(namespaces).toHaveLength(3);
  });

  test('should resolve the profile namespaces of the classic versions', () => {
    const namespaces: Array<ProfileClassicNamespaces> = ['profile-classic1x', 'profile-classic', 'profile-classicann'];

    expect(namespaces).toHaveLength(3);
  });
});
