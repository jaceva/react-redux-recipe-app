import { CaughtPokemon } from './feature/caughtPokemon/CaughtPokemon.js';
import { Search } from './feature/search/Search.js';
import { AllPokemon } from './feature/allPokemon/AllPokemon.js';

import { catchPokemon, releasePokemon } from './feature/caughtPokemon/caughtPokemonSlice.js';
import { setSearchTerm, clearSearchTerm } from './feature/search/searchSlice.js';

export function App({state, dispatch}) {

  const onAddPokemonHandler = (pokemon) => {
    dispatch(catchPokemon(pokemon));
  };

  const onRemovePokemonHandler = (pokemon) => {
    dispatch(releasePokemon(pokemon));
  };

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <main>
      <section>
        <Search
          searchTerm={state.searchTerm}
          onChangeHandler={onSearchChangeHandler}
          onClearSearchTermHandler={onSearchTermClearHandler}
        />
      </section>
      <section>
        <h3>Wild Pokemon</h3>
        <p>Click on a pokemon to catch it!</p>
        <AllPokemon 
          allPokemon={getFilteredAllPokemon(state)} 
          onAddPokemonHandler={onAddPokemonHandler} 
        />
      </section>
      <hr />
      <section>
        <h3>Caught Pokemon</h3> 
        <p>Click on a pokemon to release it back to the wild!</p>
        <CaughtPokemon
          caughtPokemon={state.caughtPokemon}
          onRemovePokemonHandler={onRemovePokemonHandler}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredAllPokemon({allPokemon, searchTerm, caughtPokemon}) {
  return allPokemon.filter((pokemon) => {
    const doesMatchSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    const isCaught = caughtPokemon.some(cp => pokemon.name === cp.name)
    return doesMatchSearch && !isCaught;
  })
}