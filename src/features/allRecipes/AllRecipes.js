import { useSelector } from 'react-redux';

import { selectFilteredAllRecipes } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onAddRecipeHandler = (recipe) => {
    ;//dispatch(addRecipe(recipe));
  };

  return allRecipes.map((recipe, i) => (
    <button key={recipe.name + i} onClick={() => onAddRecipeHandler(recipe)}>
      {recipe.name}
      <img alt={"An image of the recipe " + recipe.name} src={recipe.img}></img>
    </button>
  ))
};