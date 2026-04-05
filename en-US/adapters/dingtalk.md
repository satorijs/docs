# @satorijs/adapter-dingtalk

## Setup

1. Go to [DingTalk Open Platform](https://open-dev.dingtalk.com/) and register an account
2. Create an application and obtain the AppKey and AppSecret
3. Configure event subscriptions in "Message Push"
4. Use the above information as your bot configuration

## Configuration

### options.appkey

- Type: `string`

The bot's AppKey.

### options.secret

- Type: `string`

The bot's AppSecret.

### options.protocol

- Values: http, ws

The protocol type to use.

### options.agentId

- Type: `number`

The bot's AgentId.
