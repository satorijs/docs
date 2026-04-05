# @satorijs/adapter-whatsapp

## 接入方法

1. 前往 [Meta for Developers](https://developers.facebook.com/) 注册账号
2. 创建一个 WhatsApp Business 应用
3. 获取 System User Token 和 WhatsApp Business Account ID
4. 配置 Webhook 并获取 Verify Token 和 App Secret
5. 将上述信息作为机器人配置项即可使用

## 配置项

### options.id

- 类型: `string`

WhatsApp Business Account ID。

### options.systemToken

- 类型: `string`

System User Token。

### options.verifyToken

- 类型: `string`

Webhook 验证令牌。

### options.secret

- 类型: `string`

App Secret，用于验证 Webhook 请求签名。
