const button = document.querySelector("#btn");
const pokemonInput = document.querySelector('#searchBar');
const imageContainer = document.querySelector('#imgContainer');

const pokemonName = document.querySelector('#pokemonName');
const pokemonTypes = document.querySelector('#pokemonType');
const pokemonHeight = document.querySelector('#pokemonHeight');
const pokemonWeight = document.querySelector('#pokemonWeight');

button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value.toLowerCase();
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    let pokeImg = response.data.sprites.front_default;
    imageContainer.setAttribute('src', pokeImg);
    
    pokemonName.textContent = `${response.data.name.toUpperCase()}`;
    pokemonHeight.textContent = `H: ${response.data.height}`;
    pokemonWeight.textContent = `W: ${response.data.weight}`;
    
    let typesArray = response.data.types;
    pokemonTypes.textContent = 'Type: ' + typesArray.map(type => type.type.name).join(', ');
});
