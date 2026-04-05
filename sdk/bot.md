---
url: /sdk/bot.md
---
# 机器人 (Bot)

**机器人 (Bot)** 是 SDK 的核心，它将不同平台的 API 封装成统一的格式。而不同的适配器也可以自行扩展 Bot 实例上的属性和方法。

标有 抽象 的方法需要由适配器插件自行实现。

## 构造函数

### new Bot(ctx, config, platform)

* **ctx:** `Context` 上下文实例
* **config:** `object` 适配器配置
* **platform:** `string` 适配器名称

## 实例属性

### bot.ctx

* 类型: `Context`

当前 Bot 所在的上下文实例。

### bot.config

* 类型: `object`

构造 Bot 实例时所使用的配置项。

### bot.adapter

* 类型: [`Adapter`](./adapter.md)

当前 Bot 所在的 [Adapter](./adapter.md) 实例。

### bot.platform

* 类型: `string`

当前 Bot 的平台名称。

### bot.selfId

* 类型: `string`

当前 Bot 的平台账号。派生自 `bot.user.id`。

### bot.user

* 类型: [`User`](../resources/user.md#def-user)

当前 Bot 的用户信息。

### bot.status

* 类型: [`Status`](../resources/login.md#def-login-status)

当前 Bot 的登录状态。设置此属性时将自动触发 `login-updated` 事件。

### bot.isActive

* 类型: `boolean`

当前 Bot 是否处于活跃状态。当 `status` 为 `OFFLINE` 或 `DISCONNECT` 时返回 `false`，否则返回 `true`。

### bot.internal

* 类型: `object`

当前机器人的内部接口，用于访问平台原生 API。

### bot.features

* 类型: `string[]`

当前 Bot 支持的 API 方法列表。

### bot.hidden

* 类型: `boolean`

当前 Bot 是否隐藏。

## 生命周期

### bot.start()

* 返回值: `Promise<void>`

启动机器人。将状态设置为 `CONNECT` 后调用 `adapter.connect()`。如果连接失败，将自动调用 `bot.offline()` 记录错误。

这个方法会在上下文就绪时自动被调用，通常你不需要手动调用它。

### bot.stop()

* 返回值: `Promise<void>`

停止机器人的运行。将状态设置为 `DISCONNECT` 后调用 `adapter.disconnect()`，最后调用 `bot.offline()`。

这个方法会在上下文被释放时自动被调用，通常你不需要手动调用它。

### bot.online()

修改机器人的状态为 `ONLINE`，并清除错误信息。

### bot.offline(error?)

* **error:** `Error` 错误信息

修改机器人的状态为 `OFFLINE`，并记录错误信息。

### bot.dispose()

移除机器人实例。从 `ctx.bots` 中移除自身并触发 `login-removed` 事件。

## 会话与事件

### bot.session(event?)

* **event:** `Partial<Event>` 事件数据
* 返回值: `Session`

创建一个新的会话实例。会自动填充 `platform` 和 `selfId` 字段。

### bot.dispatch(session)

* **session:** `Session` 会话实例

触发一个会话事件。会话将通过上下文的事件系统进行分发。

### bot.update(login)

* **login:** [`Login`](../resources/login.md#def-login) 登录信息

使用 Login 对象批量更新 Bot 属性。`status` 属性将最后被设置，以确保 `login-updated` 事件在所有属性更新后触发。

## 通用 API

通用 API 由适配器实现。它们会在相应的资源页面中介绍。

* [`bot.createMessage()`](../resources/message.md#api-message-create)
* [`bot.createUpload()`](../advanced/resource.md#api-upload-create)
* [`bot.createDirectChannel()`](../resources/channel.md#api-user-channel-create)
* [`bot.createChannel()`](../resources/channel.md#api-channel-create)
* [`bot.getChannel()`](../resources/channel.md#api-channel-get)
* [`bot.getChannelList()`](../resources/channel.md#api-channel-list)
* [`bot.getChannelIter()`](../resources/channel.md#api-channel-list)
* [`bot.updateChannel()`](../resources/channel.md#api-channel-update)
* [`bot.deleteChannel()`](../resources/channel.md#api-channel-delete)
* [`bot.muteChannel()`](../resources/channel.md#api-channel-mute)
* [`bot.getMessage()`](../resources/message.md#api-message-get)
* [`bot.getMessageList()`](../resources/message.md#api-message-list)
* [`bot.getMessageIter()`](../resources/message.md#api-message-list)
* [`bot.editMessage()`](../resources/message.md#api-message-update)
* [`bot.deleteMessage()`](../resources/message.md#api-message-delete)
* [`bot.createReaction()`](../resources/reaction.md#api-reaction-create)
* [`bot.deleteReaction()`](../resources/reaction.md#api-reaction-delete)
* [`bot.clearReaction()`](../resources/reaction.md#api-reaction-clear)
* [`bot.getReactionList()`](../resources/reaction.md#api-reaction-list)
* [`bot.getReactionIter()`](../resources/reaction.md#api-reaction-list)
* [`bot.getLogin()`](../resources/login.md#api-login-get)
* [`bot.getUser()`](../resources/user.md#api-user-get)
* [`bot.getFriendList()`](../resources/friend.md#api-friend-list)
* [`bot.getFriendIter()`](../resources/friend.md#api-friend-list)
* [`bot.deleteFriend()`](../resources/friend.md#api-friend-delete)
* [`bot.handleFriendRequest()`](../resources/friend.md#api-friend-approve)
* [`bot.getGuild()`](../resources/guild.md#api-guild-get)
* [`bot.getGuildList()`](../resources/guild.md#api-guild-list)
* [`bot.getGuildIter()`](../resources/guild.md#api-guild-list)
* [`bot.handleGuildRequest()`](../resources/guild.md#api-guild-approve)
* [`bot.getGuildMember()`](../resources/member.md#api-guild-member-get)
* [`bot.getGuildMemberList()`](../resources/member.md#api-guild-member-list)
* [`bot.getGuildMemberIter()`](../resources/member.md#api-guild-member-list)
* [`bot.kickGuildMember()`](../resources/member.md#api-guild-member-kick)
* [`bot.muteGuildMember()`](../resources/member.md#api-guild-member-mute)
* [`bot.handleGuildMemberRequest()`](../resources/member.md#api-guild-member-approve)
* [`bot.setGuildMemberRole()`](../resources/role.md#api-guild-member-role-set)
* [`bot.unsetGuildMemberRole()`](../resources/role.md#api-guild-member-role-unset)
* [`bot.getGuildRoleList()`](../resources/role.md#api-guild-role-list)
* [`bot.getGuildRoleIter()`](../resources/role.md#api-guild-role-list)
* [`bot.createGuildRole()`](../resources/role.md#api-guild-role-create)
* [`bot.updateGuildRole()`](../resources/role.md#api-guild-role-update)
* [`bot.deleteGuildRole()`](../resources/role.md#api-guild-role-delete)

其中 `*Iter()` 方法是 `*List()` 方法的迭代器版本，返回一个 `AsyncIterable` 对象，会自动处理分页。

## 内部路由

### bot.defineInternalRoute(path, callback)

* **path:** `string` 路由路径
* **callback:** `(request) => Promise<Response>` 路由处理函数
* 返回值: `() => void`

定义一个内部 API 路由。路径支持参数匹配，例如 `/foo/:bar`。返回一个用于取消注册的函数。

### bot.getInternalUrl(path, init?, slash?)

* **path:** `string` 路径
* **init:** `URLSearchParams | Record<string, any>` 查询参数
* **slash:** `boolean` 是否使用斜杠格式
* 返回值: `string`

构建内部 URL。默认格式为 `internal:{platform}/{selfId}{path}`，如果 `slash` 为 `true` 则使用 `internal/{platform}/{selfId}{path}`。
