import SendResult from './SendResult';

/**
 * Represents a raw message that can be sent via the client.
 */
class SendRawMessage {
    /**
     * Creates a new SendRawMessage instance.
     *
     * @param {Object} client - The client instance used to send the message.
     */
    constructor(client) {
        /**
         * The attributes for the raw message.
         * @type {Object}
         */
        this.attributes = {};

        /**
         * The client instance.
         * @type {Object}
         */
        this.client = client;
    }

    /**
     * Sets the sender's email address.
     *
     * @param {string} address - The sender's email address.
     */
    mailFrom(address) {
        this.attributes.mail_from = address;
    }

    /**
     * Adds a recipient email address.
     *
     * @param {string} address - The recipient's email address.
     */
    rcptTo(address) {
        if (!this.attributes.rcpt_to) {
        this.attributes.rcpt_to = [];
        }
        this.attributes.rcpt_to.push(address);
    }

    /**
     * Sets the content of the message, encoding it as base64.
     *
     * @param {string} content - The raw content of the message.
     */
    data(content) {
        this.attributes.data = Buffer.from(content).toString('base64');
    }

    /**
     * Sends the raw message using the client.
     *
     * @returns {Promise<SendResult>} A promise that resolves with a SendResult instance.
     */
    async send() {
        const result = await this.client.makeRequest('send', 'raw', this.attributes)
        return new SendResult(this.client, result);
    }
}

export default SendRawMessage;
