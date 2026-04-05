# Bot

**Bot** is the core of the SDK, encapsulating different platform APIs into a unified format. Different adapters may extend Bot instances with additional properties and methods.

Methods marked with <badge>abstract</badge> must be implemented by adapter plugins.

## Constructor

### new Bot(ctx, config, platform)

- **ctx:** `Context` context instance
- **config:** `object` adapter configuration
- **platform:** `string` adapter name

## Instance Properties

### bot.ctx

- Type: `Context`

The context instance this Bot belongs to.

### bot.config

- Type: `object`

The configuration used to construct this Bot instance.

<!-- ### bot.sn

- Type: `number`

The login sequence number, unique within the current context. -->

### bot.adapter

- Type: [`Adapter`](./adapter.md)

The [Adapter](./adapter.md) instance this Bot belongs to.

### bot.platform

- Type: `string`

The platform name of this Bot.

### bot.selfId

- Type: `string`

The platform account ID of this Bot. Derived from `bot.user.id`.

### bot.user

- Type: [`User`](../resources/user.md#def-user)

The user information of this Bot.

### bot.status

- Type: [`Status`](../resources/login.md#def-login-status)

The login status of this Bot. Setting this property automatically triggers a `login-updated` event.

### bot.isActive

- Type: `boolean`

Whether this Bot is active. Returns `false` when `status` is `OFFLINE` or `DISCONNECT`, otherwise returns `true`.

<!-- ### bot.sid

- Type: `string`

The composite ID of this Bot, in the format `{platform}:{selfId}`. -->

### bot.internal

- Type: `object`

The internal interface of this Bot, used to access platform-native APIs.

### bot.features

- Type: `string[]`

The list of API methods supported by this Bot.

### bot.hidden

- Type: `boolean`

Whether this Bot is hidden.

<!-- ### bot.error

- Type: `any`

The most recent error encountered by this Bot. Set during `bot.offline()`, cleared during `bot.online()`. -->

<!-- ### bot.callbacks

- Type: `Dict<Function>`

A map of button interaction callbacks. Keys are button IDs, values are callback functions. -->

<!-- ### bot.logger

- Type: `Logger`

The logger instance for this Bot. -->

## Lifecycle

### bot.start()

- Returns: `Promise<void>`

Start the bot. Sets the status to `CONNECT` then calls `adapter.connect()`. If the connection fails, `bot.offline()` is automatically called to record the error.

This method is automatically called when the context is ready. You usually don't need to call it manually.

### bot.stop()

- Returns: `Promise<void>`

Stop the bot. Sets the status to `DISCONNECT` then calls `adapter.disconnect()`, and finally calls `bot.offline()`.

This method is automatically called when the context is disposed. You usually don't need to call it manually.

### bot.online()

Set the bot status to `ONLINE` and clear any error information.

### bot.offline(error?)

- **error:** `Error` error information

Set the bot status to `OFFLINE` and record the error information.

### bot.dispose()

Remove the bot instance. Removes itself from `ctx.bots` and triggers a `login-removed` event.

## Session & Events

### bot.session(event?)

- **event:** `Partial<Event>` event data
- Returns: `Session`

Create a new session instance. Automatically fills in `platform` and `selfId` fields.

### bot.dispatch(session)

- **session:** `Session` session instance

Dispatch a session event. The session will be distributed through the context's event system.

### bot.update(login)

- **login:** [`Login`](../resources/login.md#def-login) login information

Bulk update Bot properties using a Login object. The `status` property is set last to ensure the `login-updated` event is dispatched after all properties are updated.

## Universal API

Universal APIs are implemented by adapters. They are documented in the corresponding resource pages.

- [`bot.createMessage()`](../resources/message.md#api-message-create)
- [`bot.createUpload()`](../advanced/resource.md#api-upload-create)
- [`bot.createDirectChannel()`](../resources/channel.md#api-user-channel-create)
- [`bot.createChannel()`](../resources/channel.md#api-channel-create)
- [`bot.getChannel()`](../resources/channel.md#api-channel-get)
- [`bot.getChannelList()`](../resources/channel.md#api-channel-list)
- [`bot.getChannelIter()`](../resources/channel.md#api-channel-list)
- [`bot.updateChannel()`](../resources/channel.md#api-channel-update)
- [`bot.deleteChannel()`](../resources/channel.md#api-channel-delete)
- [`bot.muteChannel()`](../resources/channel.md#api-channel-mute)
- [`bot.getMessage()`](../resources/message.md#api-message-get)
- [`bot.getMessageList()`](../resources/message.md#api-message-list)
- [`bot.getMessageIter()`](../resources/message.md#api-message-list)
- [`bot.editMessage()`](../resources/message.md#api-message-update)
- [`bot.deleteMessage()`](../resources/message.md#api-message-delete)
- [`bot.createReaction()`](../resources/reaction.md#api-reaction-create)
- [`bot.deleteReaction()`](../resources/reaction.md#api-reaction-delete)
- [`bot.clearReaction()`](../resources/reaction.md#api-reaction-clear)
- [`bot.getReactionList()`](../resources/reaction.md#api-reaction-list)
- [`bot.getReactionIter()`](../resources/reaction.md#api-reaction-list)
- [`bot.getLogin()`](../resources/login.md#api-login-get)
- [`bot.getUser()`](../resources/user.md#api-user-get)
- [`bot.getFriendList()`](../resources/friend.md#api-friend-list)
- [`bot.getFriendIter()`](../resources/friend.md#api-friend-list)
- [`bot.deleteFriend()`](../resources/friend.md#api-friend-delete)
- [`bot.handleFriendRequest()`](../resources/friend.md#api-friend-approve)
- [`bot.getGuild()`](../resources/guild.md#api-guild-get)
- [`bot.getGuildList()`](../resources/guild.md#api-guild-list)
- [`bot.getGuildIter()`](../resources/guild.md#api-guild-list)
- [`bot.handleGuildRequest()`](../resources/guild.md#api-guild-approve)
- [`bot.getGuildMember()`](../resources/member.md#api-guild-member-get)
- [`bot.getGuildMemberList()`](../resources/member.md#api-guild-member-list)
- [`bot.getGuildMemberIter()`](../resources/member.md#api-guild-member-list)
- [`bot.kickGuildMember()`](../resources/member.md#api-guild-member-kick)
- [`bot.muteGuildMember()`](../resources/member.md#api-guild-member-mute)
- [`bot.handleGuildMemberRequest()`](../resources/member.md#api-guild-member-approve)
- [`bot.setGuildMemberRole()`](../resources/role.md#api-guild-member-role-set)
- [`bot.unsetGuildMemberRole()`](../resources/role.md#api-guild-member-role-unset)
- [`bot.getGuildRoleList()`](../resources/role.md#api-guild-role-list)
- [`bot.getGuildRoleIter()`](../resources/role.md#api-guild-role-list)
- [`bot.createGuildRole()`](../resources/role.md#api-guild-role-create)
- [`bot.updateGuildRole()`](../resources/role.md#api-guild-role-update)
- [`bot.deleteGuildRole()`](../resources/role.md#api-guild-role-delete)

The `*Iter()` methods are iterator versions of `*List()` methods, returning an `AsyncIterable` that automatically handles pagination.

## Internal Routes

### bot.defineInternalRoute(path, callback)

- **path:** `string` route path
- **callback:** `(request) => Promise<Response>` route handler
- Returns: `() => void`

Define an internal API route. The path supports parameter matching, e.g., `/foo/:bar`. Returns a dispose function to unregister the route.

### bot.getInternalUrl(path, init?, slash?)

- **path:** `string` path
- **init:** `URLSearchParams | Record<string, any>` query parameters
- **slash:** `boolean` whether to use slash format
- Returns: `string`

Build an internal URL. Default format is `internal:{platform}/{selfId}{path}`. If `slash` is `true`, uses `internal/{platform}/{selfId}{path}`.

<!-- ## Other Methods

### bot.supports(name, session?)

- **name:** `string` API method name
- **session:** `Partial<Session>` session instance
- Returns: `Promise<boolean>`

Check whether the Bot supports a specific API method.

### bot.checkPermission(name, session)

- **name:** `string` permission name
- **session:** `Partial<Session>` session instance
- Returns: `Promise<boolean>`

Check whether the Bot has a specific permission. When `name` starts with `bot.`, delegates to `bot.supports()`.

### bot.toJSON()

- Returns: [`Login`](../resources/login.md#def-login)

Serialize the Bot as a Login object. -->
