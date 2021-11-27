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

/*----------------------------
        Global Variables
----------------------------*/

const $playButton = $('#play');
const $gameContainer = $('.game-container');
const $creditsButton = $('#credits');
const $gameTitle = $('#game-title');
const $inGameButton = $('.in-game');
const $feed = $('#feed');
const $backButton = $('#back-to-title');

/*----------------------------
            Functions
----------------------------*/


// function that takes in the amount of seconds, tamagotchi property to change, and what number to divide seconds by to increase said property
const roadToTheEnd = function(second, petAttr, divider) {
    // makes pet increase in selected pet Property && logging out the property value and death for debugging
    if (second%divider === 0) {
        petAttr++;
        // console.log(`pet level: ${petAttr}`);
        if (petAttr >= 10) {
            // console.log (`${pet.name} has died`);
            clearInterval(globalTimer);
        }
    }
    return petAttr;
}

// function to heal specific properties according to what is "clicked on"
const heal = function(petAttr) {
    // log to debug what is being passed in through the argument
    // console.log(`healed ${petAttr}`);
    if (petAttr === "pet.hunger") {
        pet.hunger = pet.hunger - 2 ;
    } else if (petAttr === "pet.boredom") {
        pet.boredom = pet.boredom - 4 ;
    } else if (petAttr === "pet.sleepiness") {
        pet.sleepiness = 0 ;
    }
    return petAttr ;
}


/*----------------------------
 Main Code && Event Listeners
----------------------------*/

$backButton.hide();
$inGameButton.hide();

// function to start the game and all the timers and sets up the gamescreen
$playButton.click(function(){
    // removes title screen elements
    $creditsButton.hide();
    $playButton.hide();
    $gameTitle.hide();
    // changes the background
    const $background = $('#home-background');
    $background.attr("src", "assets/bedroom.jpeg");
    // creates the buttons for the game to "heal" the pet
    $inGameButton.removeAttr("style");

    // const pet = new tamagotchi();

    // // gets the time of the start of the game
    // const gameStartTime = new Date().getTime();

    // // creates a global timer to track all stats of the tamagotchi
    // let globalTimer = setInterval(function() {

    //     // constantly gets a new time after the start of the game in milliseconds and converts it to seconds
    //     let now = new Date().getTime();
    //     let milli = now - gameStartTime;
    //     let seconds = Math.floor((milli%(1000*60))/1000);

    //     console.log(seconds);

    //     // ages the pet by 1 every 10 seconds && console.log for debugging
    //     if (seconds%5 === 0) {pet.age++;}
    //     // console.log(`age of pet is ${pet.age}`);

    //     // calls function to bring the pet closer to death
    //     pet.hunger = roadToTheEnd(seconds, pet.hunger, 1);
    //     pet.boredom = roadToTheEnd(seconds, pet.boredom, 2);
    //     pet.sleepiness = roadToTheEnd(seconds, pet.sleepiness, 3);
        
    // }, 1000);


});

$creditsButton.click(function(){
    // removes title screen elements
    $creditsButton.hide();
    $playButton.hide();
    $gameTitle.hide();

    // adds a p element with text
    $gameContainer.prepend('<h1 id="credits-title">Credits</h1>');
    $gameContainer.append('<p class="credits-roll">This game was created by Matthew Bell</p>');
    $backButton.removeAttr('style');



    $backButton.click(function() {
        const $creditsTitle = $('#credits-title');
        const $creditsRoll = $('.credits-roll');
        $backButton.hide();
        $creditsRoll.remove();
        $creditsTitle.remove();

        $creditsButton.removeAttr('style');
        $playButton.removeAttr('style');
        $gameTitle.removeAttr('style');
    });
});
