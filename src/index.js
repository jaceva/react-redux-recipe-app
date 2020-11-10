import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { App } from './App.js';

import { caughtPokemonReducer } from './feature/caughtPokemon/caughtPokemonSlice.js';
import { searchTermReducer } from './feature/search/searchSlice.js';
import { allPokemonReducer } from './feature/allPokemon/allPokemonSlice.js';

const rootReducer = combineReducers({
  caughtPokemon: caughtPokemonReducer,
  searchTerm: searchTermReducer,
  allPokemon: allPokemonReducer
})

const store = createStore(rootReducer);
/*
const exampleState = {
  caughtPokemon: [
    {name: 'squirtle'}, 
    {name: 'ivysaur'},
    {name: 'pidgey'},
  ],
  searchTerm: 'le' // squirtle, weedle
}
*/

const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
store.subscribe(render)
render();