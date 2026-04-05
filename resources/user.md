---
url: /resources/user.md
---
# 用户 (User)

## 类型定义

### User {#def-user}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | string | 用户 ID |
| `name` | string? | 用户名称[\[1\]](#name-nick) |
| `nick` | string? | 用户昵称[\[1\]](#name-nick) |
| `avatar` | string? | 用户头像链接 |
| `is_bot` | boolean? | 是否为机器人 |

::: tip
**\[1] `name` 和 `nick` 字段的区别** {#name-nick}

这两个字段都可以用于标识用户。在一些平台上 (例如 Telegram)，一个用户存在多种不同概念的名称，因此 SDK 可以同时设置这两个字段。而另一些平台可能不存在这两个概念的对立关系，此时 SDK 只需要根据语义设置 `name` 或 `nick` 中的一个即可。

在应用层实现上，`nick` 的优先级高于 `name`，因为昵称更容易被用户识别和理解。如果你正在开发基于 Satori 协议的客户端，在用户名的显示上应当优先使用 `nick` 字段，只有当 `nick` 为空时才使用 `name` 字段。
:::

## API

### 获取用户信息 {#api-user-get}

> POST `/user.get` {.route}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `user_id` | string | 用户 ID |

获取用户信息。返回一个 [`User`](#def-user) 对象。
