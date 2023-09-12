
function convertPokemonTypesLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonLi(pokemon) {
    return ` 
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    `
}

const listPokemon = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemons = []) => { 
        listPokemon.innerHTML += pokemons.map(convertPokemonLi).join('')
    })