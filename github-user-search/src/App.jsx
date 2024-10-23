import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null); // Holds the GitHub user data
  const [loading, setLoading] = useState(false); // Handles loading state
  const [error, setError] = useState(null); // Handles error state

  const handleSearch = async (username) => {
    setLoading(true); // Start loading when search starts
    setError(null); // Clear any previous errors
    setUser(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Call the API function
      setUser(data); // Set the user data once the request is successful
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error message
    } finally {
      setLoading(false); // End the loading state
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* Search component */}
      <Search onSearch={handleSearch} />

      {/* Conditional rendering based on the loading, error, or user data */}
      <div className="user-results mt-6">
        {loading && <p>Loading...</p>} {/* Loading state */}
        {error && <p className="text-red-500">{error}</p>} {/* Error message */}
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
    </div>
  );
}

export default App;
