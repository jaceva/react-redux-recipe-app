export const AllPokemon = ({ allPokemon, onAddPokemonHandler }) =>
allPokemon.map((pokemon, i) => (
  <button key={pokemon.name + i} onClick={() => onAddPokemonHandler(pokemon)}>
    {pokemon.name}
    <img src={pokemon.img}></img>
  </button>
));