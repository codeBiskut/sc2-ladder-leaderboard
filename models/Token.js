const { Schema, model, Types} = require('mongoose');

const tokenSchema = new Schema(
    {
        access_token:{
            Type: String
        },
        token_type:{
            Type: String
        },
        expires_in:{
            Type: Number
        }
    }
)

const Token = model('Token', tokenSchema);

module.exports = Token;