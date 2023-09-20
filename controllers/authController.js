const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config();

async function getAuthToken(req, res) {
    try {
        // Make an API call to obtain the authentication token from the Blizzard API
        const response = await axios.post('https://us.battle.net/oauth/token', {
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        });

        // Return the authentication token as JSON response
        res.json({ authToken: response.data.access_token });
    } catch (error) {
        console.error('Error fetching authentication token:', error);
        res.status(500).json({ error: 'Error fetching authentication token' });
    }
}

module.exports = {
    getAuthToken,
};