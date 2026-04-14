let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessedNumbers = [];

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    attempts++;

    guessedNumbers.push(userGuess);

    if (userGuess == randomNumber) {
        document.getElementById("result").innerText = "🎉 Correct!";
    } else if (userGuess > randomNumber) {
        document.getElementById("result").innerText = "Too High!";
    } else {
        document.getElementById("result").innerText = "Too Low!";
    }

    document.getElementById("attempts").innerText = "No. of guesses: " + attempts;
    document.getElementById("history").innerText = "Guessed numbers: " + guessedNumbers.join(", ");
}