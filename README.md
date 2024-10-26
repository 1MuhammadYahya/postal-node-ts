# Modern Postal for Node.js

This is an unofficial, modernized version of the [@atech/postal](https://github.com/atech/postal) Node.js client library. It provides ES Module support, TypeScript types, and modern JavaScript features while maintaining compatibility with the original API.

## Changes from Original

- ES Module support
- TypeScript declarations
- Modern JavaScript features (async/await, fetch API)
- Improved error handling
- Better documentation

## Installation

```bash
npm install @yahoo_warraich/postal
# or
pnpm add @yahoo_warraich/postal
# or
yarn add @yahoo_warraich/postal
```

## Usage

```javascript
import { Client, SendMessage } from '@yahoo_warraich/postal';

// Create a new Postal client
const client = new Client('https://postal.yourdomain.com', 'your-api-key');

// Create and configure a new message
const message = new SendMessage(client);

// Add recipients
message.to('john@example.com');
message.cc('mike@example.com');
message.bcc('secret@awesomeapp.com');

// Set sender (must be from a verified domain)
message.from('test@test.postal.io');

// Set content
message.subject('Hi there!');
message.plainBody('Hello world!');
message.htmlBody('<p>Hello world!</p>');

// Add custom headers
message.header('X-Custom-Header', 'value');

// Attach files
message.attach('hello.txt', 'text/plain', 'Hello world!');

// Send the message
try {
    const result = await message.send();
    const recipients = result.recipients();
    
    // Access message IDs and tokens
    for (const [email, message] of Object.entries(recipients)) {
        console.log(`Message ID for ${email}: ${message.id()}`);
        console.log(`Token for ${email}: ${message.token()}`);
    }
} catch (error) {
    console.error('Failed to send:', error);
}
```

## TypeScript Support

This package includes TypeScript declarations. No additional `@types` package is needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE file for details

## Disclaimer

This is an unofficial, modernized version of the @atech/postal package. It is not affiliated with or endorsed by the original authors.