const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.use('/api', apiRoutes);
router.use('/auth', authRoutes)

module.exports = router;