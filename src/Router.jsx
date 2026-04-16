import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router";
import Home from "@/components/pages/Home/index.jsx";
import About from "@/components/pages/About/index.jsx";
import RecipesLayout from "@/components/organisms/RecipesLayout/index.jsx";
import Recipes from "@/components/pages/Recipes/index.jsx";
import MealRecipe from "@/components/pages/MealRecipe/index.jsx";
import NotFound from "@/components/pages/NotFound/index.jsx";
import AppLayout from "@/AppLayout.jsx";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AppLayout />}
      path="/recipe-finder-website"
    >
      <Route
        index
        element={<Home />}
      ></Route>
      <Route
        path="about"
        element={<About />}
      ></Route>
      <Route
        path="recipes"
        element={<RecipesLayout />}
      >
        <Route
          index
          element={<Recipes />}
        ></Route>
        <Route
          path=":idMeal"
          element={<MealRecipe />}
        ></Route>
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Route>
  )
)
