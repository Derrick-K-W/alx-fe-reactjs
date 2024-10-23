import { Link } from 'react-router-dom';

// Inside the recipe card loop
<Link to={`/recipe/${recipe.id}`}>
  <div key={recipe.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>
</Link>
