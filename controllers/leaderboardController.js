const { leaderboard} = require('../models/Leaderboard');

module.exports = {
    //get leaderboard
    getLeaderboard(req, res) {
        Leaderboard.find()
            .then((leaderboard) => res.json(leaderboard))
            .catch((err) => res.status(500).json(err))
    }
}