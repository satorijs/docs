---
url: /resources/emoji.md
---
# 表情 (Emoji) 实验性

## 类型定义

### Emoji {#def-emoji}

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | string | 表情 ID |
| `name` | string? | 表情名称 |

## 事件

### guild-emoji-added

当群组表情被添加时触发。必需资源：[`emoji`](#def-emoji)。

### guild-emoji-updated

当群组表情被更新时触发。必需资源：[`emoji`](#def-emoji)。

### guild-emoji-deleted

当群组表情被删除时触发。必需资源：[`emoji`](#def-emoji)。
