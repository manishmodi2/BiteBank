import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Favourite = () => {
    const { data, favorites } = useContext(recipecontext); 
    
    const favouriteRecipes = data.filter(recipe => 
        favorites.includes(recipe.id)
    );

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favouriteRecipes.length > 0 ? (
                    favouriteRecipes.map(recipe => (
                        <RecipeTemplate key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p className="text-gray-500">No favorites yet. Click the ♡ icon to add some!</p>
                )}
            </div>
        </div>
    );
};

export default Favourite;