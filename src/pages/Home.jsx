import React from "react";
import { Link } from "react-router-dom";
const Home = React.memo(() => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to Recipe App</h1>
      <p className="text-xl mb-10 max-w-2xl mx-auto">
        Discover delicious recipes, save your favorites, and create your own
        culinary masterpieces!
      </p>
      <div className="flex justify-center gap-6">
        <Link
          to="/recipes"
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Browse Recipes
        </Link>
        <Link
          to="/recipes/create-recipe"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Create Recipe
        </Link>
      </div>
    </div>
  );
});

export default Home;
