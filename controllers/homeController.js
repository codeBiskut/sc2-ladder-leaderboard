// Controller action to render the home page
exports.renderHomePage = (req, res) => {
  try {
    res.render('home')
  } catch (error) {
    console.error('Error in homepage render:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.renderLeaderboardPage = (req, res) => {
  try {
    res.render('leaderboard', { layout: 'leaderboard' });
  } catch (error) {
    console.error('Error in leaderboard render:', error);
    res.status(500).send('Internal Server Error');
  }
}