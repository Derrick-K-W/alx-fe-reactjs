import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // Track form errors

  // Validate form input
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = ingredients.split('\n');
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please add at least two ingredients';
      }
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(); // Perform validation

    if (Object.keys(formErrors).length === 0) {
      // If no validation errors, submit the form
      console.log({
        title,
        ingredients: ingredients.split('\n'), // Split ingredients into an array
        steps,
      });

      // Clear form after submission
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({}); // Reset errors
    } else {
      // Set validation errors
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {/* Display error message for title */}
        {errors.title && <p className="text-red-500 mb-2">{errors.title}</p>}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Display error message for ingredients */}
        {errors.ingredients && <p className="text-red-500 mb-2">{errors.ingredients}</p>}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter each ingredient on a new line"
            rows="5"
          />
        </div>

        {/* Display error message for steps */}
        {errors.steps && <p className="text-red-500 mb-2">{errors.steps}</p>}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
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
