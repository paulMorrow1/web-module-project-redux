import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

import favoritesReducer from "./favoritesReducer";

const appReducer = combineReducers({
  movies: movieReducer,
  favMovies: favoritesReducer,
});

export default appReducer;
