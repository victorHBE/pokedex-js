
const offset = 10;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}"`

function pokemonList(pokemon) {
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

fetch(url)
    .then((response) => response.json())
    .then((responseData) => responseData.results)
    .then((pokemons) => {
        pokemons.forEach(pokemon => {
            listPokemon.innerHTML += pokemonList(pokemon)
        });
    })
    .catch((error) => console.log(error))