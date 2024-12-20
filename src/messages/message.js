/**
 * Represents a Message object.
 */
class Message {
    /**
     * Create a new Message instance.
     * @param {object} client - The client instance associated with this message.
     * @param {object} attributes - The attributes of the message.
     * @param {string} attributes.id - The unique identifier of the message.
     * @param {string} attributes.token - The token related to the message.
     */
    constructor(client, attributes) {
        /**
         * The client instance.
         * @type {object}
         */
        this.client = client;

        /**
         * The attributes of the message.
         * @type {object}
         * @property {string} id - The unique identifier of the message.
         * @property {string} token - The token associated with the message.
         */
        this.attributes = attributes;
    }

    /**
     * Gets the ID of the message.
     * @returns {string} The message ID.
     */
    id() {
        return this.attributes.id;
    }

    /**
     * Gets the token associated with the message.
     * @returns {string} The message token.
     */
    token() {
        return this.attributes.token;
    }
}

export default Message;