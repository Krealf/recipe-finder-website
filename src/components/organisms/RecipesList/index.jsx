import styles from "./RecipesList.module.scss";
import RecipeItem from "@/components/organisms/RecipeItem/index.jsx";

const RecipesList = (props) => {
  const {
    recipes = []
  } = props

  return (
    <ul className={`${styles.recipes__list}`}>
      {
        recipes.map((recipe) => (
          <RecipeItem {...recipe} key={recipe.id}/>
        ))
      }
    </ul>
  );
};

export default RecipesList;