import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { recipecontext } from "../context/RecipeContext.jsx";

const RecipeTemplate = React.memo(({ recipe }) => {
  const { toggleFavorite } = useContext(recipecontext);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  return (
    <Link to={`/recipes/detail/${recipe.id}`} className="block">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all text-sm sm:text-base" // Adjusted padding and text size for button
          aria-label={
            recipe.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {recipe.isFavorite ? (
            <FaHeart className="text-red-500 text-lg sm:text-xl" />
          ) : (
            <FaRegHeart className="text-gray-500 text-lg sm:text-xl hover:text-red-400" />
          )}
        </button>

        <div className="h-40 sm:h-48 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={
              recipe.image ||
              `https://placehold.co/400x250/cccccc/333333?text=No+Image`
            }
            alt={recipe.title}
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://placehold.co/400x250/cccccc/333333?text=No+Image`;
            }}
          />
        </div>

        <div className="p-4 sm:p-5 flex-grow flex flex-col">
          <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900 line-clamp-2 leading-tight">
            {recipe.title}
          </h3>

          <div className="mt-auto">
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="text-gray-600 font-medium">{recipe.chef}</span>
              <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 capitalize">
                {recipe.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default RecipeTemplate;
