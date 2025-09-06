# @blizzard-api/client

## 2.2.2

### Patch Changes

- 30bcb8e: Update ky to 1.10.0
- 242e18d: Update ky to 1.9.0

## 2.2.1

### Patch Changes

- e583dd9: Update ky to 1.8.2 fixing an issue in older versions of Safari

## 2.2.0

### Minor Changes

- 8dc484a: Add support for passing custom options to the clients internal ky instance both when calling createBlizzardApiClient or when calling sendRequest exposed through the client. This deprecates the old headers parameter on getRequestConfig and sendRequest as it can instead be passed through the options.kyOptions parameter. The old headers parameter will be removed in the next major version.
  This change allows for more flexibility and customization of the requests made by the client, as users can now pass any options supported by ky, such as timeout, hooks, and retry options.
- 8dc484a: Remove the unnecessary IBlizzardApiClient interface that only held partial information about the functions implemented in the BlizzardApiClient class

### Patch Changes

- a96da45: Fix a rare intermittent issue where the client would think the body had already been consumed
- Updated dependencies [eea4060]
  - @blizzard-api/core@2.1.1

## 2.1.3

### Patch Changes

- 08da205: Update ky to 1.8.1

## 2.1.2

### Patch Changes

- ff46adf: Update ky to 1.8.0 fixing a few memory leaks caused by shared abort signals and for cloning the body for retry

## 2.1.1

### Patch Changes

- Updated dependencies [3faeb2c]
  - @blizzard-api/core@2.1.0

## 2.1.0

### Minor Changes

- 2b2dd6f: Replace axios with ky that uses native Fetch under the hood.

  This means that response bodies should no longer be accessed through `data` property, but they are instead directly available. For the remainder of v2, the `data` property will exist for backwards compatability, but `data` has been marked as depreacted.

## 2.0.3

### Patch Changes

- 9b4245b: Improve JSDoc for a large amount of interfaces, types or functions
- Updated dependencies [9b4245b]
  - @blizzard-api/core@2.0.2

## 2.0.2

### Patch Changes

- 6f509f3: Update axios to 1.7.9

## 2.0.1

### Patch Changes

- b27c9e9: Update axios to 1.7.8
- 36584d8: Sort types, functions and more - has no impact on consumers of the library
- Updated dependencies [36584d8]
  - @blizzard-api/core@2.0.1

## 2.0.0

### Major Changes

- 2d2e2c1: This package now ships with ESM-only. If you need ESM and CJS you can use the previous major release that was a dual-release. Node v22 also ships with native interoperability between the two that you can utilise

### Minor Changes

- 443e856: Broaden the allowed node versions

### Patch Changes

- Updated dependencies [443e856]
- Updated dependencies [2d2e2c1]
  - @blizzard-api/core@2.0.0

## 1.0.10

### Patch Changes

- c03c028: Export client types explicitly as types
- Updated dependencies [6587647]
  - @blizzard-api/core@1.2.1

## 1.0.9

### Patch Changes

- 2e0d6aa: Fix an issue where Electron would override global setTimeout that didn't have access to unref

## 1.0.8

### Patch Changes

- d8e196a: Update axios to 1.7.7
- c067788: Update axios to 1.7.5

## 1.0.7

### Patch Changes

- 56a9978: Update axios to 1.7.4 to address [CVE-2024-39338](https://github.com/advisories/GHSA-8hc4-vh64-cxmj).

## 1.0.6

### Patch Changes

- Updated dependencies [23c193f]
  - @blizzard-api/core@1.2.0

## 1.0.5

### Patch Changes

- 7f3b196: Update axios to 1.7.3
- Updated dependencies [3330b07]
  - @blizzard-api/core@1.1.2

## 1.0.4

### Patch Changes

- 0fb2bed: Add default exports and improve the README documentation slightly

## 1.0.3

### Patch Changes

- e45ef2a: Improve dual publishing of cjs and esm, as well as improve treeshaking through tsup
- e18d2b9: Sort exported types alphabetically for a better overview
- Updated dependencies [e45ef2a]
- Updated dependencies [e18d2b9]
  - @blizzard-api/core@1.1.1

## 1.0.2

### Patch Changes

- 3fd4327: Update axios to 1.7.2

## 1.0.1

### Patch Changes

- Updated dependencies [cfdc20b]
  - @blizzard-api/core@1.1.0

## 1.0.0

### Major Changes

- a93793a: Release 1.0.0

### Patch Changes

- Updated dependencies [a93793a]
  - @blizzard-api/core@1.0.0

## 0.2.4

### Patch Changes

- Updated dependencies [4cfce23]
  - @blizzard-api/core@0.1.2

## 0.2.3

### Patch Changes

- 40fc42f: Add JSDoc comments on types, interfaces, classes and functions
- 6210223: Update compatible node versions to include v22
- Updated dependencies [f81101e]
- Updated dependencies [6210223]
  - @blizzard-api/core@0.1.1

## 0.2.2

### Patch Changes

- 738d078: Invert how the sendRequest function throws errors to make it a bit easier to read

## 0.2.1

### Patch Changes

- cd9546b: Improve error handling of the sendRequest method of the client

## 0.2.0

### Minor Changes

- af3ffd4: Upgrade client to consume new resource from core and add new tests for searchable endpoints

### Patch Changes

- Updated dependencies [884b180]
  - @blizzard-api/core@0.1.0

## 0.1.0

### Minor Changes

- f169758: Replaced how to create a client.
  The new way is to call `createBlizzardApiClient` which returns a promisified client. This has built in token refresh functionality. If you want to do something additional on every token refresh you can pass in a second parameter to `createBlizzardApiClient` with the desired functionality. If you want to opt out of automated token refresh, you can pass in `false` as the second parameter instead.

## 0.0.9

### Patch Changes

- 3b8d33d: Rename getEndpoint to the new getBlizzardApi from core
- Updated dependencies [83ce05c]
  - @blizzard-api/core@0.0.9

## 0.0.8

### Patch Changes

- Updated dependencies [31485bc]
  - @blizzard-api/core@0.0.8

## 0.0.7

### Patch Changes

- Updated dependencies [9c3e6bf]
  - @blizzard-api/core@0.0.7

## 0.0.6

### Patch Changes

- 8340154: Add a few more tests to the client for newly added wow endpoints
- e9742a6: Add resource parameters to the api call by default
- Updated dependencies [10b71a6]
- Updated dependencies [0ddc74e]
  - @blizzard-api/core@0.0.6

## 0.0.5

### Patch Changes

- 3d23667: Update types in client after updates in core, and expose the types
- Updated dependencies [7388a3b]
  - @blizzard-api/core@0.0.5

## 0.0.4

### Patch Changes

- 8815648: Update client using new package versions
- Updated dependencies [3d9b073]
  - @blizzard-api/core@0.0.4

## 0.0.3

### Patch Changes

- 2d6dbeb: Improve client functionality and dogfood @blizzard-api/wow
- Updated dependencies [06dc41d]
  - @blizzard-api/core@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [00c0830]
  - @blizzard-api/core@0.0.2

## 0.0.1

### Patch Changes

- Updated dependencies [11fc22d]
  - @blizzard-api/core@0.0.1
