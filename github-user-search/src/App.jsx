import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      {/* Placeholder for search input */}
      <div className="search-input">
        <p>Search for GitHub users here</p>
      </div>
      {/* Placeholder for user results */}
      <div className="user-results">
        <p>User results will be displayed here</p>
      </div>
    </div>
  );
}

export default App;
