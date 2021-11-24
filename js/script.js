/*----------------------------
      Classes and Objects
----------------------------*/
class tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
    }
    death() {

    }
}

const buttonLocations = {
    $play: $('#play'),
    $credits: $('credits'),
}
/*----------------------------
        Global Variables
----------------------------*/
const $playButton = $('#play');

/*----------------------------
           Functions
----------------------------*/
// const $button = $('button');
// $button.click(function(){
//     const $background = $('#home-background');
//     $background.attr("src", "assets/bedroom.jpeg");
//     console.log($background);
// });
const startGame = function (startButton) {
    const $startButton = $(startButton);
    $startButton.click(function() {
        console.log("click");
    });
}

/*----------------------------
           Main Code
----------------------------*/
startGame($playButton);

const gameStartTime = new Date().getTime();

let globalTimer = setInterval(function() {
    let now = new Date().getTime();    
    let age = now - gameStartTime;
    let seconds = Math.floor((age%(1000*60))/1000);

    console.log(seconds);
}, 1000);

