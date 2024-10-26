import SendResult from './SendResult';

/**
 * Represents a message that can be sent via the client.
 */
class SendMessage {
    /**
     * Creates a new SendMessage instance.
     *
     * @param {Object} client - The client instance used to send the message.
     */
    constructor(client) {
        /**
         * The attributes for the message.
         * @type {Object}
         */
        this.attributes = {
        to: [],
        cc: [],
        bcc: [],
        headers: {},
        attachments: []
        };

        /**
         * The client instance.
         * @type {Object}
         */
        this.client = client;
    }

    /**
     * Adds a recipient email address.
     *
     * @param {string} address - The recipient's email address.
     */
    to(address) {
        this.attributes.to.push(address);
    }

    /**
     * Adds a CC email address.
     *
     * @param {string} address - The CC email address.
     */
    cc(address) {
        this.attributes.cc.push(address);
    }

    /**
     * Adds a BCC email address.
     *
     * @param {string} address - The BCC email address.
     */
    bcc(address) {
        this.attributes.bcc.push(address);
    }

    /**
     * Sets the sender's email address.
     *
     * @param {string} address - The sender's email address.
     */
    from(address) {
        this.attributes.from = address;
    }

    /**
     * Sets the email address of the sender.
     *
     * @param {string} address - The sender email address.
     */
    sender(address) {
        this.attributes.sender = address;
    }

    /**
     * Sets the subject of the message.
     *
     * @param {string} subject - The subject of the message.
     */
    subject(subject) {
        this.attributes.subject = subject;
    }

    /**
     * Sets the tag for the message.
     *
     * @param {string} tag - The tag for the message.
     */
    tag(tag) {
        this.attributes.tag = tag;
    }

    /**
     * Sets the reply-to email address.
     *
     * @param {string} replyTo - The reply-to email address.
     */
    replyTo(replyTo) {
        this.attributes.reply_to = replyTo;
    }

    /**
     * Sets the plain text body of the message.
     *
     * @param {string} content - The plain text content of the message.
     */
    plainBody(content) {
        this.attributes.plain_body = content;
    }

    /**
     * Sets the HTML body of the message.
     *
     * @param {string} content - The HTML content of the message.
     */
    htmlBody(content) {
        this.attributes.html_body = content;
    }

    /**
     * Adds a custom header to the message.
     *
     * @param {string} key - The header key.
     * @param {string} value - The header value.
     */
    header(key, value) {
        this.attributes.headers[key] = value;
    }

    /**
     * Attaches a file to the message.
     *
     * @param {string} filename - The name of the file.
     * @param {string} contentType - The MIME type of the file.
     * @param {Buffer|string} data - The content of the file.
     */
    attach(filename, contentType, data) {
        const attachment = {
        content_type: contentType,
        data: Buffer.from(data).toString('base64'),
        name: filename
        };
        this.attributes.attachments.push(attachment);
    }

    /**
     * Sends the message using the client.
     *
     * @returns {Promise<SendResult>} A promise that resolves with a SendResult instance.
     */
    async send() {
        const result = await this.client.makeRequest('send', 'message', this.attributes);
        return new SendResult(this.client, result);
    }
}

export default SendMessage;
