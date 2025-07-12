import { createContext, useState, useEffect, useCallback } from "react";

export const recipecontext = createContext(null);

const defaultRecipes = [
  {
    id: "sdjkn9834njk",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz2NShr68Y59PzDYJig4IL1Z8CkQI5Rg9FZbwRtKoZrIi-1457rOVUNubZwJIIACZ3LY&usqp=CAU",
    title: "Classic Margherita Pizza",
    chef: "Chef Aman",
    category: "dinner",
    desc: "A simple and delicious pizza topped with fresh mozzarella, basil, and a drizzle of olive oil. Perfect for pizza lovers!",
    ingr: "Pizza dough,Tomato sauce,Fresh mozzarella cheese,Fresh basil leaves,Olive oil,Salt and pepper to taste",
    inst: "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.",
    isFavorite: false,
  },
  {
    id: "abcde12345",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    title: "Spicy Chicken Stir-fry",
    chef: "Chef Emily",
    category: "lunch",
    desc: "A quick and flavorful stir-fry with tender chicken and crisp vegetables, tossed in a spicy sauce.",
    ingr: "Chicken breast,Bell peppers,Broccoli,Soy sauce,Chili garlic sauce,Ginger,Garlic,Sesame oil,Rice",
    inst: "Slice chicken and vegetables. Heat oil in a wok, stir-fry chicken until cooked. Add vegetables and stir-fry until tender-crisp. Mix soy sauce, chili garlic, ginger, and garlic. Pour over chicken and vegetables, cook for 2 minutes. Serve hot with rice.",
    isFavorite: false,
  },
  {
    id: "fghij67890",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    title: "Creamy Tomato Pasta",
    chef: "Maria Rossi",
    category: "dinner",
    desc: "A comforting pasta dish with a rich and creamy tomato sauce, perfect for a weeknight meal.",
    ingr: "Pasta,Canned crushed tomatoes,Heavy cream,Onion,Garlic,Parmesan cheese,Fresh basil,Olive oil,Salt,Pepper",
    inst: "Cook pasta according to package directions. Sauté onion and garlic in olive oil. Add crushed tomatoes, simmer for 10 minutes. Stir in heavy cream and Parmesan cheese. Drain pasta, add to sauce, toss to combine. Garnish with fresh basil.",
    isFavorite: false,
  },
  {
    id: "klmno12345",
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    title: "Vegetable Lasagna",
    chef: "Chef David",
    category: "dinner",
    desc: "Layers of pasta, rich tomato sauce, creamy ricotta, and fresh vegetables baked to perfection.",
    ingr: "Lasagna noodles,Ricotta cheese,Spinach,Zucchini,Bell peppers,Marinara sauce,Mozzarella cheese,Parmesan cheese,Eggs,Herbs",
    inst: "Cook noodles. Sauté vegetables. Mix ricotta, spinach, egg, and herbs. Layer noodles, sauce, vegetables, ricotta, and mozzarella in a baking dish. Repeat layers. Top with Parmesan. Bake until bubbly and golden.",
    isFavorite: false,
  },
  {
    id: "pqrst67890",
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    title: "Lemon Herb Roasted Chicken",
    chef: "Sophie Dubois",
    category: "dinner",
    desc: "A whole roasted chicken infused with zesty lemon and aromatic herbs, resulting in a juicy and flavorful meal.",
    ingr: "Whole chicken,Lemons,Rosemary,Thyme,Garlic,Olive oil,Salt,Pepper",
    inst: "Preheat oven. Pat chicken dry. Rub with olive oil, salt, pepper, minced garlic, and chopped herbs. Stuff cavity with lemon halves and more herbs. Roast until internal temperature reaches 165°F (74°C). Rest before carving.",
    isFavorite: false,
  },
  {
    id: "uvwxy12345",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    title: "Quinoa Salad with Roasted Vegetables",
    chef: "Dr. Green",
    category: "lunch",
    desc: "A healthy and vibrant salad featuring fluffy quinoa and a medley of roasted seasonal vegetables.",
    ingr: "Quinoa,Broccoli,Carrots,Sweet potato,Cherry tomatoes,Feta cheese,Lemon vinaigrette,Olive oil,Salt,Pepper",
    inst: "Cook quinoa. Chop vegetables, toss with olive oil, salt, and pepper, then roast until tender. Combine cooked quinoa, roasted vegetables, and crumbled feta cheese. Drizzle with lemon vinaigrette and toss gently.",
    isFavorite: false,
  },
  {
    id: "zabcd67890",
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    title: "Beef Tacos with Avocado Crema",
    chef: "Juan Carlos",
    category: "dinner",
    desc: "Flavorful ground beef tacos served in warm tortillas, topped with fresh salsa and a creamy avocado crema.",
    ingr: "Ground beef,Taco shells,Lettuce,Tomato,Onion,Cheddar cheese,Avocado,Sour cream,Lime,Taco seasoning",
    inst: "Cook ground beef with taco seasoning. Warm taco shells. Prepare toppings: shred lettuce, dice tomato and onion, grate cheese. For avocado crema, blend avocado, sour cream, and lime juice. Assemble tacos with beef and desired toppings.",
    isFavorite: false,
  },
  {
    id: "efghi12345",
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    title: "Blueberry Pancakes",
    chef: "Grandma's Kitchen",
    category: "breakfast",
    desc: "Fluffy pancakes loaded with fresh blueberries, perfect for a delightful breakfast or brunch.",
    ingr: "All-purpose flour,Baking powder,Sugar,Salt,Milk,Egg,Melted butter,Blueberries,Maple syrup",
    inst: "Whisk dry ingredients. In a separate bowl, whisk wet ingredients. Combine wet and dry ingredients, mix until just combined (do not overmix). Gently fold in blueberries. Pour batter onto a hot griddle. Cook until bubbles form, flip, and cook until golden brown. Serve with maple syrup.",
    isFavorite: false,
  },
  {
    id: "jklmn67890",
    image: "https://cdn.dummyjson.com/recipe-images/9.webp",
    title: "Spicy Lentil Soup",
    chef: "Aisha Khan",
    category: "lunch",
    desc: "A hearty and warming lentil soup with a kick of spices, ideal for a comforting meal.",
    ingr: "Red lentils,Vegetable broth,Carrots,Celery,Onion,Garlic,Cumin,Coriander,Turmeric,Chili powder,Tomato paste,Olive oil",
    inst: "Sauté onion, carrots, celery, and garlic in olive oil. Add spices and tomato paste, cook for 1 minute. Stir in red lentils and vegetable broth. Bring to a boil, then reduce heat and simmer until lentils are tender. Season to taste.",
    isFavorite: false,
  },
  {
    id: "opqrs12345",
    image: "https://cdn.dummyjson.com/recipe-images/10.webp",
    title: "Chocolate Lava Cake",
    chef: "Patisserie Pierre",
    category: "dessert",
    desc: "Indulgent individual chocolate cakes with a molten, gooey center, a perfect treat for chocolate lovers.",
    ingr: "Dark chocolate,Unsalted butter,Eggs,Egg yolks,Sugar,All-purpose flour,Cocoa powder,Vanilla extract,Salt",
    inst: "Preheat oven. Grease and flour ramekins. Melt chocolate and butter together. Whisk eggs, egg yolks, and sugar until pale. Fold melted chocolate mixture into egg mixture. Sift in flour, cocoa powder, and salt, fold until just combined. Stir in vanilla. Pour batter into ramekins. Bake until edges are set but center is still gooey. Invert onto plates and serve immediately.",
    isFavorite: false,
  },
  {
    id: "qrstu67890",
    image: "https://cdn.dummyjson.com/recipe-images/11.webp",
    title: "Chicken Caesar Salad",
    chef: "Salad Master",
    category: "lunch",
    desc: "A classic Caesar salad with grilled chicken, crisp romaine, croutons, and a creamy dressing.",
    ingr: "Chicken breast,Romaine lettuce,Croutons,Parmesan cheese,Caesar dressing,Olive oil,Salt,Pepper",
    inst: "Grill chicken breast. Chop romaine lettuce. Toss lettuce with Caesar dressing, croutons, and grated Parmesan. Slice grilled chicken and arrange on top. Season with salt and pepper.",
    isFavorite: false,
  },
  {
    id: "vwxyz12345",
    image: "https://cdn.dummyjson.com/recipe-images/12.webp",
    title: "Spaghetti Carbonara",
    chef: "Giovanni Pasta",
    category: "dinner",
    desc: "A rich and creamy Italian pasta dish made with eggs, hard cheese, cured pork, and black pepper.",
    ingr: "Spaghetti,Guanciale (or pancetta),Eggs,Pecorino Romano cheese,Black pepper",
    inst: "Cook spaghetti. While pasta cooks, crisp guanciale in a pan. In a bowl, whisk eggs with grated Pecorino Romano and black pepper. Drain pasta, reserving some pasta water. Add hot pasta to the pan with guanciale, toss. Slowly add egg mixture and a splash of pasta water, tossing constantly until a creamy sauce forms. Serve immediately.",
    isFavorite: false,
  },
  {
    id: "abcde54321",
    image: "https://cdn.dummyjson.com/recipe-images/13.webp",
    title: "Shrimp Scampi with Linguine",
    chef: "Seafood Chef",
    category: "dinner",
    desc: "Succulent shrimp sautéed with garlic, butter, white wine, and lemon, served over linguine.",
    ingr: "Shrimp,Linguine,Garlic,Butter,White wine,Lemon juice,Parsley,Red pepper flakes,Olive oil,Salt,Pepper",
    inst: "Cook linguine. Sauté garlic in olive oil and butter. Add shrimp and red pepper flakes, cook until pink. Deglaze with white wine, then add lemon juice and parsley. Toss cooked linguine with the shrimp scampi sauce. Season and serve.",
    isFavorite: false,
  },
  {
    id: "fghij98765",
    image: "https://cdn.dummyjson.com/recipe-images/14.webp",
    title: "Classic Beef Chili",
    chef: "Chili King",
    category: "dinner",
    desc: "A hearty and flavorful beef chili, slow-cooked with beans, tomatoes, and a blend of spices.",
    ingr: "Ground beef,Kidney beans,Diced tomatoes,Tomato sauce,Onion,Garlic,Chili powder,Cumin,Oregano,Beef broth,Salt,Pepper",
    inst: "Brown ground beef, drain fat. Sauté onion and garlic. Add beef, beans, diced tomatoes, tomato sauce, beef broth, and spices. Bring to a simmer, then reduce heat and cook for at least 30 minutes (longer for more flavor). Season to taste. Serve with desired toppings.",
    isFavorite: false,
  },
  {
    id: "klmno43210",
    image: "https://cdn.dummyjson.com/recipe-images/15.webp",
    title: "Caprese Skewers",
    chef: "Italian Bites",
    category: "appetizer",
    desc: "Simple and elegant skewers featuring cherry tomatoes, fresh mozzarella balls, and basil leaves, drizzled with balsamic glaze.",
    ingr: "Cherry tomatoes,Fresh mozzarella balls (bocconcini),Fresh basil leaves,Balsamic glaze",
    inst: "Thread cherry tomatoes, mozzarella balls, and basil leaves onto small skewers. Arrange on a platter. Drizzle generously with balsamic glaze just before serving.",
    isFavorite: false,
  },
  {
    id: "pqrst09876",
    image: "https://cdn.dummyjson.com/recipe-images/16.webp",
    title: "Chicken Noodle Soup",
    chef: "Comfort Food Co.",
    category: "lunch",
    desc: "A comforting and classic chicken noodle soup, perfect for a cold day or when you need a warm hug.",
    ingr: "Chicken broth,Cooked chicken (shredded),Egg noodles,Carrots,Celery,Onion,Garlic,Parsley,Salt,Pepper",
    inst: "Sauté chopped carrots, celery, and onion in a pot until softened. Add minced garlic and cook for 1 minute. Pour in chicken broth and bring to a boil. Add shredded cooked chicken and egg noodles. Cook until noodles are tender. Stir in fresh parsley. Season with salt and pepper to taste.",
    isFavorite: false,
  },
  {
    id: "uvwxy98765",
    image: "https://cdn.dummyjson.com/recipe-images/17.webp",
    title: "Baked Salmon with Asparagus",
    chef: "Healthy Plate",
    category: "dinner",
    desc: "A simple and nutritious meal featuring perfectly baked salmon fillets and tender asparagus.",
    ingr: "Salmon fillets,Asparagus spears,Olive oil,Lemon,Dill,Garlic powder,Salt,Pepper",
    inst: "Preheat oven to 400°F (200°C). Arrange salmon fillets and asparagus on a baking sheet. Drizzle with olive oil, season with salt, pepper, garlic powder, and dill. Squeeze fresh lemon juice over everything. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily.",
    isFavorite: false,
  },
  {
    id: "zabcd54321",
    image: "https://cdn.dummyjson.com/recipe-images/18.webp",
    title: "Mushroom Risotto",
    chef: "Risotto Master",
    category: "dinner",
    desc: "A creamy and flavorful Italian risotto made with Arborio rice and earthy mushrooms.",
    ingr: "Arborio rice,Mushrooms (cremini or shiitake),Vegetable broth,Parmesan cheese,Onion,Garlic,White wine,Olive oil,Butter,Parsley,Salt,Pepper",
    inst: "Sauté chopped onion and garlic in olive oil and butter. Add Arborio rice, stir until translucent. Pour in white wine, cook until absorbed. Gradually add warm vegetable broth, one ladle at a time, stirring constantly until each addition is absorbed before adding more. When rice is creamy and al dente, stir in sautéed mushrooms, grated Parmesan, and fresh parsley. Season with salt and pepper.",
    isFavorite: false,
  },
  {
    id: "efghi98765",
    image: "https://cdn.dummyjson.com/recipe-images/19.webp",
    title: "Greek Salad",
    chef: "Mediterranean Delight",
    category: "lunch",
    desc: "A refreshing and vibrant Greek salad with crisp vegetables, olives, and feta cheese, dressed with a simple vinaigrette.",
    ingr: "Cucumber,Tomatoes,Red onion,Kalamata olives,Feta cheese,Bell peppers,Olive oil,Red wine vinegar,Dried oregano,Salt,Pepper",
    inst: "Chop cucumber, tomatoes, red onion, and bell peppers. Combine vegetables in a large bowl with Kalamata olives. Crumble feta cheese over the top. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper. Pour dressing over the salad and toss gently to combine.",
    isFavorite: false,
  },
  {
    id: "jklmn43210",
    image: "https://cdn.dummyjson.com/recipe-images/20.webp",
    title: "Apple Crumble",
    chef: "Dessert Queen",
    category: "dessert",
    desc: "A classic British dessert with tender baked apples topped with a buttery, crumbly oat topping.",
    ingr: "Apples (Granny Smith recommended),All-purpose flour,Rolled oats,Brown sugar,Granulated sugar,Cinnamon,Nutmeg,Cold butter",
    inst: "Preheat oven. Peel, core, and slice apples, then toss with granulated sugar, cinnamon, and nutmeg. Place apples in a baking dish. For the crumble topping, combine flour, rolled oats, brown sugar, and cold butter (cut into small pieces) in a bowl. Rub with your fingertips until crumbly. Sprinkle topping evenly over the apples. Bake until apples are tender and topping is golden brown and crisp. Serve warm with ice cream or custard.",
    isFavorite: false,
  },
];

const RecipeContext = ({ children }) => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : defaultRecipes;
  });

  const [favorites, setFavorites] = useState(() => {
    const localFavs = localStorage.getItem("favorites");
    return localFavs ? JSON.parse(localFavs) : [];
  });

  const toggleFavorite = useCallback((id) => {
    setData((prevData) =>
      prevData.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );

    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  }, []);

  const deleteRecipe = useCallback((id) => {
    setData((prevData) => prevData.filter((r) => r.id !== id));
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== id)
    );
  }, []);

  const resetRecipes = useCallback(() => {
    localStorage.removeItem("recipes");
    localStorage.removeItem("favorites");
    setData(defaultRecipes);
    setFavorites([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <recipecontext.Provider
      value={{
        data,
        setData,
        favorites,
        toggleFavorite,
        deleteRecipe,
        resetRecipes,
      }}
    >
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
