import { thingyData } from '../bus-mall/thingy.js';
import { thingyArray } from '../bus-mall/thingyArray.js';

const thingyImageTags = document.querySelectorAll('img');
const thingyRadioTags = document.querySelectorAll('input');
const thingyName = document.getElementById('thingy-name');

const thingy = new ThingyArray(thingyData);
let userChoice = 0;

// let userChoice;

thingyRadioTags.forEach(radioTag => {
    radioTag.addEventListerner('click', () => {
        if (radioTag.value === userChoice.id) {
            usersChoice++;
            thingy.removeThingyById(radioTag.value);
        }
       });
const initializeNewThingyButtons = () => {
//get three random things that are different
const randomThing = thing.getRandomThing();
let randomThing2 = thing.getRandomThing();
let randomThing3 = thing.getRandomThinig();

while (randomThing.id === randomThing2.id); {
    randomThinig2 = thing.getrandomThing();
while (randomThing2.id === randomThing3.id);
    randomthingThing3.id = thing.getrandomThing();
}
//leaving out correct answer stuff because it is not what we are doing.
// ask the user to pick a product.
thingyImageTags[0].src = randomThingy.image;
thingyImageTags[1].src = randomThingy.image;
thingyImageTags[2].src = randomThingy.image;

thingyImageTags[0].src = randomThingy.id;
thingyImageTags[1].src = randomThingy.id;
thingyImageTags[2].src = randomThingy.id;

// console.log(usersChoice); supposed to be in local storage like shopping cart
};
}
document.querySelectorAllSelector('button').addEventListener('click', initializeNewThingyButtons);
initializeNewThingyButtons();


