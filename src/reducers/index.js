import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

const appReducer = combineReducers({
  movies: movieReducer,
});

export default appReducer;
