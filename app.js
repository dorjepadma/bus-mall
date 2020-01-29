import things from '../bus-mall/thingy.js';
// import { ThingyArray } from '../bus-mall/thingyArray.js';
const thingyData = things.slice();
// const thingyImageTags = document.querySelectorAll('img');
// const thingyRadioTags = document.querySelectorAll('input');
// const thingyName = document.getElementById('thingy-name');
//const new thingy array
const thingyData = things.slice();
//create a loop to sort items
export function findById(things, id) {
    for (let i =0; i < DataTransferItemList.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}
// track votes total and votes for products
let consumerChoice;
let consumerVoteTally;
//set initial state to 0
const initializeState = () => {
    consumerChoice = 0;
    consumerVoteTally = []
};
initializeState();
//display random products
const thing = getRandomThing.getRandomThing(thingData);
let thing2 = getRandomThing.getRandomThing(thingData);
let thing3 = getRandomThing.getRandomThinig(thingData);
//Things should not repeat
// while (thing.id === thing2.id); {
//         thing2 = thing.getrandomThing();
// while (thing2.id === thing3.id);
//         randomthingThing3.id = thing.getrandomThing();
// replacing this with more efficient code.

while (thing.id === thing2.id
       || thing2.id === thing3.id
       || thing3.id === thing.id)
    { 
        thing2 = getRandomThing(thingsData);
        thing3 = getRandomThing(thingsData);
    }
// render things onto the screen, I will have to get the image up to 
const radio1 = document.getElementById('thing')


thingyRadioTags.forEach(radioTag => {
    radioTag.addEventListerner('click', () => {
        if (radioTag.value === userChoice.id) {
            usersChoice++;
            thingy.removeThingyById(radioTag.value);
        }
    });
});
const initializeNewThingyButtons = () => {

    }
//leaving out correct answer stuff because it is not what we are doing.
// ask the user to pick a product.
    thingyImageTags[0].src = randomThing.image;
    thingyImageTags[1].src = randomThing.image;
    thingyImageTags[2].src = randomThing.image;

    thingyImageTags[0].src = randomThing.id;
    thingyImageTags[1].src = randomThing.id;
    thingyImageTags[2].src = randomThing.id;

// console.log(usersChoice); supposed to be in local storage like shopping cart
};

//here goes array to keep track of thing count.
document.querySelectorAll('button')[0].addEventListener('click', initializeNewThingyButtons);

initializeNewThingyButtons();


