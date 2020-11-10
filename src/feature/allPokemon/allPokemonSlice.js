const pokemonData = [
  {name: 'pikachu', img: 'https://img.pokemondb.net/artwork/large/pikachu.jpg'}, 
  {name: 'charizard', img: 'https://img.pokemondb.net/artwork/large/charizard.jpg'}, 
  {name: 'squirtle', img: 'https://img.pokemondb.net/artwork/large/squirtle.jpg'}, 
  {name: 'ivysaur', img: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg'},
  {name: 'pidgey', img: 'https://img.pokemondb.net/artwork/large/pidgey.jpg'},
  {name: 'weedle', img: 'https://img.pokemondb.net/artwork/large/weedle.jpg'},
  {name: 'articuno', img: 'https://img.pokemondb.net/artwork/large/articuno.jpg'},
  {name: 'mewtwo', img: 'https://img.pokemondb.net/artwork/large/mewtwo.jpg'},
  {name: 'gengar', img: 'https://img.pokemondb.net/artwork/large/gengar.jpg'},
  {name: 'dragonite', img: 'https://img.pokemondb.net/artwork/large/dragonite.jpg'},
  {name: 'nidorino', img: 'https://img.pokemondb.net/artwork/large/nidorino.jpg'},
]

export const allPokemonReducer = (state = pokemonData) => state;
