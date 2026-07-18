---
'@blizzard-api/client': major
---

Remove the deprecated `headers` parameter from `BlizzardApiClient.getRequestConfig` and `BlizzardApiClient.sendRequest`. Custom headers should now be provided exclusively through `kyOptions.headers` in the client options. This removes a redundant, weakly-typed code path and clarifies header precedence.

Migration: replace any third-argument `headers` usage with `kyOptions`.

```ts
// Before
await client.sendRequest(resource, options, { 'X-Custom': 'value' });

// After
await client.sendRequest(resource, { ...options, kyOptions: { headers: { 'X-Custom': 'value' } } });
```
