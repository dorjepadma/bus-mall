export class ThingyArray {
    constructor(thingy) {
        this.thingy = thingy.slice();
    }
    getThingy() {
        return this.thingy;
    }
    //remove a thingy from the array
    removeThinbyById(someId) {
        this.trees.forEach (thingy  => {
            if (someId === thingy.id) {
                this.thingy.splice(i, 1);
            }
        });
    }
}

//grabbing Thingys this should really be a counting function rather than a correct! function
getThingyById(someId) {
    let thingyMatch;

this.thingy.forEach(thingy => {
    if (someId === thingy.id) {
        thingyMatch = thingy;
    }

});
return thingyMatch;

}

//show if any thingy exists...but why?
hasAnyThingy() {
    return this.thingy.length
}
//get a thingy at random
getRandomThingy() {
const randomThingyIndex Math.floor(Math.random() * this.thingy.length);
    }
}
