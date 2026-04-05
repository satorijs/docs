---
url: /adapters/wecom.md
---
# @satorijs/adapter-wecom

## 接入方法

1. 前往 [企业微信管理后台](https://work.weixin.qq.com/) 注册企业
2. 在「应用管理」中创建自建应用
3. 获取 CorpId、AgentId 和 Secret
4. 在「接收消息」设置中配置 URL、Token 和 EncodingAESKey
5. 将上述信息作为机器人配置项即可使用

## 配置项

### options.corpId

* 类型: `string`

企业 ID。

### options.agentId

* 类型: `string`

应用 AgentId。

### options.secret

* 类型: `string`

应用密钥。

### options.token

* 类型: `string`

服务器配置的 Token。

### options.aesKey

* 类型: `string`

消息加解密密钥。
