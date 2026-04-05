---
url: /adapters/dingtalk.md
---
# @satorijs/adapter-dingtalk

## 接入方法

1. 前往 [钉钉开放平台](https://open-dev.dingtalk.com/) 注册账号
2. 创建一个应用并获取 AppKey 和 AppSecret
3. 在「消息推送」中配置事件订阅
4. 将上述信息作为机器人配置项即可使用

## 配置项

### options.appkey

* 类型: `string`

机器人的 AppKey。

### options.secret

* 类型: `string`

机器人的 AppSecret。

### options.protocol

* 可选值: http, ws

要使用的协议类型。

### options.agentId

* 类型: `number`

机器人的 AgentId。
