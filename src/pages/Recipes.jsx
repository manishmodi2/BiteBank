import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext.jsx";
import RecipeTemplate from "../components/RecipeTemplate.jsx";

const Recipes = React.memo(() => {
  const { data } = useContext(recipecontext);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">All Recipes</h1>
        <Link
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 font-medium"
          to="/recipes/create-recipe"
        >
          Create Recipe
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((recipe) => (
            <RecipeTemplate key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No recipes found
              </h3>
              <p className="mt-2 text-gray-500">
                Get started by creating your first recipe
              </p>
              <Link
                to="/recipes/create-recipe"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Create Recipe
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Recipes;
