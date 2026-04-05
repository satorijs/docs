# Session

**Session** is a wrapper around events, containing all event information along with the Bot instance that triggered the event. Event listener callbacks receive a Session instance as their argument.

## Constructor

### new Session(bot, event)

- **bot:** [`Bot`](./bot.md) bot instance
- **event:** `Partial<Event>` event data

Create a new session instance. `selfId`, `platform`, and `timestamp` are automatically populated from the Bot.

::: tip
You usually don't need to construct a Session manually. Use [`bot.session()`](./bot.md#bot-session-event) instead.
:::

## Instance Properties

### session.sn

- Type: `number`

The session sequence number, unique within the current context.

### session.bot

- Type: [`Bot`](./bot.md)

The Bot instance that triggered the event.

### session.event

- Type: `Event`

The original event object containing all event information.

### session.locales

- Type: `string[]`

The language preference list for the current session.

## Event Accessors

The following properties provide shortcut access to fields in `session.event`. They are readable and writable.

### session.type

- Type: `string`

The event type, derived from `event.type`.

### session.selfId

- Type: `string`

The bot's platform account ID, derived from `event.selfId`.

### session.platform

- Type: `string`

The platform name of the event, derived from `event.platform`.

### session.timestamp

- Type: `number`

The event timestamp, derived from `event.timestamp`.

### session.userId

- Type: `string`

The ID of the user who triggered the event, derived from `event.user.id`.

### session.channelId

- Type: `string`

The channel ID of the event, derived from `event.channel.id`.

### session.channelName

- Type: `string`

The channel name of the event, derived from `event.channel.name`.

### session.guildId

- Type: `string`

The guild ID of the event, derived from `event.guild.id`.

### session.guildName

- Type: `string`

The guild name of the event, derived from `event.guild.name`.

### session.messageId

- Type: `string`

The message ID associated with the event, derived from `event.message.id`.

### session.operatorId

- Type: `string`

The operator ID of the event, derived from `event.operator.id`.

### session.roleId

- Type: `string`

The role ID associated with the event, derived from `event.role.id`.

### session.quote

- Type: [`Message`](../resources/message.md#def-message)

The quoted message, derived from `event.message.quote`.

### session.referrer

- Type: `any`

Platform context information for passive request scenarios. Derived from `event.referrer`.

## Computed Properties

### session.isDirect

- Type: `boolean`

Whether the current session is a direct message. Returns `true` when `event.channel.type` is `DIRECT`.

### session.content

- Type: `string`

The string representation of the message content. Reading serializes `event.message.elements` to a string; setting parses the string into message elements and automatically extracts the `quote` element.

### session.elements

- Type: `Element[]`

The message element array, derived from `event.message.elements`.

### session.author

<!-- - Type: `object`

An object merging `event.user` and `event.member` information, containing the following fields:

- All fields from `User`
- All fields from `GuildMember`
- `userId`: equivalent to `user.id`
- `username`: equivalent to `user.name`
- `nickname`: equivalent to `member.name` -->

<!-- ## Composite IDs

The following properties provide cross-platform unique composite identifiers.

### session.uid

- Type: `string`

User composite ID, in the format `{platform}:{userId}`.

### session.cid

- Type: `string`

Channel composite ID, in the format `{platform}:{channelId}`.

### session.gid

- Type: `string`

Guild composite ID, in the format `{platform}:{guildId}`.

### session.sid

- Type: `string`

Bot composite ID, in the format `{platform}:{selfId}`.

### session.fid

- Type: `string`

Per-channel user composite ID, in the format `{platform}:{channelId}:{userId}`. -->

## Instance Methods

### session.setInternal(type, data)

- **type:** `string` internal event type
- **data:** `any` internal event data

Set internal event information. Writes `_type` and `_data` to the event object and mounts `data` onto `session[type]`.

### session.transform(elements)

- **elements:** `Element[]` message elements
- Returns: `Promise<Element[]>`

Transform message elements through the component system. Recursively replaces custom components with their rendered results.
