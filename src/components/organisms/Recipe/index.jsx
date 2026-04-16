import { Link } from "react-router";

import stylesMealRecipe from "@/components/organisms/RecipeItem/RecipeItem.module.scss";
import styles from "./Recipe.module.scss";

const Recipe = (props) => {
  const {
    id,
    title,
    slug,
    image,
    overview,
    servings,
    prepMinutes,
    cookMinutes,
    ingredients,
    instructions,
  } = props;

  const baseUrl = import.meta.env.BASE_URL;
  const cleanPath = image.large.replace(/^\.?\/?/, "");
  const imageUrl = `${baseUrl}${cleanPath}`;

  return (
    <>
      <nav aria-label="breadcrumbs">
        <ol className={`${styles.breadcrumb}`}>
          <li className={`${styles.breadcrumb__item}`}>
            <Link
              to="/recipe-finder-website/recipes"
              className={`${styles.breadcrumb__link}`}
            >
              Recipes
            </Link>
          </li>
          <li className={`${styles.breadcrumb__item}`}>
            <span>{title}</span>
          </li>
        </ol>
      </nav>
      <div className={`${styles.card}`}>
        <img src={imageUrl} alt="" width="580" height="580" loading="lazy" className={`${styles.card__image}`}/>
        <div className={`${styles.card__body}`}>
          <h2 className={`${styles.card__title}`}>{title}</h2>
          <div className={`${styles.card__description}`}>
            <p>{overview}</p>
          </div>
          <ul
            className={`${stylesMealRecipe.recipe__cards} ${styles.card__params}`}
          >
            <li className={`${stylesMealRecipe.recipe__card}`}>
              <span className={`${stylesMealRecipe.recipe__icon}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#163A34"
                    fillRule="evenodd"
                    d="M9.76 10.595c2.08 0 3.76-1.68 3.76-3.76.08-2.08-1.6-3.76-3.76-3.76-2.08 0-3.76 1.68-3.76 3.76s1.68 3.76 3.76 3.76ZM15.28 15.636c-.24-.88-.72-1.68-1.68-2.32-.8-.56-2.08-.96-3.84-.96-3.44 0-5.12 1.6-5.6 3.28-.16.48.08.96.48 1.2 1.44.96 3.2 1.44 5.12 1.44 1.84 0 3.6-.56 5.04-1.44.4-.24.64-.72.48-1.2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>{" "}
              Servings: {servings}
            </li>
            <li className={`${stylesMealRecipe.recipe__card}`}>
              <span className={`${stylesMealRecipe.recipe__icon}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    fill="#163A34"
                    fillRule="evenodd"
                    d="M13.002 13.088a.618.618 0 0 1-.859.216l-2.275-1.366a.616.616 0 0 1-.308-.534V8.463a.624.624 0 1 1 1.25 0v2.583l1.975 1.192c.3.175.4.558.217.85Zm-2.675-8.892a6.658 6.658 0 0 0-6.65 6.65 6.658 6.658 0 0 0 6.65 6.65 6.658 6.658 0 0 0 6.65-6.65 6.658 6.658 0 0 0-6.65-6.65ZM5.864 3.669a.624.624 0 1 0-.657-1.064A9.665 9.665 0 0 0 2.316 5.36a.625.625 0 0 0 1.032.705 8.422 8.422 0 0 1 2.516-2.396ZM18.349 5.36a9.613 9.613 0 0 0-2.901-2.764.626.626 0 0 0-.654 1.066 8.351 8.351 0 0 1 2.522 2.402.623.623 0 0 0 .868.164.625.625 0 0 0 .165-.868Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>{" "}
              Prep: {prepMinutes} mins
            </li>
            <li className={`${stylesMealRecipe.recipe__card}`}>
              <span className={`${stylesMealRecipe.recipe__icon}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#163A34"
                    d="M7.222 2.097a.625.625 0 1 0-.884.884.37.37 0 0 1 0 .524 1.621 1.621 0 0 0 0 2.293.625.625 0 1 0 .883-.884.37.37 0 0 1 0-.525 1.62 1.62 0 0 0 0-2.292ZM15.461 4.906a.625.625 0 1 0-.883-.884 1.62 1.62 0 0 0 0 2.293.625.625 0 0 0 .883-.885.37.37 0 0 1 0-.524ZM3.503 5.43a.625.625 0 0 0-.884.884.37.37 0 0 1 0 .524.625.625 0 0 0 .884.885 1.62 1.62 0 0 0 0-2.293Z"
                  />
                  <path
                    fill="#163A34"
                    fillRule="evenodd"
                    d="M10 5.218c-.955 0-1.727.774-1.727 1.728v.568c-3.156.669-5.525 3.129-5.347 6.095.013.22.195.392.416.392h13.316c.22 0 .403-.172.416-.392.178-2.966-2.192-5.426-5.347-6.095v-.568c0-.954-.774-1.728-1.727-1.728Zm.477 2.13v-.402a.478.478 0 1 0-.954 0v.401a8.45 8.45 0 0 1 .954 0Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="#163A34"
                    d="M2.332 15.07a.915.915 0 0 1 .585-.188h14.166c.21 0 .417.053.585.188a.84.84 0 0 1 .29.488c.07.32-.01.684-.106.972a1.974 1.974 0 0 1-1.872 1.349H4.02a1.973 1.973 0 0 1-1.872-1.349c-.096-.288-.175-.651-.106-.972a.84.84 0 0 1 .29-.488Z"
                  />
                </svg>
              </span>{" "}
              Cook: {cookMinutes} min
            </li>
          </ul>
          <div className={`${styles.card__list}`}>
            <h3 className={`${styles.sublist__title}`}>Ingredients:</h3>
            <ul className={`${styles.sublist__list}`}>
              {ingredients.map((item, index) => (
                <li key={index} className={`${styles.sublist__item}`}>
                  <span className={`${styles.sublist__icon}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#163A34"
                        d="m10.937 17.587-4.933.436A2.014 2.014 0 0 1 4 16c0-1.117.897-2.023 2.004-2.023l4.933.436c.868 0 1.572.71 1.572 1.587a1.58 1.58 0 0 1-1.572 1.588Z"
                        opacity=".4"
                      />
                      <path
                        fill="#163A34"
                        d="M27.5 17.507c-.078.078-.366.407-.636.68-1.578 1.71-5.699 4.509-7.855 5.365-.327.137-1.154.427-1.598.448-.423 0-.828-.098-1.213-.292a2.513 2.513 0 0 1-1.078-1.206c-.135-.35-.348-1.4-.348-1.419-.21-1.147-.325-3.012-.325-5.074 0-1.962.114-3.751.288-4.917.018-.021.23-1.324.462-1.77A2.42 2.42 0 0 1 17.334 8h.077c.577.02 1.79.526 1.79.543 2.041.857 6.064 3.52 7.682 5.29 0 0 .457.454.654.738.309.408.463.914.463 1.419 0 .564-.173 1.088-.5 1.517Z"
                      />
                    </svg>
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card__list}`}>
            <h3 className={`${styles.sublist__title}`}>Instructions:</h3>
            <ul className={`${styles.sublist__list}`}>
              {instructions.map((item, index) => (
                <li key={index} className={`${styles.sublist__item}`}>
                  <span className={`${styles.sublist__icon}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#163A34"
                        d="m10.937 17.587-4.933.436A2.014 2.014 0 0 1 4 16c0-1.117.897-2.023 2.004-2.023l4.933.436c.868 0 1.572.71 1.572 1.587a1.58 1.58 0 0 1-1.572 1.588Z"
                        opacity=".4"
                      />
                      <path
                        fill="#163A34"
                        d="M27.5 17.507c-.078.078-.366.407-.636.68-1.578 1.71-5.699 4.509-7.855 5.365-.327.137-1.154.427-1.598.448-.423 0-.828-.098-1.213-.292a2.513 2.513 0 0 1-1.078-1.206c-.135-.35-.348-1.4-.348-1.419-.21-1.147-.325-3.012-.325-5.074 0-1.962.114-3.751.288-4.917.018-.021.23-1.324.462-1.77A2.42 2.42 0 0 1 17.334 8h.077c.577.02 1.79.526 1.79.543 2.041.857 6.064 3.52 7.682 5.29 0 0 .457.454.654.738.309.408.463.914.463 1.419 0 .564-.173 1.088-.5 1.517Z"
                      />
                    </svg>
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
