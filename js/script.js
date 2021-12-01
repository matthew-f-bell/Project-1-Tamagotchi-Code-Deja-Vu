/*----------------------------
      Classes and Objects
----------------------------*/
class tamagotchi {
    constructor() {
        this.name = "";
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 1;
        this.image = "";
    }

}

/*----------------------------
        Global Variables
----------------------------*/

const $background = $('#home-background');
const $playButton = $('#play');
const $gameContainer = $('.game-container');
const $creditsButton = $('#credits');
const $gameTitle = $('#game-title');
const $inGameButton = $('.in-game');
const $feed = $('#feed');
const $backButton = $('#back-to-title');
const $hungerBar = $('#hunger-bar');
const $boredBar = $('#bored-bar');
const $sleepBar = $('#sleep-bar');
const $controlBoard = $('.control-board');
const $petScreen = $('.pet-screen');
const $beginGame = $('#begin-game');
const $userNameInput = $('#pet-name');
const $userPetChoice = $('[name="drone"]');
const $nameOfPet = $('#name-of-pet');
const $petChoice = $('#pet-choice');
const $age = $('#age');
const $thePet = $('#the-pet');
const $modal = $('#dead-pet');
const $playAgain = $('#play-again');
const $dontPlay = $('#dont-play');


/*----------------------------
            Functions
----------------------------*/
// reset all stats to 0
const statReset = function() {
    $hungerBar.width('0%');
    $boredBar.width('0%');
    $sleepBar.width('0%');
}

// function that takes in the amount of seconds, tamagotchi property to change, and what number to divide seconds by to increase said property
const roadToTheEnd = function(second, petAttr, divider, timer, progressBar) {
    // makes pet increase in selected pet Property && logging out the property value and death for debugging
    if (second%divider === 0) {
        progressBar.width((petAttr * 10) + '%' );
        // console.log(`pet level: ${petAttr}`);
        if (petAttr >= 10) {
            // console.log (`${pet.name} has died`);
            clearInterval(timer);
            //calls modal on death
            $modal.css("display", "block");
        }
        petAttr++;
    }
    return petAttr;
}

// function to heal specific properties according to what is "clicked on"
const heal = function(petAttr, tama) {
    // log to debug what is being passed in through the argument
    // console.log(`healed ${petAttr}`);
    if (petAttr === "Entertain") {
        tama.hunger = tama.hunger - 2 ;
        if (tama.hunger < 0) { tama.hunger = 0; }
    } else if (petAttr === "Feed") {
        tama.boredom = tama.boredom - 4 ;
        if (tama.boredom < 0) { tama.boredom = 0; }
    } else if (petAttr === "Gym") {
        tama.sleepiness = 0 ;
    }
    return petAttr ;
}

/*----------------------------
// code just making the progress fill
const move = function() {
    const frame = function() {
        if (width >=100) { 
            clearInterval(id);
        } else { 
            width ++;
            $hungerBar.width(width + '%');
        }
    }
    let width = 1;
    let id = setInterval(frame, 10);
}
----------------------------*/

/*----------------------------
 Main Code && Event Listeners
----------------------------*/
$controlBoard.hide();
$backButton.hide();
$petScreen.hide();
$thePet.hide();

// goes to character select screen
$playButton.click(function(){
    // removes title screen elements
    $creditsButton.hide();
    $playButton.hide();
    $gameTitle.hide();

    // shows character select screen elements
    $petScreen.show();
});

// function to start the game and all the timers and sets up the gamescreen

$beginGame.click(function(){
    // hides pet screen
    $petScreen.hide();
    // changes the background
    $background.attr("src", "assets/bedroom.jpeg");
    // creates the buttons for the game to "heal" the pet and the pet
    $controlBoard.show();
    $thePet.show();

    // used just to trigger getting data from form
    $petChoice.on('submit', function(event) {
        event.preventDefault();
        // const userNameInput = $userNameInput.val();
        //console.log(userNameInput);
    });


    // creates a new pet
    const pet = new tamagotchi();
    // names the pet using input from selection screen
    pet.name = $userNameInput.val();
    $nameOfPet.html(`Name: ${pet.name}`);
    // gets the correct pet image from selection screen
    for(let i = 0 ; i < $userPetChoice.length ; i++){
        if($userPetChoice[i].checked){
            pet.image = $userPetChoice[i].value;
            //console.log($userPetChoice[i].value);
        }
    }
    $thePet.attr("src", pet.image);
    

    // gets the time of the start of the game
    const gameStartTime = new Date().getTime();

    // creates a global timer to track all stats of the tamagotchi
    let globalTimer = setInterval(function() {

        // constantly gets a new time after the start of the game in milliseconds and converts it to seconds
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);

        console.log(seconds);

        // ages the pet by 1 every 10 seconds && console.log for debugging
        if (seconds%5 === 0) {pet.age++;}
        $age.html(`Age: ${pet.age}`);
        // console.log(`age of pet is ${pet.age}`);

        // calls function to bring the pet closer to death
        pet.hunger = roadToTheEnd(seconds, pet.hunger, 1, globalTimer, $hungerBar);
        pet.boredom = roadToTheEnd(seconds, pet.boredom, 2, globalTimer, $boredBar);
        pet.sleepiness = roadToTheEnd(seconds, pet.sleepiness, 3, globalTimer, $sleepBar);
        
    }, 1000);

    // will detect which button was clicked and heal the pet according to the text of the button
    $inGameButton.click(function(buttonClicked){
        const $buttonsClicked = $(buttonClicked.target);
        heal($buttonsClicked.html(), pet);
    });
});



$creditsButton.click(function(){
    // hides title screen elements
    $creditsButton.hide();
    $playButton.hide();
    $gameTitle.hide();

    // adds a p and an h1 element with text and unhides the back button
    $gameContainer.prepend('<h1 id="credits-title">Credits</h1>');
    $gameContainer.append('<p class="credits-roll">This game was created by Matthew Bell </br>Sprites made on emily2.itch.io/pcc by Exuin</p>');
    $backButton.show();


    // goes back to the title screen
    $backButton.click(function() {
        // hides and removes all the credits screen elements
        const $creditsTitle = $('#credits-title');
        const $creditsRoll = $('.credits-roll');
        $backButton.hide();
        $creditsRoll.remove();
        $creditsTitle.remove();

        // unhides the title screen elements
        $creditsButton.show();
        $playButton.show();
        $gameTitle.show();
    });
});

$playAgain.click(function() {
    // hides everything, resets progress bars, goes back to pet selection
    $modal.css("display", "none");
    statReset();
    $background.attr("src", "assets/space.jpeg");
    $controlBoard.hide();
    $thePet.hide();
    $petScreen.show();
});

$dontPlay.click(function() {
    // hides everythin, goes back to title screen
    $modal.css("display", "none");
    statReset();
    $background.attr("src", "assets/space.jpeg");
    $controlBoard.hide();
    $thePet.hide();
    $creditsButton.show();
    $playButton.show();
    $gameTitle.show();                
});