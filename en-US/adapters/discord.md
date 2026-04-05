# @satorijs/adapter-discord

## Setup

1. Go to [https://discord.com/developers/applications](https://discord.com/developers/applications), log in and create an application
2. Click "Bot" and create a new bot, save the token from this page (do not disclose it)
3. To invite the bot to your server, click "OAuth2" and check Bot along with the required permissions in the URL generator
4. Open the generated link and select a server you have admin permissions for
5. Use the token above as your bot configuration

## Configuration

### options.token

- Type: `string`

The bot account token.

### options.type

- Type: `'bot' | 'user'`
- Default: `'bot'`

Login type.

### options.intents

- Type: `number`

Gateway intents to subscribe to. This is a positive integer expressed as a bitset, where each bit represents a category of events.

See: [Gateway Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents)

### options.slash

- Type: `boolean`
- Default: `true`

Whether to enable slash commands.
