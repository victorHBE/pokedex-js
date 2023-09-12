
const pokeApi = {};

function convertPokeApiToPokemonDetail(pokemonDetail) {
    const pokemon = new Pokemon();

    pokemon.order = pokemonDetail.order;
    pokemon.name = pokemonDetail.name;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.type = type;
    pokemon.types = types;
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiToPokemonDetail)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}"`

    return fetch(url)
    .then((response) => response.json())
    .then((responseData) => responseData.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error))
}