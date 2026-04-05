# @satorijs/adapter-wechat-official

## Setup

1. Go to [WeChat Official Account Platform](https://mp.weixin.qq.com/) and register an account
2. Obtain the AppID and AppSecret from "Basic Configuration"
3. Configure the URL, Token, and EncodingAESKey in "Server Configuration"
4. Use the above information as your bot configuration

## Configuration

### options.account

- Type: `string`

The WeChat Official Account ID.

### options.appid

- Type: `string`

The application ID.

### options.secret

- Type: `string`

The application secret.

### options.token

- Type: `string`

The Token from server configuration.

### options.aesKey

- Type: `string`

The message encryption/decryption key.

### options.customerService

- Type: `boolean`
- Default: `false`

Whether to enable customer service messaging.
