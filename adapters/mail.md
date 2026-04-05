---
url: /adapters/mail.md
---
# @satorijs/adapter-mail

## 接入方法

1. 准备一个邮箱账号，确保其支持 IMAP 和 SMTP 协议
2. 在邮箱设置中开启 IMAP/SMTP 服务
3. 获取授权码或应用专用密码
4. 将上述信息作为机器人配置项即可使用

## 配置项

### options.name

* 类型: `string`

发送邮件时的显示名称。

### options.username

* 类型: `string`

邮箱用户名。

### options.password

* 类型: `string`

邮箱密码或授权码。

### options.subject

* 类型: `string`
* 默认值: `'Koishi'`

邮件主题前缀。

### options.imap.host

* 类型: `string`

IMAP 服务器地址。

### options.imap.port

* 类型: `number`

IMAP 服务器端口。

### options.imap.tls

* 类型: `boolean`
* 默认值: `true`

是否使用 TLS 连接。

### options.smtp.host

* 类型: `string`

SMTP 服务器地址。

### options.smtp.port

* 类型: `number`

SMTP 服务器端口。

### options.smtp.tls

* 类型: `boolean`
* 默认值: `true`

是否使用 TLS 连接。
