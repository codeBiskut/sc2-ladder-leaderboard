const Player = require('../models/Player');

exports.index = (req, res) => {
  Player.find()
    .then((players) => {
      res.render('home', { players });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
};