# @satorijs/adapter-qq

## Setup

1. Go to [QQ Open Platform](https://q.qq.com/) and register an account
2. Create a bot application in "Application Management"
3. Obtain the AppID, Token, and Secret
4. Use the above information as your bot configuration

## Configuration

### options.id

- Type: `string`

The bot ID (AppID).

### options.secret

- Type: `string`

The bot secret (AppSecret).

### options.token

- Type: `string`

The bot token (Token).

### options.type

- Values: private, public

The bot type. `private` for private bots, `public` for public bots.

### options.protocol

- Values: websocket, webhook

The protocol type to use.

### options.sandbox

- Type: `boolean`
- Default: `false`

Whether to enable sandbox mode.

### options.endpoint

- Type: `string`
- Default: `'https://api.sgroup.qq.com/'`

The server address to connect to.

### options.authType

- Type: `'bot' | 'bearer'`
- Default: `'bearer'`

The authentication method.

### options.intents

- Type: `number`

Gateway intents to subscribe to.
