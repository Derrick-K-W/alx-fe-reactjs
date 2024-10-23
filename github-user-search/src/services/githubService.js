import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
        return response.data.items; // Return the list of users
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error for handling in the component
    }
};
