import Dices from './Dices.js';

// Lancer les instances de Dice

let elDices = document.querySelectorAll('[data-js-dices]');

for (let i = 0; i<elDices.length; i++){

    new Dices(elDices[i]);

}

