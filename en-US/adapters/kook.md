# @satorijs/adapter-kook

## Setup

1. Go to the [Developer Portal](https://developer.kookapp.cn/), select "Bots" and click "New"
2. Choose either Webhook or WebSocket as the connection mode:
    - For Webhook, note the `token` and `verify_token` (do not disclose them) from the page, and use them as bot configuration
    - For WebSocket, you only need the `token` (do not disclose it) as bot configuration

## Basic Options

### options.protocol

- Values: http, ws

The protocol type to use.

### options.token

- Type: `string`

The bot account token.

### options.endpoint

- Type: `string`
- Default: `'https://www.kookapp.cn/api/v3'`

The API endpoint to request.

### options.attachMode

- Type: `'separate' | 'mixed' | 'card'`
- Default: `'separate'`

Controls the behavior when sending messages containing resource elements.

- **separate:** Each resource segment and text between resource segments are sent as separate messages
- **mixed:** When the content contains multiple resource segments or a mix of resources and text, send as a card message; otherwise send the resource segment alone
- **card:** When the content contains resource segments, send as a card message

## HTTP Options

### options.verifyToken

- Type: `string`

The bot account verification token.

### options.path

- Type: `string`
- Default: `'/kook'`

The path the server listens on.
