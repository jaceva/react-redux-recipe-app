import { addRecipe } from '../../features/favoriteRecipes/favoriteRecipesSlice.js';

export const AllRecipes = ({ allRecipes, dispatch }) => {
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return allRecipes.map((recipe, i) => (
    <button key={recipe.name + i} onClick={() => onAddRecipeHandler(recipe)}>
      {recipe.name}
      <img alt={"An image of the recipe " + recipe.name} src={recipe.img}></img>
    </button>
  ))
};