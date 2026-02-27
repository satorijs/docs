# Emoji <badge type="warning">Experimental</badge>

## Type Definitions

### Emoji {#def-emoji}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `id` | string | emoji id |
| `name` | string? | emoji name |

## Events

### guild-emoji-added

Triggered when a guild emoji is added. Required resources: [`emoji`](#def-emoji).

### guild-emoji-updated

Triggered when a guild emoji is updated. Required resources: [`emoji`](#def-emoji).

### guild-emoji-deleted

Triggered when a guild emoji is deleted. Required resources: [`emoji`](#def-emoji).
