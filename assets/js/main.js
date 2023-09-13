const listPokemon = document.getElementById('pokemonsList')
const loadmoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0

// function convertPokemonLi(pokemon) {
//     return ` 
//     <li class="pokemon ${pokemon.type}">
//     <span class="number">#${pokemon.order}</span>
//     <span class="name">${pokemon.name}</span>

//     <div class="detail">
//         <ol class="types">
//             ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//         </ol>
//         <img src="${pokemon.photo}" alt="${pokemon.name}">
//     </div>
//     `
// }

function loadmorePokemons(offset,limit) {
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 
        listPokemon.innerHTML += pokemons.map((pokemon) =>
        ` 
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                </div>
        `).join('')
    })
}

loadmorePokemons(offset,limit)

loadmoreButton.addEventListener('click', () => {
    offset += limit
    loadmorePokemons(offset,limit)
})
