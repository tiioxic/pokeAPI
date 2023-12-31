//sélection du bouton
const btn = document.querySelector('#btn');
const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const image = document.querySelector('#image');
const pokeNumber = document.querySelector('#number');
const pokeName = document.querySelector('#name');

// allez cherhcer les abilities pour les abilities cacher ajouté un icone et faire en sorte que img de deplacer pour faire apparaitre les abilities
// const frontDefault = `data.sprites.other["official-artwork"].front_default`;
// const frontShiny = `data.sprites.other["official-artwork"].front_shiny`;


const createCard = (data) => { 
    console.log(data);
    image.src = data.sprites.other["official-artwork"].front_shiny;
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

const changePokemon = () => {
    const rndNumber = parseInt(Math.random() * 150) + 1;
    const apiUrl = baseApiUrl + rndNumber;
    fetchUrl(apiUrl);
};


btn.addEventListener('click', changePokemon);
// console.log(btn)