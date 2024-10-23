import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();  // Get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe?.id);

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite button */}
      <button
        onClick={() => {
          if (isFavorite) {
            removeFavorite(recipe.id);
          } else {
            addFavorite(recipe.id);
          }
        }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
