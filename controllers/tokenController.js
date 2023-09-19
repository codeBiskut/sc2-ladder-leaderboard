const { token} = require('../models/Token');
require('dotenv').config()

const axios = require('axios')

module.exports = {
    //get token
    getToken() {
        app.post('/auth', async (req, res) => {
        try {
            const response = await axios.post(
                'https://us.battle.net/oauth/token',
                null,
                {
                    params: {
                        grant_type: 'client_credentials',
                    },
                    auth: {
                        username: process.env.CLIENT_ID,
                        password: process.env.CLIENT_SECRET,
                    }
                }
            );
    
            const tokenData = new BlizzardToken({
                access_token: response.data.access_token,
                token_type: response.data.token_type,
                expires_in: response.data.expires_in,
            });
    
            await tokenData.save();
    
            res.status(200).json({ token: response.data.access_token });
        } catch (error) {
            console.error('Error obtaining Blizzard token:', error);
            res.status(500).json({ error: 'Unable to obtain Blizzard token' });
        }
    }
    )}, 

    //retrieve token from mongodb
    displayToken(req, res) {
        Token.find()
            .then((token) => res.json(token))
            .catch((err) => res.status(500).json(err))
    }
    
}