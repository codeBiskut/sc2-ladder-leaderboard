document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    const authTokenSpan = document.getElementById('authToken');

    authButton.addEventListener('click', async () => {
        try {
            // Make an API call to your server to obtain the authentication token
            const response = await axios.get('/auth/getAuthToken'); // Update the URL

            // Extract and display the authentication token
            const authToken = response.data.authToken;
            authTokenSpan.textContent = authToken;
        } catch (error) {
            console.error('Error fetching authentication token:', error);
        }
    });
});