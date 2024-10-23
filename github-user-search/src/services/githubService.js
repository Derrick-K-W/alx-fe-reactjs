import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

const fetchUserData = async (query, location = '', minRepos = 0) => {
    const params = {
        q: `${query}${location ? ` location:${location}` : ''}${minRepos ? ` repos:>=${minRepos}` : ''}`,
    };

    const response = await axios.get(GITHUB_API_URL, { params });
    return response.data.items; // Return the user items
};

export default { fetchUserData };
