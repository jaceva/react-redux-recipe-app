import { removeRecipe } from '../../features/favoriteRecipes/favoriteRecipesSlice.js';

export const FavoriteRecipes = ({ favoriteRecipes, dispatch }) =>{
  
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe.id));
  };
  
  return favoriteRecipes.map((recipe, i) => (
    <button key={recipe.name + i} onClick={() => onRemoveRecipeHandler(recipe)}>
      {recipe.name}
      <img alt={"An image of the recipe " + recipe.name} src={recipe.img}></img>
    </button>
  ))
};