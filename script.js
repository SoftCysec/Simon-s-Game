// check the game.js file and debug the entire file and make sure that the game works perfectly.
// 

// Path: game.js
//Create a new array called buttonColors and set it to hold the sequence "red", "blue", "green", "yellow"
var buttonColors=["red","blue","green","yellow"];
//Create a new empty array called gamePattern
var gamePattern=[];
//Create a new empty array with the name userClickedPattern
var userClickedPattern=[];
//Create a new variable called level and start at level 0
var level=0;
//Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).on("keypress",function(){
    if(level===0){
        nextSequence();
    }
}
);
//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").on("click",function(){
    //Inside the handler, create a new variable called userChosenColor to store the id of the button that got clicked.
    var userChosenColor=$(this).attr("id");
    //Add the contents of the variable userChosenColor created above to the end of the userClickedPattern
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    //In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColor);
    //In the same way we animate a flash to the button selected in nextSequence, we need to add this functionality to the press of the buttons.
    animatePress(userChosenColor);
    //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
}
);
//Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel){
    //Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        //If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if(userClickedPattern.length===gamePattern.length){
            //Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        //In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");
        //In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        //Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("h1").text("Game Over, Press Any Key to Restart");
        //Call startOver() if the user gets the sequence wrong.
        startOver();
    }
}
//Create a new function called nextSequence()
function nextSequence(){
    //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern=[];
    //Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
    //Inside nextSequence(), update the h1 with this change in the value of level.
    $("h1").text("Level "+level);
    //Generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber=Math.floor(Math.random()*4);
    //Create a new variable called randomChosenColor and use the randomNumber from above step to select a random color from the buttonColors array.
    var randomChosenColor=buttonColors[randomNumber];
    //Add the new randomChosenColor generated above to the end of the gamePattern.
    gamePattern.push(randomChosenColor);
    //Use jQuery to select the button with the same id as the randomChosenColor
    //Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected.
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
    //Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    playSound(randomChosenColor);
}
//Create a new function called playSound() that takes a single input parameter called name
function playSound(name){
    //Take the code we used to play sound in nextSequence() and add it to playSound().
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}
//Create a new function called animatePress(), it should take a single input parameter called currentColor
function animatePress(currentColor){
    //Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#"+currentColor).addClass("pressed");
    //Use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function(){
        $("#"+currentColor).removeClass();
    },100);
}
//Create a new function called startOver()
function startOver(){
    //Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level=0;
    gamePattern=[];
    started=false;
}
//U.C CODE nextSequence();
//U.C CODE animatePress();
//U.C CODE checkAnswer();
//U.C CODE playSound();
//U.C CODE startOver();

//Now that your game is complete, you can use it to play with your friends.
// There are no sounds or button flash in the game when you play with your friends.
// You can use the console of your browser to check the sequence of the game.
