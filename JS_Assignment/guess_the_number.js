var randomNumber = Math.floor(Math.random() * 101);

var guessInput = document.getElementById("guessInput");
var message = document.getElementById("message");
var trials = 0;
function checkGuess() {
    var guessedNumber = parseInt(guessInput.value);
    trials++;

    if (guessedNumber === randomNumber) {
        message.textContent = "Correct Guess - " + trials + " Trial(s)";
        message.style.color = "green";
        guessInput.disabled = true;
    } else if (guessedNumber > randomNumber) {
        message.textContent = "HIGH";
        message.style.color = "red";
    } else {
        message.textContent = "LOW";
        message.style.color = "red";
    }
    guessInput.value = "";
}