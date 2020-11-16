import { catchPokemon } from '../../features/caughtPokemon/caughtPokemonSlice.js';

export const AllPokemon = ({ allPokemon, dispatch }) => {
  
  const onAddPokemonHandler = (pokemon) => {
    dispatch(catchPokemon(pokemon));
  };

  return allPokemon.map((pokemon, i) => (
    <button key={pokemon.name + i} onClick={() => onAddPokemonHandler(pokemon)}>
      {pokemon.name}
      <img alt={"An image of the pokemon " + pokemon.name} src={pokemon.img}></img>
    </button>
  ))
};