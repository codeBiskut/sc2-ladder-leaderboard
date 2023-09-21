const Token = require('../models/Token')
const Player = require('../models/Player')
const mongoose = require('mongoose')
const axios = require('axios');
const { json } = require('express');


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
        .then(async response => {
            leaderboard = response.data.ladderTeams;
            for (const player of leaderboard){
                try {
                    const newPlayer = new Player({
                        playerId: player.teamMembers[0].playerId,
                        realm: player.teamMembers[0].realm,
                        region: player.teamMembers[0].region,
                        displayName: player.teamMembers[0].displayName,
                        favoriteRace: player.teamMembers[0].favoriteRace,
                        previousRank: player.previousRank,
                        points: player.points,
                        wins: player.wins,
                        losses: player.losses,
                        mmr: player.mmr,
                        joinTimestamp: player.joinTimestamp
                    });
                    await newPlayer.validate();
                    await newPlayer.save();
                } catch (error) {
                    console.error('Error saving player:', error);
                }
            }
            console.log('Players saved successfully')
            res.json({ leaderboard });
            // console.log(leaderboard);
        })
        .catch(error => {
            console.error('Error fetching Grandmaster Leaderboard:', error);
        })
}

module.exports = {
    getGrandmasterLeaderboard
};