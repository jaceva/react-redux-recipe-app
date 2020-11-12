const initialState = [];

export const caughtPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'caughtPokemon/catchPokemon':
      const newPokemon = action.payload;
      return [...state, newPokemon]
    case 'caughtPokemon/releasePokemon':
      const pokemonToRelease = action.payload.name;
      return state.filter(pokemon => pokemon.name !== pokemonToRelease)
    default:
      return state;
  }
}

export function catchPokemon(pokemon) {
  return {
    type: 'caughtPokemon/catchPokemon',
    payload: pokemon
  }
}

export function releasePokemon(pokemon) {
  return {
    type: 'caughtPokemon/releasePokemon',
    payload: pokemon
  }
}