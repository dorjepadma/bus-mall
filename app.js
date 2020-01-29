import things from './thingy.js';
// import { ThingyArray } from '../bus-mall/thingyArray.js';
const thingData = things.slice();
// const thingyImageTags = document.querySelectorAll('img');
// const thingyRadioTags = document.querySelectorAll('input');
// const thingyName = document.getElementById('thingy-name');
//const new thingy array
// const thingyData = things.slice();
//create a loop to sort items
export function findById(thingData, id) {
    for (let i = 0; i < DataTransferItemList.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}
// track votes total and votes for products
let consumerChoice;
let consumerChoiceTally;
//set initial state to 0
const initializeState = () => {
    consumerChoice = 0;
    consumerChoiceTally = []
};
initializeState();
//display random products
const thing = getRandomThing(thingData);
let thing1 = getRandomThing(thingData);
let thing2 = getRandomThing(thingData);
console.log(thing)
//Things should not repeat
// while (thing.id === thing2.id); {
//         thing2 = thing.getrandomThing();
// while (thing2.id === thing3.id);
//         randomthingThing3.id = thing.getrandomThing();
// replacing this with more efficient code.

while (thing.id === thing1.id
       || thing1.id === thing2.id
       || thing2.id === thing.id)
    { 
        thing1 = getRandomThing(thingsData);
        thing2 = getRandomThing(thingsData);
    }
// render things onto the screen, I will have to get the image up to 
const radio1 = document.getElementById('thing');
const radio2 = document.getElementById('thing1');
const radio3 = document.getElementById('thing2');

const radio1span = document.getElementById('thingspan');
const radio2span = document.getElementById('thing1span');
const radio3span = document.getElementById('thing2span');

const image1 = document.getElementById('image');
const image2 = document.getElementById('image1');
const image3 = document.getElementById('image2');

image1.src = thing.image
image2.src = thing1.image
image3.src = thing2.image

radio1.value = thing.id;
radio2.value = thing1.id;
radio3.value = thing2.id;
radio1span.textContent = thing.name;
radio2span.textContent = thing1.name;
radio3span.textContent = thing2.name;

radio1image.image1 = thing.image;
radio2image.image2 = thing1.image1;
radiot3iimage.image3 =thing2.image2;


//prevent from resetting every count
const form = document.querySelector('form');
 form.addEventListener('submit', (e) => {
     e.preventDefault();

     const formData = new FormData(form);

     const selectdProductId = formData.get('thing');
     totalChoices++;

   const thingInChoicesArray = findById(thingChoiceDetails, selectedThingId);
   
   if (thingInchoicesArray) {
       thingInChoicesArray.choice++;
   } else { thingChoiceDetails.push({
       id: selectedThingId,
       choice: 1,
   });
   }
   //what does this do?
   document.querySelector('input[name="thing"]:checked') = false
//puts votes into local storage by Stringifying them
   localStorage.setItem('choice', JSON.stringify(thingChoiceDetails));
  if (totalChocie >=25) {
      window.location = 'choices.html';
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


// thingyRadioTags.forEach(radioTag => {
//     radioTag.addEventListerner('click', () => {
//         if (radioTag.value === userChoice.id) {
//             usersChoice++;
//             thingy.removeThingyById(radioTag.value);
//         }
//     });
// });
// const initializeNewThingyButtons = () => {

//     }
// //leaving out correct answer stuff because it is not what we are doing.
// // ask the user to pick a product.
//     thingyImageTags[0].src = randomThing.image;
//     thingyImageTags[1].src = randomThing.image;
//     thingyImageTags[2].src = randomThing.image;

//     thingyImageTags[0].src = randomThing.id;
//     thingyImageTags[1].src = randomThing.id;
//     thingyImageTags[2].src = randomThing.id;

// // console.log(usersChoice); supposed to be in local storage like shopping cart
// };

//here goes array to keep track of thing count.
document.querySelectorAll('button')[0].addEventListener('click', initializeNewThingyButtons);

initializeNewThingyButtons();


