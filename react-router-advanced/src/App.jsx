import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  // Simulating user authentication status
  const isAuthenticated = true; // Change to false if user is not logged in

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
          <li><Link to="/blog/2">Blog Post 2</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Blog Post Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
