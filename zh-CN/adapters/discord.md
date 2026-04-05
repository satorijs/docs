# @satorijs/adapter-discord

## 接入方法

1. 前往 [https://discord.com/developers/applications](https://discord.com/developers/applications)，登录账号创建一个应用
2. 点击「Bot」并创建一个新的机器人，保存这个页面中的 token（请注意不要泄露）
3. 要将机器人拉进你的服务器，点击「OAuth2」，并在网址生成器中勾选 Bot 和机器人所需要的权限
4. 打开生成的链接，选择你具有管理权限的服务器，就成功把机器人添加进去了
5. 将上面的 token 作为机器人配置项即可使用

## 配置项

### options.token

- 类型: `string`

机器人账户的令牌。

### options.type

- 类型: `'bot' | 'user'`
- 默认值: `'bot'`

登录类型。

### options.intents

- 类型: `number`

需要订阅的机器人事件。这是一个以 bitset 形式表达的正整数，每一位代表一类事件。

参考：[Gateway Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents)

### options.slash

- 类型: `boolean`
- 默认值: `true`

是否启用斜杠指令。
