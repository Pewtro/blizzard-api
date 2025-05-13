---
'@blizzard-api/client': minor
---

Add support for passing custom options to the clients internal ky instance both when calling createBlizzardApiClient or when calling sendRequest exposed through the client. This deprecates the old headers parameter on getRequestConfig and sendRequest as it can instead be passed through the options.kyOptions parameter. The old headers parameter will be removed in the next major version.
This change allows for more flexibility and customization of the requests made by the client, as users can now pass any options supported by ky, such as timeout, hooks, and retry options.
