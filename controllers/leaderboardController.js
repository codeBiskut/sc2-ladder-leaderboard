const Token = require('../models/Token')
const mongoose = require('mongoose')
const axios = require('axios')


async function retrieveToken() {
    try {
        const tokenDocument = await Token.findOne();

        if (!tokenDocument) {
            console.error('Token not found in the database.');
            return null;
        }

        const authToken = tokenDocument.access_token;
        console.log('Retrieved token from MongoDB:', authToken);

        return authToken; // Return the authToken from the function
    } catch (error) {
        console.error('Error retrieving token from MongoDB:', error);
        throw error;
    }
}

async function getGrandmasterLeaderboard(req, res) {
    const retrievedToken = await retrieveToken(); 
    const authUrl = 'https://us.api.blizzard.com/sc2/ladder/grandmaster/1';
    const headers = {
        'Authorization': `Bearer ${retrievedToken}`,
        'Content-Type': 'application/json'
    };

    axios.get(authUrl, { headers })
        .then(response => {
            leaderboard = response.data.ladderTeams;
            res.json({ leaderboard });
            console.log(leaderboard);
        })
        .catch(error => {
            console.error('Error fetching Grandmaster Leaderboard:', error);
        })
}

module.exports = {
    getGrandmasterLeaderboard
};