---
url: /sdk/adapter.md
---
# 适配器 (Adapter)

**适配器 (Adapter)** 负责将特定聊天平台的通信方式转换为 Satori 协议。如果你并不打算编写一个平台实现，你完全可以跳过本章节。

标有 抽象 的方法需要由适配器插件自行实现。

## 类：Adapter

适配器基类。

### new Adapter(ctx)

* **ctx:** `Context` 上下文实例

构造一个适配器实例。

### adapter.bots

* 类型: `Bot[]`

当前适配器下的全部机器人实例。

### adapter.connect(bot) 抽象

* **bot:** [`Bot`](./bot.md) 机器人实例
* 返回值: `Promise<void>`

连接 Bot 所需的操作，将在 `bot.start()` 中被调用。

### adapter.disconnect(bot) 抽象

* **bot:** [`Bot`](./bot.md) 机器人实例
* 返回值: `Promise<void>`

断开 Bot 连接所需的操作，将在 `bot.stop()` 中被调用。

### adapter.fork(ctx, bot)

* **ctx:** `Context` 上下文实例
* **bot:** [`Bot`](./bot.md) 机器人实例

将 Bot 注册到适配器中。设置 `bot.adapter` 并将 Bot 添加到 `adapter.bots` 数组。当上下文被释放时，Bot 将自动从数组中移除。

## 类：Adapter.WsClient

一个用于 WebSocket 通信方式的实用适配器基类。继承自 `Adapter`。

### new WsClient(ctx, bot)

* **ctx:** `Context` 上下文实例
* **bot:** [`Bot`](./bot.md) 机器人实例

创建一个 WsClient 适配器实例。自动将 `bot.adapter` 设置为自身。

### 配置项

WsClient 中的机器人需要接受以下配置项：

```ts
interface WsClientConfig {
  /** 初次连接时的最大重试次数 (默认为 6) */
  retryTimes?: number
  /** 初次连接时的重试时间间隔，单位为毫秒 (默认为 5000) */
  retryInterval?: number
  /** 连接关闭后的重试时间间隔，单位为毫秒 (默认为 60000) */
  retryLazy?: number
}
```

### client.bot

* 类型: [`Bot`](./bot.md)

当前适配器下的机器人实例。

### client.prepare() 抽象

* 返回值: `WebSocket | Promise<WebSocket>`

根据机器人实例生成一个 WebSocket 对象。

### client.accept(socket) 抽象

* **socket:** `WebSocket` WebSocket 实例

WebSocket 连接成功建立后的回调函数。你需要在实现中通过 `bot.online()` 标记机器人上线。
