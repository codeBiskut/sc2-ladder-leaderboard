const { leaderboard } = require('../models/Leaderboard');


function getLeaderboardData(req, res) {
    Leaderboard.find()
        .then((leaderboard) => res.json(leaderboard))
        .catch((err) => res.status(500).json(err))
}

function getGrandmasterLeaderboard(req, res)    {
    const storedAuthToken = sessionStorage.getItem('authToken');

    var options = {
        method: 'GET',
        url: 'https://us.api.blizzard.com/sc2/ladder/grandmaster/1',
        headers: {
          Authorization: `Bearer ${storedAuthToken}`
        }
      };
      
      axios.request(options).then(function (response) {
        const grandmasterLeaderboard = response.data.ladderTeams
        console.log(grandmasterLeaderboard);
      }).catch(function (error) {
        console.error(error);
      });
}

module.exports = {
    getLeaderboardData,
    getGrandmasterLeaderboard
};