import { useSelector } from 'react-redux';

import { 
  selectFilteredFavoriteRecipes, 
  removeRecipe } from './favoriteRecipesSlice.js';

export const FavoriteRecipes = () =>{
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);

  const onRemoveRecipeHandler = (recipe) => {
    ;//dispatch(removeRecipe(recipe));
  };
  
  return favoriteRecipes.map((recipe, i) => (
    <button key={recipe.name + i} onClick={() => onRemoveRecipeHandler(recipe)}>
      {recipe.name}
      <img alt={"An image of the recipe " + recipe.name} src={recipe.img}></img>
    </button>
  ))
};