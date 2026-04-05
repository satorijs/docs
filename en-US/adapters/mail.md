# @satorijs/adapter-mail

## Setup

1. Prepare an email account that supports IMAP and SMTP protocols
2. Enable IMAP/SMTP services in the email settings
3. Obtain an authorization code or app-specific password
4. Use the above information as your bot configuration

## Configuration

### options.name

- Type: `string`

The display name for sent emails.

### options.username

- Type: `string`

The email username.

### options.password

- Type: `string`

The email password or authorization code.

### options.subject

- Type: `string`
- Default: `'Koishi'`

The email subject prefix.

### options.imap.host

- Type: `string`

The IMAP server address.

### options.imap.port

- Type: `number`

The IMAP server port.

### options.imap.tls

- Type: `boolean`
- Default: `true`

Whether to use TLS connection.

### options.smtp.host

- Type: `string`

The SMTP server address.

### options.smtp.port

- Type: `number`

The SMTP server port.

### options.smtp.tls

- Type: `boolean`
- Default: `true`

Whether to use TLS connection.
