import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // Ensure the error message is exactly as specified
      setError("Looks like we cant find the user"); // Correct phrasing
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {/* Display loading, error, or user data */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="border p-4 rounded shadow-lg">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-center text-xl mt-4">{user.name || user.login}</h2>
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
      )}
    </div>
  );
};

export default Search;
