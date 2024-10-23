import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw error to handle it in the component
  }
};

export { fetchUserData };
