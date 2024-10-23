import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const searchUsers = async (query) => {
  const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
    params: { q: query },
  });
  return response.data;
};

export { searchUsers };
