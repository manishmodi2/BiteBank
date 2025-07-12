import React, { useContext, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext.jsx";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Update = React.memo(() => {
  const { id } = useParams();
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();

  const recipeToUpdate = data.find((r) => r.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: recipeToUpdate || {},
  });

  useEffect(() => {
    if (!recipeToUpdate) {
      toast.error("Recipe not found for update.");
      navigate("/recipes");
    } else {
      reset(recipeToUpdate);
    }
  }, [recipeToUpdate, reset, navigate]);

  const SubmitHandler = useCallback(
    (updatedRecipe) => {
      setData((prevData) =>
        prevData.map((r) => (r.id === id ? { ...r, ...updatedRecipe } : r))
      );
      toast.success("Recipe updated successfully!");
      navigate(`/recipes/detail/${id}`);
    },
    [setData, id, navigate]
  );

  if (!recipeToUpdate) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-700 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg my-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
        Update Recipe
      </h1>
      <form
        className="text-base sm:text-lg"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-300 mb-2">
            Image URL
          </label>
          <input
            id="image"
            {...register("image", { required: "Image URL is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            type="url"
            placeholder="Recipe Image URL"
          />
          {errors.image && (
            <p className="text-red-400 mt-1 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-300 mb-2">
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            type="text"
            placeholder="Recipe Title"
          />
          {errors.title && (
            <p className="text-red-400 mt-1 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="chef" className="block text-gray-300 mb-2">
            Chef Name
          </label>
          <input
            id="chef"
            {...register("chef", { required: "Chef name is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            type="text"
            placeholder="Chef Name"
          />
          {errors.chef && (
            <p className="text-red-400 mt-1 text-sm">{errors.chef.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="block text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="desc"
            {...register("desc", { required: "Description is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Recipe description here..."
          ></textarea>
          {errors.desc && (
            <p className="text-red-400 mt-1 text-sm">{errors.desc.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="ingr" className="block text-gray-300 mb-2">
            Ingredients
          </label>
          <textarea
            id="ingr"
            {...register("ingr", { required: "Ingredients are required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Recipe ingredients here (separated by comma)..."
          ></textarea>
          {errors.ingr && (
            <p className="text-red-400 mt-1 text-sm">{errors.ingr.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="inst" className="block text-gray-300 mb-2">
            Instructions
          </label>
          <textarea
            id="inst"
            {...register("inst", { required: "Instructions are required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Recipe instructions here (separated by comma)..."
          ></textarea>
          {errors.inst && (
            <p className="text-red-400 mt-1 text-sm">{errors.inst.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-300 mb-2">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="w-full bg-gray-800 border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            <option value="">Select a Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.category && (
            <p className="text-red-400 mt-1 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
});

export default Update;
