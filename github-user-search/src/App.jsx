import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSearch = async (username) => {
    setLoading(true); // Start loading
    setError(null);   // Reset errors
    setUser(null);    // Reset user data

    try {
      const data = await fetchUserData(username);
      setUser(data); // Set the user data on success
    } catch (err) {
      setError('Looks like we can’t find the user'); // Handle the error
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* Search component */}
      <Search onSearch={handleSearch} />

      {/* Conditional rendering for loading, error, or user data */}
      <div className="user-results">
        {loading && <p>Loading...</p>} {/* Show while loading */}
        {error && <p className="text-red-500">{error}</p>} {/* Show if error */}
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
