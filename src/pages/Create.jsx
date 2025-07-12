import React, { useContext, useCallback } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext.jsx";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = React.memo(() => {
  const { setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = useCallback(
    (recipe) => {
      const newRecipe = {
        ...recipe,
        id: nanoid(),
        isFavorite: false,
      };
      setData((prevData) => [...prevData, newRecipe]);
      toast.success("New recipe created!");
      reset();
      navigate("/recipes");
    },
    [setData, navigate, reset]
  );

  return (
    <div className="max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Create New Recipe</h1>
      <form className="text-lg" onSubmit={handleSubmit(SubmitHandler)}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="url"
            placeholder="Recipe Image URL"
          />
          {errors.image && (
            <p className="text-red-400 mt-1">{errors.image.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Recipe Title"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Chef Name</label>
          <input
            {...register("chef", { required: "Chef name is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Chef Name"
          />
          {errors.chef && (
            <p className="text-red-400 mt-1">{errors.chef.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            {...register("desc", { required: "Description is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recipe description here..."
          ></textarea>
          {errors.desc && (
            <p className="text-red-400 mt-1">{errors.desc.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Ingredients</label>
          <textarea
            {...register("ingr", { required: "Ingredients are required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recipe ingredients here (separated by comma)..."
          ></textarea>
          {errors.ingr && (
            <p className="text-red-400 mt-1">{errors.ingr.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Instructions</label>
          <textarea
            {...register("inst", { required: "Instructions are required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recipe instructions here (separated by comma)..."
          ></textarea>
          {errors.inst && (
            <p className="text-red-400 mt-1">{errors.inst.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.category && (
            <p className="text-red-400 mt-1">{errors.category.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
});

export default Create;
