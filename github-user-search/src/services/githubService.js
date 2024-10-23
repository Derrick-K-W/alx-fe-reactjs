import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location, minRepos) => {
  const query = [
    username ? `in:login ${username}` : '',
    location ? `location:${location}` : '',
    minRepos ? `repos:>${minRepos}` : ''
  ]
    .filter(Boolean)
    .join(' ');

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
  return response.data.items;
};
