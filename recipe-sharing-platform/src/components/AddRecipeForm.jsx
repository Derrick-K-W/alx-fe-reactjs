import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error
    setError('');

    // Simple form validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required');
      return;
    }

    const ingredientList = ingredients.split('\n');
    if (ingredientList.length < 2) {
      setError('Please add at least two ingredients.');
      return;
    }

    // Normally, you would send the data to a server here
    console.log({ title, ingredients, steps });

    // Clear form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter each ingredient on a new line"
            rows="5"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter preparation steps"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
