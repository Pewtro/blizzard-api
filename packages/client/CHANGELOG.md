# @blizzard-api/client

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
