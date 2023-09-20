const axios = require('axios')
require('dotenv').config();

export function authRequest(){
    // Define the OAuth token endpoint URL
    const tokenUrl = 'https://us.battle.net/oauth/token';

    // Define the data you want to send in the request body
    const data = {
    grant_type: 'client_credentials',
    };

    // Create a basic authentication header with your client ID and client secret
    const authHeader = {
    username: process.env.CLIENT_ID,
    password: process.env.CLIENT_SECRET,
    };

    // Make a POST request to obtain the access token
    axios
    .post(tokenUrl, null, {
        params: data,
        auth: authHeader,
    })
    .then((response) => {
    // Access token is in response.data.access_token
    const accessToken = response.data.access_token;

    console.log('Access Token:', accessToken);
    })
    .catch((error) => {
    console.error('Error obtaining access token:', error);
    });
}