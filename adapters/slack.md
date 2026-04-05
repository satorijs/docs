---
url: /adapters/slack.md
---
# @satorijs/adapter-slack

## 接入方法

1. 前往 [Slack API](https://api.slack.com/apps) 创建一个应用
2. 在「OAuth & Permissions」中添加所需的权限范围
3. 安装应用到工作区，获取 Bot Token 和 App-Level Token
4. 将上述信息作为机器人配置项即可使用

## 基础配置项

### options.token

* 类型: `string`

App-Level Token。

### options.botToken

* 类型: `string`

OAuth Token (Bot Token)。

### options.protocol

* 可选值: http, ws

要使用的协议类型。

## HTTP 配置项

### options.signing

* 类型: `string`

Signing Secret，用于验证请求签名。
