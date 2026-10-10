// #region ##### Variables #####
// Variable to store the paragraph element where the result will be displayed
let dice6Result = document.getElementById("dice6Result");
// Variable to store the keybind for rolling the dice
let diceKeybind = "d";
// For testing testing of the rebind has been clicked
let isRebinding = false
// #endregion

// #region ##### FUNCTIONS ##### 

// Function to generate a random number between 1 and 6
function rollDice6() {
let randomNumber6 = Math.floor(Math.random() * 6) + 1;
dice6Result.textContent = "You rolled a " + randomNumber6 + " on a 6-sided die.";
}
// #endregion

// #region ##### EVENT LISTENERS #####
// Listen for rebind key press
document.getElementById("buttonKeyBind").addEventListener("click",function{
    isRebinding = true
})
// Get the button element by its ID
document.getElementById("buttonDice6").addEventListener("click", rollDice6);
// Listen for the {Key} key, and trigger the rollDice6 function when pressed
document.addEventListener("keydown", function(event) {
    if (isRebinding){
        diceKeybind = event.key
        isRebinding = false
    }
    else if (event.key.toLowerCase() === diceKeybind) {
        rollDice6();
    }
})
// #endregion