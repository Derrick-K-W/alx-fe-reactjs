import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw error; // Throw error to be handled in Search.jsx
  }
};

export { fetchUserData };
