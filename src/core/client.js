/**
 * Represents a Client that interacts with a server via HTTPS.
 */
class Client {
    /**
     * Creates a new Client instance.
     * @param {string} host - The host URL of the server.
     * @param {string} serverKey - The API key to authenticate the client.
     */
    constructor(host, serverKey) {
        /**
         * The host URL of the server.
         * @type {string}
         */
        this.host = host;

        /**
         * The server's API key.
         * @type {string}
         */
        this.serverKey = serverKey;
    }

    /**
     * Makes an HTTPS request to the server's API.
     * @param {string} controller - The API controller.
     * @param {string} action - The action to perform.
     * @param {object} parameters - The parameters to send in the request.
     * @returns {Promise<object>} A promise that resolves with the server's response data or rejects with an error.
     */
    async makeRequest(controller, action, parameters) {
        try {
            const response = await fetch(`${this.host}/api/v1/${controller}/${action}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Server-API-Key': this.serverKey,
                },
                body: JSON.stringify(parameters),
            });

            const data = await response.json();
            
            if (data.status === 'success') {
                return data.data;
            } else {
                throw data.data;
            }
        } catch (error) {
            if (error instanceof SyntaxError) {
                throw new Error('Failed to parse JSON response');
            }
            throw error;
        }
    }
}

export default Client;
