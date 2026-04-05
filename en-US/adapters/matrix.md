# @satorijs/adapter-matrix

## Setup

1. Prepare a Matrix server (e.g., Synapse)
2. Create an Application Service configuration file and obtain the HS Token and AS Token
3. Register the Application Service with the Homeserver
4. Use the above information as your bot configuration

Reference: <https://spec.matrix.org/latest/application-service-api/>

## Configuration

### options.id

- Type: `string`

The bot's user ID.

### options.host

- Type: `string`

The Matrix Homeserver domain.

### options.hsToken

- Type: `string`

The Homeserver Token.

### options.asToken

- Type: `string`

The Application Service Token.

### options.name

- Type: `string`

The bot's display name.

### options.avatar

- Type: `string`

The bot's avatar URL.

### options.endpoint

- Type: `string`
- Default: `'https://{host}'`

The Homeserver API endpoint.

### options.path

- Type: `string`
- Default: `'/matrix'`

The path the Application Service listens on.
