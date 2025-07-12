import React from "react";

const About = React.memo(() => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About Recipe App</h1>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                    Recipe App is designed to help food enthusiasts discover, save, and share their favorite recipes.
                    Whether you're a professional chef or a home cook, our platform makes it easy to organize and
                    access your culinary creations.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2">
                    <li>Browse a wide variety of recipes</li>
                    <li>Save your favorite recipes with a simple click</li>
                    <li>Create and manage your own recipes</li>
                    <li>Organize recipes by categories</li>
                    <li>Detailed instructions and ingredient lists</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
                <ol className="list-decimal pl-5 text-gray-300 space-y-2">
                    <li>Browse recipes in the Recipes section</li>
                    <li>Click the heart icon to save favorites</li>
                    <li>View your saved recipes in the Favorites section</li>
                    <li>Create your own recipes using the Create Recipe button</li>
                    <li>Edit or delete your recipes anytime</li>
                </ol>
            </div>
        </div>
    );
});

export default About;
