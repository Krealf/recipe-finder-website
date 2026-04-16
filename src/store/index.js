import {createStore} from "redux";

import {rootReducer} from "@/store/root-reducer.js";

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store}