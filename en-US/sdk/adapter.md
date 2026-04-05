# Adapter

**Adapter** is responsible for converting platform-specific communication into the Satori protocol. If you don't plan to implement a platform adapter, you can skip this section.

Methods marked with <badge>abstract</badge> must be implemented by adapter plugins.

## Class: Adapter

The base adapter class.

### new Adapter(ctx)

- **ctx:** `Context` context instance

Construct an adapter instance.

### adapter.bots

- Type: `Bot[]`

All bot instances managed by this adapter.

### adapter.connect(bot) <badge>abstract</badge>

- **bot:** [`Bot`](./bot.md) bot instance
- Returns: `Promise<void>`

Operations required to connect a Bot, called during `bot.start()`.

### adapter.disconnect(bot) <badge>abstract</badge>

- **bot:** [`Bot`](./bot.md) bot instance
- Returns: `Promise<void>`

Operations required to disconnect a Bot, called during `bot.stop()`.

### adapter.fork(ctx, bot)

- **ctx:** `Context` context instance
- **bot:** [`Bot`](./bot.md) bot instance

Register a Bot with the adapter. Sets `bot.adapter` and adds the Bot to the `adapter.bots` array. The Bot is automatically removed from the array when the context is disposed.

## Class: Adapter.WsClient

A utility adapter base class for WebSocket communication. Extends `Adapter`.

### new WsClient(ctx, bot)

- **ctx:** `Context` context instance
- **bot:** [`Bot`](./bot.md) bot instance

Create a WsClient adapter instance. Automatically sets `bot.adapter` to itself.

### Configuration

Bots using WsClient must accept the following configuration:

```ts
interface WsClientConfig {
  /** Maximum number of retries on initial connection (default: 6) */
  retryTimes?: number
  /** Retry interval on initial connection in milliseconds (default: 5000) */
  retryInterval?: number
  /** Retry interval after connection closes in milliseconds (default: 60000) */
  retryLazy?: number
}
```

### client.bot

- Type: [`Bot`](./bot.md)

The bot instance managed by this adapter.

### client.prepare() <badge>abstract</badge>

- Returns: `WebSocket | Promise<WebSocket>`

Create a WebSocket object based on the bot instance.

### client.accept(socket) <badge>abstract</badge>

- **socket:** `WebSocket` WebSocket instance

Callback invoked after a WebSocket connection is successfully established. You should call `bot.online()` in your implementation to mark the bot as online.
