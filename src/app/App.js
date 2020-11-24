import { useEffect } from 'react';

import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';
import { Search } from '../features/search/Search.js';
import { AllRecipes } from '../features/allRecipes/AllRecipes.js';

import { loadData } from '../features/allRecipes/allRecipesSlice'

export function App() {
  useEffect(() => {
    dispatch(loadData());
  }, [])

  return (
    <main>
      <section>
        <Search/>
      </section>
      <section>
        <h3>All Recipes</h3>
        <AllRecipes/>
      </section>
      <hr />
      <section>
        <h3>Favorite Recipes</h3> 
        <FavoriteRecipes/>
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter((recipe) => {
    const doesMatchSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    return doesMatchSearch;
  })
}