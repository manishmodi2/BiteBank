import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Recipe from "../pages/Recipe";
import About from "../pages/About";
import Favourite from "../pages/Favourite";
import Create from "../pages/Create";
import PageNotFound from "../pages/PagenotFound";
import Update from "../pages/Update";
import { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("../pages/About"));
const LazyFavourite = lazy(() => import("../pages/Favourite"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes">
        <Route index element={<Recipes />} />
        <Route path="create-recipe" element={<Create />} />
        <Route path="detail/:id" element={<Recipe />} />
        <Route path="update-recipe/:id" element={<Update />} />
      </Route>
      
      <Route 
        path="/about" 
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </Suspense>
        } 
      />
      <Route 
        path="/favorite" 
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyFavourite />
          </Suspense>
        } 
      />
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;