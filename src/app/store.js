import { createStore, combineReducers } from 'redux';
import { caughtPokemonReducer } from '../features/caughtPokemon/caughtPokemonSlice.js';
import { searchTermReducer } from '../features/search/searchSlice.js';
import { allPokemonReducer } from '../features/allPokemon/allPokemonSlice.js';

const rootReducer = combineReducers({
  caughtPokemon: caughtPokemonReducer,
  searchTerm: searchTermReducer,
  allPokemon: allPokemonReducer
});

export const store = createStore(rootReducer);