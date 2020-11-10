export const AllPokemon = ({ allPokemon, onAddPokemonHandler }) =>
allPokemon.map((pokemon, i) => (
  <button key={pokemon.name + i} onClick={() => onAddPokemonHandler(pokemon)}>
    {pokemon.name}
    <img alt={"An image of the pokemon " + pokemon.name} src={pokemon.img}></img>
  </button>
));