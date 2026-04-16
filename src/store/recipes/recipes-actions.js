export const ADD_RECIPES = "ADD_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";


export const addRecipes = (recipes) => ({
  type: ADD_RECIPES,
  recipes
})

export const getRecipeById = (idMeal) => ({
  type: GET_RECIPE_BY_ID,
  idMeal
})