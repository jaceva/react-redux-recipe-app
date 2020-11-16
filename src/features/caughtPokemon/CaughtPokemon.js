import { releasePokemon } from '../../features/caughtPokemon/caughtPokemonSlice.js';

export const CaughtPokemon = ({ caughtPokemon, dispatch }) =>{
  
  const onRemovePokemonHandler = (pokemon) => {
    dispatch(releasePokemon(pokemon));
  };
  
  return caughtPokemon.map((pokemon, i) => (
    <button key={pokemon.name + i} onClick={() => onRemovePokemonHandler(pokemon)}>
      {pokemon.name}
      <img alt={"An image of the pokemon " + pokemon.name} src={pokemon.img}></img>
    </button>
  ))
};