import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router and Routes
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';  // Assuming you have a RecipeDetails component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        
        {/* Define Routes for the application */}
        <Routes>
          <Route path="/" element={<RecipeList />} />  {/* Route for RecipeList */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />  {/* Route for RecipeDetails */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
