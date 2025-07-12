import React, { useContext, useCallback } from 'react'; 
import { useNavigate, useParams, Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext.jsx";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Recipe = React.memo(() => {
    const { id } = useParams();
    const { data, toggleFavorite, favorites, deleteRecipe } = useContext(recipecontext);
    const recipe = data.find((r) => r.id === id);
    const isFavorite = favorites.includes(id);

    const navigate = useNavigate();

    const handleDelete = useCallback(() => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(id);
            toast.success("Recipe deleted!");
            navigate("/recipes");
        }
    }, [deleteRecipe, id, navigate]); 

    const handleFavoriteClick = useCallback(() => {
        toggleFavorite(id);
    }, [toggleFavorite, id]); 

    if (!recipe) {
        return (
            <div className="w-full text-center py-20">
                <p className="text-xl">Recipe not found!</p>
                <Link to="/recipes" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go to Recipes
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col p-4 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-4xl font-bold">{recipe.title}</h1>
                    <button
                        onClick={handleFavoriteClick}
                        className="text-2xl p-2"
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-300" />}
                    </button>
                </div>

                <img
                    className="w-full h-[40vh] object-cover rounded-lg mb-6"
                    src={recipe.image}
                    alt={recipe.title}
                />
                <p className="text-gray-300 mb-6">{recipe.desc}</p>

                <div className="flex gap-4 mb-6">
                    <span className="text-white bg-red-500 rounded-full px-4 py-1">
                        {recipe.chef}
                    </span>
                    <span className="text-white bg-green-500 rounded-full px-4 py-1">
                        {recipe.category}
                    </span>
                </div>

                <div className="mb-6">
                    <h1 className="text-2xl font-semibold mb-3">Ingredients</h1>
                    <ul className="list-disc pl-5 text-gray-300">
                        {recipe.ingr.split(',').map((ingredient, index) => (
                            <li key={index} className="mb-1">{ingredient.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold mb-3">Instructions</h1>
                    <ol className="list-decimal pl-5 text-gray-300">
                        {recipe.inst.split('.').filter(step => step.trim() !== '').map((step, index) => (
                            <li key={index} className="mb-2">{step.trim()}</li>
                        ))}
                    </ol>
                </div>

                <div className="flex gap-4 mt-8 justify-center">
                    <Link
                        to={`/recipes/update-recipe/${recipe.id}`}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Update Recipe
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                        Delete Recipe
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Recipe;
