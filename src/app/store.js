import { createStore, combineReducers } from 'redux';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from '../features/search/searchSlice.js';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';

const rootReducer = combineReducers({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
});

export const store = createStore(rootReducer);