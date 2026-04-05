---
url: /adapters/line.md
---
# @satorijs/adapter-line

## 接入方法

1. 前往 [LINE Developers](https://developers.line.biz/) 注册账号
2. 创建一个 Provider 和 Channel (Messaging API)
3. 在 Channel 设置中获取 Channel Secret 和 Channel Access Token
4. 配置 Webhook URL
5. 将上述信息作为机器人配置项即可使用

## 配置项

### options.token

* 类型: `string`

Channel Access Token。

### options.secret

* 类型: `string`

Channel Secret。
