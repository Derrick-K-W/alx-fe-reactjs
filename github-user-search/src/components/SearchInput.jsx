import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);  // Pass the query back to the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub username"
        className="border rounded p-2 w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
