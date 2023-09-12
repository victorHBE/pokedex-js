
const pokeApi = {};

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
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