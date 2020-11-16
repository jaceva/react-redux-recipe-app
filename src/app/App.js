import { CaughtPokemon } from '../features/caughtPokemon/CaughtPokemon.js';
import { Search } from '../features/search/Search.js';
import { AllPokemon } from '../features/allPokemon/AllPokemon.js';

export function App({state, dispatch}) {
  return (
    <main>
      <section>
        <Search
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h3>Wild Pokemon</h3>
        <p>Click on a pokemon to catch it!</p>
        <AllPokemon 
          allPokemon={getFilteredAllPokemon(state)} 
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h3>Caught Pokemon</h3> 
        <p>Click on a pokemon to release it back to the wild!</p>
        <CaughtPokemon
          caughtPokemon={state.caughtPokemon}
          dispatch={dispatch}
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