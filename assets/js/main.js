
function convertPokemonLi(pokemon) {
    return ` 
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    `
}

const listPokemon = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemons = []) => { 
        listPokemon.innerHTML += pokemons.map(convertPokemonLi).join('')
    })