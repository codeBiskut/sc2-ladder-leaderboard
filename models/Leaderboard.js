const { Schema, model, Types} = require('mongoose');

const leaderboardSchema = new Schema(
    {
        playerId:{
            Type: Number
        },
        realm:{
            Type: Number
        },
        region:{
            Type: Number
        },
        displayName:{
            Type: String
        },
        clanTag:{
            Type: String
        },
        favoriteRace:{
            Type: String
        },
        previousRank:{
            Type: Number
        },
        points:{
            Type: Number
        },
        wins:{
            Type: Number
        },
        losses:{
            Type: Number
        },
        mmr:{
            Type: Number
        },
        joinTimestamp:{
            Type: Number
        }
    }
);

const Leaderboard = model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;