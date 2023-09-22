document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    const leaderboardButton = document.getElementById('leaderboardButton');
    const switchButton = document.getElementById('switchButton')
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

        } catch (error) {
            console.error('Error fetching authentication token:', error);
        }
    });

    leaderboardButton.addEventListener('click', async () => {
        try{
            const response = await axios.get('/api/leaderboard/getGrandmasterLeaderboard');

        }
        catch(error){
            console.error('Error fetching Grandmaster Leaderboard:', error);
        }
    });
    switchButton.addEventListener('click', async () => {
        try{
            window.location.href = '/leaderboard'
        }catch(error){
            console.error('Error displaying leaderboard page:', error);
        }
    })
});