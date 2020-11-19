import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
import { store } from './app/store.js';

import { loadData } from './features/allRecipes/allRecipesSlice'

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
store.dispatch(loadData());