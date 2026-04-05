---
url: /resources/friend.md
---
# 好友 (Friend)

## 类型定义

### Friend {#def-friend}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `user` | [User](./user.md#def-user)? | 用户对象 |
| `nick` | string? | 好友昵称 |

## API

### 获取好友列表 {#api-friend-list}

> POST `/friend.list` {.route}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `next` | string? | 分页令牌 |

获取好友列表。返回一个 [Friend](#def-friend) 的[分页列表](../protocol/api.md#list)。

### 删除好友 {#api-friend-delete}

> POST `/friend.delete` {.route}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `user_id` | string | 用户 ID |

删除好友。

### 处理好友申请 {#api-friend-approve}

> POST `/friend.approve` {.route}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `message_id` | string | 请求 ID |
| `approve` | boolean | 是否通过请求 |
| `comment` | string? | 备注信息 |

处理好友申请。

## 事件

### friend-request

接收到新的好友申请时触发。必需资源：[`user`](./user.md#def-user)。
