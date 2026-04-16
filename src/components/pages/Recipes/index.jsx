import styles from "./Recipes.module.scss";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

import { selectRecipes } from "@/store/recipes/recipes-selectors.js";
import CustomSelect from "@/components/atoms/CustomSelect/index.jsx";
import RecipesList from "@/components/organisms/RecipesList/index.jsx";
import SearchField from "@/components/organisms/SearchField/index.jsx";
import Preloader from "@/components/molecules/Preloader/index.jsx";

const Recipes = () => {
  const recipes = useSelector(selectRecipes);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const prepTime = searchParams.get("prep") ? Number(searchParams.get("prep")) : null;
  const cookTime = searchParams.get("cook") ? Number(searchParams.get("cook")) : null;

  const setParams = (type, value) => {
    setSearchParams((prevParams) => {
      if (value.trim()) {
        prevParams.set(type, value);
      } else {
        prevParams.delete(type);
      }

      return prevParams;
    });
  };

  const filteredRecipes = useMemo(() => {
    let result = recipes

    if (query.trim()) {
      const lowerQuery = query.toLowerCase();

      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
              item.ingredients.some((ing) => ing.includes(lowerQuery))

      )
    }

    if (prepTime !== null) {
      result = result.filter((recipe) => recipe.prepMinutes <= prepTime)
    }

    if (cookTime !== null) {
      result = result.filter((recipe) => recipe.cookMinutes <= cookTime)
    }

    return result
  }, [recipes, query, prepTime, cookTime]);

  return (
    <>
      <section className={`${styles.section}`}>
        <div className={`${styles.hero__inner} container`}>
          <h1 className={`${styles.hero__heading}`}>
            Explore our simple, healthy recipes
          </h1>
          <div className={`${styles.hero__description}`}>
            <p>
              Discover eight quick, whole-food dishes that fit real-life
              schedules and taste amazing. Use the search bar to find a recipe
              by name or ingredient, or simply scroll the list and let something
              delicious catch your eye.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.recipes}`}>
        <div className={`${styles.recipes__inner} container`}>
          <div className={`${styles.recipes__header}`}>
            <div className={`${styles.recipes__selects}`}>
              <CustomSelect
                title="Max Prep Time"
                options={["0 minutes", "5 minutes", "10 minutes"]}
                setParams={setParams}
                typeParams="prep"
                valueParams={prepTime}
              />
              <CustomSelect
                title="Max Cook Time"
                options={[
                  "0 minutes",
                  "5 minutes",
                  "10 minutes",
                  "15 minutes",
                  "20 minutes",
                ]}
                setParams={setParams}
                typeParams="cook"
                valueParams={cookTime}
              />
            </div>
            <SearchField
              placeholder="Search by name or ingredient…"
              name="search"
              id="search-by-name"
              setParams={setParams}
              typeParams="query"
              valueParams={query}
              className={`${styles.recipes__search}`}
            />
          </div>

          {!recipes.length ? (
            <Preloader />
          ) : (
            <RecipesList recipes={filteredRecipes} />
          )}
        </div>
      </section>
    </>
  );
};

export default Recipes;
