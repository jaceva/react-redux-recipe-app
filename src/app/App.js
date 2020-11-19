import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';
import { Search } from '../features/search/Search.js';
import { AllRecipes } from '../features/allRecipes/AllRecipes.js';

export function App(props) {
  const {state, dispatch} = props;
  return (
    <main>
      <section>
        <Search
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h3>All Recipes</h3>
        <AllRecipes
          allRecipes={getFilteredAllRecipes(state)} 
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h3>Favorite Recipes</h3> 
        <FavoriteRecipes
          favoriteRecipes={state.favoriteRecipes}
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredAllRecipes({allRecipes, searchTerm, favoriteRecipes}) {
  return allRecipes.filter((recipe) => {
    const doesMatchSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    const isFavorited = favoriteRecipes.some(favoriteRecipe => recipe.name === favoriteRecipe.name)
    return doesMatchSearch && !isFavorited;
  })
}