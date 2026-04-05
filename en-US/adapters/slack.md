# @satorijs/adapter-slack

## Setup

1. Go to [Slack API](https://api.slack.com/apps) and create an application
2. Add the required permission scopes in "OAuth & Permissions"
3. Install the app to your workspace and obtain the Bot Token and App-Level Token
4. Use the above information as your bot configuration

## Basic Options

### options.token

- Type: `string`

The App-Level Token.

### options.botToken

- Type: `string`

The OAuth Token (Bot Token).

### options.protocol

- Values: http, ws

The protocol type to use.

## HTTP Options

### options.signing

- Type: `string`

The Signing Secret, used to verify request signatures.
