# @satorijs/adapter-lark

## Setup

1. Go to [Feishu Open Platform](https://open.feishu.cn/app) or [Lark Developer](https://open.larksuite.com/app)
2. Create a custom enterprise application
3. Obtain the App ID and App Secret from "Credentials & Basic Info"
4. Configure event subscriptions in "Events & Callbacks"
5. Use the above information as your bot configuration

## Basic Options

### options.appId

- Type: `string`

The application ID.

### options.appSecret

- Type: `string`

The application secret.

### options.platform

- Type: `'feishu' | 'lark'`
- Default: `'feishu'`

The platform type.

### options.protocol

- Values: http, ws

The protocol type to use.

## HTTP Options

### options.path

- Type: `string`

The path the server listens on.

### options.selfUrl

- Type: `string`

The public URL of the server.

### options.encryptKey

- Type: `string`

The event encryption key.

### options.verificationToken

- Type: `string`

The event verification token.
