
const pokeApi = {};

function convertPokeApiToPokemonDetail(pokemonDetail) {
    const pokemon = new Pokemon();

    pokemon.id = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.type = type;
    pokemon.types = types;
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;
    pokemon.baseExp = pokemonDetail.base_experience;
    const stats = pokemonDetail.stats.map((stat) => stat.base_stat);
    const [hp, attack, defense, specialAttack, specialDefense, speed] = stats;
    pokemon.stats.hp = hp;
    pokemon.stats.attack = attack;
    pokemon.stats.defense = defense;
    pokemon.stats.specialAttack = specialAttack;
    pokemon.stats.specialDefense = specialDefense;
    pokemon.stats.speed = speed;
    const abilities = pokemonDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    pokemon.abilities = abilities;
    pokemon.height = pokemonDetail.height;
    pokemon.weight = pokemonDetail.weight;

    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiToPokemonDetail)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}"`

    return fetch(url)
    .then((response) => response.json())
    .then((responseData) => responseData.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error))
}