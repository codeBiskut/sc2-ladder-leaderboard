const { Schema, model, Types} = require('mongoose');

const authSchema = new Schema(
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

const Auth = model('Auth', authSchema);

module.exports = Auth;