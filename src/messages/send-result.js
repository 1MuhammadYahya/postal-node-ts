import Message from './message';

/**
 * Represents the result of sending a message.
 */
class SendResult {
    /**
     * Creates a new SendResult instance.
     * @param {object} client - The client instance associated with the sending result.
     * @param {object} result - The result data from sending messages.
     * @param {object[]} result.messages - An array of message objects containing information about the sent messages.
     */
    constructor(client, result) {
        /**
         * The client instance.
         * @type {object}
         */
        this.client = client;

        /**
         * The result data from sending messages.
         * @type {object}
         */
        this.result = result;

        /**
         * The cache of recipient messages, populated when `recipients()` is called.
         * @type {object|null}
         * @private
         */
        this._recipients = null;
    }

    /**
     * Retrieves the recipients' messages, creating a new Message instance for each.
     * @returns {object} An object where each key is the lowercase recipient name, and the value is a Message instance.
     */
    recipients() {
        if (!this._recipients) {
        this._recipients = {};
        const messages = this.result.messages;

        for (const key in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, key)) {
            this._recipients[key.toLowerCase()] = new Message(this.client, messages[key]);
            }
        }
        }

        return this._recipients;
    }

    /**
     * Returns the number of recipients.
     * @returns {number} The number of recipients.
     */
    size() {
        return Object.keys(this.recipients()).length;
    }
}

export default SendResult;