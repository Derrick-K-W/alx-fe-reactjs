import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Display user results */}
      {users.length > 0 && users.map(user => (
        <div key={user.id} className="border p-4 rounded shadow-lg mb-4">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-center text-xl mt-4">{user.login}</h2>
          <p className="text-center">
            Location: {user.location || 'N/A'}
          </p>
          <p className="text-center">
            Repositories: {user.public_repos || 0}
          </p>
          <p className="text-center">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Search;
