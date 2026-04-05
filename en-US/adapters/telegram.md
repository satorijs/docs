# @satorijs/adapter-telegram

## Setup

1. Search for @botfather (with the official verification badge) and open the chat
2. Send `/start` to see the menu, which you can use to configure your bot
3. To create a bot, click `/newbot` and follow the prompts
4. Use `/setprivacy` to disable Privacy Mode (set to DISABLED, otherwise the bot can only receive specific messages)
5. After creation, you'll receive a token (do not disclose it). Use it as your bot configuration

Reference: <https://core.telegram.org/bots>

::: tip
If your bot cannot receive messages without `/` after startup, Privacy Mode is likely not disabled. If it still doesn't work after disabling, try removing the bot from the group and re-adding it.
:::

## Bot Options

### options.protocol

- Values: server, polling

The protocol type to use.

### options.token

- Type: `string`

The bot account token.

### options.slash

- Type: `boolean`
- Default: `true`

Whether to enable slash commands.

### options.files.endpoint

- Type: `string`

The endpoint for file requests.

### options.files.local

- Type: `boolean`
- Default: `false`

Whether to enable [Telegram Bot API](https://github.com/tdlib/telegram-bot-api) local mode.

## HTTP Options

### options.path

- Type: `string`
- Default: `'/telegram'`

The path the server listens on.

### options.selfUrl

- Type: `string`

The public URL of the server.
