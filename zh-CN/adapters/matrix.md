# @satorijs/adapter-matrix

## 接入方法

1. 准备一个 Matrix 服务器（如 Synapse）
2. 创建 Application Service 配置文件，获取 HS Token 和 AS Token
3. 在 Homeserver 中注册该 Application Service
4. 将上述信息作为机器人配置项即可使用

参考文档：<https://spec.matrix.org/latest/application-service-api/>

## 配置项

### options.id

- 类型: `string`

机器人的用户 ID。

### options.host

- 类型: `string`

Matrix Homeserver 的域名。

### options.hsToken

- 类型: `string`

Homeserver Token。

### options.asToken

- 类型: `string`

Application Service Token。

### options.name

- 类型: `string`

机器人的显示名称。

### options.avatar

- 类型: `string`

机器人的头像 URL。

### options.endpoint

- 类型: `string`
- 默认值: `'https://{host}'`

Homeserver 的 API 终结点。

### options.path

- 类型: `string`
- 默认值: `'/matrix'`

Application Service 监听的路径。
