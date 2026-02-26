# Meta <badge type="warning">Experimental</badge>

::: warning
This is an experimental feature and may change in future versions.
:::

The meta object contains information related to the SDK's state that is not specific to any particular login, such as [proxy routes](../advanced/resource.md#proxy-route).

Meta information is obtained and updated through the following mechanisms:

- With WebSocket event delivery, the `READY` signal provides the complete meta information;
- With WebHook event delivery, the application should obtain meta information via the API on startup;
- After startup, the application continuously receives `META` signals and login events to update the meta information.

Note that the `META` signal does not reflect login state changes and will not include the `logins` field.

The meta API is served at `/{version}/meta/{method}`. Communication is similar to the [HTTP API](../protocol/api.md), but does not require the `Satori-Platform` or `Satori-User-ID` headers.

## Definitions

### Meta

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `logins` | [`Login[]`](../resources/login.md) | login information |
| `proxy_urls` | string[] | list of [proxy routes](../advanced/resource.md#proxy-route) |

## API

### Get Meta

> <badge>POST</badge>`/meta` {.route}

Returns a [Meta](#meta) object.

### Create WebHook <badge>Optional</badge>

> <badge>POST</badge>`/meta/webhook.create` {.route}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `url` | string | WebHook URL |
| `token` | string? | authentication token |

### Delete WebHook <badge>Optional</badge>

> <badge>POST</badge>`/meta/webhook.delete` {.route}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `url` | string | WebHook URL |
