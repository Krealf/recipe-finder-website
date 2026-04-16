import {ADD_RECIPES} from "./recipes-actions.js";
import {GET_RECIPE_BY_ID} from "./recipes-actions.js";

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RECIPES: {
      return action.recipes
    }

    default: {
      return state
    }
  }
}