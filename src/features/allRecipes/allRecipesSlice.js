import data from '../../data.js'
import { selectSearchTerm } from "../search/searchSlice";

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: data
  }
}

const initialState = [];
export const allRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return data;
    case 'favoriteRecipes/addRecipe':
      return state.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...state, action.payload]
    default:
      return state;
  }
}

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};