# @satorijs/adapter-whatsapp

## Setup

1. Go to [Meta for Developers](https://developers.facebook.com/) and register an account
2. Create a WhatsApp Business application
3. Obtain the System User Token and WhatsApp Business Account ID
4. Configure the Webhook and obtain the Verify Token and App Secret
5. Use the above information as your bot configuration

## Configuration

### options.id

- Type: `string`

The WhatsApp Business Account ID.

### options.systemToken

- Type: `string`

The System User Token.

### options.verifyToken

- Type: `string`

The Webhook verification token.

### options.secret

- Type: `string`

The App Secret, used to verify Webhook request signatures.
