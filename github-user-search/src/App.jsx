import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search /> {/* Directly use the Search component */}
    </div>
  );
}

export default App;
