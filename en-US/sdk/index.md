# Overview

Satori provides an official TypeScript SDK for developing cross-platform chat applications.

## Usage

The recommended way to use the SDK is within the [Koishi](https://koishi.chat) framework.

## Core Concepts

<!-- ### Context

`@satorijs/core` re-exports the [Cordis](https://cordis.moe) context and extends it with chat protocol capabilities. The context is the entry point of the entire application, through which you can install plugins, listen to events, and access bot instances. -->

### Bot

[Bot](./bot.md) represents an account on a chat platform. Each Bot instance encapsulates the ability to communicate with a platform and provides a unified API for sending messages, managing guilds, and more.

### Adapter

[Adapter](./adapter.md) is responsible for converting platform-specific communication into the Satori protocol. Each adapter manages one or more Bot instances, handling connections and event dispatching with the platform.

### Session

[Session](./session.md) is a wrapper around events, containing all event information along with the Bot instance that triggered the event. You can use a Session to access event details or reply to messages.

## Events

You can use `ctx.on()` to listen for various events defined in the Satori protocol:

```ts
// Message events
ctx.on('message-created', (session) => {})
ctx.on('message-updated', (session) => {})
ctx.on('message-deleted', (session) => {})

// Guild events
ctx.on('guild-added', (session) => {})
ctx.on('guild-updated', (session) => {})
ctx.on('guild-removed', (session) => {})

// Member events
ctx.on('guild-member-added', (session) => {})
ctx.on('guild-member-updated', (session) => {})
ctx.on('guild-member-removed', (session) => {})

// Login events
ctx.on('login-added', (session) => {})
ctx.on('login-removed', (session) => {})
ctx.on('login-updated', (session) => {})
```

For a complete list of events, see the [protocol documentation](../protocol/events.md).

## Message Elements

Satori uses HTML-like message elements to encode message content. You can use the `h` function to construct message elements:

```ts
import { h } from '@satorijs/core'

// Text message
h.text('Hello, World!')

// Mention a user
h.at(userId)

// Image
h.image(url)

// Combine multiple elements
const content = h('', [
  h.text('Hello, '),
  h.at(userId),
  h.text('!'),
])
```

For a detailed list of message elements, see [Standard Elements](../protocol/elements.md).
