const router = require('express').Router();

//get entire US leaderboard
const {
    getLeaderboard
} = require('../../controllers/leaderboardController.js');

// /api/leaderboard
router.route('/').get(getLeaderboard);

module.exports = router;