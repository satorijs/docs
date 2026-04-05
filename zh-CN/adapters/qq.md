# @satorijs/adapter-qq

## 接入方法

1. 前往 [QQ 开放平台](https://q.qq.com/) 注册账号
2. 在「应用管理」中创建一个机器人应用
3. 获取 AppID, Token 和 Secret
4. 将上述信息作为机器人配置项即可使用

## 配置项

### options.id

- 类型: `string`

机器人 ID (AppID)。

### options.secret

- 类型: `string`

机器人密钥 (AppSecret)。

### options.token

- 类型: `string`

机器人令牌 (Token)。

### options.type

- 可选值: private, public

机器人类型。`private` 为私域机器人，`public` 为公域机器人。

### options.protocol

- 可选值: websocket, webhook

要使用的协议类型。

### options.sandbox

- 类型: `boolean`
- 默认值: `false`

是否开启沙盒模式。

### options.endpoint

- 类型: `string`
- 默认值: `'https://api.sgroup.qq.com/'`

要连接的服务器地址。

### options.authType

- 类型: `'bot' | 'bearer'`
- 默认值: `'bearer'`

验证方式。

### options.intents

- 类型: `number`

需要订阅的机器人事件。
