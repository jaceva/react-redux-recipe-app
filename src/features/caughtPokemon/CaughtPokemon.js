export const CaughtPokemon = ({ caughtPokemon, onRemovePokemonHandler }) =>
caughtPokemon.map((pokemon, i) => (
  <button key={pokemon.name + i} onClick={() => onRemovePokemonHandler(pokemon)}>
    {pokemon.name}
    <img alt={"An image of the pokemon " + pokemon.name} src={pokemon.img}></img>
  </button>
));