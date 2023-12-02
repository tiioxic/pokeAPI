//sélection du bouton
const btn = document.querySelector('#btn');
const btnShiny = document.querySelector('#btn-shiny');
const btnDefault = document.querySelector('#btn-default');
const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const image = document.querySelector('#image');
const imageWrapper = document.querySelector('#imageWrapper');
const container = document.querySelector('#container');
const pokeNumber = document.querySelector('#number');
const pokeName = document.querySelector('#name');
const pokeAbilities = document.querySelector('#abilities')
// allez cherhcer les abilities pour les abilities cacher ajouté un icone et faire en sorte que img de deplacer pour faire apparaitre les abilities


container.addEventListener('mouseover', () => {
    imageWrapper.classList.add('translate');
    image.style.width = '70%';
    pokeAbilities.classList.remove('dispNone');
});
container.addEventListener('mouseleave', () => {
    image.style.width = '100%';
    imageWrapper.classList.remove('translate');
    pokeAbilities.classList.add('dispNone');
});

const createCard = (data) => {
    console.log(data);
    image.src = data.sprites.other["official-artwork"].front_default;
    pokeNumber.textContent = `#${data.id}`;
    pokeName.textContent = data.name;
    // Affichage des abilities dans la liste
    const abilitiesList = document.querySelector('#liste-abilities');
    abilitiesList.innerHTML = ''; // Efface la liste précédente

    data.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability.ability.name;
        abilitiesList.appendChild(li);
    });
    // btn changer d'artwork
    btnShiny.addEventListener('click', () => {
        image.src = data.sprites.other["official-artwork"].front_shiny;
    });
    btnDefault.addEventListener('click', () => {
        image.src = data.sprites.other["official-artwork"].front_default;
    });
};
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
    } else {
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