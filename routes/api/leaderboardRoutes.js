const router = require('express').Router();

//get entire US leaderboard
const {
    displayLeaderboard, getGrandmasterLeaderboard
} = require('../../controllers/leaderboardController.js');

// /api/leaderboard
router.route('/getGrandmasterLeaderboard').get(getGrandmasterLeaderboard);
router.route('/displayLeaderboard').get(displayLeaderboard);

module.exports = router;