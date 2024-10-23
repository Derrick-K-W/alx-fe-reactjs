import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(''); // Handles input state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onSearch(username); // Call the function passed as a prop to handle API request
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
    </div>
  );
};

export default Search;
