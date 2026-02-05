# @blizzard-api/core

## 3.0.0

### Major Changes

- 7734fe9: Many types have had keys added, removed, made nullable or otherwise edited to better reflect the possible return values of the API. This update is the largest pass of all the response types since the library was first published.
- 71fd204: Update minimum node version to ^20.19.0 || ^22.13.0 || >=24

### Minor Changes

- 06b75d9: Introduce new types for search results for various WoW APIs
- 98cbf93: Add a series of base parameters that can be used when dealing with Blizzard API. These are used throughout the game packages.

## 2.1.1

### Patch Changes

- eea4060: Update the default type of SearchOptions in Resource to Record<string, unknown> as opposed to Record<string, never>

## 2.1.0

### Minor Changes

- 3faeb2c: Add profile-classic1x and profile-classic to BlizzardNamespaces

## 2.0.2

### Patch Changes

- 9b4245b: Improve JSDoc for a large amount of interfaces, types or functions

## 2.0.1

### Patch Changes

- 36584d8: Sort types, functions and more - has no impact on consumers of the library

## 2.0.0

### Major Changes

- 2d2e2c1: This package now ships with ESM-only. If you need ESM and CJS you can use the previous major release that was a dual-release. Node v22 also ships with native interoperability between the two that you can utilise

### Minor Changes

- 443e856: Broaden the allowed node versions

## 1.2.1

### Patch Changes

- 6587647: Explicitly export namespace, resource and search types as types

## 1.2.0

### Minor Changes

- 23c193f: Add ProtectedResource type that is meant to be used as a helper to reduce generics passed along to Resource

## 1.1.2

### Patch Changes

- 3330b07: Rename internal locales to \_regionLocaleMap to better indicate it's a private value used internally and give it a more fitting name

## 1.1.1

### Patch Changes

- e45ef2a: Improve dual publishing of cjs and esm, as well as improve treeshaking through tsup
- e18d2b9: Sort exported types alphabetically for a better overview

## 1.1.0

### Minor Changes

- cfdc20b: Add support for chinese variant of the APIs

## 1.0.0

### Major Changes

- a93793a: Release 1.0.0

## 0.1.2

### Patch Changes

- 4cfce23: Add nullable boolean resultCountCapped to the base SearchResponse value which will reflect in all search resources

## 0.1.1

### Patch Changes

- f81101e: Add JSDoc comments on types, interfaces and functions
- 6210223: Update compatible node versions to include v22

## 0.1.0

### Minor Changes

- 884b180: Add search options to the core library

## 0.0.9

### Patch Changes

- 83ce05c: Rename getEndpoint to getBlizzardApi to better indicate it's purpose

## 0.0.8

### Patch Changes

- 31485bc: Add \_responseType as an internal type used for inference

## 0.0.7

### Patch Changes

- 9c3e6bf: Export more functions and types

## 0.0.6

### Patch Changes

- 10b71a6: Add parameters type to Resource for use when defining optional parameters within each flavour
- 0ddc74e: Remove sea origin as it is no longer present in the blizzard API

## 0.0.5

### Patch Changes

- 7388a3b: Cleanup types, remove unused types and enable marking a Resource as protected

## 0.0.4

### Patch Changes

- 3d9b073: Update Resource type to better represent usage across the library

## 0.0.3

### Patch Changes

- 06dc41d: Update @blizzard-ap/core with better types and remove some unused ones

## 0.0.2

### Patch Changes

- 00c0830: Add BlizzardNamespaces, ClientOptions, Resource, ResourceResponse, ResourceOptions, ResourceInterface,ProtectedResourceOptions and ProtectedResourceInterface exports.

## 0.0.1

### Patch Changes

- 11fc22d: Initial release of @blizzard-api/core so that other libraries can depend on it.
