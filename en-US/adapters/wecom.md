# @satorijs/adapter-wecom

## Setup

1. Go to [WeCom Admin Console](https://work.weixin.qq.com/) and register an enterprise
2. Create a custom application in "Application Management"
3. Obtain the CorpId, AgentId, and Secret
4. Configure the URL, Token, and EncodingAESKey in "Receive Messages"
5. Use the above information as your bot configuration

## Configuration

### options.corpId

- Type: `string`

The enterprise ID.

### options.agentId

- Type: `string`

The application AgentId.

### options.secret

- Type: `string`

The application secret.

### options.token

- Type: `string`

The Token from server configuration.

### options.aesKey

- Type: `string`

The message encryption/decryption key.
