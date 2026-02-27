# Friend

## Definitions

### Friend {#def-friend}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `user` | [User](./user.md#def-user)? | user object |
| `nick` | string? | friend nickname |

## API

### Get Friend List {#api-friend-list}

> <badge>POST</badge> `/friend.list` {.route}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `next` | string? | pagination token |

Get the friend list. Returns a [paginated list](../protocol/api.md#list) of [Friend](#def-friend) objects.

### Delete Friend {#api-friend-delete}

> <badge>POST</badge> `/friend.delete` {.route}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `user_id` | string | user id |

Delete a friend.

### Handle Friend Request {#api-friend-approve}

> <badge>POST</badge> `/friend.approve` {.route}

| FIELD | TYPE | DESCRIPTION |
| --- | --- | --- |
| `message_id` | string | request id |
| `approve` | boolean | whether to approve the request |
| `comment` | string? | comment |

Handle a friend request.

## Events

### friend-request

Triggered when a new friend request is received. Required resources: [`user`](./user.md#def-user).
