# 会话 (Session)

**会话 (Session)** 是对事件的封装，包含了事件的所有信息以及触发事件的 Bot 实例。事件监听器的回调函数将会收到一个 Session 实例作为参数。

## 构造函数

### new Session(bot, event)

- **bot:** [`Bot`](./bot.md) 机器人实例
- **event:** `Partial<Event>` 事件数据

创建一个新的会话实例。`selfId`, `platform` 和 `timestamp` 会自动从 Bot 中填充默认值。

::: tip
通常不需要手动构造 Session，而是通过 [`bot.session()`](./bot.md#bot-session-event) 创建。
:::

## 实例属性

### session.sn

- 类型: `number`

会话的序列号，在当前上下文中唯一。

### session.bot

- 类型: [`Bot`](./bot.md)

触发事件的 Bot 实例。

### session.event

- 类型: `Event`

原始的事件对象，包含事件的全部信息。

### session.locales

- 类型: `string[]`

当前会话的语言偏好列表。

## 事件访问器

以下属性是对 `session.event` 中字段的快捷访问，可读可写。

### session.type

- 类型: `string`

事件类型，派生自 `event.type`。

### session.selfId

- 类型: `string`

机器人的平台账号，派生自 `event.selfId`。

### session.platform

- 类型: `string`

事件所属的平台名称，派生自 `event.platform`。

### session.timestamp

- 类型: `number`

事件的时间戳，派生自 `event.timestamp`。

### session.userId

- 类型: `string`

触发事件的用户 ID，派生自 `event.user.id`。

### session.channelId

- 类型: `string`

事件所在的频道 ID，派生自 `event.channel.id`。

### session.channelName

- 类型: `string`

事件所在的频道名称，派生自 `event.channel.name`。

### session.guildId

- 类型: `string`

事件所在的群组 ID，派生自 `event.guild.id`。

### session.guildName

- 类型: `string`

事件所在的群组名称，派生自 `event.guild.name`。

### session.messageId

- 类型: `string`

事件关联的消息 ID，派生自 `event.message.id`。

### session.operatorId

- 类型: `string`

事件的操作者 ID，派生自 `event.operator.id`。

### session.roleId

- 类型: `string`

事件关联的角色 ID，派生自 `event.role.id`。

### session.quote

- 类型: [`Message`](../resources/message.md#def-message)

引用的消息，派生自 `event.message.quote`。

### session.referrer

- 类型: `any`

平台上下文信息，用于被动请求场景。派生自 `event.referrer`。

## 计算属性

### session.isDirect

- 类型: `boolean`

当前会话是否为私聊。当 `event.channel.type` 为 `DIRECT` 时返回 `true`。

### session.content

- 类型: `string`

消息内容的字符串形式。读取时将 `event.message.elements` 序列化为字符串；设置时将字符串解析为消息元素，并自动提取 `quote` 元素。

### session.elements

- 类型: `Element[]`

消息的元素数组，派生自 `event.message.elements`。

### session.author

<!-- - 类型: `object`

合并了 `event.user` 和 `event.member` 信息的对象，包含以下字段：

- 来自 `User` 的全部字段
- 来自 `GuildMember` 的全部字段
- `userId`: 等同于 `user.id`
- `username`: 等同于 `user.name`
- `nickname`: 等同于 `member.name` -->

<!-- ## 组合 ID

以下属性提供了跨平台唯一的组合标识符。

### session.uid

- 类型: `string`

用户的组合 ID，格式为 `{platform}:{userId}`。

### session.cid

- 类型: `string`

频道的组合 ID，格式为 `{platform}:{channelId}`。

### session.gid

- 类型: `string`

群组的组合 ID，格式为 `{platform}:{guildId}`。

### session.sid

- 类型: `string`

机器人的组合 ID，格式为 `{platform}:{selfId}`。

### session.fid

- 类型: `string`

频道内用户的组合 ID，格式为 `{platform}:{channelId}:{userId}`。 -->

## 实例方法

### session.setInternal(type, data)

- **type:** `string` 内部事件类型
- **data:** `any` 内部事件数据

设置内部事件信息。将 `_type` 和 `_data` 写入事件对象，并将 `data` 挂载到 `session[type]` 上。

### session.transform(elements)

- **elements:** `Element[]` 消息元素
- 返回值: `Promise<Element[]>`

对消息元素进行组件转换。递归地将自定义组件替换为其渲染结果。
