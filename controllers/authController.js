const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config();

async function getAuthToken(req, res) {
    let authToken;

    // Define the OAuth token request parameters
    const authUrl = 'https://us.battle.net/oauth/token';
    const grantType = 'client_credentials';

    // Construct the request data
    const requestData = `grant_type=${grantType}`;

    // Define the headers with your client ID and secret
    const headers = {
        'Authorization': `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    // Make the GET request to retrieve the OAuth token
    axios.post(authUrl, requestData, { headers })
        .then(response => {
            // Get the access token response
            authToken = response.data.access_token;
            
            // Send a JSON response and print to console
            res.json({ authToken })
            console.log(`Access Token: ${authToken}`);
        })
        .catch(error => {
            console.error('Error fetching OAuth token:', error);
        });
}

module.exports = {
    getAuthToken,
};