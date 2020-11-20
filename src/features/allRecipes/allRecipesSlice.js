import data from '../../data.js'

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
