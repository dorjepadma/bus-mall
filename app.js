import things from './thingy.js';
// import { ThingyArray } from '../bus-mall/thingyArray.js';
const thingData = things.slice();
// const thingyImageTags = document.querySelectorAll('img');
// const thingyRadioTags = document.querySelectorAll('input');
// const thingyName = document.getElementById('thingy-name');
//const new thingy array
// const thingyData = things.slice();
//create a loop to sort items
export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
}
// track votes total and votes for products
let totalChoices;
let thingChoiceDetails;
//set initial state to 0
const initializeState = () => {
    totalChoices = 0;
    thingChoiceDetails = [];
};
initializeState();

const displayThreeThings = () => {
    const thing = getRandomThing(thingData);
    let thing1 = getRandomThing(thingData);
    let thing2 = getRandomThing(thingData);

    while (thing.id === thing1.id
       || thing1.id === thing2.id
       || thing2.id === thing.id
    ) { 
        thing1 = getRandomThing(thingData);
        thing2 = getRandomThing(thingData);
    }

    const radio1 = document.getElementById('thing');
    const radio2 = document.getElementById('thing1');
    const radio3 = document.getElementById('thing2');

    const radio1span = document.getElementById('thingspan');
    const radio2span = document.getElementById('thing1span');
    const radio3span = document.getElementById('thing2span');

    const image1 = document.getElementById('image');
    const image2 = document.getElementById('image1');
    const image3 = document.getElementById('image2');

    image1.src = thing.image;
    image2.src = thing1.image;
    image3.src = thing2.image;

    radio1.value = thing.id;
    radio2.value = thing1.id;
    radio3.value = thing2.id;

    radio1span.textContent = thing.name;
    radio2span.textContent = thing1.name;
    radio3span.textContent = thing2.name;
};
// radio1image.image1 = thing.image1;
// radio2image.image2 = thing1.image2;
// radio3image.image3 = thing2.image3;


//prevent from resetting every count
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectedThingId = formData.get('thing');

    totalChoices++;

    const thingInChoicesArray = findById(thingChoiceDetails, selectedThingId);


    if (thingInChoicesArray) {
        thingInChoicesArray.choice++;
    } else { 
        thingChoiceDetails.push({
            id: selectedThingId,
            choice: 1,
        });
    }
   //what does this do?
   //a variable here will help store the value of the following
//    let usersChoice = 
    document.querySelector('input[name="thing"]:checked').checked = false;
//puts votes into local storage by Stringifying them
    localStorage.setItem('choice', JSON.stringify(thingChoiceDetails));

    if (totalChoices >= 25) {
        window.location = 'results.html';
    }

    displayThreeThings();

});
function reset() {
    initializeState();
}

function getRandomThing(someThing) {
    const randomIndex = Math.floor(Math.random() * someThing.length);
    const randomThing = thingData[randomIndex];

    return randomThing;
}
displayThreeThings();

//reset after the button is clicked
// document.querySelectorAll('button')[0].addEventListener('click', initializeNewThingButton);

// initializeNewThingButton();
