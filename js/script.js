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

}, 1000);

