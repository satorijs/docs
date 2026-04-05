---
url: /adapters/wechat-official.md
---
# @satorijs/adapter-wechat-official

## 接入方法

1. 前往 [微信公众平台](https://mp.weixin.qq.com/) 注册账号
2. 在「基本配置」中获取 AppID 和 AppSecret
3. 在「服务器配置」中配置 URL、Token 和 EncodingAESKey
4. 将上述信息作为机器人配置项即可使用

## 配置项

### options.account

* 类型: `string`

微信公众号账号。

### options.appid

* 类型: `string`

应用 ID。

### options.secret

* 类型: `string`

应用密钥。

### options.token

* 类型: `string`

服务器配置的 Token。

### options.aesKey

* 类型: `string`

消息加解密密钥。

### options.customerService

* 类型: `boolean`
* 默认值: `false`

是否启用客服消息。
