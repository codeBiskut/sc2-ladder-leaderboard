const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');
const homeController = require('../controllers/homeController');

router.get('/', homeController.renderHomePage);
router.get('/leaderboard', homeController.renderLeaderboardPage);
router.use('/api', apiRoutes);
router.use('/auth', authRoutes)

module.exports = router;