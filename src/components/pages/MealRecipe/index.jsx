import { useMatches, useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  selectRecipeById,
  selectRecipes
} from "@/store/recipes/recipes-selectors.js";
import Preloader from "@/components/molecules/Preloader/index.jsx";
import Recipe from "@/components/organisms/Recipe/index.jsx";

import styles from "./MealRecipe.module.scss";
import RecipeItem from "@/components/organisms/RecipeItem/index.jsx";

const MealRecipe = () => {
  const { idMeal } = useParams();
  const recipes = useSelector(selectRecipes).slice(0, 3)
  const recipe = useSelector((state) =>
    selectRecipeById(state, Number(idMeal)),
  );
  let matches = useMatches();

  return (
    <>
      <section className={`${styles.recipe}`}>
        <div className={`container ${styles.recipe__inner}`}>
          {!recipe ? <Preloader /> : <Recipe {...recipe} />}
        </div>
      </section>
      <section className={`${styles.moreRecipes}`}>
        <div className={`container ${styles.moreRecipes__inner}`}>
          <div className={`${styles.moreRecipes__title}`}>
            More recipes
          </div>
          <div className={`${styles.moreRecipes__similar}`}>
            {recipes.map((recipe) => (
              <RecipeItem {...recipe} key={recipe.id}/>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default MealRecipe;
