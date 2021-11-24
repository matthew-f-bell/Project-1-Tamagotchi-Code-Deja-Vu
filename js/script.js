/*----------------------------
      Classes and Objects
----------------------------*/
class tamagotchi {
    constructor(name = "Yuki") {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 1;
    }

}

// const buttonLocations = {
//     $play: $('#play'),
//     $credits: $('credits'),
// }
// /*----------------------------
//         Global Variables
// ----------------------------*/
// const $playButton = $('#play');

// /*----------------------------
//            Functions
// ----------------------------*/
// // const $button = $('button');
// // $button.click(function(){
// //     const $background = $('#home-background');
// //     $background.attr("src", "assets/bedroom.jpeg");
// //     console.log($background);
// // });
// const startGame = function (startButton) {
//     const $startButton = $(startButton);
//     $startButton.click(function() {
//         console.log("click");
//     });
// }

//function that takes in the amount of seconds, tamagotchi property to change, and what number to divide seconds by to increase said property
const roadToTheEnd = function(second, petAttr, divider) {
    //makes pet increase in selected pet Property && logging out the property value and death for debugging
    if (second%divider === 0) {
        petAttr++;
        //console.log(`pet level: ${petAttr}`);
        if (petAttr >= 10) {
            //console.log (`${pet.name} has died`);
            clearInterval(globalTimer);
        }
    }
    return petAttr;
}

//function to heal specific properties according to what is "clicked on"
const heal = function(petAttr) {
    //log to debug what is being passed in through the argument
    //console.log(`healed ${petAttr}`);
    if (petAttr === "pet.hunger") {
        pet.hunger = pet.hunger - 2 ;
    } else if (petAttr === "pet.boredom") {
        pet.boredom = pet.boredom - 4 ;
    } else if (petAttr === "pet.sleepiness") {
        pet.sleepiness = 0 ;
    }
    return petAttr ;
}

// /*----------------------------
//            Main Code
// ----------------------------*/
// startGame($playButton);

const pet = new tamagotchi();

//gets the time of the start of the game
const gameStartTime = new Date().getTime();

//creates a global timer to track all stats of the tamagotchi
let globalTimer = setInterval(function() {
    //constantly gets a new time after the start of the game in milliseconds and converts it to seconds
    let now = new Date().getTime();
    let milli = now - gameStartTime;
    let seconds = Math.floor((milli%(1000*60))/1000);

    console.log(seconds);

    //ages the pet by 1 every 10 seconds && console.log for debugging
    if (seconds%5 === 0) {pet.age++;}
    //console.log(`age of pet is ${pet.age}`);

    //calls function to bring the pet closer to death
    // pet.hunger = roadToTheEnd(seconds, pet.hunger, 1);
    // pet.boredom = roadToTheEnd(seconds, pet.boredom, 2);
    // pet.sleepiness = roadToTheEnd(seconds, pet.sleepiness, 3);
    
    heal("pet.hunger");


}, 1000);

