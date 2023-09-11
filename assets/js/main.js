
function convertPokemonLi(pokemon) {
    return ` 
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">
                Grass
            </li>
            <li class="type">
                Braum
            </li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png" alt="${pokemon.name}">
    </div>
    `
}

const listPokemon = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemons = []) => { 
        listPokemon.innerHTML += pokemons.map(convertPokemonLi).join('')
    })