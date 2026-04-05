# @satorijs/adapter-lark

## 接入方法

1. 前往 [飞书开放平台](https://open.feishu.cn/app) 或 [Lark Developer](https://open.larksuite.com/app)
2. 创建企业自建应用
3. 在「凭证与基础信息」中获取 App ID 和 App Secret
4. 在「事件与回调」中配置事件订阅
5. 将上述信息作为机器人配置项即可使用

## 基础配置项

### options.appId

- 类型: `string`

机器人的应用 ID。

### options.appSecret

- 类型: `string`

机器人的应用密钥。

### options.platform

- 类型: `'feishu' | 'lark'`
- 默认值: `'feishu'`

平台类型。

### options.protocol

- 可选值: http, ws

要使用的协议类型。

## HTTP 配置项

### options.path

- 类型: `string`

服务器监听的路径。

### options.selfUrl

- 类型: `string`

服务暴露在公网的地址。

### options.encryptKey

- 类型: `string`

事件加密密钥。

### options.verificationToken

- 类型: `string`

事件验证令牌。
