---
url: /sdk.md
---
# 总览

Satori 提供了官方 TypeScript SDK，你可以使用它来开发跨平台的聊天应用。

## 基本用法

目前推荐的使用方式是在 [Koishi](https://koishi.chat) 框架中使用。

## 核心概念

### 机器人 (Bot)

[Bot](./bot.md) 代表一个聊天平台上的账号。每个 Bot 实例封装了与平台通信的能力，并提供了统一的 API 用于发送消息、管理群组等操作。

### 适配器 (Adapter)

[Adapter](./adapter.md) 负责将特定平台的通信方式转换为 Satori 协议。每个适配器管理一个或多个 Bot 实例，处理与平台之间的连接和事件分发。

### 会话 (Session)

[Session](./session.md) 是对事件的封装，包含了事件的所有信息以及触发事件的 Bot 实例。你可以通过 Session 获取事件的详细信息，也可以通过它来回复消息。

## 事件

你可以通过 `ctx.on()` 监听 Satori 协议中定义的各种事件：

```ts
// 消息事件
ctx.on('message-created', (session) => {})
ctx.on('message-updated', (session) => {})
ctx.on('message-deleted', (session) => {})

// 群组事件
ctx.on('guild-added', (session) => {})
ctx.on('guild-updated', (session) => {})
ctx.on('guild-removed', (session) => {})

// 成员事件
ctx.on('guild-member-added', (session) => {})
ctx.on('guild-member-updated', (session) => {})
ctx.on('guild-member-removed', (session) => {})

// 登录事件
ctx.on('login-added', (session) => {})
ctx.on('login-removed', (session) => {})
ctx.on('login-updated', (session) => {})
```

完整的事件列表请参考 [协议文档](../protocol/events.md)。

## 消息元素

Satori 使用类 HTML 的消息元素来编码消息内容。你可以使用 `h` 函数来构造消息元素：

```ts
import { h } from '@satorijs/core'

// 文本消息
h.text('Hello, World!')

// 提及用户
h.at(userId)

// 图片
h.image(url)

// 组合多个元素
const content = h('', [
  h.text('Hello, '),
  h.at(userId),
  h.text('!'),
])
```

详细的消息元素列表请参考 [标准元素](../protocol/elements.md)。
