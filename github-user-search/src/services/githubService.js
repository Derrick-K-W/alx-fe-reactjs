import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

/**
 * Fetch user data from GitHub based on the query parameters.
 *
 * @param {string} username - The username to search for.
 * @param {string} location - The location filter for the user.
 * @param {number} minRepos - The minimum number of repositories the user should have.
 * @returns {Promise<Array>} - A promise that resolves to the list of users.
 */
export const fetchUserData = async (username, location = '', minRepos = 0) => {
    try {
        // Construct the query string
        let query = username;

        if (location) {
            query += `+location:${location}`;
        }

        if (minRepos > 0) {
            query += `+repos:>${minRepos}`;
        }

        const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
        return response.data.items; // Return the list of users
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error for handling in the component
    }
};
