import {combineReducers} from "redux";

import {recipesReducer} from "./recipes/recipes-reducer.js";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
})