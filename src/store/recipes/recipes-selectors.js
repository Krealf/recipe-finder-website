export const selectRecipes = (state) => (state.recipes)

export const selectRecipeById = (state, idMeal) => {
  return state.recipes.find(recipe => recipe.id === idMeal)
}