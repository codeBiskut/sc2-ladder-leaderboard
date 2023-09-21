const axios = require('axios')
const dotenv = require('dotenv')
const Token = require('../models/Token')
const mongoose = require('mongoose')
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
        .then(async response => {
            // Get the access token response
            authToken = response.data.access_token;

            // Send to mongodb
            try {
                const newToken = new Token({ access_token: authToken });
                await newToken.save();
                console.log('Token saved successfully');
              } catch (error) {
                console.error('Error saving token:', error);
              }

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