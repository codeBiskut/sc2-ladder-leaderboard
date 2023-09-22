document.addEventListener('DOMContentLoaded', () => {
    const homepageButton = document.getElementById('homepageButton')
    const displayLeaderboardButton = document.getElementById('displayLeaderboard')

    homepageButton.addEventListener('click', async () => {
        window.location.href = '/'
    })

    displayLeaderboardButton.addEventListener('click', async () => {
        try{
            const response = await axios.get('/api/leaderboard/displayLeaderboard')
        }catch(error){
            console.error('Error displaying Grandmaster Leaderboard', error)
        }
    })
})