document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
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
});