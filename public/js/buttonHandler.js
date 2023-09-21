document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    const leaderboardButton = document.getElementById('leaderboardButton');
    const authTokenSpan = document.getElementById('authToken');

    authButton.addEventListener('click', async () => {
        try {
            // Make an API call to server to obtain the authentication token
            const response = await axios.get('/auth/getAuthToken'); 

            // Extract and display the authentication token
            const authToken = response.data.authToken;
            authTokenSpan.textContent = authToken;

            // Put it in session storage
            sessionStorage.setItem('authToken', authToken);

            // Add to MongoDb
            const token = new Token({authToken})
            await token.save()
        } catch (error) {
            console.error('Error fetching authentication token:', error);
        }
    });

    leaderboardButton.addEventListener('click', async () => {
        try{
            const response = await axios.get('/api/getGrandmasterLeaderboard');

            const grandmasterLeaderboard = response.data.ladderTeams
            console.log(grandmasterLeaderboard)
        }
        catch(error){
            console.error('Error fetching Grandmaster Leaderboard:', error);
        }


        // var options = {
        //     method: 'GET',
        //     url: 'https://us.api.blizzard.com/sc2/ladder/grandmaster/1',
        //     headers: {
        //       Authorization: 'Bearer '
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //     console.log(response.data);
        //   }).catch(function (error) {
        //     console.error(error);
        //   });
    });
});