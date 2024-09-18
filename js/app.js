//sélection du bouton
let currentPokemonData = null;
const btn = document.querySelector('#btn');
const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const image = document.querySelector('#image');
const pokeNumber = document.querySelector('#number');
const pokeName = document.querySelector('#name');
const btnShiny = document.querySelector('#btn-shiny');
const btnDefault = document.querySelector('#btn-default');
const imgWrapper = document.querySelector('#imageWrapper');
const container = document.querySelector('#container');

// allez cherhcer les abilities pour les abilities cacher ajouté un icone et faire en sorte que img de deplacer pour faire apparaitre les abilities

/**
 * @function createCard
 * @description Create a pokemon card with the data from the API
 * @param {object} data - The data of the pokemon
 * @property {string} data.sprites.other["official-artwork"].front_default - The default sprite of the pokemon
 * @property {number} data.id - The id of the pokemon
 * @property {string} data.name - The name of the pokemon
 */
const createCard = (data) => { 
    console.log(data);
    currentPokemonData = data;
    image.src = data.sprites.other["official-artwork"].front_default;
    pokeNumber.textContent = `#${data.id}`;
    pokeName.textContent = data.name;    
}
/**
 * function fetchUrl
 * @param {string} url 
 */
const fetchUrl = async (url) => {
    console.log(url);
    const data = await fetch(url);
    if (data.status == 200) {
        const response = await data.json();  
        // creation de la card
        createCard(response);
    }else{
        //message d'erreur TO DO
    }
};
container.addEventListener('mouseover', () => {
    imageWrapper.style.transform = 'translate(-70%)';
  });
  container.addEventListener('mouseout', () => {
    imageWrapper.style.transform = '';
  });
/**
 * Generate a random number between 1 and 150 and fetch the corresponding
 * pokémon data from the API. Then, call createCard with the response data.
 */
const changePokemon = () => {
    const rndNumber = parseInt(Math.random() * 150) + 1;
    const apiUrl = baseApiUrl + rndNumber;
    fetchUrl(apiUrl);
};
// bouton shiny
btnShiny.addEventListener('click', () => {
    if (currentPokemonData) {
        image.src = currentPokemonData.sprites.other["official-artwork"].front_shiny;
    }
});
//bouton default
btnDefault.addEventListener('click', () => {
    if (currentPokemonData) {
        image.src = currentPokemonData.sprites.other["official-artwork"].front_default;
    }
});


btn.addEventListener('click', changePokemon);
