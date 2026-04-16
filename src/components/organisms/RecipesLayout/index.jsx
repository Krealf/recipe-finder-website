import styles from "./RecipesLayout.module.scss"

import {Outlet} from "react-router";

const RecipesLayout = () => {
  return (
    <Outlet />
  );
};

export default RecipesLayout;