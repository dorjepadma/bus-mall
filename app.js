import things from '../bus-mall/thingy.js';
// import { ThingyArray } from '../bus-mall/thingyArray.js';
const thingData = things.slice();
// const thingyImageTags = document.querySelectorAll('img');
// const thingyRadioTags = document.querySelectorAll('input');
// const thingyName = document.getElementById('thingy-name');
//const new thingy array
// const thingyData = things.slice();
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
let consumerChoiceTally;
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
const radio1 = document.getElementById('thing');
const radio2 = document.getElementById('thing1');
const radio3 = document.getElementById('thing2');
const radio1span = document.getElementById('thingspan');
const radio2span = document.getElementById('thingspan1');
const radio2span = document.getElementById('thingspan2');

radio1.value = thing.id;
radio2.value1 = thing2.id;
radio3.value = prodcut2.id;
radio1span.textContent = thing.name;
radio2span.textContent = thing1.name;
radio3span.textContent = thing2.name;
};
//prevent from resetting every count
const form = document.querySelector('form');
 form.addEventListener('submit', (e) => {
     e.preventDefalut();

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
   document.querySelector('input[naem="thing"]:checked') = false
//puts votes into local storage by Stringifying them
   localStorage.setIemt('choice', JSON.stringify(thingChoiceDetails));
  if (totalChocie >=25) {
      window.locatioin = 'choices.html';
  }

  displayThreeThings();
});
function reset() {
    initializeState();
}

function getRAndomThing(someThing) {
    const randomIndex = Math.floor(Math.random() * someThing.length);
    constrandomThing = thingData[ramdomThing];

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


