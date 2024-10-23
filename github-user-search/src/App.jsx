import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import { searchUsers } from './services/githubAPI';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchUsers(query);
    setUsers(data.items);  // Assuming GitHub API returns users in `items` field
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* SearchInput component */}
      <SearchInput onSearch={handleSearch} />

      {/* Display the results */}
      <div className="user-results">
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border p-4 mb-2 rounded">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
