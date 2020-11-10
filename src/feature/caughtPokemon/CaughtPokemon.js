export const CaughtPokemon = ({ caughtPokemon, onRemovePokemonHandler }) =>
caughtPokemon.map((pokemon, i) => (
  <button key={pokemon.name + i} onClick={() => onRemovePokemonHandler(pokemon)}>
    {pokemon.name}
    <img src={pokemon.img}></img>
  </button>
));