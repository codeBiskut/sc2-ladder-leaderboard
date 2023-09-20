const { Schema, model, Types} = require('mongoose');

const playerSchema = new Schema(
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

const Player = model('Player', playerSchema);

module.exports = Player;