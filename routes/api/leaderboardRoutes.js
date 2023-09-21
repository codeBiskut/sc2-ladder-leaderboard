const router = require('express').Router();

//get entire US leaderboard
const {
    getLeaderboard, getGrandmasterLeaderboard
} = require('../../controllers/leaderboardController.js');

// /api/leaderboard
router.route('/getGrandmasterLeaderboard').get(getGrandmasterLeaderboard);

module.exports = router;