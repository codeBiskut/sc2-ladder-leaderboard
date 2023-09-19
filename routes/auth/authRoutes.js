const router = require('express').Router();

const {
    getToken, displayToken
} = require('../../controllers/tokenController.js');

// /auth
router.route('/auth').get(getToken);
router.route('/displayauth').get(displayToken);

module.exports = router;